const opentype = require('opentype.js')
const fs = require('fs')

console.error(process.argv[2])
var filename = process.argv[2];

( async () => {
  const buffer = fs.readFileSync(filename, null).buffer
  const font = opentype.parse(await buffer)
  var outPivot = [];

  // font spec
  let fontModified = new Date(font.tables.head.modified * 1000); // fontMod.toISOString()
  let fontCreated = new Date(font.tables.head.created * 1000);
  let fontXMin = font.tables.head.xMin;
  let fontYMin = font.tables.head.yMin;
  let fontXMax = font.tables.head.xMax;
  let fontYMax = font.tables.head.yMax;
  console.log(fontModified.toISOString(), fontCreated.toISOString(), fontXMin, fontYMin, fontXMax, fontYMax);
  //console.log( font.tables);

  let psname = font.tables.name.postScriptName.en;
  console.log(psname);

  let version = font.tables.head.version
  let revision = font.tables.head.fontRevision
  console.log( version, revision );

  let ascender = font.tables.hhea.ascender
  let descender = font.tables.hhea.descender

  console.log( ascender, descender );

  let sxHeight = font.tables.os2.sxHeight
  let sCapHeight = font.tables.os2.sCapHeight
  console.log( "os2", sxHeight, sCapHeight)


  

  let unitsPerEm = font.unitsPerEm
  //let ascender = font.ascender
   descender = Math.abs(font.descender)
  let fontFamily = font.tables.name.fontFamily.en .replaceAll(' ', '_') .replaceAll('.', '_')
  console.error(unitsPerEm, ascender, descender, fontFamily );

  // get glyphs
  let glyphs = font.glyphs.glyphs
  //console.log( JSON.stringify( glyphs[47] ));
  
  let keys = Object.keys(glyphs).length

  for (let i = 0; i < keys; i++) {
    let glyph = glyphs[i]

    if (glyph) {

      let bbox = glyph.getBoundingBox();

      // glyph spec
      let lineHeight = ascender + descender
      let leftSB = glyph.leftSideBearing
      let rightSB = glyph.advanceWidth - Math.round(bbox.x2)
      let glyphW = glyph.advanceWidth
      let poxX = 0
      let coverX = Math.round(bbox.x2 ) - Math.round(bbox.x1 );

      // legt den ausschnitt des svg fest in der voewbpx
      // height-controller /8
      let bboxString = Math.round(bbox.x1 ) + " " + ( descender / 8 ) + " " + Math.round(bbox.x2) + " " + ( lineHeight + 200 );

      // adjust negative widths
      if (glyph.advanceWidth + leftSB < 0) {
        glyphW =
          Math.abs(leftSB) + Math.abs(glyph.advanceWidth) + Math.abs(rightSB)
        poxX = Math.abs(leftSB)
      }

      // get svg path
      let pathData = glyph.getPath(poxX, ascender, 1000).toPathData(2)

      let glyphId = glyph.name ? glyph.name.replaceAll('.', '_') : glyph.unicode ? glyph.unicode : glyph.index

      if (pathData) {
        let letter = glyph.name
        //console.log( [letter, glyphW ].join(";"))
        outPivot.push([letter,glyphW])
      }

    }
}

//console.log(outPivot);

/*

Fontname
no of glyphs
em
asc
cap
x
desc
no of width classes
width asc, num of glyphs in class, glyph names
845 - 2 - ABC

*/


  

})()
