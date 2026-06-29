// node otCheck.js ../fonts/ttf/Kierkegaard-Regular.ttf

const opentype = require('opentype.js');
const font = opentype.loadSync(process.argv[2]);

const FONT_NAME = font.names.fullName.en;
const FONT_VERSION = `v${font.tables.head.fontRevision.toFixed(3)}`;
console.log (  FONT_NAME, FONT_VERSION );

var charList = [];

    const glyphs = font.glyphs.glyphs;
    for (const [key, value] of Object.entries(glyphs)) {

        /*
            Glyph {
            index: 783,
            name: 'uni25C7',
            unicode: 9671,
            unicodes: [ 9671 ],
            advanceWidth: 1000,
            leftSideBearing: 116
            }
        */

      if (value.name !== null && value.unicodes.length > 0) {
        const character = String.fromCharCode(value.unicodes);
        const charName = value.name;
        const charUnicode = value.unicodes;
        console.log( character, charName, charUnicode, value.advancedWidth );

        charList.push( { character } );
      }
    }

console.log( charList.length, 'characters found' );
console.log(  charList.map( c => c.character ).join(' ')  );
