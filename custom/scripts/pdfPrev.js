#!/usr/bin/env node
// Renders a single PDF page to a high-quality PNG at a given target resolution.
// Workflow: gs renders at 3× target resolution with 4× text antialiasing → ImageMagick
// Lanczos downsample → letterbox/pillarbox to exact target size on black background.
//
// Usage:
//   node pdfPrev.js <source.pdf> <page> <WxH> [output.png]
//   node pdfPrev.js documentation/specimens/SpecimenNL.pdf 47 1080x1440

'use strict';

const { spawnSync } = require('child_process');
const path  = require('path');
const fs    = require('fs');
const os    = require('os');

// ── CLI args ────────────────────────────────────────────────────────────────

const args = process.argv.slice(2);
if (args.length < 3) {
  console.error([
    'Usage: node pdfPrev.js <source.pdf> <page> <WxH> [output.png]',
    'Example: node pdfPrev.js documentation/specimens/SpecimenNL.pdf 47 1080x1440',
  ].join('\n'));
  process.exit(1);
}

const [sourcePdf, pageArg, sizeArg, outputArg] = args;
const page    = parseInt(pageArg, 10);
const sizeParts = sizeArg.toLowerCase().split('x');
const targetW = parseInt(sizeParts[0], 10);
const targetH = parseInt(sizeParts[1], 10);

if (isNaN(page) || page < 1)        { console.error('Invalid page number.'); process.exit(1); }
if (isNaN(targetW) || isNaN(targetH)) { console.error('Invalid size – use WxH, e.g. 1080x1440'); process.exit(1); }

const absSrc = path.resolve(sourcePdf);
if (!fs.existsSync(absSrc)) { console.error(`Source not found: ${absSrc}`); process.exit(1); }

const baseName  = path.basename(absSrc, path.extname(absSrc));
const outputPath = outputArg
  ? path.resolve(outputArg)
  : path.join(path.dirname(absSrc), `${baseName}-p${page}-${targetW}x${targetH}.png`);

// ── helpers ─────────────────────────────────────────────────────────────────

function run(cmd, cmdArgs, opts = {}) {
  const result = spawnSync(cmd, cmdArgs, { encoding: 'utf8', ...opts });
  if (result.error) throw result.error;
  if (result.status !== 0) {
    const msg = (result.stderr || '').trim() || `exit code ${result.status}`;
    throw new Error(`${cmd} failed: ${msg}`);
  }
  return result.stdout || '';
}

// ── Step 1: query PDF page dimensions via gs bbox device ────────────────────
// gs -sDEVICE=bbox renders nothing but emits %%HiResBoundingBox to stderr.

let pdfW = 595.28;   // A4 default (points)
let pdfH = 841.89;

try {
  const result = spawnSync('gs', [
    '-q', '-dBATCH', '-dNOPAUSE', '-dSAFER',
    '-sDEVICE=bbox',
    `-dFirstPage=${page}`,
    `-dLastPage=${page}`,
    absSrc,
  ], { encoding: 'utf8', timeout: 15000 });

  // bbox output goes to stderr: %%HiResBoundingBox: 0 0 612 859.something
  const out = (result.stderr || '') + (result.stdout || '');
  const m = out.match(/%%HiResBoundingBox:\s*[\d.]+\s+[\d.]+\s+([\d.]+)\s+([\d.]+)/);
  if (m) {
    pdfW = parseFloat(m[1]);
    pdfH = parseFloat(m[2]);
    console.log(`Page ${page} size: ${pdfW} × ${pdfH} pt`);
  } else {
    console.warn('Could not read page dimensions, assuming A4.');
  }
} catch (e) {
  console.warn(`Page dimension query failed (${e.message}), assuming A4.`);
}

// ── Step 2: calculate render DPI for 3× intermediate ────────────────────────
// PDF points at 72 dpi → pixel count = points × dpi / 72
// We want (rendered px in narrower dimension) ≈ 3 × (target px in that dimension)

const dpiForW = (3 * targetW * 72) / pdfW;
const dpiForH = (3 * targetH * 72) / pdfH;
const renderDpi = Math.max(Math.round(Math.min(dpiForW, dpiForH)), 150);

console.log(`Render DPI: ${renderDpi}  (3× intermediate target for Lanczos downsample)`);

// ── Step 3: Ghostscript → high-res PNG ──────────────────────────────────────
// -sDEVICE=png16m    : 24-bit RGB (no alpha overhead, white background)
// -dTextAlphaBits=4  : 4× sub-pixel antialiasing for text glyphs
// -dGraphicsAlphaBits=4 : same for vector graphics

const tmpPng = path.join(os.tmpdir(), `pdfprev_${process.pid}_${Date.now()}.png`);

try {
  console.log('Rendering with Ghostscript…');
  run('gs', [
    '-q', '-dBATCH', '-dNOPAUSE', '-dSAFER',
    '-sDEVICE=png16m',
    `-r${renderDpi}`,
    '-dTextAlphaBits=4',
    '-dGraphicsAlphaBits=4',
    `-dFirstPage=${page}`,
    `-dLastPage=${page}`,
    `-sOutputFile=${tmpPng}`,
    absSrc,
  ], { stdio: 'inherit', timeout: 60000 });
} catch (e) {
  console.error('Ghostscript failed:', e.message);
  if (fs.existsSync(tmpPng)) fs.unlinkSync(tmpPng);
  process.exit(1);
}

if (!fs.existsSync(tmpPng)) {
  console.error('Ghostscript produced no output (page number out of range?)');
  process.exit(1);
}

// ── Step 4: ImageMagick – Lanczos downsample + letterbox on black ────────────
// -filter Lanczos -resize WxH  : shrink to fit, preserving aspect ratio
// -background black -gravity Center -extent WxH : pad to exact target size

try {
  console.log(`Downsampling to ${targetW}×${targetH} with Lanczos…`);
  run('magick', [
    tmpPng,
    '-filter', 'Lanczos',
    '-resize', `${targetW}x${targetH}`,
    '-background', 'black',
    '-gravity', 'Center',
    '-extent', `${targetW}x${targetH}`,
    '-depth', '8',
    outputPath,
  ], { stdio: 'inherit', timeout: 60000 });
  console.log(`Saved → ${outputPath}`);
} catch (e) {
  console.error('ImageMagick failed:', e.message);
  process.exit(1);
} finally {
  if (fs.existsSync(tmpPng)) fs.unlinkSync(tmpPng);
}
