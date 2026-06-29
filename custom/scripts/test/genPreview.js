#!/usr/bin/env node
 
/**
* Usage:
*   node preview.js path/to/document.pdf
*
* Creates:
*   path/to/document_preview.png
*/
 
// Source - https://stackoverflow.com/a
// Posted by Badal Saibo, modified by community. See post 'Timeline' for change history
// Retrieved 2025-12-12, License - CC BY-SA 4.0

import pdfjsLib from 'pdfjs-dist';
import PDFJSWorker from 'pdfjs-dist/build/pdf.worker';
import { createCanvas, loadImage } from 'canvas';

// Function to convert BinaryData to an image and return the base64 representation
export const convertBinaryDataToBase64Image = async (binaryData) => {
  pdfjsLib.GlobalWorkerOptions.workerSrc = PDFJSWorker;
  try {
    // Initialize PDF.js with the BinaryData
    const pdfDoc = await pdfjsLib.getDocument({ data: binaryData }).promise;

    // Get the first page of the PDF
    const page = await pdfDoc.getPage(1);

    // Get the dimensions and scale of the PDF page
    const viewport = page.getViewport({ scale: 1 });

    // Create a canvas and rendering context
    const canvas = createCanvas(viewport.width, viewport.height)
    const context = canvas.getContext('2d');

    // Render the PDF page as an image on the canvas
    await page.render({ canvasContext: context, viewport }).promise;

    // Convert the canvas content to a data URL (base64)
    const imageDataURL = canvas.toDataURL('image/png'); // Change 'image/png' to the desired format if needed

    return imageDataURL;
  } catch (error) {
    // Handle any errors that occur during the conversion
    throw new Error(`Error converting PDF to image: ${error}`);
  }
};

function generatePreview(inputPdfPath) {

    let data = convertBinaryDataToBase64Image(fs.readFileSync(inputPdfPath))

    let buff = Buffer.from(data, 'base64');
fs.writeFileSync( inputPdfPath + '.png', buff);

}
 
const inputPdfPath = process.argv[2];
 
if (!inputPdfPath) {
    console.error("Usage: node preview.js <path/to/file.pdf>");
    process.exit(1);
}
 
generatePreview(inputPdfPath);