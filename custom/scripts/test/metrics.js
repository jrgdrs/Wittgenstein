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

  let unitsPerEm = font.unitsPerEm
  let ascender = font.ascender
  let descender = Math.abs(font.descender)
  let fontFamily = font.tables.name.fontFamily.en .replaceAll(' ', '_') .replaceAll('.', '_')
  console.error(unitsPerEm, ascender, descender, fontFamily );

  // get glyphs
  let glyphs = font.glyphs.glyphs
  console.log( JSON.stringify( glyphs[47] ));
  
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

outPivot.sort((a, b) => a[1] - b[1]);

var list = [], lettersammlung = []; var lastletter = 0; var dickte = 0; var intervall = 0;
outPivot.forEach((pair) => {
  let letter = pair[0];
   dickte = pair[1];
  if( dickte != lastletter ){
    list.push( { [lastletter] : lettersammlung, intervallDown: intervall, intervallUp: (dickte - lastletter) } );
     intervall = dickte - lastletter;
    lettersammlung = [];
  } 
  lastletter = dickte;
  lettersammlung.push(letter)
})

list.push( { [dickte]: lettersammlung } );

console.log( JSON.stringify(list) )

  

})()
