## FontBakery report

fontbakery version: 0.10.9

<details><summary><b>[14] Wittgenstein-ExtraBoldItalic.ttf</b></summary><div><details><summary>🔥 <b>FAIL:</b> Check font names are correct (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/font_names">com.google.fonts/check/font_names</a>)</summary><div>


* 🔥 **FAIL** Font names are incorrect:

| nameID | current | expected |
| :--- | :--- | :--- |
| Family Name | **Wittgenstein ExtraBold Italic** | **Wittgenstein ExtraBold** |
| Subfamily Name | **Regular** | **Italic** |
| Full Name | Wittgenstein ExtraBold Italic | Wittgenstein ExtraBold Italic |
| Postscript Name | Wittgenstein-ExtraBoldItalic | Wittgenstein-ExtraBoldItalic |
| Typographic Family Name | Wittgenstein | Wittgenstein |
| Typographic Subfamily Name | ExtraBold Italic | ExtraBold Italic | [code: bad-names]
</div></details><details><summary>🔥 <b>FAIL:</b> Checking head.macStyle value. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/head.html#com.google.fonts/check/mac_style">com.google.fonts/check/mac_style</a>)</summary><div>


* 🔥 **FAIL** head macStyle ITALIC bit should be set. [code: bad-ITALIC]
</div></details><details><summary>🔥 <b>FAIL:</b> Checking OS/2 fsSelection value. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/os2.html#com.google.fonts/check/fsselection">com.google.fonts/check/fsselection</a>)</summary><div>


* 🔥 **FAIL** OS/2 fsSelection REGULAR bit should be unset. [code: bad-REGULAR]
* 🔥 **FAIL** OS/2 fsSelection ITALIC bit should be set. [code: bad-ITALIC]
</div></details><details><summary>🔥 <b>FAIL:</b> Check name table IDs 1, 2, 16, 17 to conform to Italic style. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/name.html#com.google.fonts/check/name/italic_names">com.google.fonts/check/name/italic_names</a>)</summary><div>


* 🔥 **FAIL** Name ID 1 (Family Name) must not contain 'Italic'. [code: bad-familyname]
* 🔥 **FAIL** Name ID 2 (Subfamily Name) does not conform to specs. Only R/I/B/BI are allowed.
Got: 'Regular'. [code: bad-subfamilyname]
</div></details><details><summary>⚠ <b>WARN:</b> Check for codepoints not covered by METADATA subsets. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/metadata/unreachable_subsetting">com.google.fonts/check/metadata/unreachable_subsetting</a>)</summary><div>


* ⚠ **WARN** The following codepoints supported by the font are not covered by
    any subsets defined in the font's metadata file, and will never
    be served. You can solve this by either manually adding additional
    subset declarations to METADATA.pb, or by editing the glyphset
    definitions.

 * U+02C7 CARON: try adding one of: tifinagh, canadian-aboriginal, yi
 * U+02D8 BREVE: try adding one of: canadian-aboriginal, yi
 * U+02D9 DOT ABOVE: try adding one of: canadian-aboriginal, yi
 * U+02DB OGONEK: try adding one of: canadian-aboriginal, yi
 * U+02DD DOUBLE ACUTE ACCENT: not included in any glyphset definition
 * U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: coptic, math, tifinagh, cherokee
 * U+0306 COMBINING BREVE: try adding one of: old-permic, tifinagh
 * U+0307 COMBINING DOT ABOVE: try adding one of: coptic, old-permic, tai-le, canadian-aboriginal, tifinagh, syriac, math, malayalam
 * U+030A COMBINING RING ABOVE: try adding syriac
 * U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee
 * U+030C COMBINING CARON: try adding one of: tai-le, cherokee
 * U+0312 COMBINING TURNED COMMA ABOVE: not included in any glyphset definition
 * U+0326 COMBINING COMMA BELOW: not included in any glyphset definition
 * U+0327 COMBINING CEDILLA: not included in any glyphset definition
 * U+0328 COMBINING OGONEK: not included in any glyphset definition
 * U+03C0 GREEK SMALL LETTER PI: try adding one of: math, greek, yi
 * U+0E3F THAI CURRENCY SYMBOL BAHT: try adding thai
 * U+1EBC LATIN CAPITAL LETTER E WITH TILDE: try adding vietnamese
 * U+1EBD LATIN SMALL LETTER E WITH TILDE: try adding vietnamese
 * U+2000 EN QUAD: not included in any glyphset definition
 * U+2001 EM QUAD: not included in any glyphset definition
 * U+2003 EM SPACE: try adding nushu
 * U+2004 THREE-PER-EM SPACE: not included in any glyphset definition
 * U+2005 FOUR-PER-EM SPACE: not included in any glyphset definition
 * U+2006 SIX-PER-EM SPACE: not included in any glyphset definition
 * U+2007 FIGURE SPACE: not included in any glyphset definition
 * U+2008 PUNCTUATION SPACE: not included in any glyphset definition
 * U+200A HAIR SPACE: not included in any glyphset definition
 * U+200C ZERO WIDTH NON-JOINER: try adding one of: avestan, telugu, dogra, balinese, lepcha, rejang, yi, tirhuta, bengali, kayah-li, tifinagh, khudawadi, buginese, meetei-mayek, oriya, batak, tai-viet, kaithi, mongolian, khmer, tagalog, tai-le, tamil, buhid, mahajani, pahawh-hmong, javanese, khojki, phags-pa, devanagari, brahmi, duployan, hanunoo, sundanese, saurashtra, malayalam, hanifi-rohingya, warang-citi, manichaean, siddham, sinhala, mandaic, kharoshthi, kannada, syriac, chakma, cham, takri, thaana, nko, modi, gujarati, myanmar, psalter-pahlavi, gurmukhi, sharada, hatran, tagbanwa, new-tai-lue, thai, newa, syloti-nagri, tibetan, grantha, tai-tham, gunjala-gondi, limbu, sogdian
 * U+200D ZERO WIDTH JOINER: try adding one of: emoji, avestan, telugu, dogra, balinese, lepcha, rejang, yi, tirhuta, bengali, kayah-li, tifinagh, khudawadi, buginese, meetei-mayek, oriya, batak, tai-viet, kaithi, mongolian, tagalog, tai-le, tamil, buhid, mahajani, pahawh-hmong, javanese, khojki, phags-pa, devanagari, brahmi, duployan, hanunoo, sundanese, saurashtra, malayalam, hanifi-rohingya, warang-citi, manichaean, siddham, sinhala, mandaic, kharoshthi, kannada, syriac, chakma, cham, takri, thaana, old-hungarian, nko, modi, gujarati, myanmar, psalter-pahlavi, gurmukhi, sharada, thai, tagbanwa, new-tai-lue, newa, syloti-nagri, tibetan, grantha, tai-tham, gunjala-gondi, limbu
 * U+200E LEFT-TO-RIGHT MARK: try adding one of: nko, thaana, syriac, phags-pa
 * U+200F RIGHT-TO-LEFT MARK: try adding one of: nko, thaana, syriac, phags-pa
 * U+2016 DOUBLE VERTICAL LINE: not included in any glyphset definition
 * U+2021 DOUBLE DAGGER: try adding adlam
 * U+202F NARROW NO-BREAK SPACE: try adding one of: mongolian, yi
 * U+2030 PER MILLE SIGN: try adding adlam
 * U+205F MEDIUM MATHEMATICAL SPACE: not included in any glyphset definition
 * U+2126 OHM SIGN: not included in any glyphset definition
 * U+212E ESTIMATED SYMBOL: not included in any glyphset definition
 * U+2153 VULGAR FRACTION ONE THIRD: not included in any glyphset definition
 * U+2154 VULGAR FRACTION TWO THIRDS: not included in any glyphset definition
 * U+2190 LEFTWARDS ARROW: try adding one of: math, symbols
 * U+2192 RIGHTWARDS ARROW: try adding one of: math, symbols
 * U+2194 LEFT RIGHT ARROW: try adding one of: emoji, math, symbols
 * U+2195 UP DOWN ARROW: try adding one of: emoji, math, symbols
 * U+2196 NORTH WEST ARROW: try adding one of: emoji, math, symbols
 * U+2197 NORTH EAST ARROW: try adding one of: emoji, math, symbols
 * U+2198 SOUTH EAST ARROW: try adding one of: emoji, math, symbols
 * U+2199 SOUTH WEST ARROW: try adding one of: emoji, math, symbols
 * U+2202 PARTIAL DIFFERENTIAL: try adding math
 * U+2205 EMPTY SET: try adding math
 * U+2206 INCREMENT: try adding math
 * U+220F N-ARY PRODUCT: try adding math
 * U+2211 N-ARY SUMMATION: try adding math
 * U+221A SQUARE ROOT: try adding math
 * U+221E INFINITY: try adding math
 * U+222B INTEGRAL: try adding math
 * U+2248 ALMOST EQUAL TO: try adding math
 * U+2260 NOT EQUAL TO: try adding math
 * U+2264 LESS-THAN OR EQUAL TO: try adding math
 * U+2265 GREATER-THAN OR EQUAL TO: try adding math
 * U+25A0 BLACK SQUARE: try adding symbols
 * U+25A1 WHITE SQUARE: try adding symbols
 * U+25AA BLACK SMALL SQUARE: try adding one of: emoji, symbols
 * U+25AB WHITE SMALL SQUARE: try adding one of: emoji, symbols
 * U+25B2 BLACK UP-POINTING TRIANGLE: try adding symbols
 * U+25B3 WHITE UP-POINTING TRIANGLE: try adding one of: math, symbols
 * U+25B4 BLACK UP-POINTING SMALL TRIANGLE: try adding symbols
 * U+25B5 WHITE UP-POINTING SMALL TRIANGLE: try adding symbols
 * U+25B6 BLACK RIGHT-POINTING TRIANGLE: try adding one of: emoji, symbols
 * U+25B7 WHITE RIGHT-POINTING TRIANGLE: try adding one of: math, symbols
 * U+25B8 BLACK RIGHT-POINTING SMALL TRIANGLE: try adding symbols
 * U+25B9 WHITE RIGHT-POINTING SMALL TRIANGLE: try adding symbols
 * U+25BC BLACK DOWN-POINTING TRIANGLE: try adding symbols
 * U+25BD WHITE DOWN-POINTING TRIANGLE: try adding one of: math, symbols
 * U+25BE BLACK DOWN-POINTING SMALL TRIANGLE: try adding symbols
 * U+25BF WHITE DOWN-POINTING SMALL TRIANGLE: try adding symbols
 * U+25C0 BLACK LEFT-POINTING TRIANGLE: try adding one of: emoji, symbols
 * U+25C1 WHITE LEFT-POINTING TRIANGLE: try adding one of: math, symbols
 * U+25C2 BLACK LEFT-POINTING SMALL TRIANGLE: try adding symbols
 * U+25C3 WHITE LEFT-POINTING SMALL TRIANGLE: try adding symbols
 * U+25C6 BLACK DIAMOND: try adding symbols
 * U+25C7 WHITE DIAMOND: try adding symbols
 * U+25CA LOZENGE: try adding one of: math, symbols
 * U+25CB WHITE CIRCLE: try adding symbols
 * U+25CC DOTTED CIRCLE: try adding one of: balinese, adlam, soyombo, oriya, caucasian-albanian, khmer, tagalog, mahajani, brahmi, sundanese, malayalam, hanifi-rohingya, siddham, zanabazar-square, syriac, mende-kikakui, cham, takri, lao, modi, thai, newa, wancho, grantha, kayah-li, bassa-vah, lepcha, yi, tirhuta, tifinagh, buginese, batak, mongolian, coptic, sinhala, thaana, old-permic, gujarati, gurmukhi, sharada, tagbanwa, syloti-nagri, tibetan, telugu, sogdian, rejang, symbols, khudawadi, meetei-mayek, tai-le, osage, buhid, pahawh-hmong, khojki, masaram-gondi, phags-pa, devanagari, hanunoo, bhaiksuki, mandaic, kannada, chakma, miao, nko, myanmar, math, elbasan, dogra, bengali, music, tai-viet, kaithi, tamil, javanese, duployan, ahom, hebrew, manichaean, kharoshthi, psalter-pahlavi, new-tai-lue, marchen, gunjala-gondi, limbu
 * U+25CF BLACK CIRCLE: try adding symbols
 * U+25E6 WHITE BULLET: try adding symbols
 * U+27E8 MATHEMATICAL LEFT ANGLE BRACKET: try adding math
 * U+27E9 MATHEMATICAL RIGHT ANGLE BRACKET: try adding math

Or you can add the above codepoints to one of the subsets supported by the font: `cyrillic-ext`, `latin`, `latin-ext` [code: unreachable-subsetting]
</div></details><details><summary>⚠ <b>WARN:</b> Are there caret positions declared for every ligature? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/ligature_carets">com.google.fonts/check/ligature_carets</a>)</summary><div>


* ⚠ **WARN** This font lacks caret position values for ligature glyphs on its GDEF table. [code: lacks-caret-pos]
</div></details><details><summary>⚠ <b>WARN:</b> Is there kerning info for non-ligated sequences? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/kerning_for_non_ligated_sequences">com.google.fonts/check/kerning_for_non_ligated_sequences</a>)</summary><div>


* ⚠ **WARN** GPOS table lacks kerning info for the following non-ligated sequences:

	- f + i

	- i + l [code: lacks-kern-info]
</div></details><details><summary>⚠ <b>WARN:</b> Combined length of family and style must not exceed 31 characters. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/name/family_and_style_max_length">com.google.fonts/check/name/family_and_style_max_length</a>)</summary><div>


* ⚠ **WARN** Name ID 6 'Wittgenstein-ExtraBoldItalic' exceeds 27 characters. This has been found to cause problems with PostScript printers, especially on Mac platforms [code: nameid6-too-long]
</div></details><details><summary>⚠ <b>WARN:</b> Check font follows the Google Fonts vertical metric schema (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/vertical_metrics">com.google.fonts/check/vertical_metrics</a>)</summary><div>


* ⚠ **WARN** We recommend the absolute sum of the hhea metrics should be between 1.2-1.5x of the font's upm. This font has 1.65x (1650) [code: bad-hhea-range]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure fonts have ScriptLangTags declared on the 'meta' table. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/meta/script_lang_tags">com.google.fonts/check/meta/script_lang_tags</a>)</summary><div>


* ⚠ **WARN** This font file does not have a 'meta' table. [code: lacks-meta-table]
</div></details><details><summary>⚠ <b>WARN:</b> Check font contains no unreachable glyphs (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/unreachable_glyphs">com.google.fonts/check/unreachable_glyphs</a>)</summary><div>


* ⚠ **WARN** The following glyphs could not be reached by codepoint or substitution rules:

	- eight.inferior

	- eight.osf.tosf

	- eight.superior

	- five.inferior

	- five.osf.tosf

	- five.superior

	- four.inferior

	- four.osf.tosf

	- four.superior

	- nine.inferior

	- nine.osf.tosf

	- nine.superior

	- one.inferior

	- one.osf.tosf

	- one.superior

	- seven.inferior

	- seven.osf.tosf

	- seven.superior

	- six.inferior

	- six.osf.tosf

	- six.superior

	- three.inferior

	- three.osf.tosf

	- three.superior

	- two.inferior

	- two.osf.tosf

	- two.superior

	- uni004A0301

	- uni006A0301

	- zero.inferior

	- zero.osf.tosf

	- zero.superior
 [code: unreachable-glyphs]
</div></details><details><summary>⚠ <b>WARN:</b> Check if each glyph has the recommended amount of contours. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/contour_count">com.google.fonts/check/contour_count</a>)</summary><div>


* ⚠ **WARN** This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.

The following glyphs do not have the recommended number of contours:

	- Glyph name: aogonek	Contours detected: 3	Expected: 2

	- Glyph name: eogonek	Contours detected: 3	Expected: 2

	- Glyph name: Uogonek	Contours detected: 2	Expected: 1

	- Glyph name: uogonek	Contours detected: 2	Expected: 1

	- Glyph name: uni20BF	Contours detected: 7	Expected: 3

	- Glyph name: Uogonek	Contours detected: 2	Expected: 1

	- Glyph name: aogonek	Contours detected: 3	Expected: 2

	- Glyph name: eogonek	Contours detected: 3	Expected: 2

	- Glyph name: uni20BF	Contours detected: 7	Expected: 3

	- Glyph name: uogonek	Contours detected: 2	Expected: 1
 [code: contour-count]
</div></details><details><summary>⚠ <b>WARN:</b> Do any segments have colinear vectors? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Outline Correctness Checks>.html#com.google.fonts/check/outline_colinear_vectors">com.google.fonts/check/outline_colinear_vectors</a>)</summary><div>


* ⚠ **WARN** The following glyphs have colinear vectors:

	* thorn (U+00FE): L<<319.0,786.0>--<301.0,708.0>> -> L<<301.0,708.0>--<261.0,498.0>>

	* uni1EF9 (U+1EF9): L<<525.0,439.0>--<232.0,0.0>> -> L<<232.0,0.0>--<99.0,-216.0>>

	* y (U+0079): L<<525.0,439.0>--<232.0,0.0>> -> L<<232.0,0.0>--<99.0,-216.0>>

	* yacute (U+00FD): L<<525.0,439.0>--<232.0,0.0>> -> L<<232.0,0.0>--<99.0,-216.0>>

	* ycircumflex (U+0177): L<<525.0,439.0>--<232.0,0.0>> -> L<<232.0,0.0>--<99.0,-216.0>>

	* ydieresis (U+00FF): L<<525.0,439.0>--<232.0,0.0>> -> L<<232.0,0.0>--<99.0,-216.0>>

	* ygrave (U+1EF3): L<<525.0,439.0>--<232.0,0.0>> -> L<<232.0,0.0>--<99.0,-216.0>> [code: found-colinear-vectors]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Shaping Checks>.html#com.google.fonts/check/soft_dotted">com.google.fonts/check/soft_dotted</a>)</summary><div>


* ⚠ **WARN** The dot of soft dotted characters used in orthographies _must_ disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌

The dot of soft dotted characters _should_ disappear in other cases, for example: į̆ į̇ į̈ į̊ į̋ į̒ į̧̀ į̧́ į̧̂ į̧̃ į̧̄ į̧̆ į̧̇ į̧̈ į̧̊ į̧̋ į̧̌ į̧̒ į̨̀ į̨́

Your font fully covers the following languages that require the soft-dotted feature: Lithuanian (Latn, 2,357,094 speakers), Dutch (Latn, 31,709,104 speakers). 

Your font does *not* cover the following languages that require the soft-dotted feature: Zapotec (Latn, 490,000 speakers), Ijo, Southeast (Latn, 2,471,000 speakers), Navajo (Latn, 166,319 speakers), Kom (Latn, 360,685 speakers), Lugbara (Latn, 2,200,000 speakers), Makaa (Latn, 221,000 speakers), Mfumte (Latn, 79,000 speakers), Southern Kisi (Latn, 360,000 speakers), Bete-Bendi (Latn, 100,000 speakers), Basaa (Latn, 332,940 speakers), Ma’di (Latn, 584,000 speakers), Igbo (Latn, 27,823,640 speakers), Ngbaka (Latn, 1,020,000 speakers), Ebira (Latn, 2,200,000 speakers), Dii (Latn, 71,000 speakers), Belarusian (Cyrl, 10,064,517 speakers), Aghem (Latn, 38,843 speakers), Dan (Latn, 1,099,244 speakers), Kpelle, Guinea (Latn, 622,000 speakers), Ukrainian (Cyrl, 29,273,587 speakers), South Central Banda (Latn, 244,000 speakers), Avokaya (Latn, 100,000 speakers), Cicipu (Latn, 44,000 speakers), Ejagham (Latn, 120,000 speakers), Nzakara (Latn, 50,000 speakers), Fur (Latn, 1,230,163 speakers), Nateni (Latn, 100,000 speakers), Mundani (Latn, 34,000 speakers), Koonzime (Latn, 40,000 speakers), Gulay (Latn, 250,478 speakers), Ekpeye (Latn, 226,000 speakers), Bafut (Latn, 158,146 speakers), Yala (Latn, 200,000 speakers), Mango (Latn, 77,000 speakers), Sar (Latn, 500,000 speakers). [code: soft-dotted]
</div></details><br></div></details><details><summary><b>[9] Wittgenstein-Italic.ttf</b></summary><div><details><summary>⚠ <b>WARN:</b> Check for codepoints not covered by METADATA subsets. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/metadata/unreachable_subsetting">com.google.fonts/check/metadata/unreachable_subsetting</a>)</summary><div>


* ⚠ **WARN** The following codepoints supported by the font are not covered by
    any subsets defined in the font's metadata file, and will never
    be served. You can solve this by either manually adding additional
    subset declarations to METADATA.pb, or by editing the glyphset
    definitions.

 * U+02C7 CARON: try adding one of: tifinagh, canadian-aboriginal, yi
 * U+02D8 BREVE: try adding one of: canadian-aboriginal, yi
 * U+02D9 DOT ABOVE: try adding one of: canadian-aboriginal, yi
 * U+02DB OGONEK: try adding one of: canadian-aboriginal, yi
 * U+02DD DOUBLE ACUTE ACCENT: not included in any glyphset definition
 * U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: coptic, math, tifinagh, cherokee
 * U+0306 COMBINING BREVE: try adding one of: old-permic, tifinagh
 * U+0307 COMBINING DOT ABOVE: try adding one of: coptic, old-permic, tai-le, canadian-aboriginal, tifinagh, syriac, math, malayalam
 * U+030A COMBINING RING ABOVE: try adding syriac
 * U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee
 * U+030C COMBINING CARON: try adding one of: tai-le, cherokee
 * U+0312 COMBINING TURNED COMMA ABOVE: not included in any glyphset definition
 * U+0326 COMBINING COMMA BELOW: not included in any glyphset definition
 * U+0327 COMBINING CEDILLA: not included in any glyphset definition
 * U+0328 COMBINING OGONEK: not included in any glyphset definition
 * U+03C0 GREEK SMALL LETTER PI: try adding one of: math, greek, yi
 * U+0E3F THAI CURRENCY SYMBOL BAHT: try adding thai
 * U+1EBC LATIN CAPITAL LETTER E WITH TILDE: try adding vietnamese
 * U+1EBD LATIN SMALL LETTER E WITH TILDE: try adding vietnamese
 * U+2000 EN QUAD: not included in any glyphset definition
 * U+2001 EM QUAD: not included in any glyphset definition
 * U+2003 EM SPACE: try adding nushu
 * U+2004 THREE-PER-EM SPACE: not included in any glyphset definition
 * U+2005 FOUR-PER-EM SPACE: not included in any glyphset definition
 * U+2006 SIX-PER-EM SPACE: not included in any glyphset definition
 * U+2007 FIGURE SPACE: not included in any glyphset definition
 * U+2008 PUNCTUATION SPACE: not included in any glyphset definition
 * U+200A HAIR SPACE: not included in any glyphset definition
 * U+200C ZERO WIDTH NON-JOINER: try adding one of: avestan, telugu, dogra, balinese, lepcha, rejang, yi, tirhuta, bengali, kayah-li, tifinagh, khudawadi, buginese, meetei-mayek, oriya, batak, tai-viet, kaithi, mongolian, khmer, tagalog, tai-le, tamil, buhid, mahajani, pahawh-hmong, javanese, khojki, phags-pa, devanagari, brahmi, duployan, hanunoo, sundanese, saurashtra, malayalam, hanifi-rohingya, warang-citi, manichaean, siddham, sinhala, mandaic, kharoshthi, kannada, syriac, chakma, cham, takri, thaana, nko, modi, gujarati, myanmar, psalter-pahlavi, gurmukhi, sharada, hatran, tagbanwa, new-tai-lue, thai, newa, syloti-nagri, tibetan, grantha, tai-tham, gunjala-gondi, limbu, sogdian
 * U+200D ZERO WIDTH JOINER: try adding one of: emoji, avestan, telugu, dogra, balinese, lepcha, rejang, yi, tirhuta, bengali, kayah-li, tifinagh, khudawadi, buginese, meetei-mayek, oriya, batak, tai-viet, kaithi, mongolian, tagalog, tai-le, tamil, buhid, mahajani, pahawh-hmong, javanese, khojki, phags-pa, devanagari, brahmi, duployan, hanunoo, sundanese, saurashtra, malayalam, hanifi-rohingya, warang-citi, manichaean, siddham, sinhala, mandaic, kharoshthi, kannada, syriac, chakma, cham, takri, thaana, old-hungarian, nko, modi, gujarati, myanmar, psalter-pahlavi, gurmukhi, sharada, thai, tagbanwa, new-tai-lue, newa, syloti-nagri, tibetan, grantha, tai-tham, gunjala-gondi, limbu
 * U+200E LEFT-TO-RIGHT MARK: try adding one of: nko, thaana, syriac, phags-pa
 * U+200F RIGHT-TO-LEFT MARK: try adding one of: nko, thaana, syriac, phags-pa
 * U+2016 DOUBLE VERTICAL LINE: not included in any glyphset definition
 * U+2021 DOUBLE DAGGER: try adding adlam
 * U+202F NARROW NO-BREAK SPACE: try adding one of: mongolian, yi
 * U+2030 PER MILLE SIGN: try adding adlam
 * U+205F MEDIUM MATHEMATICAL SPACE: not included in any glyphset definition
 * U+2126 OHM SIGN: not included in any glyphset definition
 * U+212E ESTIMATED SYMBOL: not included in any glyphset definition
 * U+2153 VULGAR FRACTION ONE THIRD: not included in any glyphset definition
 * U+2154 VULGAR FRACTION TWO THIRDS: not included in any glyphset definition
 * U+2190 LEFTWARDS ARROW: try adding one of: math, symbols
 * U+2192 RIGHTWARDS ARROW: try adding one of: math, symbols
 * U+2194 LEFT RIGHT ARROW: try adding one of: emoji, math, symbols
 * U+2195 UP DOWN ARROW: try adding one of: emoji, math, symbols
 * U+2196 NORTH WEST ARROW: try adding one of: emoji, math, symbols
 * U+2197 NORTH EAST ARROW: try adding one of: emoji, math, symbols
 * U+2198 SOUTH EAST ARROW: try adding one of: emoji, math, symbols
 * U+2199 SOUTH WEST ARROW: try adding one of: emoji, math, symbols
 * U+2202 PARTIAL DIFFERENTIAL: try adding math
 * U+2205 EMPTY SET: try adding math
 * U+2206 INCREMENT: try adding math
 * U+220F N-ARY PRODUCT: try adding math
 * U+2211 N-ARY SUMMATION: try adding math
 * U+221A SQUARE ROOT: try adding math
 * U+221E INFINITY: try adding math
 * U+222B INTEGRAL: try adding math
 * U+2248 ALMOST EQUAL TO: try adding math
 * U+2260 NOT EQUAL TO: try adding math
 * U+2264 LESS-THAN OR EQUAL TO: try adding math
 * U+2265 GREATER-THAN OR EQUAL TO: try adding math
 * U+25A0 BLACK SQUARE: try adding symbols
 * U+25A1 WHITE SQUARE: try adding symbols
 * U+25AA BLACK SMALL SQUARE: try adding one of: emoji, symbols
 * U+25AB WHITE SMALL SQUARE: try adding one of: emoji, symbols
 * U+25B2 BLACK UP-POINTING TRIANGLE: try adding symbols
 * U+25B3 WHITE UP-POINTING TRIANGLE: try adding one of: math, symbols
 * U+25B4 BLACK UP-POINTING SMALL TRIANGLE: try adding symbols
 * U+25B5 WHITE UP-POINTING SMALL TRIANGLE: try adding symbols
 * U+25B6 BLACK RIGHT-POINTING TRIANGLE: try adding one of: emoji, symbols
 * U+25B7 WHITE RIGHT-POINTING TRIANGLE: try adding one of: math, symbols
 * U+25B8 BLACK RIGHT-POINTING SMALL TRIANGLE: try adding symbols
 * U+25B9 WHITE RIGHT-POINTING SMALL TRIANGLE: try adding symbols
 * U+25BC BLACK DOWN-POINTING TRIANGLE: try adding symbols
 * U+25BD WHITE DOWN-POINTING TRIANGLE: try adding one of: math, symbols
 * U+25BE BLACK DOWN-POINTING SMALL TRIANGLE: try adding symbols
 * U+25BF WHITE DOWN-POINTING SMALL TRIANGLE: try adding symbols
 * U+25C0 BLACK LEFT-POINTING TRIANGLE: try adding one of: emoji, symbols
 * U+25C1 WHITE LEFT-POINTING TRIANGLE: try adding one of: math, symbols
 * U+25C2 BLACK LEFT-POINTING SMALL TRIANGLE: try adding symbols
 * U+25C3 WHITE LEFT-POINTING SMALL TRIANGLE: try adding symbols
 * U+25C6 BLACK DIAMOND: try adding symbols
 * U+25C7 WHITE DIAMOND: try adding symbols
 * U+25CA LOZENGE: try adding one of: math, symbols
 * U+25CB WHITE CIRCLE: try adding symbols
 * U+25CC DOTTED CIRCLE: try adding one of: balinese, adlam, soyombo, oriya, caucasian-albanian, khmer, tagalog, mahajani, brahmi, sundanese, malayalam, hanifi-rohingya, siddham, zanabazar-square, syriac, mende-kikakui, cham, takri, lao, modi, thai, newa, wancho, grantha, kayah-li, bassa-vah, lepcha, yi, tirhuta, tifinagh, buginese, batak, mongolian, coptic, sinhala, thaana, old-permic, gujarati, gurmukhi, sharada, tagbanwa, syloti-nagri, tibetan, telugu, sogdian, rejang, symbols, khudawadi, meetei-mayek, tai-le, osage, buhid, pahawh-hmong, khojki, masaram-gondi, phags-pa, devanagari, hanunoo, bhaiksuki, mandaic, kannada, chakma, miao, nko, myanmar, math, elbasan, dogra, bengali, music, tai-viet, kaithi, tamil, javanese, duployan, ahom, hebrew, manichaean, kharoshthi, psalter-pahlavi, new-tai-lue, marchen, gunjala-gondi, limbu
 * U+25CF BLACK CIRCLE: try adding symbols
 * U+25E6 WHITE BULLET: try adding symbols
 * U+27E8 MATHEMATICAL LEFT ANGLE BRACKET: try adding math
 * U+27E9 MATHEMATICAL RIGHT ANGLE BRACKET: try adding math

Or you can add the above codepoints to one of the subsets supported by the font: `cyrillic-ext`, `latin`, `latin-ext` [code: unreachable-subsetting]
</div></details><details><summary>⚠ <b>WARN:</b> Are there caret positions declared for every ligature? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/ligature_carets">com.google.fonts/check/ligature_carets</a>)</summary><div>


* ⚠ **WARN** This font lacks caret position values for ligature glyphs on its GDEF table. [code: lacks-caret-pos]
</div></details><details><summary>⚠ <b>WARN:</b> Is there kerning info for non-ligated sequences? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/kerning_for_non_ligated_sequences">com.google.fonts/check/kerning_for_non_ligated_sequences</a>)</summary><div>


* ⚠ **WARN** GPOS table lacks kerning info for the following non-ligated sequences:

	- f + i

	- i + l [code: lacks-kern-info]
</div></details><details><summary>⚠ <b>WARN:</b> Check font follows the Google Fonts vertical metric schema (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/vertical_metrics">com.google.fonts/check/vertical_metrics</a>)</summary><div>


* ⚠ **WARN** We recommend the absolute sum of the hhea metrics should be between 1.2-1.5x of the font's upm. This font has 1.65x (1650) [code: bad-hhea-range]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure fonts have ScriptLangTags declared on the 'meta' table. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/meta/script_lang_tags">com.google.fonts/check/meta/script_lang_tags</a>)</summary><div>


* ⚠ **WARN** This font file does not have a 'meta' table. [code: lacks-meta-table]
</div></details><details><summary>⚠ <b>WARN:</b> Check font contains no unreachable glyphs (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/unreachable_glyphs">com.google.fonts/check/unreachable_glyphs</a>)</summary><div>


* ⚠ **WARN** The following glyphs could not be reached by codepoint or substitution rules:

	- eight.inferior

	- eight.osf.tosf

	- eight.superior

	- five.inferior

	- five.osf.tosf

	- five.superior

	- four.inferior

	- four.osf.tosf

	- four.superior

	- nine.inferior

	- nine.osf.tosf

	- nine.superior

	- one.inferior

	- one.osf.tosf

	- one.superior

	- seven.inferior

	- seven.osf.tosf

	- seven.superior

	- six.inferior

	- six.osf.tosf

	- six.superior

	- three.inferior

	- three.osf.tosf

	- three.superior

	- two.inferior

	- two.osf.tosf

	- two.superior

	- uni004A0301

	- uni006A0301

	- zero.inferior

	- zero.osf.tosf

	- zero.superior
 [code: unreachable-glyphs]
</div></details><details><summary>⚠ <b>WARN:</b> Check if each glyph has the recommended amount of contours. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/contour_count">com.google.fonts/check/contour_count</a>)</summary><div>


* ⚠ **WARN** This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.

The following glyphs do not have the recommended number of contours:

	- Glyph name: aogonek	Contours detected: 3	Expected: 2

	- Glyph name: eogonek	Contours detected: 3	Expected: 2

	- Glyph name: Uogonek	Contours detected: 2	Expected: 1

	- Glyph name: uogonek	Contours detected: 2	Expected: 1

	- Glyph name: uni20BF	Contours detected: 7	Expected: 3

	- Glyph name: Uogonek	Contours detected: 2	Expected: 1

	- Glyph name: aogonek	Contours detected: 3	Expected: 2

	- Glyph name: eogonek	Contours detected: 3	Expected: 2

	- Glyph name: uni20BF	Contours detected: 7	Expected: 3

	- Glyph name: uogonek	Contours detected: 2	Expected: 1
 [code: contour-count]
</div></details><details><summary>⚠ <b>WARN:</b> Do any segments have colinear vectors? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Outline Correctness Checks>.html#com.google.fonts/check/outline_colinear_vectors">com.google.fonts/check/outline_colinear_vectors</a>)</summary><div>


* ⚠ **WARN** The following glyphs have colinear vectors:

	* N (U+004E): L<<768.0,649.0>--<643.0,1.0>> -> L<<643.0,1.0>--<638.0,-25.0>>

	* Nacute (U+0143): L<<768.0,649.0>--<643.0,1.0>> -> L<<643.0,1.0>--<638.0,-25.0>>

	* Ncaron (U+0147): L<<768.0,649.0>--<643.0,1.0>> -> L<<643.0,1.0>--<638.0,-25.0>>

	* Ntilde (U+00D1): L<<768.0,649.0>--<643.0,1.0>> -> L<<643.0,1.0>--<638.0,-25.0>>

	* thorn (U+00FE): L<<277.0,794.0>--<258.0,718.0>> -> L<<258.0,718.0>--<209.0,464.0>>

	* uni0145 (U+0145): L<<768.0,649.0>--<643.0,1.0>> -> L<<643.0,1.0>--<638.0,-25.0>>

	* uni1EF9 (U+1EF9): L<<491.0,450.0>--<213.0,1.0>> -> L<<213.0,1.0>--<79.0,-216.0>>

	* uni20A6 (U+20A6): L<<702.0,304.0>--<643.0,1.0>> -> L<<643.0,1.0>--<638.0,-25.0>>

	* uni2116 (U+2116): L<<848.0,649.0>--<723.0,1.0>> -> L<<723.0,1.0>--<718.0,-25.0>>

	* y (U+0079): L<<491.0,450.0>--<213.0,1.0>> -> L<<213.0,1.0>--<79.0,-216.0>>

	* yacute (U+00FD): L<<491.0,450.0>--<213.0,1.0>> -> L<<213.0,1.0>--<79.0,-216.0>>

	* ycircumflex (U+0177): L<<491.0,450.0>--<213.0,1.0>> -> L<<213.0,1.0>--<79.0,-216.0>>

	* ydieresis (U+00FF): L<<491.0,450.0>--<213.0,1.0>> -> L<<213.0,1.0>--<79.0,-216.0>>

	* ygrave (U+1EF3): L<<491.0,450.0>--<213.0,1.0>> -> L<<213.0,1.0>--<79.0,-216.0>> [code: found-colinear-vectors]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Shaping Checks>.html#com.google.fonts/check/soft_dotted">com.google.fonts/check/soft_dotted</a>)</summary><div>


* ⚠ **WARN** The dot of soft dotted characters used in orthographies _must_ disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌

The dot of soft dotted characters _should_ disappear in other cases, for example: į̆ į̇ į̈ į̊ į̋ į̒ į̧̀ į̧́ į̧̂ į̧̃ į̧̄ į̧̆ į̧̇ į̧̈ į̧̊ į̧̋ į̧̌ į̧̒ į̨̀ į̨́

Your font fully covers the following languages that require the soft-dotted feature: Lithuanian (Latn, 2,357,094 speakers), Dutch (Latn, 31,709,104 speakers). 

Your font does *not* cover the following languages that require the soft-dotted feature: Zapotec (Latn, 490,000 speakers), Ijo, Southeast (Latn, 2,471,000 speakers), Navajo (Latn, 166,319 speakers), Kom (Latn, 360,685 speakers), Lugbara (Latn, 2,200,000 speakers), Makaa (Latn, 221,000 speakers), Mfumte (Latn, 79,000 speakers), Southern Kisi (Latn, 360,000 speakers), Bete-Bendi (Latn, 100,000 speakers), Basaa (Latn, 332,940 speakers), Ma’di (Latn, 584,000 speakers), Igbo (Latn, 27,823,640 speakers), Ngbaka (Latn, 1,020,000 speakers), Ebira (Latn, 2,200,000 speakers), Dii (Latn, 71,000 speakers), Belarusian (Cyrl, 10,064,517 speakers), Aghem (Latn, 38,843 speakers), Dan (Latn, 1,099,244 speakers), Kpelle, Guinea (Latn, 622,000 speakers), Ukrainian (Cyrl, 29,273,587 speakers), South Central Banda (Latn, 244,000 speakers), Avokaya (Latn, 100,000 speakers), Cicipu (Latn, 44,000 speakers), Ejagham (Latn, 120,000 speakers), Nzakara (Latn, 50,000 speakers), Fur (Latn, 1,230,163 speakers), Nateni (Latn, 100,000 speakers), Mundani (Latn, 34,000 speakers), Koonzime (Latn, 40,000 speakers), Gulay (Latn, 250,478 speakers), Ekpeye (Latn, 226,000 speakers), Bafut (Latn, 158,146 speakers), Yala (Latn, 200,000 speakers), Mango (Latn, 77,000 speakers), Sar (Latn, 500,000 speakers). [code: soft-dotted]
</div></details><br></div></details><details><summary><b>[9] Wittgenstein-Black.ttf</b></summary><div><details><summary>⚠ <b>WARN:</b> Check for codepoints not covered by METADATA subsets. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/metadata/unreachable_subsetting">com.google.fonts/check/metadata/unreachable_subsetting</a>)</summary><div>


* ⚠ **WARN** The following codepoints supported by the font are not covered by
    any subsets defined in the font's metadata file, and will never
    be served. You can solve this by either manually adding additional
    subset declarations to METADATA.pb, or by editing the glyphset
    definitions.

 * U+02C7 CARON: try adding one of: tifinagh, canadian-aboriginal, yi
 * U+02D8 BREVE: try adding one of: canadian-aboriginal, yi
 * U+02D9 DOT ABOVE: try adding one of: canadian-aboriginal, yi
 * U+02DB OGONEK: try adding one of: canadian-aboriginal, yi
 * U+02DD DOUBLE ACUTE ACCENT: not included in any glyphset definition
 * U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: coptic, math, tifinagh, cherokee
 * U+0306 COMBINING BREVE: try adding one of: old-permic, tifinagh
 * U+0307 COMBINING DOT ABOVE: try adding one of: coptic, old-permic, tai-le, canadian-aboriginal, tifinagh, syriac, math, malayalam
 * U+030A COMBINING RING ABOVE: try adding syriac
 * U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee
 * U+030C COMBINING CARON: try adding one of: tai-le, cherokee
 * U+0312 COMBINING TURNED COMMA ABOVE: not included in any glyphset definition
 * U+0326 COMBINING COMMA BELOW: not included in any glyphset definition
 * U+0327 COMBINING CEDILLA: not included in any glyphset definition
 * U+0328 COMBINING OGONEK: not included in any glyphset definition
 * U+03C0 GREEK SMALL LETTER PI: try adding one of: math, greek, yi
 * U+0E3F THAI CURRENCY SYMBOL BAHT: try adding thai
 * U+1EBC LATIN CAPITAL LETTER E WITH TILDE: try adding vietnamese
 * U+1EBD LATIN SMALL LETTER E WITH TILDE: try adding vietnamese
 * U+2000 EN QUAD: not included in any glyphset definition
 * U+2001 EM QUAD: not included in any glyphset definition
 * U+2003 EM SPACE: try adding nushu
 * U+2004 THREE-PER-EM SPACE: not included in any glyphset definition
 * U+2005 FOUR-PER-EM SPACE: not included in any glyphset definition
 * U+2006 SIX-PER-EM SPACE: not included in any glyphset definition
 * U+2007 FIGURE SPACE: not included in any glyphset definition
 * U+2008 PUNCTUATION SPACE: not included in any glyphset definition
 * U+200A HAIR SPACE: not included in any glyphset definition
 * U+200C ZERO WIDTH NON-JOINER: try adding one of: avestan, telugu, dogra, balinese, lepcha, rejang, yi, tirhuta, bengali, kayah-li, tifinagh, khudawadi, buginese, meetei-mayek, oriya, batak, tai-viet, kaithi, mongolian, khmer, tagalog, tai-le, tamil, buhid, mahajani, pahawh-hmong, javanese, khojki, phags-pa, devanagari, brahmi, duployan, hanunoo, sundanese, saurashtra, malayalam, hanifi-rohingya, warang-citi, manichaean, siddham, sinhala, mandaic, kharoshthi, kannada, syriac, chakma, cham, takri, thaana, nko, modi, gujarati, myanmar, psalter-pahlavi, gurmukhi, sharada, hatran, tagbanwa, new-tai-lue, thai, newa, syloti-nagri, tibetan, grantha, tai-tham, gunjala-gondi, limbu, sogdian
 * U+200D ZERO WIDTH JOINER: try adding one of: emoji, avestan, telugu, dogra, balinese, lepcha, rejang, yi, tirhuta, bengali, kayah-li, tifinagh, khudawadi, buginese, meetei-mayek, oriya, batak, tai-viet, kaithi, mongolian, tagalog, tai-le, tamil, buhid, mahajani, pahawh-hmong, javanese, khojki, phags-pa, devanagari, brahmi, duployan, hanunoo, sundanese, saurashtra, malayalam, hanifi-rohingya, warang-citi, manichaean, siddham, sinhala, mandaic, kharoshthi, kannada, syriac, chakma, cham, takri, thaana, old-hungarian, nko, modi, gujarati, myanmar, psalter-pahlavi, gurmukhi, sharada, thai, tagbanwa, new-tai-lue, newa, syloti-nagri, tibetan, grantha, tai-tham, gunjala-gondi, limbu
 * U+200E LEFT-TO-RIGHT MARK: try adding one of: nko, thaana, syriac, phags-pa
 * U+200F RIGHT-TO-LEFT MARK: try adding one of: nko, thaana, syriac, phags-pa
 * U+2016 DOUBLE VERTICAL LINE: not included in any glyphset definition
 * U+2021 DOUBLE DAGGER: try adding adlam
 * U+202F NARROW NO-BREAK SPACE: try adding one of: mongolian, yi
 * U+2030 PER MILLE SIGN: try adding adlam
 * U+205F MEDIUM MATHEMATICAL SPACE: not included in any glyphset definition
 * U+2126 OHM SIGN: not included in any glyphset definition
 * U+212E ESTIMATED SYMBOL: not included in any glyphset definition
 * U+2153 VULGAR FRACTION ONE THIRD: not included in any glyphset definition
 * U+2154 VULGAR FRACTION TWO THIRDS: not included in any glyphset definition
 * U+2190 LEFTWARDS ARROW: try adding one of: math, symbols
 * U+2192 RIGHTWARDS ARROW: try adding one of: math, symbols
 * U+2194 LEFT RIGHT ARROW: try adding one of: emoji, math, symbols
 * U+2195 UP DOWN ARROW: try adding one of: emoji, math, symbols
 * U+2196 NORTH WEST ARROW: try adding one of: emoji, math, symbols
 * U+2197 NORTH EAST ARROW: try adding one of: emoji, math, symbols
 * U+2198 SOUTH EAST ARROW: try adding one of: emoji, math, symbols
 * U+2199 SOUTH WEST ARROW: try adding one of: emoji, math, symbols
 * U+2202 PARTIAL DIFFERENTIAL: try adding math
 * U+2205 EMPTY SET: try adding math
 * U+2206 INCREMENT: try adding math
 * U+220F N-ARY PRODUCT: try adding math
 * U+2211 N-ARY SUMMATION: try adding math
 * U+221A SQUARE ROOT: try adding math
 * U+221E INFINITY: try adding math
 * U+222B INTEGRAL: try adding math
 * U+2248 ALMOST EQUAL TO: try adding math
 * U+2260 NOT EQUAL TO: try adding math
 * U+2264 LESS-THAN OR EQUAL TO: try adding math
 * U+2265 GREATER-THAN OR EQUAL TO: try adding math
 * U+25A0 BLACK SQUARE: try adding symbols
 * U+25A1 WHITE SQUARE: try adding symbols
 * U+25AA BLACK SMALL SQUARE: try adding one of: emoji, symbols
 * U+25AB WHITE SMALL SQUARE: try adding one of: emoji, symbols
 * U+25B2 BLACK UP-POINTING TRIANGLE: try adding symbols
 * U+25B3 WHITE UP-POINTING TRIANGLE: try adding one of: math, symbols
 * U+25B4 BLACK UP-POINTING SMALL TRIANGLE: try adding symbols
 * U+25B5 WHITE UP-POINTING SMALL TRIANGLE: try adding symbols
 * U+25B6 BLACK RIGHT-POINTING TRIANGLE: try adding one of: emoji, symbols
 * U+25B7 WHITE RIGHT-POINTING TRIANGLE: try adding one of: math, symbols
 * U+25B8 BLACK RIGHT-POINTING SMALL TRIANGLE: try adding symbols
 * U+25B9 WHITE RIGHT-POINTING SMALL TRIANGLE: try adding symbols
 * U+25BC BLACK DOWN-POINTING TRIANGLE: try adding symbols
 * U+25BD WHITE DOWN-POINTING TRIANGLE: try adding one of: math, symbols
 * U+25BE BLACK DOWN-POINTING SMALL TRIANGLE: try adding symbols
 * U+25BF WHITE DOWN-POINTING SMALL TRIANGLE: try adding symbols
 * U+25C0 BLACK LEFT-POINTING TRIANGLE: try adding one of: emoji, symbols
 * U+25C1 WHITE LEFT-POINTING TRIANGLE: try adding one of: math, symbols
 * U+25C2 BLACK LEFT-POINTING SMALL TRIANGLE: try adding symbols
 * U+25C3 WHITE LEFT-POINTING SMALL TRIANGLE: try adding symbols
 * U+25C6 BLACK DIAMOND: try adding symbols
 * U+25C7 WHITE DIAMOND: try adding symbols
 * U+25CA LOZENGE: try adding one of: math, symbols
 * U+25CB WHITE CIRCLE: try adding symbols
 * U+25CC DOTTED CIRCLE: try adding one of: balinese, adlam, soyombo, oriya, caucasian-albanian, khmer, tagalog, mahajani, brahmi, sundanese, malayalam, hanifi-rohingya, siddham, zanabazar-square, syriac, mende-kikakui, cham, takri, lao, modi, thai, newa, wancho, grantha, kayah-li, bassa-vah, lepcha, yi, tirhuta, tifinagh, buginese, batak, mongolian, coptic, sinhala, thaana, old-permic, gujarati, gurmukhi, sharada, tagbanwa, syloti-nagri, tibetan, telugu, sogdian, rejang, symbols, khudawadi, meetei-mayek, tai-le, osage, buhid, pahawh-hmong, khojki, masaram-gondi, phags-pa, devanagari, hanunoo, bhaiksuki, mandaic, kannada, chakma, miao, nko, myanmar, math, elbasan, dogra, bengali, music, tai-viet, kaithi, tamil, javanese, duployan, ahom, hebrew, manichaean, kharoshthi, psalter-pahlavi, new-tai-lue, marchen, gunjala-gondi, limbu
 * U+25CF BLACK CIRCLE: try adding symbols
 * U+25E6 WHITE BULLET: try adding symbols
 * U+27E8 MATHEMATICAL LEFT ANGLE BRACKET: try adding math
 * U+27E9 MATHEMATICAL RIGHT ANGLE BRACKET: try adding math

Or you can add the above codepoints to one of the subsets supported by the font: `cyrillic-ext`, `latin`, `latin-ext` [code: unreachable-subsetting]
</div></details><details><summary>⚠ <b>WARN:</b> Are there caret positions declared for every ligature? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/ligature_carets">com.google.fonts/check/ligature_carets</a>)</summary><div>


* ⚠ **WARN** This font lacks caret position values for ligature glyphs on its GDEF table. [code: lacks-caret-pos]
</div></details><details><summary>⚠ <b>WARN:</b> Is there kerning info for non-ligated sequences? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/kerning_for_non_ligated_sequences">com.google.fonts/check/kerning_for_non_ligated_sequences</a>)</summary><div>


* ⚠ **WARN** GPOS table lacks kerning info for the following non-ligated sequences:

	- f + i

	- i + l [code: lacks-kern-info]
</div></details><details><summary>⚠ <b>WARN:</b> Check font follows the Google Fonts vertical metric schema (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/vertical_metrics">com.google.fonts/check/vertical_metrics</a>)</summary><div>


* ⚠ **WARN** We recommend the absolute sum of the hhea metrics should be between 1.2-1.5x of the font's upm. This font has 1.65x (1650) [code: bad-hhea-range]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure fonts have ScriptLangTags declared on the 'meta' table. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/meta/script_lang_tags">com.google.fonts/check/meta/script_lang_tags</a>)</summary><div>


* ⚠ **WARN** This font file does not have a 'meta' table. [code: lacks-meta-table]
</div></details><details><summary>⚠ <b>WARN:</b> Check font contains no unreachable glyphs (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/unreachable_glyphs">com.google.fonts/check/unreachable_glyphs</a>)</summary><div>


* ⚠ **WARN** The following glyphs could not be reached by codepoint or substitution rules:

	- eight.inferior

	- eight.superior

	- five.inferior

	- five.superior

	- four.inferior

	- four.superior

	- nine.inferior

	- nine.superior

	- one.inferior

	- one.superior

	- seven.inferior

	- seven.superior

	- six.inferior

	- six.superior

	- three.inferior

	- three.superior

	- two.inferior

	- two.superior

	- uni004A0301

	- uni006A0301

	- zero.inferior

	- zero.superior
 [code: unreachable-glyphs]
</div></details><details><summary>⚠ <b>WARN:</b> Check if each glyph has the recommended amount of contours. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/contour_count">com.google.fonts/check/contour_count</a>)</summary><div>


* ⚠ **WARN** This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.

The following glyphs do not have the recommended number of contours:

	- Glyph name: aogonek	Contours detected: 3	Expected: 2

	- Glyph name: eogonek	Contours detected: 3	Expected: 2

	- Glyph name: Uogonek	Contours detected: 2	Expected: 1

	- Glyph name: uogonek	Contours detected: 2	Expected: 1

	- Glyph name: uni20A6	Contours detected: 2	Expected: 1, 3 or 5

	- Glyph name: uni20BF	Contours detected: 7	Expected: 3

	- Glyph name: Uogonek	Contours detected: 2	Expected: 1

	- Glyph name: aogonek	Contours detected: 3	Expected: 2

	- Glyph name: eogonek	Contours detected: 3	Expected: 2

	- Glyph name: uni20A6	Contours detected: 2	Expected: 1, 3 or 5

	- Glyph name: uni20BF	Contours detected: 7	Expected: 3

	- Glyph name: uogonek	Contours detected: 2	Expected: 1
 [code: contour-count]
</div></details><details><summary>⚠ <b>WARN:</b> Do any segments have colinear vectors? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Outline Correctness Checks>.html#com.google.fonts/check/outline_colinear_vectors">com.google.fonts/check/outline_colinear_vectors</a>)</summary><div>


* ⚠ **WARN** The following glyphs have colinear vectors:

	* b (U+0062): L<<214.0,784.0>--<212.0,718.0>> -> L<<212.0,718.0>--<212.0,498.0>>

	* d (U+0064): L<<548.0,787.0>--<546.0,733.0>> -> L<<546.0,733.0>--<546.0,72.0>>

	* dcaron (U+010F): L<<548.0,787.0>--<546.0,733.0>> -> L<<546.0,733.0>--<546.0,72.0>>

	* dcroat (U+0111): L<<548.0,787.0>--<546.0,733.0>> -> L<<546.0,733.0>--<546.0,639.0>>

	* dong (U+20AB): L<<536.0,823.0>--<534.0,777.0>> -> L<<534.0,777.0>--<534.0,698.0>>

	* dotlessi (U+0131): L<<274.0,493.0>--<272.0,427.0>> -> L<<272.0,427.0>--<272.0,50.0>>

	* h (U+0068): L<<239.0,787.0>--<237.0,718.0>> -> L<<237.0,718.0>--<237.0,478.0>>

	* hbar (U+0127): L<<239.0,787.0>--<237.0,718.0>> -> L<<237.0,718.0>--<237.0,639.0>>

	* hcircumflex (U+0125): L<<239.0,787.0>--<237.0,718.0>> -> L<<237.0,718.0>--<237.0,478.0>>

	* i (U+0069): L<<254.0,493.0>--<252.0,427.0>> -> L<<252.0,427.0>--<252.0,50.0>>

	* iacute (U+00ED): L<<274.0,493.0>--<272.0,427.0>> -> L<<272.0,427.0>--<272.0,50.0>>

	* icircumflex (U+00EE): L<<274.0,493.0>--<272.0,427.0>> -> L<<272.0,427.0>--<272.0,50.0>>

	* idieresis (U+00EF): L<<274.0,493.0>--<272.0,427.0>> -> L<<272.0,427.0>--<272.0,50.0>>

	* igrave (U+00EC): L<<274.0,493.0>--<272.0,427.0>> -> L<<272.0,427.0>--<272.0,50.0>>

	* ij (U+0133): L<<254.0,493.0>--<252.0,427.0>> -> L<<252.0,427.0>--<252.0,50.0>>

	* ij (U+0133): L<<566.0,493.0>--<564.0,428.0>> -> L<<564.0,428.0>--<564.0,53.0>>

	* imacron (U+012B): L<<274.0,493.0>--<272.0,427.0>> -> L<<272.0,427.0>--<272.0,50.0>>

	* iogonek (U+012F): L<<274.0,493.0>--<272.0,427.0>> -> L<<272.0,427.0>--<272.0,50.0>>

	* itilde (U+0129): L<<274.0,493.0>--<272.0,427.0>> -> L<<272.0,427.0>--<272.0,50.0>>

	* j (U+006A): L<<248.0,493.0>--<246.0,428.0>> -> L<<246.0,428.0>--<246.0,53.0>>

	* jcircumflex (U+0135): L<<250.0,493.0>--<248.0,428.0>> -> L<<248.0,428.0>--<248.0,53.0>>

	* k (U+006B): L<<229.0,787.0>--<227.0,718.0>> -> L<<227.0,718.0>--<227.0,293.0>>

	* l (U+006C): L<<239.0,787.0>--<237.0,718.0>> -> L<<237.0,718.0>--<237.0,50.0>>

	* lacute (U+013A): L<<239.0,787.0>--<237.0,718.0>> -> L<<237.0,718.0>--<237.0,50.0>>

	* lcaron (U+013E): L<<239.0,787.0>--<237.0,718.0>> -> L<<237.0,718.0>--<237.0,50.0>>

	* lslash (U+0142): L<<239.0,787.0>--<237.0,718.0>> -> L<<237.0,718.0>--<237.0,472.0>>

	* thorn (U+00FE): L<<236.0,784.0>--<234.0,705.0>> -> L<<234.0,705.0>--<234.0,506.0>>

	* uni0137 (U+0137): L<<229.0,787.0>--<227.0,718.0>> -> L<<227.0,718.0>--<227.0,293.0>>

	* uni013C (U+013C): L<<239.0,787.0>--<237.0,718.0>> -> L<<237.0,718.0>--<237.0,50.0>>

	* uni0237 (U+0237): L<<250.0,493.0>--<248.0,428.0>> -> L<<248.0,428.0>--<248.0,53.0>>

	* uni1EF9 (U+1EF9): L<<476.0,436.0>--<265.0,0.0>> -> L<<265.0,0.0>--<174.0,-216.0>>

	* y (U+0079): L<<476.0,436.0>--<265.0,0.0>> -> L<<265.0,0.0>--<174.0,-216.0>>

	* yacute (U+00FD): L<<476.0,436.0>--<265.0,0.0>> -> L<<265.0,0.0>--<174.0,-216.0>>

	* ycircumflex (U+0177): L<<476.0,436.0>--<265.0,0.0>> -> L<<265.0,0.0>--<174.0,-216.0>>

	* ydieresis (U+00FF): L<<476.0,436.0>--<265.0,0.0>> -> L<<265.0,0.0>--<174.0,-216.0>>

	* ygrave (U+1EF3): L<<476.0,436.0>--<265.0,0.0>> -> L<<265.0,0.0>--<174.0,-216.0>> [code: found-colinear-vectors]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Shaping Checks>.html#com.google.fonts/check/soft_dotted">com.google.fonts/check/soft_dotted</a>)</summary><div>


* ⚠ **WARN** The dot of soft dotted characters used in orthographies _must_ disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌

The dot of soft dotted characters _should_ disappear in other cases, for example: į̆ į̇ į̈ į̊ į̋ į̒ į̧̀ į̧́ į̧̂ į̧̃ į̧̄ į̧̆ į̧̇ į̧̈ į̧̊ į̧̋ į̧̌ į̧̒ į̨̀ į̨́

Your font fully covers the following languages that require the soft-dotted feature: Lithuanian (Latn, 2,357,094 speakers), Dutch (Latn, 31,709,104 speakers). 

Your font does *not* cover the following languages that require the soft-dotted feature: Zapotec (Latn, 490,000 speakers), Ijo, Southeast (Latn, 2,471,000 speakers), Navajo (Latn, 166,319 speakers), Kom (Latn, 360,685 speakers), Lugbara (Latn, 2,200,000 speakers), Makaa (Latn, 221,000 speakers), Mfumte (Latn, 79,000 speakers), Southern Kisi (Latn, 360,000 speakers), Bete-Bendi (Latn, 100,000 speakers), Basaa (Latn, 332,940 speakers), Ma’di (Latn, 584,000 speakers), Igbo (Latn, 27,823,640 speakers), Ngbaka (Latn, 1,020,000 speakers), Ebira (Latn, 2,200,000 speakers), Dii (Latn, 71,000 speakers), Belarusian (Cyrl, 10,064,517 speakers), Aghem (Latn, 38,843 speakers), Dan (Latn, 1,099,244 speakers), Kpelle, Guinea (Latn, 622,000 speakers), Ukrainian (Cyrl, 29,273,587 speakers), South Central Banda (Latn, 244,000 speakers), Avokaya (Latn, 100,000 speakers), Cicipu (Latn, 44,000 speakers), Ejagham (Latn, 120,000 speakers), Nzakara (Latn, 50,000 speakers), Fur (Latn, 1,230,163 speakers), Nateni (Latn, 100,000 speakers), Mundani (Latn, 34,000 speakers), Koonzime (Latn, 40,000 speakers), Gulay (Latn, 250,478 speakers), Ekpeye (Latn, 226,000 speakers), Bafut (Latn, 158,146 speakers), Yala (Latn, 200,000 speakers), Mango (Latn, 77,000 speakers), Sar (Latn, 500,000 speakers). [code: soft-dotted]
</div></details><br></div></details><details><summary><b>[10] Wittgenstein-SemiBold.ttf</b></summary><div><details><summary>⚠ <b>WARN:</b> Check for codepoints not covered by METADATA subsets. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/metadata/unreachable_subsetting">com.google.fonts/check/metadata/unreachable_subsetting</a>)</summary><div>


* ⚠ **WARN** The following codepoints supported by the font are not covered by
    any subsets defined in the font's metadata file, and will never
    be served. You can solve this by either manually adding additional
    subset declarations to METADATA.pb, or by editing the glyphset
    definitions.

 * U+02C7 CARON: try adding one of: tifinagh, canadian-aboriginal, yi
 * U+02D8 BREVE: try adding one of: canadian-aboriginal, yi
 * U+02D9 DOT ABOVE: try adding one of: canadian-aboriginal, yi
 * U+02DB OGONEK: try adding one of: canadian-aboriginal, yi
 * U+02DD DOUBLE ACUTE ACCENT: not included in any glyphset definition
 * U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: coptic, math, tifinagh, cherokee
 * U+0306 COMBINING BREVE: try adding one of: old-permic, tifinagh
 * U+0307 COMBINING DOT ABOVE: try adding one of: coptic, old-permic, tai-le, canadian-aboriginal, tifinagh, syriac, math, malayalam
 * U+030A COMBINING RING ABOVE: try adding syriac
 * U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee
 * U+030C COMBINING CARON: try adding one of: tai-le, cherokee
 * U+0312 COMBINING TURNED COMMA ABOVE: not included in any glyphset definition
 * U+0326 COMBINING COMMA BELOW: not included in any glyphset definition
 * U+0327 COMBINING CEDILLA: not included in any glyphset definition
 * U+0328 COMBINING OGONEK: not included in any glyphset definition
 * U+03C0 GREEK SMALL LETTER PI: try adding one of: math, greek, yi
 * U+0E3F THAI CURRENCY SYMBOL BAHT: try adding thai
 * U+1EBC LATIN CAPITAL LETTER E WITH TILDE: try adding vietnamese
 * U+1EBD LATIN SMALL LETTER E WITH TILDE: try adding vietnamese
 * U+2000 EN QUAD: not included in any glyphset definition
 * U+2001 EM QUAD: not included in any glyphset definition
 * U+2003 EM SPACE: try adding nushu
 * U+2004 THREE-PER-EM SPACE: not included in any glyphset definition
 * U+2005 FOUR-PER-EM SPACE: not included in any glyphset definition
 * U+2006 SIX-PER-EM SPACE: not included in any glyphset definition
 * U+2007 FIGURE SPACE: not included in any glyphset definition
 * U+2008 PUNCTUATION SPACE: not included in any glyphset definition
 * U+200A HAIR SPACE: not included in any glyphset definition
 * U+200C ZERO WIDTH NON-JOINER: try adding one of: avestan, telugu, dogra, balinese, lepcha, rejang, yi, tirhuta, bengali, kayah-li, tifinagh, khudawadi, buginese, meetei-mayek, oriya, batak, tai-viet, kaithi, mongolian, khmer, tagalog, tai-le, tamil, buhid, mahajani, pahawh-hmong, javanese, khojki, phags-pa, devanagari, brahmi, duployan, hanunoo, sundanese, saurashtra, malayalam, hanifi-rohingya, warang-citi, manichaean, siddham, sinhala, mandaic, kharoshthi, kannada, syriac, chakma, cham, takri, thaana, nko, modi, gujarati, myanmar, psalter-pahlavi, gurmukhi, sharada, hatran, tagbanwa, new-tai-lue, thai, newa, syloti-nagri, tibetan, grantha, tai-tham, gunjala-gondi, limbu, sogdian
 * U+200D ZERO WIDTH JOINER: try adding one of: emoji, avestan, telugu, dogra, balinese, lepcha, rejang, yi, tirhuta, bengali, kayah-li, tifinagh, khudawadi, buginese, meetei-mayek, oriya, batak, tai-viet, kaithi, mongolian, tagalog, tai-le, tamil, buhid, mahajani, pahawh-hmong, javanese, khojki, phags-pa, devanagari, brahmi, duployan, hanunoo, sundanese, saurashtra, malayalam, hanifi-rohingya, warang-citi, manichaean, siddham, sinhala, mandaic, kharoshthi, kannada, syriac, chakma, cham, takri, thaana, old-hungarian, nko, modi, gujarati, myanmar, psalter-pahlavi, gurmukhi, sharada, thai, tagbanwa, new-tai-lue, newa, syloti-nagri, tibetan, grantha, tai-tham, gunjala-gondi, limbu
 * U+200E LEFT-TO-RIGHT MARK: try adding one of: nko, thaana, syriac, phags-pa
 * U+200F RIGHT-TO-LEFT MARK: try adding one of: nko, thaana, syriac, phags-pa
 * U+2016 DOUBLE VERTICAL LINE: not included in any glyphset definition
 * U+2021 DOUBLE DAGGER: try adding adlam
 * U+202F NARROW NO-BREAK SPACE: try adding one of: mongolian, yi
 * U+2030 PER MILLE SIGN: try adding adlam
 * U+205F MEDIUM MATHEMATICAL SPACE: not included in any glyphset definition
 * U+2126 OHM SIGN: not included in any glyphset definition
 * U+212E ESTIMATED SYMBOL: not included in any glyphset definition
 * U+2153 VULGAR FRACTION ONE THIRD: not included in any glyphset definition
 * U+2154 VULGAR FRACTION TWO THIRDS: not included in any glyphset definition
 * U+2190 LEFTWARDS ARROW: try adding one of: math, symbols
 * U+2192 RIGHTWARDS ARROW: try adding one of: math, symbols
 * U+2194 LEFT RIGHT ARROW: try adding one of: emoji, math, symbols
 * U+2195 UP DOWN ARROW: try adding one of: emoji, math, symbols
 * U+2196 NORTH WEST ARROW: try adding one of: emoji, math, symbols
 * U+2197 NORTH EAST ARROW: try adding one of: emoji, math, symbols
 * U+2198 SOUTH EAST ARROW: try adding one of: emoji, math, symbols
 * U+2199 SOUTH WEST ARROW: try adding one of: emoji, math, symbols
 * U+2202 PARTIAL DIFFERENTIAL: try adding math
 * U+2205 EMPTY SET: try adding math
 * U+2206 INCREMENT: try adding math
 * U+220F N-ARY PRODUCT: try adding math
 * U+2211 N-ARY SUMMATION: try adding math
 * U+221A SQUARE ROOT: try adding math
 * U+221E INFINITY: try adding math
 * U+222B INTEGRAL: try adding math
 * U+2248 ALMOST EQUAL TO: try adding math
 * U+2260 NOT EQUAL TO: try adding math
 * U+2264 LESS-THAN OR EQUAL TO: try adding math
 * U+2265 GREATER-THAN OR EQUAL TO: try adding math
 * U+25A0 BLACK SQUARE: try adding symbols
 * U+25A1 WHITE SQUARE: try adding symbols
 * U+25AA BLACK SMALL SQUARE: try adding one of: emoji, symbols
 * U+25AB WHITE SMALL SQUARE: try adding one of: emoji, symbols
 * U+25B2 BLACK UP-POINTING TRIANGLE: try adding symbols
 * U+25B3 WHITE UP-POINTING TRIANGLE: try adding one of: math, symbols
 * U+25B4 BLACK UP-POINTING SMALL TRIANGLE: try adding symbols
 * U+25B5 WHITE UP-POINTING SMALL TRIANGLE: try adding symbols
 * U+25B6 BLACK RIGHT-POINTING TRIANGLE: try adding one of: emoji, symbols
 * U+25B7 WHITE RIGHT-POINTING TRIANGLE: try adding one of: math, symbols
 * U+25B8 BLACK RIGHT-POINTING SMALL TRIANGLE: try adding symbols
 * U+25B9 WHITE RIGHT-POINTING SMALL TRIANGLE: try adding symbols
 * U+25BC BLACK DOWN-POINTING TRIANGLE: try adding symbols
 * U+25BD WHITE DOWN-POINTING TRIANGLE: try adding one of: math, symbols
 * U+25BE BLACK DOWN-POINTING SMALL TRIANGLE: try adding symbols
 * U+25BF WHITE DOWN-POINTING SMALL TRIANGLE: try adding symbols
 * U+25C0 BLACK LEFT-POINTING TRIANGLE: try adding one of: emoji, symbols
 * U+25C1 WHITE LEFT-POINTING TRIANGLE: try adding one of: math, symbols
 * U+25C2 BLACK LEFT-POINTING SMALL TRIANGLE: try adding symbols
 * U+25C3 WHITE LEFT-POINTING SMALL TRIANGLE: try adding symbols
 * U+25C6 BLACK DIAMOND: try adding symbols
 * U+25C7 WHITE DIAMOND: try adding symbols
 * U+25CA LOZENGE: try adding one of: math, symbols
 * U+25CB WHITE CIRCLE: try adding symbols
 * U+25CC DOTTED CIRCLE: try adding one of: balinese, adlam, soyombo, oriya, caucasian-albanian, khmer, tagalog, mahajani, brahmi, sundanese, malayalam, hanifi-rohingya, siddham, zanabazar-square, syriac, mende-kikakui, cham, takri, lao, modi, thai, newa, wancho, grantha, kayah-li, bassa-vah, lepcha, yi, tirhuta, tifinagh, buginese, batak, mongolian, coptic, sinhala, thaana, old-permic, gujarati, gurmukhi, sharada, tagbanwa, syloti-nagri, tibetan, telugu, sogdian, rejang, symbols, khudawadi, meetei-mayek, tai-le, osage, buhid, pahawh-hmong, khojki, masaram-gondi, phags-pa, devanagari, hanunoo, bhaiksuki, mandaic, kannada, chakma, miao, nko, myanmar, math, elbasan, dogra, bengali, music, tai-viet, kaithi, tamil, javanese, duployan, ahom, hebrew, manichaean, kharoshthi, psalter-pahlavi, new-tai-lue, marchen, gunjala-gondi, limbu
 * U+25CF BLACK CIRCLE: try adding symbols
 * U+25E6 WHITE BULLET: try adding symbols
 * U+27E8 MATHEMATICAL LEFT ANGLE BRACKET: try adding math
 * U+27E9 MATHEMATICAL RIGHT ANGLE BRACKET: try adding math

Or you can add the above codepoints to one of the subsets supported by the font: `cyrillic-ext`, `latin`, `latin-ext` [code: unreachable-subsetting]
</div></details><details><summary>⚠ <b>WARN:</b> Are there caret positions declared for every ligature? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/ligature_carets">com.google.fonts/check/ligature_carets</a>)</summary><div>


* ⚠ **WARN** This font lacks caret position values for ligature glyphs on its GDEF table. [code: lacks-caret-pos]
</div></details><details><summary>⚠ <b>WARN:</b> Is there kerning info for non-ligated sequences? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/kerning_for_non_ligated_sequences">com.google.fonts/check/kerning_for_non_ligated_sequences</a>)</summary><div>


* ⚠ **WARN** GPOS table lacks kerning info for the following non-ligated sequences:

	- f + i

	- i + l [code: lacks-kern-info]
</div></details><details><summary>⚠ <b>WARN:</b> Check font follows the Google Fonts vertical metric schema (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/vertical_metrics">com.google.fonts/check/vertical_metrics</a>)</summary><div>


* ⚠ **WARN** We recommend the absolute sum of the hhea metrics should be between 1.2-1.5x of the font's upm. This font has 1.65x (1650) [code: bad-hhea-range]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure fonts have ScriptLangTags declared on the 'meta' table. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/meta/script_lang_tags">com.google.fonts/check/meta/script_lang_tags</a>)</summary><div>


* ⚠ **WARN** This font file does not have a 'meta' table. [code: lacks-meta-table]
</div></details><details><summary>⚠ <b>WARN:</b> Check font contains no unreachable glyphs (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/unreachable_glyphs">com.google.fonts/check/unreachable_glyphs</a>)</summary><div>


* ⚠ **WARN** The following glyphs could not be reached by codepoint or substitution rules:

	- eight.inferior

	- eight.superior

	- five.inferior

	- five.superior

	- four.inferior

	- four.superior

	- nine.inferior

	- nine.superior

	- one.inferior

	- one.superior

	- seven.inferior

	- seven.superior

	- six.inferior

	- six.superior

	- three.inferior

	- three.superior

	- two.inferior

	- two.superior

	- uni004A0301

	- uni006A0301

	- zero.inferior

	- zero.superior
 [code: unreachable-glyphs]
</div></details><details><summary>⚠ <b>WARN:</b> Check if each glyph has the recommended amount of contours. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/contour_count">com.google.fonts/check/contour_count</a>)</summary><div>


* ⚠ **WARN** This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.

The following glyphs do not have the recommended number of contours:

	- Glyph name: aogonek	Contours detected: 3	Expected: 2

	- Glyph name: eogonek	Contours detected: 3	Expected: 2

	- Glyph name: Uogonek	Contours detected: 2	Expected: 1

	- Glyph name: uogonek	Contours detected: 2	Expected: 1

	- Glyph name: uni20BF	Contours detected: 7	Expected: 3

	- Glyph name: Uogonek	Contours detected: 2	Expected: 1

	- Glyph name: aogonek	Contours detected: 3	Expected: 2

	- Glyph name: eogonek	Contours detected: 3	Expected: 2

	- Glyph name: uni20BF	Contours detected: 7	Expected: 3

	- Glyph name: uogonek	Contours detected: 2	Expected: 1
 [code: contour-count]
</div></details><details><summary>⚠ <b>WARN:</b> Do any segments have colinear vectors? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Outline Correctness Checks>.html#com.google.fonts/check/outline_colinear_vectors">com.google.fonts/check/outline_colinear_vectors</a>)</summary><div>


* ⚠ **WARN** The following glyphs have colinear vectors:

	* b (U+0062): L<<179.0,790.0>--<177.0,718.0>> -> L<<177.0,718.0>--<177.0,478.0>>

	* d (U+0064): L<<509.0,801.0>--<505.0,734.0>> -> L<<505.0,734.0>--<505.0,62.0>>

	* dcaron (U+010F): L<<509.0,801.0>--<505.0,734.0>> -> L<<505.0,734.0>--<505.0,62.0>>

	* dcroat (U+0111): L<<509.0,801.0>--<505.0,734.0>> -> L<<505.0,734.0>--<505.0,639.0>>

	* dong (U+20AB): L<<490.0,835.0>--<487.0,778.0>> -> L<<487.0,778.0>--<487.0,698.0>>

	* dotlessi (U+0131): L<<242.0,503.0>--<240.0,431.0>> -> L<<240.0,431.0>--<240.0,51.0>>

	* h (U+0068): L<<213.0,791.0>--<211.0,718.0>> -> L<<211.0,718.0>--<211.0,459.0>>

	* hbar (U+0127): L<<213.0,791.0>--<211.0,718.0>> -> L<<211.0,718.0>--<211.0,639.0>>

	* hcircumflex (U+0125): L<<213.0,791.0>--<211.0,718.0>> -> L<<211.0,718.0>--<211.0,459.0>>

	* i (U+0069): L<<234.0,503.0>--<232.0,431.0>> -> L<<232.0,431.0>--<232.0,51.0>>

	* iacute (U+00ED): L<<242.0,503.0>--<240.0,431.0>> -> L<<240.0,431.0>--<240.0,51.0>>

	* icircumflex (U+00EE): L<<242.0,503.0>--<240.0,431.0>> -> L<<240.0,431.0>--<240.0,51.0>>

	* idieresis (U+00EF): L<<242.0,503.0>--<240.0,431.0>> -> L<<240.0,431.0>--<240.0,51.0>>

	* igrave (U+00EC): L<<242.0,503.0>--<240.0,431.0>> -> L<<240.0,431.0>--<240.0,51.0>>

	* ij (U+0133): L<<234.0,503.0>--<232.0,431.0>> -> L<<232.0,431.0>--<232.0,51.0>>

	* ij (U+0133): L<<511.0,503.0>--<509.0,432.0>> -> L<<509.0,432.0>--<509.0,51.0>>

	* imacron (U+012B): L<<242.0,503.0>--<240.0,431.0>> -> L<<240.0,431.0>--<240.0,51.0>>

	* iogonek (U+012F): L<<242.0,503.0>--<240.0,431.0>> -> L<<240.0,431.0>--<240.0,51.0>>

	* itilde (U+0129): L<<242.0,503.0>--<240.0,431.0>> -> L<<240.0,431.0>--<240.0,51.0>>

	* j (U+006A): L<<229.0,503.0>--<227.0,432.0>> -> L<<227.0,432.0>--<227.0,51.0>>

	* jcircumflex (U+0135): L<<230.0,503.0>--<228.0,432.0>> -> L<<228.0,432.0>--<228.0,51.0>>

	* k (U+006B): L<<215.0,791.0>--<213.0,718.0>> -> L<<213.0,718.0>--<213.0,270.0>>

	* l (U+006C): L<<222.0,791.0>--<220.0,718.0>> -> L<<220.0,718.0>--<220.0,50.0>>

	* lacute (U+013A): L<<222.0,791.0>--<220.0,718.0>> -> L<<220.0,718.0>--<220.0,50.0>>

	* lcaron (U+013E): L<<222.0,791.0>--<220.0,718.0>> -> L<<220.0,718.0>--<220.0,50.0>>

	* lslash (U+0142): L<<228.0,791.0>--<226.0,718.0>> -> L<<226.0,718.0>--<226.0,461.0>>

	* thorn (U+00FE): L<<203.0,790.0>--<200.0,713.0>> -> L<<200.0,713.0>--<200.0,481.0>>

	* uni0137 (U+0137): L<<215.0,791.0>--<213.0,718.0>> -> L<<213.0,718.0>--<213.0,270.0>>

	* uni013C (U+013C): L<<222.0,791.0>--<220.0,718.0>> -> L<<220.0,718.0>--<220.0,50.0>>

	* uni0237 (U+0237): L<<230.0,503.0>--<228.0,432.0>> -> L<<228.0,432.0>--<228.0,51.0>>

	* uni1EF9 (U+1EF9): L<<473.0,445.0>--<274.0,0.0>> -> L<<274.0,0.0>--<183.0,-216.0>>

	* y (U+0079): L<<473.0,445.0>--<274.0,0.0>> -> L<<274.0,0.0>--<183.0,-216.0>>

	* yacute (U+00FD): L<<473.0,445.0>--<274.0,0.0>> -> L<<274.0,0.0>--<183.0,-216.0>>

	* ycircumflex (U+0177): L<<473.0,445.0>--<274.0,0.0>> -> L<<274.0,0.0>--<183.0,-216.0>>

	* ydieresis (U+00FF): L<<473.0,445.0>--<274.0,0.0>> -> L<<274.0,0.0>--<183.0,-216.0>>

	* ygrave (U+1EF3): L<<473.0,445.0>--<274.0,0.0>> -> L<<274.0,0.0>--<183.0,-216.0>> [code: found-colinear-vectors]
</div></details><details><summary>⚠ <b>WARN:</b> Do outlines contain any semi-vertical or semi-horizontal lines? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Outline Correctness Checks>.html#com.google.fonts/check/outline_semi_vertical">com.google.fonts/check/outline_semi_vertical</a>)</summary><div>


* ⚠ **WARN** The following glyphs have semi-vertical/semi-horizontal lines:

	* asterisk (U+002A): L<<191.0,482.0>--<190.0,598.0>>

	* asterisk (U+002A): L<<239.0,599.0>--<240.0,482.0>> [code: found-semi-vertical]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Shaping Checks>.html#com.google.fonts/check/soft_dotted">com.google.fonts/check/soft_dotted</a>)</summary><div>


* ⚠ **WARN** The dot of soft dotted characters used in orthographies _must_ disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌

The dot of soft dotted characters _should_ disappear in other cases, for example: į̆ į̇ į̈ į̊ į̋ į̒ į̧̀ į̧́ į̧̂ į̧̃ į̧̄ į̧̆ į̧̇ į̧̈ į̧̊ į̧̋ į̧̌ į̧̒ į̨̀ į̨́

Your font fully covers the following languages that require the soft-dotted feature: Lithuanian (Latn, 2,357,094 speakers), Dutch (Latn, 31,709,104 speakers). 

Your font does *not* cover the following languages that require the soft-dotted feature: Zapotec (Latn, 490,000 speakers), Ijo, Southeast (Latn, 2,471,000 speakers), Navajo (Latn, 166,319 speakers), Kom (Latn, 360,685 speakers), Lugbara (Latn, 2,200,000 speakers), Makaa (Latn, 221,000 speakers), Mfumte (Latn, 79,000 speakers), Southern Kisi (Latn, 360,000 speakers), Bete-Bendi (Latn, 100,000 speakers), Basaa (Latn, 332,940 speakers), Ma’di (Latn, 584,000 speakers), Igbo (Latn, 27,823,640 speakers), Ngbaka (Latn, 1,020,000 speakers), Ebira (Latn, 2,200,000 speakers), Dii (Latn, 71,000 speakers), Belarusian (Cyrl, 10,064,517 speakers), Aghem (Latn, 38,843 speakers), Dan (Latn, 1,099,244 speakers), Kpelle, Guinea (Latn, 622,000 speakers), Ukrainian (Cyrl, 29,273,587 speakers), South Central Banda (Latn, 244,000 speakers), Avokaya (Latn, 100,000 speakers), Cicipu (Latn, 44,000 speakers), Ejagham (Latn, 120,000 speakers), Nzakara (Latn, 50,000 speakers), Fur (Latn, 1,230,163 speakers), Nateni (Latn, 100,000 speakers), Mundani (Latn, 34,000 speakers), Koonzime (Latn, 40,000 speakers), Gulay (Latn, 250,478 speakers), Ekpeye (Latn, 226,000 speakers), Bafut (Latn, 158,146 speakers), Yala (Latn, 200,000 speakers), Mango (Latn, 77,000 speakers), Sar (Latn, 500,000 speakers). [code: soft-dotted]
</div></details><br></div></details><details><summary><b>[9] Wittgenstein-Regular.ttf</b></summary><div><details><summary>⚠ <b>WARN:</b> Check for codepoints not covered by METADATA subsets. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/metadata/unreachable_subsetting">com.google.fonts/check/metadata/unreachable_subsetting</a>)</summary><div>


* ⚠ **WARN** The following codepoints supported by the font are not covered by
    any subsets defined in the font's metadata file, and will never
    be served. You can solve this by either manually adding additional
    subset declarations to METADATA.pb, or by editing the glyphset
    definitions.

 * U+02C7 CARON: try adding one of: tifinagh, canadian-aboriginal, yi
 * U+02D8 BREVE: try adding one of: canadian-aboriginal, yi
 * U+02D9 DOT ABOVE: try adding one of: canadian-aboriginal, yi
 * U+02DB OGONEK: try adding one of: canadian-aboriginal, yi
 * U+02DD DOUBLE ACUTE ACCENT: not included in any glyphset definition
 * U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: coptic, math, tifinagh, cherokee
 * U+0306 COMBINING BREVE: try adding one of: old-permic, tifinagh
 * U+0307 COMBINING DOT ABOVE: try adding one of: coptic, old-permic, tai-le, canadian-aboriginal, tifinagh, syriac, math, malayalam
 * U+030A COMBINING RING ABOVE: try adding syriac
 * U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee
 * U+030C COMBINING CARON: try adding one of: tai-le, cherokee
 * U+0312 COMBINING TURNED COMMA ABOVE: not included in any glyphset definition
 * U+0326 COMBINING COMMA BELOW: not included in any glyphset definition
 * U+0327 COMBINING CEDILLA: not included in any glyphset definition
 * U+0328 COMBINING OGONEK: not included in any glyphset definition
 * U+03C0 GREEK SMALL LETTER PI: try adding one of: math, greek, yi
 * U+0E3F THAI CURRENCY SYMBOL BAHT: try adding thai
 * U+1EBC LATIN CAPITAL LETTER E WITH TILDE: try adding vietnamese
 * U+1EBD LATIN SMALL LETTER E WITH TILDE: try adding vietnamese
 * U+2000 EN QUAD: not included in any glyphset definition
 * U+2001 EM QUAD: not included in any glyphset definition
 * U+2003 EM SPACE: try adding nushu
 * U+2004 THREE-PER-EM SPACE: not included in any glyphset definition
 * U+2005 FOUR-PER-EM SPACE: not included in any glyphset definition
 * U+2006 SIX-PER-EM SPACE: not included in any glyphset definition
 * U+2007 FIGURE SPACE: not included in any glyphset definition
 * U+2008 PUNCTUATION SPACE: not included in any glyphset definition
 * U+200A HAIR SPACE: not included in any glyphset definition
 * U+200C ZERO WIDTH NON-JOINER: try adding one of: avestan, telugu, dogra, balinese, lepcha, rejang, yi, tirhuta, bengali, kayah-li, tifinagh, khudawadi, buginese, meetei-mayek, oriya, batak, tai-viet, kaithi, mongolian, khmer, tagalog, tai-le, tamil, buhid, mahajani, pahawh-hmong, javanese, khojki, phags-pa, devanagari, brahmi, duployan, hanunoo, sundanese, saurashtra, malayalam, hanifi-rohingya, warang-citi, manichaean, siddham, sinhala, mandaic, kharoshthi, kannada, syriac, chakma, cham, takri, thaana, nko, modi, gujarati, myanmar, psalter-pahlavi, gurmukhi, sharada, hatran, tagbanwa, new-tai-lue, thai, newa, syloti-nagri, tibetan, grantha, tai-tham, gunjala-gondi, limbu, sogdian
 * U+200D ZERO WIDTH JOINER: try adding one of: emoji, avestan, telugu, dogra, balinese, lepcha, rejang, yi, tirhuta, bengali, kayah-li, tifinagh, khudawadi, buginese, meetei-mayek, oriya, batak, tai-viet, kaithi, mongolian, tagalog, tai-le, tamil, buhid, mahajani, pahawh-hmong, javanese, khojki, phags-pa, devanagari, brahmi, duployan, hanunoo, sundanese, saurashtra, malayalam, hanifi-rohingya, warang-citi, manichaean, siddham, sinhala, mandaic, kharoshthi, kannada, syriac, chakma, cham, takri, thaana, old-hungarian, nko, modi, gujarati, myanmar, psalter-pahlavi, gurmukhi, sharada, thai, tagbanwa, new-tai-lue, newa, syloti-nagri, tibetan, grantha, tai-tham, gunjala-gondi, limbu
 * U+200E LEFT-TO-RIGHT MARK: try adding one of: nko, thaana, syriac, phags-pa
 * U+200F RIGHT-TO-LEFT MARK: try adding one of: nko, thaana, syriac, phags-pa
 * U+2016 DOUBLE VERTICAL LINE: not included in any glyphset definition
 * U+2021 DOUBLE DAGGER: try adding adlam
 * U+202F NARROW NO-BREAK SPACE: try adding one of: mongolian, yi
 * U+2030 PER MILLE SIGN: try adding adlam
 * U+205F MEDIUM MATHEMATICAL SPACE: not included in any glyphset definition
 * U+2126 OHM SIGN: not included in any glyphset definition
 * U+212E ESTIMATED SYMBOL: not included in any glyphset definition
 * U+2153 VULGAR FRACTION ONE THIRD: not included in any glyphset definition
 * U+2154 VULGAR FRACTION TWO THIRDS: not included in any glyphset definition
 * U+2190 LEFTWARDS ARROW: try adding one of: math, symbols
 * U+2192 RIGHTWARDS ARROW: try adding one of: math, symbols
 * U+2194 LEFT RIGHT ARROW: try adding one of: emoji, math, symbols
 * U+2195 UP DOWN ARROW: try adding one of: emoji, math, symbols
 * U+2196 NORTH WEST ARROW: try adding one of: emoji, math, symbols
 * U+2197 NORTH EAST ARROW: try adding one of: emoji, math, symbols
 * U+2198 SOUTH EAST ARROW: try adding one of: emoji, math, symbols
 * U+2199 SOUTH WEST ARROW: try adding one of: emoji, math, symbols
 * U+2202 PARTIAL DIFFERENTIAL: try adding math
 * U+2205 EMPTY SET: try adding math
 * U+2206 INCREMENT: try adding math
 * U+220F N-ARY PRODUCT: try adding math
 * U+2211 N-ARY SUMMATION: try adding math
 * U+221A SQUARE ROOT: try adding math
 * U+221E INFINITY: try adding math
 * U+222B INTEGRAL: try adding math
 * U+2248 ALMOST EQUAL TO: try adding math
 * U+2260 NOT EQUAL TO: try adding math
 * U+2264 LESS-THAN OR EQUAL TO: try adding math
 * U+2265 GREATER-THAN OR EQUAL TO: try adding math
 * U+25A0 BLACK SQUARE: try adding symbols
 * U+25A1 WHITE SQUARE: try adding symbols
 * U+25AA BLACK SMALL SQUARE: try adding one of: emoji, symbols
 * U+25AB WHITE SMALL SQUARE: try adding one of: emoji, symbols
 * U+25B2 BLACK UP-POINTING TRIANGLE: try adding symbols
 * U+25B3 WHITE UP-POINTING TRIANGLE: try adding one of: math, symbols
 * U+25B4 BLACK UP-POINTING SMALL TRIANGLE: try adding symbols
 * U+25B5 WHITE UP-POINTING SMALL TRIANGLE: try adding symbols
 * U+25B6 BLACK RIGHT-POINTING TRIANGLE: try adding one of: emoji, symbols
 * U+25B7 WHITE RIGHT-POINTING TRIANGLE: try adding one of: math, symbols
 * U+25B8 BLACK RIGHT-POINTING SMALL TRIANGLE: try adding symbols
 * U+25B9 WHITE RIGHT-POINTING SMALL TRIANGLE: try adding symbols
 * U+25BC BLACK DOWN-POINTING TRIANGLE: try adding symbols
 * U+25BD WHITE DOWN-POINTING TRIANGLE: try adding one of: math, symbols
 * U+25BE BLACK DOWN-POINTING SMALL TRIANGLE: try adding symbols
 * U+25BF WHITE DOWN-POINTING SMALL TRIANGLE: try adding symbols
 * U+25C0 BLACK LEFT-POINTING TRIANGLE: try adding one of: emoji, symbols
 * U+25C1 WHITE LEFT-POINTING TRIANGLE: try adding one of: math, symbols
 * U+25C2 BLACK LEFT-POINTING SMALL TRIANGLE: try adding symbols
 * U+25C3 WHITE LEFT-POINTING SMALL TRIANGLE: try adding symbols
 * U+25C6 BLACK DIAMOND: try adding symbols
 * U+25C7 WHITE DIAMOND: try adding symbols
 * U+25CA LOZENGE: try adding one of: math, symbols
 * U+25CB WHITE CIRCLE: try adding symbols
 * U+25CC DOTTED CIRCLE: try adding one of: balinese, adlam, soyombo, oriya, caucasian-albanian, khmer, tagalog, mahajani, brahmi, sundanese, malayalam, hanifi-rohingya, siddham, zanabazar-square, syriac, mende-kikakui, cham, takri, lao, modi, thai, newa, wancho, grantha, kayah-li, bassa-vah, lepcha, yi, tirhuta, tifinagh, buginese, batak, mongolian, coptic, sinhala, thaana, old-permic, gujarati, gurmukhi, sharada, tagbanwa, syloti-nagri, tibetan, telugu, sogdian, rejang, symbols, khudawadi, meetei-mayek, tai-le, osage, buhid, pahawh-hmong, khojki, masaram-gondi, phags-pa, devanagari, hanunoo, bhaiksuki, mandaic, kannada, chakma, miao, nko, myanmar, math, elbasan, dogra, bengali, music, tai-viet, kaithi, tamil, javanese, duployan, ahom, hebrew, manichaean, kharoshthi, psalter-pahlavi, new-tai-lue, marchen, gunjala-gondi, limbu
 * U+25CF BLACK CIRCLE: try adding symbols
 * U+25E6 WHITE BULLET: try adding symbols
 * U+27E8 MATHEMATICAL LEFT ANGLE BRACKET: try adding math
 * U+27E9 MATHEMATICAL RIGHT ANGLE BRACKET: try adding math

Or you can add the above codepoints to one of the subsets supported by the font: `cyrillic-ext`, `latin`, `latin-ext` [code: unreachable-subsetting]
</div></details><details><summary>⚠ <b>WARN:</b> Are there caret positions declared for every ligature? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/ligature_carets">com.google.fonts/check/ligature_carets</a>)</summary><div>


* ⚠ **WARN** This font lacks caret position values for ligature glyphs on its GDEF table. [code: lacks-caret-pos]
</div></details><details><summary>⚠ <b>WARN:</b> Is there kerning info for non-ligated sequences? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/kerning_for_non_ligated_sequences">com.google.fonts/check/kerning_for_non_ligated_sequences</a>)</summary><div>


* ⚠ **WARN** GPOS table lacks kerning info for the following non-ligated sequences:

	- f + i

	- i + l [code: lacks-kern-info]
</div></details><details><summary>⚠ <b>WARN:</b> Check font follows the Google Fonts vertical metric schema (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/vertical_metrics">com.google.fonts/check/vertical_metrics</a>)</summary><div>


* ⚠ **WARN** We recommend the absolute sum of the hhea metrics should be between 1.2-1.5x of the font's upm. This font has 1.65x (1650) [code: bad-hhea-range]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure fonts have ScriptLangTags declared on the 'meta' table. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/meta/script_lang_tags">com.google.fonts/check/meta/script_lang_tags</a>)</summary><div>


* ⚠ **WARN** This font file does not have a 'meta' table. [code: lacks-meta-table]
</div></details><details><summary>⚠ <b>WARN:</b> Check font contains no unreachable glyphs (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/unreachable_glyphs">com.google.fonts/check/unreachable_glyphs</a>)</summary><div>


* ⚠ **WARN** The following glyphs could not be reached by codepoint or substitution rules:

	- eight.inferior

	- eight.superior

	- five.inferior

	- five.superior

	- four.inferior

	- four.superior

	- nine.inferior

	- nine.superior

	- one.inferior

	- one.superior

	- seven.inferior

	- seven.superior

	- six.inferior

	- six.superior

	- three.inferior

	- three.superior

	- two.inferior

	- two.superior

	- uni004A0301

	- uni006A0301

	- zero.inferior

	- zero.superior
 [code: unreachable-glyphs]
</div></details><details><summary>⚠ <b>WARN:</b> Check if each glyph has the recommended amount of contours. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/contour_count">com.google.fonts/check/contour_count</a>)</summary><div>


* ⚠ **WARN** This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.

The following glyphs do not have the recommended number of contours:

	- Glyph name: aogonek	Contours detected: 3	Expected: 2

	- Glyph name: eogonek	Contours detected: 3	Expected: 2

	- Glyph name: Uogonek	Contours detected: 2	Expected: 1

	- Glyph name: uogonek	Contours detected: 2	Expected: 1

	- Glyph name: uni20BF	Contours detected: 7	Expected: 3

	- Glyph name: Uogonek	Contours detected: 2	Expected: 1

	- Glyph name: aogonek	Contours detected: 3	Expected: 2

	- Glyph name: eogonek	Contours detected: 3	Expected: 2

	- Glyph name: uni20BF	Contours detected: 7	Expected: 3

	- Glyph name: uogonek	Contours detected: 2	Expected: 1
 [code: contour-count]
</div></details><details><summary>⚠ <b>WARN:</b> Do any segments have colinear vectors? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Outline Correctness Checks>.html#com.google.fonts/check/outline_colinear_vectors">com.google.fonts/check/outline_colinear_vectors</a>)</summary><div>


* ⚠ **WARN** The following glyphs have colinear vectors:

	* b (U+0062): L<<155.0,794.0>--<153.0,718.0>> -> L<<153.0,718.0>--<153.0,466.0>>

	* d (U+0064): L<<483.0,811.0>--<478.0,735.0>> -> L<<478.0,735.0>--<478.0,56.0>>

	* dcaron (U+010F): L<<483.0,811.0>--<478.0,735.0>> -> L<<478.0,735.0>--<478.0,56.0>>

	* dcroat (U+0111): L<<483.0,811.0>--<478.0,735.0>> -> L<<478.0,735.0>--<478.0,639.0>>

	* dong (U+20AB): L<<460.0,843.0>--<455.0,779.0>> -> L<<455.0,779.0>--<455.0,698.0>>

	* dotlessi (U+0131): L<<221.0,510.0>--<219.0,434.0>> -> L<<219.0,434.0>--<219.0,51.0>>

	* h (U+0068): L<<196.0,794.0>--<194.0,718.0>> -> L<<194.0,718.0>--<194.0,447.0>>

	* hbar (U+0127): L<<196.0,794.0>--<194.0,718.0>> -> L<<194.0,718.0>--<194.0,639.0>>

	* hcircumflex (U+0125): L<<196.0,794.0>--<194.0,718.0>> -> L<<194.0,718.0>--<194.0,447.0>>

	* i (U+0069): L<<221.0,510.0>--<219.0,434.0>> -> L<<219.0,434.0>--<219.0,51.0>>

	* iacute (U+00ED): L<<221.0,510.0>--<219.0,434.0>> -> L<<219.0,434.0>--<219.0,51.0>>

	* icircumflex (U+00EE): L<<221.0,510.0>--<219.0,434.0>> -> L<<219.0,434.0>--<219.0,51.0>>

	* idieresis (U+00EF): L<<221.0,510.0>--<219.0,434.0>> -> L<<219.0,434.0>--<219.0,51.0>>

	* igrave (U+00EC): L<<221.0,510.0>--<219.0,434.0>> -> L<<219.0,434.0>--<219.0,51.0>>

	* ij (U+0133): L<<221.0,510.0>--<219.0,434.0>> -> L<<219.0,434.0>--<219.0,51.0>>

	* ij (U+0133): L<<475.0,510.0>--<473.0,434.0>> -> L<<473.0,434.0>--<473.0,50.0>>

	* imacron (U+012B): L<<221.0,510.0>--<219.0,434.0>> -> L<<219.0,434.0>--<219.0,51.0>>

	* iogonek (U+012F): L<<221.0,510.0>--<219.0,434.0>> -> L<<219.0,434.0>--<219.0,51.0>>

	* itilde (U+0129): L<<221.0,510.0>--<219.0,434.0>> -> L<<219.0,434.0>--<219.0,51.0>>

	* j (U+006A): L<<217.0,510.0>--<215.0,434.0>> -> L<<215.0,434.0>--<215.0,50.0>>

	* jcircumflex (U+0135): L<<217.0,510.0>--<215.0,434.0>> -> L<<215.0,434.0>--<215.0,50.0>>

	* k (U+006B): L<<206.0,794.0>--<204.0,718.0>> -> L<<204.0,718.0>--<204.0,255.0>>

	* l (U+006C): L<<211.0,794.0>--<208.0,718.0>> -> L<<208.0,718.0>--<208.0,51.0>>

	* lacute (U+013A): L<<211.0,794.0>--<208.0,718.0>> -> L<<208.0,718.0>--<208.0,51.0>>

	* lcaron (U+013E): L<<211.0,794.0>--<208.0,718.0>> -> L<<208.0,718.0>--<208.0,51.0>>

	* lslash (U+0142): L<<221.0,794.0>--<218.0,718.0>> -> L<<218.0,718.0>--<218.0,454.0>>

	* thorn (U+00FE): L<<181.0,794.0>--<177.0,718.0>> -> L<<177.0,718.0>--<177.0,464.0>>

	* uni0137 (U+0137): L<<206.0,794.0>--<204.0,718.0>> -> L<<204.0,718.0>--<204.0,255.0>>

	* uni013C (U+013C): L<<211.0,794.0>--<208.0,718.0>> -> L<<208.0,718.0>--<208.0,51.0>>

	* uni0237 (U+0237): L<<217.0,510.0>--<215.0,434.0>> -> L<<215.0,434.0>--<215.0,50.0>>

	* uni1EF9 (U+1EF9): L<<471.0,450.0>--<280.0,0.0>> -> L<<280.0,0.0>--<189.0,-216.0>>

	* y (U+0079): L<<471.0,450.0>--<280.0,0.0>> -> L<<280.0,0.0>--<189.0,-216.0>>

	* yacute (U+00FD): L<<471.0,450.0>--<280.0,0.0>> -> L<<280.0,0.0>--<189.0,-216.0>>

	* ycircumflex (U+0177): L<<471.0,450.0>--<280.0,0.0>> -> L<<280.0,0.0>--<189.0,-216.0>>

	* ydieresis (U+00FF): L<<471.0,450.0>--<280.0,0.0>> -> L<<280.0,0.0>--<189.0,-216.0>>

	* ygrave (U+1EF3): L<<471.0,450.0>--<280.0,0.0>> -> L<<280.0,0.0>--<189.0,-216.0>> [code: found-colinear-vectors]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Shaping Checks>.html#com.google.fonts/check/soft_dotted">com.google.fonts/check/soft_dotted</a>)</summary><div>


* ⚠ **WARN** The dot of soft dotted characters used in orthographies _must_ disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌

The dot of soft dotted characters _should_ disappear in other cases, for example: į̆ į̇ į̈ į̊ į̋ į̒ į̧̀ į̧́ į̧̂ į̧̃ į̧̄ į̧̆ į̧̇ į̧̈ į̧̊ į̧̋ į̧̌ į̧̒ į̨̀ į̨́

Your font fully covers the following languages that require the soft-dotted feature: Lithuanian (Latn, 2,357,094 speakers), Dutch (Latn, 31,709,104 speakers). 

Your font does *not* cover the following languages that require the soft-dotted feature: Zapotec (Latn, 490,000 speakers), Ijo, Southeast (Latn, 2,471,000 speakers), Navajo (Latn, 166,319 speakers), Kom (Latn, 360,685 speakers), Lugbara (Latn, 2,200,000 speakers), Makaa (Latn, 221,000 speakers), Mfumte (Latn, 79,000 speakers), Southern Kisi (Latn, 360,000 speakers), Bete-Bendi (Latn, 100,000 speakers), Basaa (Latn, 332,940 speakers), Ma’di (Latn, 584,000 speakers), Igbo (Latn, 27,823,640 speakers), Ngbaka (Latn, 1,020,000 speakers), Ebira (Latn, 2,200,000 speakers), Dii (Latn, 71,000 speakers), Belarusian (Cyrl, 10,064,517 speakers), Aghem (Latn, 38,843 speakers), Dan (Latn, 1,099,244 speakers), Kpelle, Guinea (Latn, 622,000 speakers), Ukrainian (Cyrl, 29,273,587 speakers), South Central Banda (Latn, 244,000 speakers), Avokaya (Latn, 100,000 speakers), Cicipu (Latn, 44,000 speakers), Ejagham (Latn, 120,000 speakers), Nzakara (Latn, 50,000 speakers), Fur (Latn, 1,230,163 speakers), Nateni (Latn, 100,000 speakers), Mundani (Latn, 34,000 speakers), Koonzime (Latn, 40,000 speakers), Gulay (Latn, 250,478 speakers), Ekpeye (Latn, 226,000 speakers), Bafut (Latn, 158,146 speakers), Yala (Latn, 200,000 speakers), Mango (Latn, 77,000 speakers), Sar (Latn, 500,000 speakers). [code: soft-dotted]
</div></details><br></div></details><details><summary><b>[10] Wittgenstein-ExtraBold.ttf</b></summary><div><details><summary>⚠ <b>WARN:</b> Check for codepoints not covered by METADATA subsets. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/metadata/unreachable_subsetting">com.google.fonts/check/metadata/unreachable_subsetting</a>)</summary><div>


* ⚠ **WARN** The following codepoints supported by the font are not covered by
    any subsets defined in the font's metadata file, and will never
    be served. You can solve this by either manually adding additional
    subset declarations to METADATA.pb, or by editing the glyphset
    definitions.

 * U+02C7 CARON: try adding one of: tifinagh, canadian-aboriginal, yi
 * U+02D8 BREVE: try adding one of: canadian-aboriginal, yi
 * U+02D9 DOT ABOVE: try adding one of: canadian-aboriginal, yi
 * U+02DB OGONEK: try adding one of: canadian-aboriginal, yi
 * U+02DD DOUBLE ACUTE ACCENT: not included in any glyphset definition
 * U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: coptic, math, tifinagh, cherokee
 * U+0306 COMBINING BREVE: try adding one of: old-permic, tifinagh
 * U+0307 COMBINING DOT ABOVE: try adding one of: coptic, old-permic, tai-le, canadian-aboriginal, tifinagh, syriac, math, malayalam
 * U+030A COMBINING RING ABOVE: try adding syriac
 * U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee
 * U+030C COMBINING CARON: try adding one of: tai-le, cherokee
 * U+0312 COMBINING TURNED COMMA ABOVE: not included in any glyphset definition
 * U+0326 COMBINING COMMA BELOW: not included in any glyphset definition
 * U+0327 COMBINING CEDILLA: not included in any glyphset definition
 * U+0328 COMBINING OGONEK: not included in any glyphset definition
 * U+03C0 GREEK SMALL LETTER PI: try adding one of: math, greek, yi
 * U+0E3F THAI CURRENCY SYMBOL BAHT: try adding thai
 * U+1EBC LATIN CAPITAL LETTER E WITH TILDE: try adding vietnamese
 * U+1EBD LATIN SMALL LETTER E WITH TILDE: try adding vietnamese
 * U+2000 EN QUAD: not included in any glyphset definition
 * U+2001 EM QUAD: not included in any glyphset definition
 * U+2003 EM SPACE: try adding nushu
 * U+2004 THREE-PER-EM SPACE: not included in any glyphset definition
 * U+2005 FOUR-PER-EM SPACE: not included in any glyphset definition
 * U+2006 SIX-PER-EM SPACE: not included in any glyphset definition
 * U+2007 FIGURE SPACE: not included in any glyphset definition
 * U+2008 PUNCTUATION SPACE: not included in any glyphset definition
 * U+200A HAIR SPACE: not included in any glyphset definition
 * U+200C ZERO WIDTH NON-JOINER: try adding one of: avestan, telugu, dogra, balinese, lepcha, rejang, yi, tirhuta, bengali, kayah-li, tifinagh, khudawadi, buginese, meetei-mayek, oriya, batak, tai-viet, kaithi, mongolian, khmer, tagalog, tai-le, tamil, buhid, mahajani, pahawh-hmong, javanese, khojki, phags-pa, devanagari, brahmi, duployan, hanunoo, sundanese, saurashtra, malayalam, hanifi-rohingya, warang-citi, manichaean, siddham, sinhala, mandaic, kharoshthi, kannada, syriac, chakma, cham, takri, thaana, nko, modi, gujarati, myanmar, psalter-pahlavi, gurmukhi, sharada, hatran, tagbanwa, new-tai-lue, thai, newa, syloti-nagri, tibetan, grantha, tai-tham, gunjala-gondi, limbu, sogdian
 * U+200D ZERO WIDTH JOINER: try adding one of: emoji, avestan, telugu, dogra, balinese, lepcha, rejang, yi, tirhuta, bengali, kayah-li, tifinagh, khudawadi, buginese, meetei-mayek, oriya, batak, tai-viet, kaithi, mongolian, tagalog, tai-le, tamil, buhid, mahajani, pahawh-hmong, javanese, khojki, phags-pa, devanagari, brahmi, duployan, hanunoo, sundanese, saurashtra, malayalam, hanifi-rohingya, warang-citi, manichaean, siddham, sinhala, mandaic, kharoshthi, kannada, syriac, chakma, cham, takri, thaana, old-hungarian, nko, modi, gujarati, myanmar, psalter-pahlavi, gurmukhi, sharada, thai, tagbanwa, new-tai-lue, newa, syloti-nagri, tibetan, grantha, tai-tham, gunjala-gondi, limbu
 * U+200E LEFT-TO-RIGHT MARK: try adding one of: nko, thaana, syriac, phags-pa
 * U+200F RIGHT-TO-LEFT MARK: try adding one of: nko, thaana, syriac, phags-pa
 * U+2016 DOUBLE VERTICAL LINE: not included in any glyphset definition
 * U+2021 DOUBLE DAGGER: try adding adlam
 * U+202F NARROW NO-BREAK SPACE: try adding one of: mongolian, yi
 * U+2030 PER MILLE SIGN: try adding adlam
 * U+205F MEDIUM MATHEMATICAL SPACE: not included in any glyphset definition
 * U+2126 OHM SIGN: not included in any glyphset definition
 * U+212E ESTIMATED SYMBOL: not included in any glyphset definition
 * U+2153 VULGAR FRACTION ONE THIRD: not included in any glyphset definition
 * U+2154 VULGAR FRACTION TWO THIRDS: not included in any glyphset definition
 * U+2190 LEFTWARDS ARROW: try adding one of: math, symbols
 * U+2192 RIGHTWARDS ARROW: try adding one of: math, symbols
 * U+2194 LEFT RIGHT ARROW: try adding one of: emoji, math, symbols
 * U+2195 UP DOWN ARROW: try adding one of: emoji, math, symbols
 * U+2196 NORTH WEST ARROW: try adding one of: emoji, math, symbols
 * U+2197 NORTH EAST ARROW: try adding one of: emoji, math, symbols
 * U+2198 SOUTH EAST ARROW: try adding one of: emoji, math, symbols
 * U+2199 SOUTH WEST ARROW: try adding one of: emoji, math, symbols
 * U+2202 PARTIAL DIFFERENTIAL: try adding math
 * U+2205 EMPTY SET: try adding math
 * U+2206 INCREMENT: try adding math
 * U+220F N-ARY PRODUCT: try adding math
 * U+2211 N-ARY SUMMATION: try adding math
 * U+221A SQUARE ROOT: try adding math
 * U+221E INFINITY: try adding math
 * U+222B INTEGRAL: try adding math
 * U+2248 ALMOST EQUAL TO: try adding math
 * U+2260 NOT EQUAL TO: try adding math
 * U+2264 LESS-THAN OR EQUAL TO: try adding math
 * U+2265 GREATER-THAN OR EQUAL TO: try adding math
 * U+25A0 BLACK SQUARE: try adding symbols
 * U+25A1 WHITE SQUARE: try adding symbols
 * U+25AA BLACK SMALL SQUARE: try adding one of: emoji, symbols
 * U+25AB WHITE SMALL SQUARE: try adding one of: emoji, symbols
 * U+25B2 BLACK UP-POINTING TRIANGLE: try adding symbols
 * U+25B3 WHITE UP-POINTING TRIANGLE: try adding one of: math, symbols
 * U+25B4 BLACK UP-POINTING SMALL TRIANGLE: try adding symbols
 * U+25B5 WHITE UP-POINTING SMALL TRIANGLE: try adding symbols
 * U+25B6 BLACK RIGHT-POINTING TRIANGLE: try adding one of: emoji, symbols
 * U+25B7 WHITE RIGHT-POINTING TRIANGLE: try adding one of: math, symbols
 * U+25B8 BLACK RIGHT-POINTING SMALL TRIANGLE: try adding symbols
 * U+25B9 WHITE RIGHT-POINTING SMALL TRIANGLE: try adding symbols
 * U+25BC BLACK DOWN-POINTING TRIANGLE: try adding symbols
 * U+25BD WHITE DOWN-POINTING TRIANGLE: try adding one of: math, symbols
 * U+25BE BLACK DOWN-POINTING SMALL TRIANGLE: try adding symbols
 * U+25BF WHITE DOWN-POINTING SMALL TRIANGLE: try adding symbols
 * U+25C0 BLACK LEFT-POINTING TRIANGLE: try adding one of: emoji, symbols
 * U+25C1 WHITE LEFT-POINTING TRIANGLE: try adding one of: math, symbols
 * U+25C2 BLACK LEFT-POINTING SMALL TRIANGLE: try adding symbols
 * U+25C3 WHITE LEFT-POINTING SMALL TRIANGLE: try adding symbols
 * U+25C6 BLACK DIAMOND: try adding symbols
 * U+25C7 WHITE DIAMOND: try adding symbols
 * U+25CA LOZENGE: try adding one of: math, symbols
 * U+25CB WHITE CIRCLE: try adding symbols
 * U+25CC DOTTED CIRCLE: try adding one of: balinese, adlam, soyombo, oriya, caucasian-albanian, khmer, tagalog, mahajani, brahmi, sundanese, malayalam, hanifi-rohingya, siddham, zanabazar-square, syriac, mende-kikakui, cham, takri, lao, modi, thai, newa, wancho, grantha, kayah-li, bassa-vah, lepcha, yi, tirhuta, tifinagh, buginese, batak, mongolian, coptic, sinhala, thaana, old-permic, gujarati, gurmukhi, sharada, tagbanwa, syloti-nagri, tibetan, telugu, sogdian, rejang, symbols, khudawadi, meetei-mayek, tai-le, osage, buhid, pahawh-hmong, khojki, masaram-gondi, phags-pa, devanagari, hanunoo, bhaiksuki, mandaic, kannada, chakma, miao, nko, myanmar, math, elbasan, dogra, bengali, music, tai-viet, kaithi, tamil, javanese, duployan, ahom, hebrew, manichaean, kharoshthi, psalter-pahlavi, new-tai-lue, marchen, gunjala-gondi, limbu
 * U+25CF BLACK CIRCLE: try adding symbols
 * U+25E6 WHITE BULLET: try adding symbols
 * U+27E8 MATHEMATICAL LEFT ANGLE BRACKET: try adding math
 * U+27E9 MATHEMATICAL RIGHT ANGLE BRACKET: try adding math

Or you can add the above codepoints to one of the subsets supported by the font: `cyrillic-ext`, `latin`, `latin-ext` [code: unreachable-subsetting]
</div></details><details><summary>⚠ <b>WARN:</b> Are there caret positions declared for every ligature? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/ligature_carets">com.google.fonts/check/ligature_carets</a>)</summary><div>


* ⚠ **WARN** This font lacks caret position values for ligature glyphs on its GDEF table. [code: lacks-caret-pos]
</div></details><details><summary>⚠ <b>WARN:</b> Is there kerning info for non-ligated sequences? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/kerning_for_non_ligated_sequences">com.google.fonts/check/kerning_for_non_ligated_sequences</a>)</summary><div>


* ⚠ **WARN** GPOS table lacks kerning info for the following non-ligated sequences:

	- f + i

	- i + l [code: lacks-kern-info]
</div></details><details><summary>⚠ <b>WARN:</b> Check font follows the Google Fonts vertical metric schema (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/vertical_metrics">com.google.fonts/check/vertical_metrics</a>)</summary><div>


* ⚠ **WARN** We recommend the absolute sum of the hhea metrics should be between 1.2-1.5x of the font's upm. This font has 1.65x (1650) [code: bad-hhea-range]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure fonts have ScriptLangTags declared on the 'meta' table. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/meta/script_lang_tags">com.google.fonts/check/meta/script_lang_tags</a>)</summary><div>


* ⚠ **WARN** This font file does not have a 'meta' table. [code: lacks-meta-table]
</div></details><details><summary>⚠ <b>WARN:</b> Check font contains no unreachable glyphs (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/unreachable_glyphs">com.google.fonts/check/unreachable_glyphs</a>)</summary><div>


* ⚠ **WARN** The following glyphs could not be reached by codepoint or substitution rules:

	- eight.inferior

	- eight.superior

	- five.inferior

	- five.superior

	- four.inferior

	- four.superior

	- nine.inferior

	- nine.superior

	- one.inferior

	- one.superior

	- seven.inferior

	- seven.superior

	- six.inferior

	- six.superior

	- three.inferior

	- three.superior

	- two.inferior

	- two.superior

	- uni004A0301

	- uni006A0301

	- zero.inferior

	- zero.superior
 [code: unreachable-glyphs]
</div></details><details><summary>⚠ <b>WARN:</b> Check if each glyph has the recommended amount of contours. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/contour_count">com.google.fonts/check/contour_count</a>)</summary><div>


* ⚠ **WARN** This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.

The following glyphs do not have the recommended number of contours:

	- Glyph name: aogonek	Contours detected: 3	Expected: 2

	- Glyph name: eogonek	Contours detected: 3	Expected: 2

	- Glyph name: Uogonek	Contours detected: 2	Expected: 1

	- Glyph name: uogonek	Contours detected: 2	Expected: 1

	- Glyph name: uni20BF	Contours detected: 7	Expected: 3

	- Glyph name: Uogonek	Contours detected: 2	Expected: 1

	- Glyph name: aogonek	Contours detected: 3	Expected: 2

	- Glyph name: eogonek	Contours detected: 3	Expected: 2

	- Glyph name: uni20BF	Contours detected: 7	Expected: 3

	- Glyph name: uogonek	Contours detected: 2	Expected: 1
 [code: contour-count]
</div></details><details><summary>⚠ <b>WARN:</b> Do any segments have colinear vectors? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Outline Correctness Checks>.html#com.google.fonts/check/outline_colinear_vectors">com.google.fonts/check/outline_colinear_vectors</a>)</summary><div>


* ⚠ **WARN** The following glyphs have colinear vectors:

	* b (U+0062): L<<202.0,786.0>--<200.0,718.0>> -> L<<200.0,718.0>--<200.0,491.0>>

	* d (U+0064): L<<535.0,792.0>--<532.0,733.0>> -> L<<532.0,733.0>--<532.0,68.0>>

	* dcaron (U+010F): L<<535.0,792.0>--<532.0,733.0>> -> L<<532.0,733.0>--<532.0,68.0>>

	* dcroat (U+0111): L<<535.0,792.0>--<532.0,733.0>> -> L<<532.0,733.0>--<532.0,639.0>>

	* dong (U+20AB): L<<521.0,827.0>--<519.0,778.0>> -> L<<519.0,778.0>--<519.0,698.0>>

	* dotlessi (U+0131): L<<263.0,496.0>--<261.0,428.0>> -> L<<261.0,428.0>--<261.0,50.0>>

	* h (U+0068): L<<230.0,788.0>--<228.0,718.0>> -> L<<228.0,718.0>--<228.0,471.0>>

	* hbar (U+0127): L<<230.0,788.0>--<228.0,718.0>> -> L<<228.0,718.0>--<228.0,639.0>>

	* hcircumflex (U+0125): L<<230.0,788.0>--<228.0,718.0>> -> L<<228.0,718.0>--<228.0,471.0>>

	* i (U+0069): L<<247.0,496.0>--<245.0,428.0>> -> L<<245.0,428.0>--<245.0,50.0>>

	* iacute (U+00ED): L<<263.0,496.0>--<261.0,428.0>> -> L<<261.0,428.0>--<261.0,50.0>>

	* icircumflex (U+00EE): L<<263.0,496.0>--<261.0,428.0>> -> L<<261.0,428.0>--<261.0,50.0>>

	* idieresis (U+00EF): L<<263.0,496.0>--<261.0,428.0>> -> L<<261.0,428.0>--<261.0,50.0>>

	* igrave (U+00EC): L<<263.0,496.0>--<261.0,428.0>> -> L<<261.0,428.0>--<261.0,50.0>>

	* ij (U+0133): L<<247.0,496.0>--<245.0,428.0>> -> L<<245.0,428.0>--<245.0,50.0>>

	* ij (U+0133): L<<547.0,496.0>--<545.0,429.0>> -> L<<545.0,429.0>--<545.0,52.0>>

	* imacron (U+012B): L<<263.0,496.0>--<261.0,428.0>> -> L<<261.0,428.0>--<261.0,50.0>>

	* iogonek (U+012F): L<<263.0,496.0>--<261.0,428.0>> -> L<<261.0,428.0>--<261.0,50.0>>

	* itilde (U+0129): L<<263.0,496.0>--<261.0,428.0>> -> L<<261.0,428.0>--<261.0,50.0>>

	* j (U+006A): L<<241.0,496.0>--<239.0,429.0>> -> L<<239.0,429.0>--<239.0,52.0>>

	* jcircumflex (U+0135): L<<243.0,496.0>--<241.0,429.0>> -> L<<241.0,429.0>--<241.0,52.0>>

	* k (U+006B): L<<224.0,788.0>--<222.0,718.0>> -> L<<222.0,718.0>--<222.0,285.0>>

	* l (U+006C): L<<233.0,788.0>--<231.0,718.0>> -> L<<231.0,718.0>--<231.0,50.0>>

	* lacute (U+013A): L<<233.0,788.0>--<231.0,718.0>> -> L<<231.0,718.0>--<231.0,50.0>>

	* lcaron (U+013E): L<<233.0,788.0>--<231.0,718.0>> -> L<<231.0,718.0>--<231.0,50.0>>

	* lslash (U+0142): L<<235.0,788.0>--<233.0,718.0>> -> L<<233.0,718.0>--<233.0,468.0>>

	* thorn (U+00FE): L<<225.0,786.0>--<223.0,708.0>> -> L<<223.0,708.0>--<223.0,498.0>>

	* uni0137 (U+0137): L<<224.0,788.0>--<222.0,718.0>> -> L<<222.0,718.0>--<222.0,285.0>>

	* uni013C (U+013C): L<<233.0,788.0>--<231.0,718.0>> -> L<<231.0,718.0>--<231.0,50.0>>

	* uni0237 (U+0237): L<<243.0,496.0>--<241.0,429.0>> -> L<<241.0,429.0>--<241.0,52.0>>

	* uni1EF9 (U+1EF9): L<<475.0,439.0>--<268.0,0.0>> -> L<<268.0,0.0>--<177.0,-216.0>>

	* y (U+0079): L<<475.0,439.0>--<268.0,0.0>> -> L<<268.0,0.0>--<177.0,-216.0>>

	* yacute (U+00FD): L<<475.0,439.0>--<268.0,0.0>> -> L<<268.0,0.0>--<177.0,-216.0>>

	* ycircumflex (U+0177): L<<475.0,439.0>--<268.0,0.0>> -> L<<268.0,0.0>--<177.0,-216.0>>

	* ydieresis (U+00FF): L<<475.0,439.0>--<268.0,0.0>> -> L<<268.0,0.0>--<177.0,-216.0>>

	* ygrave (U+1EF3): L<<475.0,439.0>--<268.0,0.0>> -> L<<268.0,0.0>--<177.0,-216.0>> [code: found-colinear-vectors]
</div></details><details><summary>⚠ <b>WARN:</b> Do outlines contain any semi-vertical or semi-horizontal lines? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Outline Correctness Checks>.html#com.google.fonts/check/outline_semi_vertical">com.google.fonts/check/outline_semi_vertical</a>)</summary><div>


* ⚠ **WARN** The following glyphs have semi-vertical/semi-horizontal lines:

	* uni0259 (U+0259): L<<336.0,189.0>--<176.0,188.0>> [code: found-semi-vertical]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Shaping Checks>.html#com.google.fonts/check/soft_dotted">com.google.fonts/check/soft_dotted</a>)</summary><div>


* ⚠ **WARN** The dot of soft dotted characters used in orthographies _must_ disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌

The dot of soft dotted characters _should_ disappear in other cases, for example: į̆ į̇ į̈ į̊ į̋ į̒ į̧̀ į̧́ į̧̂ į̧̃ į̧̄ į̧̆ į̧̇ į̧̈ į̧̊ į̧̋ į̧̌ į̧̒ į̨̀ į̨́

Your font fully covers the following languages that require the soft-dotted feature: Lithuanian (Latn, 2,357,094 speakers), Dutch (Latn, 31,709,104 speakers). 

Your font does *not* cover the following languages that require the soft-dotted feature: Zapotec (Latn, 490,000 speakers), Ijo, Southeast (Latn, 2,471,000 speakers), Navajo (Latn, 166,319 speakers), Kom (Latn, 360,685 speakers), Lugbara (Latn, 2,200,000 speakers), Makaa (Latn, 221,000 speakers), Mfumte (Latn, 79,000 speakers), Southern Kisi (Latn, 360,000 speakers), Bete-Bendi (Latn, 100,000 speakers), Basaa (Latn, 332,940 speakers), Ma’di (Latn, 584,000 speakers), Igbo (Latn, 27,823,640 speakers), Ngbaka (Latn, 1,020,000 speakers), Ebira (Latn, 2,200,000 speakers), Dii (Latn, 71,000 speakers), Belarusian (Cyrl, 10,064,517 speakers), Aghem (Latn, 38,843 speakers), Dan (Latn, 1,099,244 speakers), Kpelle, Guinea (Latn, 622,000 speakers), Ukrainian (Cyrl, 29,273,587 speakers), South Central Banda (Latn, 244,000 speakers), Avokaya (Latn, 100,000 speakers), Cicipu (Latn, 44,000 speakers), Ejagham (Latn, 120,000 speakers), Nzakara (Latn, 50,000 speakers), Fur (Latn, 1,230,163 speakers), Nateni (Latn, 100,000 speakers), Mundani (Latn, 34,000 speakers), Koonzime (Latn, 40,000 speakers), Gulay (Latn, 250,478 speakers), Ekpeye (Latn, 226,000 speakers), Bafut (Latn, 158,146 speakers), Yala (Latn, 200,000 speakers), Mango (Latn, 77,000 speakers), Sar (Latn, 500,000 speakers). [code: soft-dotted]
</div></details><br></div></details><details><summary><b>[9] Wittgenstein-Bold.ttf</b></summary><div><details><summary>⚠ <b>WARN:</b> Check for codepoints not covered by METADATA subsets. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/metadata/unreachable_subsetting">com.google.fonts/check/metadata/unreachable_subsetting</a>)</summary><div>


* ⚠ **WARN** The following codepoints supported by the font are not covered by
    any subsets defined in the font's metadata file, and will never
    be served. You can solve this by either manually adding additional
    subset declarations to METADATA.pb, or by editing the glyphset
    definitions.

 * U+02C7 CARON: try adding one of: tifinagh, canadian-aboriginal, yi
 * U+02D8 BREVE: try adding one of: canadian-aboriginal, yi
 * U+02D9 DOT ABOVE: try adding one of: canadian-aboriginal, yi
 * U+02DB OGONEK: try adding one of: canadian-aboriginal, yi
 * U+02DD DOUBLE ACUTE ACCENT: not included in any glyphset definition
 * U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: coptic, math, tifinagh, cherokee
 * U+0306 COMBINING BREVE: try adding one of: old-permic, tifinagh
 * U+0307 COMBINING DOT ABOVE: try adding one of: coptic, old-permic, tai-le, canadian-aboriginal, tifinagh, syriac, math, malayalam
 * U+030A COMBINING RING ABOVE: try adding syriac
 * U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee
 * U+030C COMBINING CARON: try adding one of: tai-le, cherokee
 * U+0312 COMBINING TURNED COMMA ABOVE: not included in any glyphset definition
 * U+0326 COMBINING COMMA BELOW: not included in any glyphset definition
 * U+0327 COMBINING CEDILLA: not included in any glyphset definition
 * U+0328 COMBINING OGONEK: not included in any glyphset definition
 * U+03C0 GREEK SMALL LETTER PI: try adding one of: math, greek, yi
 * U+0E3F THAI CURRENCY SYMBOL BAHT: try adding thai
 * U+1EBC LATIN CAPITAL LETTER E WITH TILDE: try adding vietnamese
 * U+1EBD LATIN SMALL LETTER E WITH TILDE: try adding vietnamese
 * U+2000 EN QUAD: not included in any glyphset definition
 * U+2001 EM QUAD: not included in any glyphset definition
 * U+2003 EM SPACE: try adding nushu
 * U+2004 THREE-PER-EM SPACE: not included in any glyphset definition
 * U+2005 FOUR-PER-EM SPACE: not included in any glyphset definition
 * U+2006 SIX-PER-EM SPACE: not included in any glyphset definition
 * U+2007 FIGURE SPACE: not included in any glyphset definition
 * U+2008 PUNCTUATION SPACE: not included in any glyphset definition
 * U+200A HAIR SPACE: not included in any glyphset definition
 * U+200C ZERO WIDTH NON-JOINER: try adding one of: avestan, telugu, dogra, balinese, lepcha, rejang, yi, tirhuta, bengali, kayah-li, tifinagh, khudawadi, buginese, meetei-mayek, oriya, batak, tai-viet, kaithi, mongolian, khmer, tagalog, tai-le, tamil, buhid, mahajani, pahawh-hmong, javanese, khojki, phags-pa, devanagari, brahmi, duployan, hanunoo, sundanese, saurashtra, malayalam, hanifi-rohingya, warang-citi, manichaean, siddham, sinhala, mandaic, kharoshthi, kannada, syriac, chakma, cham, takri, thaana, nko, modi, gujarati, myanmar, psalter-pahlavi, gurmukhi, sharada, hatran, tagbanwa, new-tai-lue, thai, newa, syloti-nagri, tibetan, grantha, tai-tham, gunjala-gondi, limbu, sogdian
 * U+200D ZERO WIDTH JOINER: try adding one of: emoji, avestan, telugu, dogra, balinese, lepcha, rejang, yi, tirhuta, bengali, kayah-li, tifinagh, khudawadi, buginese, meetei-mayek, oriya, batak, tai-viet, kaithi, mongolian, tagalog, tai-le, tamil, buhid, mahajani, pahawh-hmong, javanese, khojki, phags-pa, devanagari, brahmi, duployan, hanunoo, sundanese, saurashtra, malayalam, hanifi-rohingya, warang-citi, manichaean, siddham, sinhala, mandaic, kharoshthi, kannada, syriac, chakma, cham, takri, thaana, old-hungarian, nko, modi, gujarati, myanmar, psalter-pahlavi, gurmukhi, sharada, thai, tagbanwa, new-tai-lue, newa, syloti-nagri, tibetan, grantha, tai-tham, gunjala-gondi, limbu
 * U+200E LEFT-TO-RIGHT MARK: try adding one of: nko, thaana, syriac, phags-pa
 * U+200F RIGHT-TO-LEFT MARK: try adding one of: nko, thaana, syriac, phags-pa
 * U+2016 DOUBLE VERTICAL LINE: not included in any glyphset definition
 * U+2021 DOUBLE DAGGER: try adding adlam
 * U+202F NARROW NO-BREAK SPACE: try adding one of: mongolian, yi
 * U+2030 PER MILLE SIGN: try adding adlam
 * U+205F MEDIUM MATHEMATICAL SPACE: not included in any glyphset definition
 * U+2126 OHM SIGN: not included in any glyphset definition
 * U+212E ESTIMATED SYMBOL: not included in any glyphset definition
 * U+2153 VULGAR FRACTION ONE THIRD: not included in any glyphset definition
 * U+2154 VULGAR FRACTION TWO THIRDS: not included in any glyphset definition
 * U+2190 LEFTWARDS ARROW: try adding one of: math, symbols
 * U+2192 RIGHTWARDS ARROW: try adding one of: math, symbols
 * U+2194 LEFT RIGHT ARROW: try adding one of: emoji, math, symbols
 * U+2195 UP DOWN ARROW: try adding one of: emoji, math, symbols
 * U+2196 NORTH WEST ARROW: try adding one of: emoji, math, symbols
 * U+2197 NORTH EAST ARROW: try adding one of: emoji, math, symbols
 * U+2198 SOUTH EAST ARROW: try adding one of: emoji, math, symbols
 * U+2199 SOUTH WEST ARROW: try adding one of: emoji, math, symbols
 * U+2202 PARTIAL DIFFERENTIAL: try adding math
 * U+2205 EMPTY SET: try adding math
 * U+2206 INCREMENT: try adding math
 * U+220F N-ARY PRODUCT: try adding math
 * U+2211 N-ARY SUMMATION: try adding math
 * U+221A SQUARE ROOT: try adding math
 * U+221E INFINITY: try adding math
 * U+222B INTEGRAL: try adding math
 * U+2248 ALMOST EQUAL TO: try adding math
 * U+2260 NOT EQUAL TO: try adding math
 * U+2264 LESS-THAN OR EQUAL TO: try adding math
 * U+2265 GREATER-THAN OR EQUAL TO: try adding math
 * U+25A0 BLACK SQUARE: try adding symbols
 * U+25A1 WHITE SQUARE: try adding symbols
 * U+25AA BLACK SMALL SQUARE: try adding one of: emoji, symbols
 * U+25AB WHITE SMALL SQUARE: try adding one of: emoji, symbols
 * U+25B2 BLACK UP-POINTING TRIANGLE: try adding symbols
 * U+25B3 WHITE UP-POINTING TRIANGLE: try adding one of: math, symbols
 * U+25B4 BLACK UP-POINTING SMALL TRIANGLE: try adding symbols
 * U+25B5 WHITE UP-POINTING SMALL TRIANGLE: try adding symbols
 * U+25B6 BLACK RIGHT-POINTING TRIANGLE: try adding one of: emoji, symbols
 * U+25B7 WHITE RIGHT-POINTING TRIANGLE: try adding one of: math, symbols
 * U+25B8 BLACK RIGHT-POINTING SMALL TRIANGLE: try adding symbols
 * U+25B9 WHITE RIGHT-POINTING SMALL TRIANGLE: try adding symbols
 * U+25BC BLACK DOWN-POINTING TRIANGLE: try adding symbols
 * U+25BD WHITE DOWN-POINTING TRIANGLE: try adding one of: math, symbols
 * U+25BE BLACK DOWN-POINTING SMALL TRIANGLE: try adding symbols
 * U+25BF WHITE DOWN-POINTING SMALL TRIANGLE: try adding symbols
 * U+25C0 BLACK LEFT-POINTING TRIANGLE: try adding one of: emoji, symbols
 * U+25C1 WHITE LEFT-POINTING TRIANGLE: try adding one of: math, symbols
 * U+25C2 BLACK LEFT-POINTING SMALL TRIANGLE: try adding symbols
 * U+25C3 WHITE LEFT-POINTING SMALL TRIANGLE: try adding symbols
 * U+25C6 BLACK DIAMOND: try adding symbols
 * U+25C7 WHITE DIAMOND: try adding symbols
 * U+25CA LOZENGE: try adding one of: math, symbols
 * U+25CB WHITE CIRCLE: try adding symbols
 * U+25CC DOTTED CIRCLE: try adding one of: balinese, adlam, soyombo, oriya, caucasian-albanian, khmer, tagalog, mahajani, brahmi, sundanese, malayalam, hanifi-rohingya, siddham, zanabazar-square, syriac, mende-kikakui, cham, takri, lao, modi, thai, newa, wancho, grantha, kayah-li, bassa-vah, lepcha, yi, tirhuta, tifinagh, buginese, batak, mongolian, coptic, sinhala, thaana, old-permic, gujarati, gurmukhi, sharada, tagbanwa, syloti-nagri, tibetan, telugu, sogdian, rejang, symbols, khudawadi, meetei-mayek, tai-le, osage, buhid, pahawh-hmong, khojki, masaram-gondi, phags-pa, devanagari, hanunoo, bhaiksuki, mandaic, kannada, chakma, miao, nko, myanmar, math, elbasan, dogra, bengali, music, tai-viet, kaithi, tamil, javanese, duployan, ahom, hebrew, manichaean, kharoshthi, psalter-pahlavi, new-tai-lue, marchen, gunjala-gondi, limbu
 * U+25CF BLACK CIRCLE: try adding symbols
 * U+25E6 WHITE BULLET: try adding symbols
 * U+27E8 MATHEMATICAL LEFT ANGLE BRACKET: try adding math
 * U+27E9 MATHEMATICAL RIGHT ANGLE BRACKET: try adding math

Or you can add the above codepoints to one of the subsets supported by the font: `cyrillic-ext`, `latin`, `latin-ext` [code: unreachable-subsetting]
</div></details><details><summary>⚠ <b>WARN:</b> Are there caret positions declared for every ligature? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/ligature_carets">com.google.fonts/check/ligature_carets</a>)</summary><div>


* ⚠ **WARN** This font lacks caret position values for ligature glyphs on its GDEF table. [code: lacks-caret-pos]
</div></details><details><summary>⚠ <b>WARN:</b> Is there kerning info for non-ligated sequences? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/kerning_for_non_ligated_sequences">com.google.fonts/check/kerning_for_non_ligated_sequences</a>)</summary><div>


* ⚠ **WARN** GPOS table lacks kerning info for the following non-ligated sequences:

	- f + i

	- i + l [code: lacks-kern-info]
</div></details><details><summary>⚠ <b>WARN:</b> Check font follows the Google Fonts vertical metric schema (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/vertical_metrics">com.google.fonts/check/vertical_metrics</a>)</summary><div>


* ⚠ **WARN** We recommend the absolute sum of the hhea metrics should be between 1.2-1.5x of the font's upm. This font has 1.65x (1650) [code: bad-hhea-range]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure fonts have ScriptLangTags declared on the 'meta' table. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/meta/script_lang_tags">com.google.fonts/check/meta/script_lang_tags</a>)</summary><div>


* ⚠ **WARN** This font file does not have a 'meta' table. [code: lacks-meta-table]
</div></details><details><summary>⚠ <b>WARN:</b> Check font contains no unreachable glyphs (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/unreachable_glyphs">com.google.fonts/check/unreachable_glyphs</a>)</summary><div>


* ⚠ **WARN** The following glyphs could not be reached by codepoint or substitution rules:

	- eight.inferior

	- eight.superior

	- five.inferior

	- five.superior

	- four.inferior

	- four.superior

	- nine.inferior

	- nine.superior

	- one.inferior

	- one.superior

	- seven.inferior

	- seven.superior

	- six.inferior

	- six.superior

	- three.inferior

	- three.superior

	- two.inferior

	- two.superior

	- uni004A0301

	- uni006A0301

	- zero.inferior

	- zero.superior
 [code: unreachable-glyphs]
</div></details><details><summary>⚠ <b>WARN:</b> Check if each glyph has the recommended amount of contours. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/contour_count">com.google.fonts/check/contour_count</a>)</summary><div>


* ⚠ **WARN** This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.

The following glyphs do not have the recommended number of contours:

	- Glyph name: aogonek	Contours detected: 3	Expected: 2

	- Glyph name: eogonek	Contours detected: 3	Expected: 2

	- Glyph name: Uogonek	Contours detected: 2	Expected: 1

	- Glyph name: uogonek	Contours detected: 2	Expected: 1

	- Glyph name: uni20BF	Contours detected: 7	Expected: 3

	- Glyph name: Uogonek	Contours detected: 2	Expected: 1

	- Glyph name: aogonek	Contours detected: 3	Expected: 2

	- Glyph name: eogonek	Contours detected: 3	Expected: 2

	- Glyph name: uni20BF	Contours detected: 7	Expected: 3

	- Glyph name: uogonek	Contours detected: 2	Expected: 1
 [code: contour-count]
</div></details><details><summary>⚠ <b>WARN:</b> Do any segments have colinear vectors? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Outline Correctness Checks>.html#com.google.fonts/check/outline_colinear_vectors">com.google.fonts/check/outline_colinear_vectors</a>)</summary><div>


* ⚠ **WARN** The following glyphs have colinear vectors:

	* b (U+0062): L<<190.0,788.0>--<188.0,718.0>> -> L<<188.0,718.0>--<188.0,485.0>>

	* d (U+0064): L<<522.0,797.0>--<519.0,734.0>> -> L<<519.0,734.0>--<519.0,65.0>>

	* dcaron (U+010F): L<<522.0,797.0>--<519.0,734.0>> -> L<<519.0,734.0>--<519.0,65.0>>

	* dcroat (U+0111): L<<522.0,797.0>--<519.0,734.0>> -> L<<519.0,734.0>--<519.0,639.0>>

	* dong (U+20AB): L<<506.0,831.0>--<503.0,778.0>> -> L<<503.0,778.0>--<503.0,698.0>>

	* dotlessi (U+0131): L<<253.0,500.0>--<251.0,430.0>> -> L<<251.0,430.0>--<251.0,50.0>>

	* h (U+0068): L<<222.0,790.0>--<220.0,718.0>> -> L<<220.0,718.0>--<220.0,465.0>>

	* hbar (U+0127): L<<222.0,790.0>--<220.0,718.0>> -> L<<220.0,718.0>--<220.0,639.0>>

	* hcircumflex (U+0125): L<<222.0,790.0>--<220.0,718.0>> -> L<<220.0,718.0>--<220.0,465.0>>

	* i (U+0069): L<<241.0,500.0>--<239.0,430.0>> -> L<<239.0,430.0>--<239.0,50.0>>

	* iacute (U+00ED): L<<253.0,500.0>--<251.0,430.0>> -> L<<251.0,430.0>--<251.0,50.0>>

	* icircumflex (U+00EE): L<<253.0,500.0>--<251.0,430.0>> -> L<<251.0,430.0>--<251.0,50.0>>

	* idieresis (U+00EF): L<<253.0,500.0>--<251.0,430.0>> -> L<<251.0,430.0>--<251.0,50.0>>

	* igrave (U+00EC): L<<253.0,500.0>--<251.0,430.0>> -> L<<251.0,430.0>--<251.0,50.0>>

	* ij (U+0133): L<<241.0,500.0>--<239.0,430.0>> -> L<<239.0,430.0>--<239.0,50.0>>

	* ij (U+0133): L<<530.0,500.0>--<528.0,430.0>> -> L<<528.0,430.0>--<528.0,52.0>>

	* imacron (U+012B): L<<253.0,500.0>--<251.0,430.0>> -> L<<251.0,430.0>--<251.0,50.0>>

	* iogonek (U+012F): L<<253.0,500.0>--<251.0,430.0>> -> L<<251.0,430.0>--<251.0,50.0>>

	* itilde (U+0129): L<<253.0,500.0>--<251.0,430.0>> -> L<<251.0,430.0>--<251.0,50.0>>

	* j (U+006A): L<<236.0,500.0>--<234.0,430.0>> -> L<<234.0,430.0>--<234.0,52.0>>

	* jcircumflex (U+0135): L<<237.0,500.0>--<235.0,430.0>> -> L<<235.0,430.0>--<235.0,52.0>>

	* k (U+006B): L<<220.0,790.0>--<218.0,718.0>> -> L<<218.0,718.0>--<218.0,277.0>>

	* l (U+006C): L<<228.0,790.0>--<225.0,718.0>> -> L<<225.0,718.0>--<225.0,50.0>>

	* lacute (U+013A): L<<228.0,790.0>--<225.0,718.0>> -> L<<225.0,718.0>--<225.0,50.0>>

	* lcaron (U+013E): L<<228.0,790.0>--<225.0,718.0>> -> L<<225.0,718.0>--<225.0,50.0>>

	* lslash (U+0142): L<<232.0,790.0>--<229.0,718.0>> -> L<<229.0,718.0>--<229.0,465.0>>

	* thorn (U+00FE): L<<214.0,788.0>--<211.0,710.0>> -> L<<211.0,710.0>--<211.0,489.0>>

	* uni0137 (U+0137): L<<220.0,790.0>--<218.0,718.0>> -> L<<218.0,718.0>--<218.0,277.0>>

	* uni013C (U+013C): L<<228.0,790.0>--<225.0,718.0>> -> L<<225.0,718.0>--<225.0,50.0>>

	* uni0237 (U+0237): L<<237.0,500.0>--<235.0,430.0>> -> L<<235.0,430.0>--<235.0,52.0>>

	* uni1EF9 (U+1EF9): L<<474.0,442.0>--<271.0,0.0>> -> L<<271.0,0.0>--<180.0,-216.0>>

	* y (U+0079): L<<474.0,442.0>--<271.0,0.0>> -> L<<271.0,0.0>--<180.0,-216.0>>

	* yacute (U+00FD): L<<474.0,442.0>--<271.0,0.0>> -> L<<271.0,0.0>--<180.0,-216.0>>

	* ycircumflex (U+0177): L<<474.0,442.0>--<271.0,0.0>> -> L<<271.0,0.0>--<180.0,-216.0>>

	* ydieresis (U+00FF): L<<474.0,442.0>--<271.0,0.0>> -> L<<271.0,0.0>--<180.0,-216.0>>

	* ygrave (U+1EF3): L<<474.0,442.0>--<271.0,0.0>> -> L<<271.0,0.0>--<180.0,-216.0>> [code: found-colinear-vectors]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Shaping Checks>.html#com.google.fonts/check/soft_dotted">com.google.fonts/check/soft_dotted</a>)</summary><div>


* ⚠ **WARN** The dot of soft dotted characters used in orthographies _must_ disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌

The dot of soft dotted characters _should_ disappear in other cases, for example: į̆ į̇ į̈ į̊ į̋ į̒ į̧̀ į̧́ į̧̂ į̧̃ į̧̄ į̧̆ į̧̇ į̧̈ į̧̊ į̧̋ į̧̌ į̧̒ į̨̀ į̨́

Your font fully covers the following languages that require the soft-dotted feature: Lithuanian (Latn, 2,357,094 speakers), Dutch (Latn, 31,709,104 speakers). 

Your font does *not* cover the following languages that require the soft-dotted feature: Zapotec (Latn, 490,000 speakers), Ijo, Southeast (Latn, 2,471,000 speakers), Navajo (Latn, 166,319 speakers), Kom (Latn, 360,685 speakers), Lugbara (Latn, 2,200,000 speakers), Makaa (Latn, 221,000 speakers), Mfumte (Latn, 79,000 speakers), Southern Kisi (Latn, 360,000 speakers), Bete-Bendi (Latn, 100,000 speakers), Basaa (Latn, 332,940 speakers), Ma’di (Latn, 584,000 speakers), Igbo (Latn, 27,823,640 speakers), Ngbaka (Latn, 1,020,000 speakers), Ebira (Latn, 2,200,000 speakers), Dii (Latn, 71,000 speakers), Belarusian (Cyrl, 10,064,517 speakers), Aghem (Latn, 38,843 speakers), Dan (Latn, 1,099,244 speakers), Kpelle, Guinea (Latn, 622,000 speakers), Ukrainian (Cyrl, 29,273,587 speakers), South Central Banda (Latn, 244,000 speakers), Avokaya (Latn, 100,000 speakers), Cicipu (Latn, 44,000 speakers), Ejagham (Latn, 120,000 speakers), Nzakara (Latn, 50,000 speakers), Fur (Latn, 1,230,163 speakers), Nateni (Latn, 100,000 speakers), Mundani (Latn, 34,000 speakers), Koonzime (Latn, 40,000 speakers), Gulay (Latn, 250,478 speakers), Ekpeye (Latn, 226,000 speakers), Bafut (Latn, 158,146 speakers), Yala (Latn, 200,000 speakers), Mango (Latn, 77,000 speakers), Sar (Latn, 500,000 speakers). [code: soft-dotted]
</div></details><br></div></details><details><summary><b>[13] Wittgenstein-SemiBoldItalic.ttf</b></summary><div><details><summary>🔥 <b>FAIL:</b> Check font names are correct (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/font_names">com.google.fonts/check/font_names</a>)</summary><div>


* 🔥 **FAIL** Font names are incorrect:

| nameID | current | expected |
| :--- | :--- | :--- |
| Family Name | **Wittgenstein SemiBold Italic** | **Wittgenstein SemiBold** |
| Subfamily Name | **Regular** | **Italic** |
| Full Name | Wittgenstein SemiBold Italic | Wittgenstein SemiBold Italic |
| Postscript Name | Wittgenstein-SemiBoldItalic | Wittgenstein-SemiBoldItalic |
| Typographic Family Name | Wittgenstein | Wittgenstein |
| Typographic Subfamily Name | SemiBold Italic | SemiBold Italic | [code: bad-names]
</div></details><details><summary>🔥 <b>FAIL:</b> Checking head.macStyle value. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/head.html#com.google.fonts/check/mac_style">com.google.fonts/check/mac_style</a>)</summary><div>


* 🔥 **FAIL** head macStyle ITALIC bit should be set. [code: bad-ITALIC]
</div></details><details><summary>🔥 <b>FAIL:</b> Checking OS/2 fsSelection value. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/os2.html#com.google.fonts/check/fsselection">com.google.fonts/check/fsselection</a>)</summary><div>


* 🔥 **FAIL** OS/2 fsSelection REGULAR bit should be unset. [code: bad-REGULAR]
* 🔥 **FAIL** OS/2 fsSelection ITALIC bit should be set. [code: bad-ITALIC]
</div></details><details><summary>🔥 <b>FAIL:</b> Check name table IDs 1, 2, 16, 17 to conform to Italic style. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/name.html#com.google.fonts/check/name/italic_names">com.google.fonts/check/name/italic_names</a>)</summary><div>


* 🔥 **FAIL** Name ID 1 (Family Name) must not contain 'Italic'. [code: bad-familyname]
* 🔥 **FAIL** Name ID 2 (Subfamily Name) does not conform to specs. Only R/I/B/BI are allowed.
Got: 'Regular'. [code: bad-subfamilyname]
</div></details><details><summary>⚠ <b>WARN:</b> Check for codepoints not covered by METADATA subsets. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/metadata/unreachable_subsetting">com.google.fonts/check/metadata/unreachable_subsetting</a>)</summary><div>


* ⚠ **WARN** The following codepoints supported by the font are not covered by
    any subsets defined in the font's metadata file, and will never
    be served. You can solve this by either manually adding additional
    subset declarations to METADATA.pb, or by editing the glyphset
    definitions.

 * U+02C7 CARON: try adding one of: tifinagh, canadian-aboriginal, yi
 * U+02D8 BREVE: try adding one of: canadian-aboriginal, yi
 * U+02D9 DOT ABOVE: try adding one of: canadian-aboriginal, yi
 * U+02DB OGONEK: try adding one of: canadian-aboriginal, yi
 * U+02DD DOUBLE ACUTE ACCENT: not included in any glyphset definition
 * U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: coptic, math, tifinagh, cherokee
 * U+0306 COMBINING BREVE: try adding one of: old-permic, tifinagh
 * U+0307 COMBINING DOT ABOVE: try adding one of: coptic, old-permic, tai-le, canadian-aboriginal, tifinagh, syriac, math, malayalam
 * U+030A COMBINING RING ABOVE: try adding syriac
 * U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee
 * U+030C COMBINING CARON: try adding one of: tai-le, cherokee
 * U+0312 COMBINING TURNED COMMA ABOVE: not included in any glyphset definition
 * U+0326 COMBINING COMMA BELOW: not included in any glyphset definition
 * U+0327 COMBINING CEDILLA: not included in any glyphset definition
 * U+0328 COMBINING OGONEK: not included in any glyphset definition
 * U+03C0 GREEK SMALL LETTER PI: try adding one of: math, greek, yi
 * U+0E3F THAI CURRENCY SYMBOL BAHT: try adding thai
 * U+1EBC LATIN CAPITAL LETTER E WITH TILDE: try adding vietnamese
 * U+1EBD LATIN SMALL LETTER E WITH TILDE: try adding vietnamese
 * U+2000 EN QUAD: not included in any glyphset definition
 * U+2001 EM QUAD: not included in any glyphset definition
 * U+2003 EM SPACE: try adding nushu
 * U+2004 THREE-PER-EM SPACE: not included in any glyphset definition
 * U+2005 FOUR-PER-EM SPACE: not included in any glyphset definition
 * U+2006 SIX-PER-EM SPACE: not included in any glyphset definition
 * U+2007 FIGURE SPACE: not included in any glyphset definition
 * U+2008 PUNCTUATION SPACE: not included in any glyphset definition
 * U+200A HAIR SPACE: not included in any glyphset definition
 * U+200C ZERO WIDTH NON-JOINER: try adding one of: avestan, telugu, dogra, balinese, lepcha, rejang, yi, tirhuta, bengali, kayah-li, tifinagh, khudawadi, buginese, meetei-mayek, oriya, batak, tai-viet, kaithi, mongolian, khmer, tagalog, tai-le, tamil, buhid, mahajani, pahawh-hmong, javanese, khojki, phags-pa, devanagari, brahmi, duployan, hanunoo, sundanese, saurashtra, malayalam, hanifi-rohingya, warang-citi, manichaean, siddham, sinhala, mandaic, kharoshthi, kannada, syriac, chakma, cham, takri, thaana, nko, modi, gujarati, myanmar, psalter-pahlavi, gurmukhi, sharada, hatran, tagbanwa, new-tai-lue, thai, newa, syloti-nagri, tibetan, grantha, tai-tham, gunjala-gondi, limbu, sogdian
 * U+200D ZERO WIDTH JOINER: try adding one of: emoji, avestan, telugu, dogra, balinese, lepcha, rejang, yi, tirhuta, bengali, kayah-li, tifinagh, khudawadi, buginese, meetei-mayek, oriya, batak, tai-viet, kaithi, mongolian, tagalog, tai-le, tamil, buhid, mahajani, pahawh-hmong, javanese, khojki, phags-pa, devanagari, brahmi, duployan, hanunoo, sundanese, saurashtra, malayalam, hanifi-rohingya, warang-citi, manichaean, siddham, sinhala, mandaic, kharoshthi, kannada, syriac, chakma, cham, takri, thaana, old-hungarian, nko, modi, gujarati, myanmar, psalter-pahlavi, gurmukhi, sharada, thai, tagbanwa, new-tai-lue, newa, syloti-nagri, tibetan, grantha, tai-tham, gunjala-gondi, limbu
 * U+200E LEFT-TO-RIGHT MARK: try adding one of: nko, thaana, syriac, phags-pa
 * U+200F RIGHT-TO-LEFT MARK: try adding one of: nko, thaana, syriac, phags-pa
 * U+2016 DOUBLE VERTICAL LINE: not included in any glyphset definition
 * U+2021 DOUBLE DAGGER: try adding adlam
 * U+202F NARROW NO-BREAK SPACE: try adding one of: mongolian, yi
 * U+2030 PER MILLE SIGN: try adding adlam
 * U+205F MEDIUM MATHEMATICAL SPACE: not included in any glyphset definition
 * U+2126 OHM SIGN: not included in any glyphset definition
 * U+212E ESTIMATED SYMBOL: not included in any glyphset definition
 * U+2153 VULGAR FRACTION ONE THIRD: not included in any glyphset definition
 * U+2154 VULGAR FRACTION TWO THIRDS: not included in any glyphset definition
 * U+2190 LEFTWARDS ARROW: try adding one of: math, symbols
 * U+2192 RIGHTWARDS ARROW: try adding one of: math, symbols
 * U+2194 LEFT RIGHT ARROW: try adding one of: emoji, math, symbols
 * U+2195 UP DOWN ARROW: try adding one of: emoji, math, symbols
 * U+2196 NORTH WEST ARROW: try adding one of: emoji, math, symbols
 * U+2197 NORTH EAST ARROW: try adding one of: emoji, math, symbols
 * U+2198 SOUTH EAST ARROW: try adding one of: emoji, math, symbols
 * U+2199 SOUTH WEST ARROW: try adding one of: emoji, math, symbols
 * U+2202 PARTIAL DIFFERENTIAL: try adding math
 * U+2205 EMPTY SET: try adding math
 * U+2206 INCREMENT: try adding math
 * U+220F N-ARY PRODUCT: try adding math
 * U+2211 N-ARY SUMMATION: try adding math
 * U+221A SQUARE ROOT: try adding math
 * U+221E INFINITY: try adding math
 * U+222B INTEGRAL: try adding math
 * U+2248 ALMOST EQUAL TO: try adding math
 * U+2260 NOT EQUAL TO: try adding math
 * U+2264 LESS-THAN OR EQUAL TO: try adding math
 * U+2265 GREATER-THAN OR EQUAL TO: try adding math
 * U+25A0 BLACK SQUARE: try adding symbols
 * U+25A1 WHITE SQUARE: try adding symbols
 * U+25AA BLACK SMALL SQUARE: try adding one of: emoji, symbols
 * U+25AB WHITE SMALL SQUARE: try adding one of: emoji, symbols
 * U+25B2 BLACK UP-POINTING TRIANGLE: try adding symbols
 * U+25B3 WHITE UP-POINTING TRIANGLE: try adding one of: math, symbols
 * U+25B4 BLACK UP-POINTING SMALL TRIANGLE: try adding symbols
 * U+25B5 WHITE UP-POINTING SMALL TRIANGLE: try adding symbols
 * U+25B6 BLACK RIGHT-POINTING TRIANGLE: try adding one of: emoji, symbols
 * U+25B7 WHITE RIGHT-POINTING TRIANGLE: try adding one of: math, symbols
 * U+25B8 BLACK RIGHT-POINTING SMALL TRIANGLE: try adding symbols
 * U+25B9 WHITE RIGHT-POINTING SMALL TRIANGLE: try adding symbols
 * U+25BC BLACK DOWN-POINTING TRIANGLE: try adding symbols
 * U+25BD WHITE DOWN-POINTING TRIANGLE: try adding one of: math, symbols
 * U+25BE BLACK DOWN-POINTING SMALL TRIANGLE: try adding symbols
 * U+25BF WHITE DOWN-POINTING SMALL TRIANGLE: try adding symbols
 * U+25C0 BLACK LEFT-POINTING TRIANGLE: try adding one of: emoji, symbols
 * U+25C1 WHITE LEFT-POINTING TRIANGLE: try adding one of: math, symbols
 * U+25C2 BLACK LEFT-POINTING SMALL TRIANGLE: try adding symbols
 * U+25C3 WHITE LEFT-POINTING SMALL TRIANGLE: try adding symbols
 * U+25C6 BLACK DIAMOND: try adding symbols
 * U+25C7 WHITE DIAMOND: try adding symbols
 * U+25CA LOZENGE: try adding one of: math, symbols
 * U+25CB WHITE CIRCLE: try adding symbols
 * U+25CC DOTTED CIRCLE: try adding one of: balinese, adlam, soyombo, oriya, caucasian-albanian, khmer, tagalog, mahajani, brahmi, sundanese, malayalam, hanifi-rohingya, siddham, zanabazar-square, syriac, mende-kikakui, cham, takri, lao, modi, thai, newa, wancho, grantha, kayah-li, bassa-vah, lepcha, yi, tirhuta, tifinagh, buginese, batak, mongolian, coptic, sinhala, thaana, old-permic, gujarati, gurmukhi, sharada, tagbanwa, syloti-nagri, tibetan, telugu, sogdian, rejang, symbols, khudawadi, meetei-mayek, tai-le, osage, buhid, pahawh-hmong, khojki, masaram-gondi, phags-pa, devanagari, hanunoo, bhaiksuki, mandaic, kannada, chakma, miao, nko, myanmar, math, elbasan, dogra, bengali, music, tai-viet, kaithi, tamil, javanese, duployan, ahom, hebrew, manichaean, kharoshthi, psalter-pahlavi, new-tai-lue, marchen, gunjala-gondi, limbu
 * U+25CF BLACK CIRCLE: try adding symbols
 * U+25E6 WHITE BULLET: try adding symbols
 * U+27E8 MATHEMATICAL LEFT ANGLE BRACKET: try adding math
 * U+27E9 MATHEMATICAL RIGHT ANGLE BRACKET: try adding math

Or you can add the above codepoints to one of the subsets supported by the font: `cyrillic-ext`, `latin`, `latin-ext` [code: unreachable-subsetting]
</div></details><details><summary>⚠ <b>WARN:</b> Are there caret positions declared for every ligature? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/ligature_carets">com.google.fonts/check/ligature_carets</a>)</summary><div>


* ⚠ **WARN** This font lacks caret position values for ligature glyphs on its GDEF table. [code: lacks-caret-pos]
</div></details><details><summary>⚠ <b>WARN:</b> Is there kerning info for non-ligated sequences? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/kerning_for_non_ligated_sequences">com.google.fonts/check/kerning_for_non_ligated_sequences</a>)</summary><div>


* ⚠ **WARN** GPOS table lacks kerning info for the following non-ligated sequences:

	- f + i

	- i + l [code: lacks-kern-info]
</div></details><details><summary>⚠ <b>WARN:</b> Check font follows the Google Fonts vertical metric schema (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/vertical_metrics">com.google.fonts/check/vertical_metrics</a>)</summary><div>


* ⚠ **WARN** We recommend the absolute sum of the hhea metrics should be between 1.2-1.5x of the font's upm. This font has 1.65x (1650) [code: bad-hhea-range]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure fonts have ScriptLangTags declared on the 'meta' table. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/meta/script_lang_tags">com.google.fonts/check/meta/script_lang_tags</a>)</summary><div>


* ⚠ **WARN** This font file does not have a 'meta' table. [code: lacks-meta-table]
</div></details><details><summary>⚠ <b>WARN:</b> Check font contains no unreachable glyphs (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/unreachable_glyphs">com.google.fonts/check/unreachable_glyphs</a>)</summary><div>


* ⚠ **WARN** The following glyphs could not be reached by codepoint or substitution rules:

	- eight.inferior

	- eight.osf.tosf

	- eight.superior

	- five.inferior

	- five.osf.tosf

	- five.superior

	- four.inferior

	- four.osf.tosf

	- four.superior

	- nine.inferior

	- nine.osf.tosf

	- nine.superior

	- one.inferior

	- one.osf.tosf

	- one.superior

	- seven.inferior

	- seven.osf.tosf

	- seven.superior

	- six.inferior

	- six.osf.tosf

	- six.superior

	- three.inferior

	- three.osf.tosf

	- three.superior

	- two.inferior

	- two.osf.tosf

	- two.superior

	- uni004A0301

	- uni006A0301

	- zero.inferior

	- zero.osf.tosf

	- zero.superior
 [code: unreachable-glyphs]
</div></details><details><summary>⚠ <b>WARN:</b> Check if each glyph has the recommended amount of contours. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/contour_count">com.google.fonts/check/contour_count</a>)</summary><div>


* ⚠ **WARN** This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.

The following glyphs do not have the recommended number of contours:

	- Glyph name: aogonek	Contours detected: 3	Expected: 2

	- Glyph name: eogonek	Contours detected: 3	Expected: 2

	- Glyph name: Uogonek	Contours detected: 2	Expected: 1

	- Glyph name: uogonek	Contours detected: 2	Expected: 1

	- Glyph name: uni20BF	Contours detected: 7	Expected: 3

	- Glyph name: Uogonek	Contours detected: 2	Expected: 1

	- Glyph name: aogonek	Contours detected: 3	Expected: 2

	- Glyph name: eogonek	Contours detected: 3	Expected: 2

	- Glyph name: uni20BF	Contours detected: 7	Expected: 3

	- Glyph name: uogonek	Contours detected: 2	Expected: 1
 [code: contour-count]
</div></details><details><summary>⚠ <b>WARN:</b> Do any segments have colinear vectors? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Outline Correctness Checks>.html#com.google.fonts/check/outline_colinear_vectors">com.google.fonts/check/outline_colinear_vectors</a>)</summary><div>


* ⚠ **WARN** The following glyphs have colinear vectors:

	* thorn (U+00FE): L<<298.0,790.0>--<280.0,713.0>> -> L<<280.0,713.0>--<235.0,481.0>>

	* uni1EF9 (U+1EF9): L<<508.0,444.0>--<223.0,1.0>> -> L<<223.0,1.0>--<89.0,-216.0>>

	* y (U+0079): L<<508.0,444.0>--<223.0,1.0>> -> L<<223.0,1.0>--<89.0,-216.0>>

	* yacute (U+00FD): L<<508.0,444.0>--<223.0,1.0>> -> L<<223.0,1.0>--<89.0,-216.0>>

	* ycircumflex (U+0177): L<<508.0,444.0>--<223.0,1.0>> -> L<<223.0,1.0>--<89.0,-216.0>>

	* ydieresis (U+00FF): L<<508.0,444.0>--<223.0,1.0>> -> L<<223.0,1.0>--<89.0,-216.0>>

	* ygrave (U+1EF3): L<<508.0,444.0>--<223.0,1.0>> -> L<<223.0,1.0>--<89.0,-216.0>> [code: found-colinear-vectors]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Shaping Checks>.html#com.google.fonts/check/soft_dotted">com.google.fonts/check/soft_dotted</a>)</summary><div>


* ⚠ **WARN** The dot of soft dotted characters used in orthographies _must_ disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌

The dot of soft dotted characters _should_ disappear in other cases, for example: į̆ į̇ į̈ į̊ į̋ į̒ į̧̀ į̧́ į̧̂ į̧̃ į̧̄ į̧̆ į̧̇ į̧̈ į̧̊ į̧̋ į̧̌ į̧̒ į̨̀ į̨́

Your font fully covers the following languages that require the soft-dotted feature: Lithuanian (Latn, 2,357,094 speakers), Dutch (Latn, 31,709,104 speakers). 

Your font does *not* cover the following languages that require the soft-dotted feature: Zapotec (Latn, 490,000 speakers), Ijo, Southeast (Latn, 2,471,000 speakers), Navajo (Latn, 166,319 speakers), Kom (Latn, 360,685 speakers), Lugbara (Latn, 2,200,000 speakers), Makaa (Latn, 221,000 speakers), Mfumte (Latn, 79,000 speakers), Southern Kisi (Latn, 360,000 speakers), Bete-Bendi (Latn, 100,000 speakers), Basaa (Latn, 332,940 speakers), Ma’di (Latn, 584,000 speakers), Igbo (Latn, 27,823,640 speakers), Ngbaka (Latn, 1,020,000 speakers), Ebira (Latn, 2,200,000 speakers), Dii (Latn, 71,000 speakers), Belarusian (Cyrl, 10,064,517 speakers), Aghem (Latn, 38,843 speakers), Dan (Latn, 1,099,244 speakers), Kpelle, Guinea (Latn, 622,000 speakers), Ukrainian (Cyrl, 29,273,587 speakers), South Central Banda (Latn, 244,000 speakers), Avokaya (Latn, 100,000 speakers), Cicipu (Latn, 44,000 speakers), Ejagham (Latn, 120,000 speakers), Nzakara (Latn, 50,000 speakers), Fur (Latn, 1,230,163 speakers), Nateni (Latn, 100,000 speakers), Mundani (Latn, 34,000 speakers), Koonzime (Latn, 40,000 speakers), Gulay (Latn, 250,478 speakers), Ekpeye (Latn, 226,000 speakers), Bafut (Latn, 158,146 speakers), Yala (Latn, 200,000 speakers), Mango (Latn, 77,000 speakers), Sar (Latn, 500,000 speakers). [code: soft-dotted]
</div></details><br></div></details><details><summary><b>[13] Wittgenstein-BlackItalic.ttf</b></summary><div><details><summary>🔥 <b>FAIL:</b> Check font names are correct (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/font_names">com.google.fonts/check/font_names</a>)</summary><div>


* 🔥 **FAIL** Font names are incorrect:

| nameID | current | expected |
| :--- | :--- | :--- |
| Family Name | **Wittgenstein Black Italic** | **Wittgenstein Black** |
| Subfamily Name | **Regular** | **Italic** |
| Full Name | Wittgenstein Black Italic | Wittgenstein Black Italic |
| Postscript Name | Wittgenstein-BlackItalic | Wittgenstein-BlackItalic |
| Typographic Family Name | Wittgenstein | Wittgenstein |
| Typographic Subfamily Name | Black Italic | Black Italic | [code: bad-names]
</div></details><details><summary>🔥 <b>FAIL:</b> Checking head.macStyle value. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/head.html#com.google.fonts/check/mac_style">com.google.fonts/check/mac_style</a>)</summary><div>


* 🔥 **FAIL** head macStyle ITALIC bit should be set. [code: bad-ITALIC]
</div></details><details><summary>🔥 <b>FAIL:</b> Checking OS/2 fsSelection value. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/os2.html#com.google.fonts/check/fsselection">com.google.fonts/check/fsselection</a>)</summary><div>


* 🔥 **FAIL** OS/2 fsSelection REGULAR bit should be unset. [code: bad-REGULAR]
* 🔥 **FAIL** OS/2 fsSelection ITALIC bit should be set. [code: bad-ITALIC]
</div></details><details><summary>🔥 <b>FAIL:</b> Check name table IDs 1, 2, 16, 17 to conform to Italic style. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/name.html#com.google.fonts/check/name/italic_names">com.google.fonts/check/name/italic_names</a>)</summary><div>


* 🔥 **FAIL** Name ID 1 (Family Name) must not contain 'Italic'. [code: bad-familyname]
* 🔥 **FAIL** Name ID 2 (Subfamily Name) does not conform to specs. Only R/I/B/BI are allowed.
Got: 'Regular'. [code: bad-subfamilyname]
</div></details><details><summary>⚠ <b>WARN:</b> Check for codepoints not covered by METADATA subsets. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/metadata/unreachable_subsetting">com.google.fonts/check/metadata/unreachable_subsetting</a>)</summary><div>


* ⚠ **WARN** The following codepoints supported by the font are not covered by
    any subsets defined in the font's metadata file, and will never
    be served. You can solve this by either manually adding additional
    subset declarations to METADATA.pb, or by editing the glyphset
    definitions.

 * U+02C7 CARON: try adding one of: tifinagh, canadian-aboriginal, yi
 * U+02D8 BREVE: try adding one of: canadian-aboriginal, yi
 * U+02D9 DOT ABOVE: try adding one of: canadian-aboriginal, yi
 * U+02DB OGONEK: try adding one of: canadian-aboriginal, yi
 * U+02DD DOUBLE ACUTE ACCENT: not included in any glyphset definition
 * U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: coptic, math, tifinagh, cherokee
 * U+0306 COMBINING BREVE: try adding one of: old-permic, tifinagh
 * U+0307 COMBINING DOT ABOVE: try adding one of: coptic, old-permic, tai-le, canadian-aboriginal, tifinagh, syriac, math, malayalam
 * U+030A COMBINING RING ABOVE: try adding syriac
 * U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee
 * U+030C COMBINING CARON: try adding one of: tai-le, cherokee
 * U+0312 COMBINING TURNED COMMA ABOVE: not included in any glyphset definition
 * U+0326 COMBINING COMMA BELOW: not included in any glyphset definition
 * U+0327 COMBINING CEDILLA: not included in any glyphset definition
 * U+0328 COMBINING OGONEK: not included in any glyphset definition
 * U+03C0 GREEK SMALL LETTER PI: try adding one of: math, greek, yi
 * U+0E3F THAI CURRENCY SYMBOL BAHT: try adding thai
 * U+1EBC LATIN CAPITAL LETTER E WITH TILDE: try adding vietnamese
 * U+1EBD LATIN SMALL LETTER E WITH TILDE: try adding vietnamese
 * U+2000 EN QUAD: not included in any glyphset definition
 * U+2001 EM QUAD: not included in any glyphset definition
 * U+2003 EM SPACE: try adding nushu
 * U+2004 THREE-PER-EM SPACE: not included in any glyphset definition
 * U+2005 FOUR-PER-EM SPACE: not included in any glyphset definition
 * U+2006 SIX-PER-EM SPACE: not included in any glyphset definition
 * U+2007 FIGURE SPACE: not included in any glyphset definition
 * U+2008 PUNCTUATION SPACE: not included in any glyphset definition
 * U+200A HAIR SPACE: not included in any glyphset definition
 * U+200C ZERO WIDTH NON-JOINER: try adding one of: avestan, telugu, dogra, balinese, lepcha, rejang, yi, tirhuta, bengali, kayah-li, tifinagh, khudawadi, buginese, meetei-mayek, oriya, batak, tai-viet, kaithi, mongolian, khmer, tagalog, tai-le, tamil, buhid, mahajani, pahawh-hmong, javanese, khojki, phags-pa, devanagari, brahmi, duployan, hanunoo, sundanese, saurashtra, malayalam, hanifi-rohingya, warang-citi, manichaean, siddham, sinhala, mandaic, kharoshthi, kannada, syriac, chakma, cham, takri, thaana, nko, modi, gujarati, myanmar, psalter-pahlavi, gurmukhi, sharada, hatran, tagbanwa, new-tai-lue, thai, newa, syloti-nagri, tibetan, grantha, tai-tham, gunjala-gondi, limbu, sogdian
 * U+200D ZERO WIDTH JOINER: try adding one of: emoji, avestan, telugu, dogra, balinese, lepcha, rejang, yi, tirhuta, bengali, kayah-li, tifinagh, khudawadi, buginese, meetei-mayek, oriya, batak, tai-viet, kaithi, mongolian, tagalog, tai-le, tamil, buhid, mahajani, pahawh-hmong, javanese, khojki, phags-pa, devanagari, brahmi, duployan, hanunoo, sundanese, saurashtra, malayalam, hanifi-rohingya, warang-citi, manichaean, siddham, sinhala, mandaic, kharoshthi, kannada, syriac, chakma, cham, takri, thaana, old-hungarian, nko, modi, gujarati, myanmar, psalter-pahlavi, gurmukhi, sharada, thai, tagbanwa, new-tai-lue, newa, syloti-nagri, tibetan, grantha, tai-tham, gunjala-gondi, limbu
 * U+200E LEFT-TO-RIGHT MARK: try adding one of: nko, thaana, syriac, phags-pa
 * U+200F RIGHT-TO-LEFT MARK: try adding one of: nko, thaana, syriac, phags-pa
 * U+2016 DOUBLE VERTICAL LINE: not included in any glyphset definition
 * U+2021 DOUBLE DAGGER: try adding adlam
 * U+202F NARROW NO-BREAK SPACE: try adding one of: mongolian, yi
 * U+2030 PER MILLE SIGN: try adding adlam
 * U+205F MEDIUM MATHEMATICAL SPACE: not included in any glyphset definition
 * U+2126 OHM SIGN: not included in any glyphset definition
 * U+212E ESTIMATED SYMBOL: not included in any glyphset definition
 * U+2153 VULGAR FRACTION ONE THIRD: not included in any glyphset definition
 * U+2154 VULGAR FRACTION TWO THIRDS: not included in any glyphset definition
 * U+2190 LEFTWARDS ARROW: try adding one of: math, symbols
 * U+2192 RIGHTWARDS ARROW: try adding one of: math, symbols
 * U+2194 LEFT RIGHT ARROW: try adding one of: emoji, math, symbols
 * U+2195 UP DOWN ARROW: try adding one of: emoji, math, symbols
 * U+2196 NORTH WEST ARROW: try adding one of: emoji, math, symbols
 * U+2197 NORTH EAST ARROW: try adding one of: emoji, math, symbols
 * U+2198 SOUTH EAST ARROW: try adding one of: emoji, math, symbols
 * U+2199 SOUTH WEST ARROW: try adding one of: emoji, math, symbols
 * U+2202 PARTIAL DIFFERENTIAL: try adding math
 * U+2205 EMPTY SET: try adding math
 * U+2206 INCREMENT: try adding math
 * U+220F N-ARY PRODUCT: try adding math
 * U+2211 N-ARY SUMMATION: try adding math
 * U+221A SQUARE ROOT: try adding math
 * U+221E INFINITY: try adding math
 * U+222B INTEGRAL: try adding math
 * U+2248 ALMOST EQUAL TO: try adding math
 * U+2260 NOT EQUAL TO: try adding math
 * U+2264 LESS-THAN OR EQUAL TO: try adding math
 * U+2265 GREATER-THAN OR EQUAL TO: try adding math
 * U+25A0 BLACK SQUARE: try adding symbols
 * U+25A1 WHITE SQUARE: try adding symbols
 * U+25AA BLACK SMALL SQUARE: try adding one of: emoji, symbols
 * U+25AB WHITE SMALL SQUARE: try adding one of: emoji, symbols
 * U+25B2 BLACK UP-POINTING TRIANGLE: try adding symbols
 * U+25B3 WHITE UP-POINTING TRIANGLE: try adding one of: math, symbols
 * U+25B4 BLACK UP-POINTING SMALL TRIANGLE: try adding symbols
 * U+25B5 WHITE UP-POINTING SMALL TRIANGLE: try adding symbols
 * U+25B6 BLACK RIGHT-POINTING TRIANGLE: try adding one of: emoji, symbols
 * U+25B7 WHITE RIGHT-POINTING TRIANGLE: try adding one of: math, symbols
 * U+25B8 BLACK RIGHT-POINTING SMALL TRIANGLE: try adding symbols
 * U+25B9 WHITE RIGHT-POINTING SMALL TRIANGLE: try adding symbols
 * U+25BC BLACK DOWN-POINTING TRIANGLE: try adding symbols
 * U+25BD WHITE DOWN-POINTING TRIANGLE: try adding one of: math, symbols
 * U+25BE BLACK DOWN-POINTING SMALL TRIANGLE: try adding symbols
 * U+25BF WHITE DOWN-POINTING SMALL TRIANGLE: try adding symbols
 * U+25C0 BLACK LEFT-POINTING TRIANGLE: try adding one of: emoji, symbols
 * U+25C1 WHITE LEFT-POINTING TRIANGLE: try adding one of: math, symbols
 * U+25C2 BLACK LEFT-POINTING SMALL TRIANGLE: try adding symbols
 * U+25C3 WHITE LEFT-POINTING SMALL TRIANGLE: try adding symbols
 * U+25C6 BLACK DIAMOND: try adding symbols
 * U+25C7 WHITE DIAMOND: try adding symbols
 * U+25CA LOZENGE: try adding one of: math, symbols
 * U+25CB WHITE CIRCLE: try adding symbols
 * U+25CC DOTTED CIRCLE: try adding one of: balinese, adlam, soyombo, oriya, caucasian-albanian, khmer, tagalog, mahajani, brahmi, sundanese, malayalam, hanifi-rohingya, siddham, zanabazar-square, syriac, mende-kikakui, cham, takri, lao, modi, thai, newa, wancho, grantha, kayah-li, bassa-vah, lepcha, yi, tirhuta, tifinagh, buginese, batak, mongolian, coptic, sinhala, thaana, old-permic, gujarati, gurmukhi, sharada, tagbanwa, syloti-nagri, tibetan, telugu, sogdian, rejang, symbols, khudawadi, meetei-mayek, tai-le, osage, buhid, pahawh-hmong, khojki, masaram-gondi, phags-pa, devanagari, hanunoo, bhaiksuki, mandaic, kannada, chakma, miao, nko, myanmar, math, elbasan, dogra, bengali, music, tai-viet, kaithi, tamil, javanese, duployan, ahom, hebrew, manichaean, kharoshthi, psalter-pahlavi, new-tai-lue, marchen, gunjala-gondi, limbu
 * U+25CF BLACK CIRCLE: try adding symbols
 * U+25E6 WHITE BULLET: try adding symbols
 * U+27E8 MATHEMATICAL LEFT ANGLE BRACKET: try adding math
 * U+27E9 MATHEMATICAL RIGHT ANGLE BRACKET: try adding math

Or you can add the above codepoints to one of the subsets supported by the font: `cyrillic-ext`, `latin`, `latin-ext` [code: unreachable-subsetting]
</div></details><details><summary>⚠ <b>WARN:</b> Are there caret positions declared for every ligature? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/ligature_carets">com.google.fonts/check/ligature_carets</a>)</summary><div>


* ⚠ **WARN** This font lacks caret position values for ligature glyphs on its GDEF table. [code: lacks-caret-pos]
</div></details><details><summary>⚠ <b>WARN:</b> Is there kerning info for non-ligated sequences? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/kerning_for_non_ligated_sequences">com.google.fonts/check/kerning_for_non_ligated_sequences</a>)</summary><div>


* ⚠ **WARN** GPOS table lacks kerning info for the following non-ligated sequences:

	- f + i

	- i + l [code: lacks-kern-info]
</div></details><details><summary>⚠ <b>WARN:</b> Check font follows the Google Fonts vertical metric schema (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/vertical_metrics">com.google.fonts/check/vertical_metrics</a>)</summary><div>


* ⚠ **WARN** We recommend the absolute sum of the hhea metrics should be between 1.2-1.5x of the font's upm. This font has 1.65x (1650) [code: bad-hhea-range]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure fonts have ScriptLangTags declared on the 'meta' table. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/meta/script_lang_tags">com.google.fonts/check/meta/script_lang_tags</a>)</summary><div>


* ⚠ **WARN** This font file does not have a 'meta' table. [code: lacks-meta-table]
</div></details><details><summary>⚠ <b>WARN:</b> Check font contains no unreachable glyphs (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/unreachable_glyphs">com.google.fonts/check/unreachable_glyphs</a>)</summary><div>


* ⚠ **WARN** The following glyphs could not be reached by codepoint or substitution rules:

	- eight.inferior

	- eight.osf.tosf

	- eight.superior

	- five.inferior

	- five.osf.tosf

	- five.superior

	- four.inferior

	- four.osf.tosf

	- four.superior

	- nine.inferior

	- nine.osf.tosf

	- nine.superior

	- one.inferior

	- one.osf.tosf

	- one.superior

	- seven.inferior

	- seven.osf.tosf

	- seven.superior

	- six.inferior

	- six.osf.tosf

	- six.superior

	- three.inferior

	- three.osf.tosf

	- three.superior

	- two.inferior

	- two.osf.tosf

	- two.superior

	- uni004A0301

	- uni006A0301

	- zero.inferior

	- zero.osf.tosf

	- zero.superior
 [code: unreachable-glyphs]
</div></details><details><summary>⚠ <b>WARN:</b> Check if each glyph has the recommended amount of contours. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/contour_count">com.google.fonts/check/contour_count</a>)</summary><div>


* ⚠ **WARN** This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.

The following glyphs do not have the recommended number of contours:

	- Glyph name: aogonek	Contours detected: 3	Expected: 2

	- Glyph name: eogonek	Contours detected: 3	Expected: 2

	- Glyph name: Uogonek	Contours detected: 2	Expected: 1

	- Glyph name: uogonek	Contours detected: 2	Expected: 1

	- Glyph name: uni20A6	Contours detected: 2	Expected: 1, 3 or 5

	- Glyph name: uni20BF	Contours detected: 7	Expected: 3

	- Glyph name: Uogonek	Contours detected: 2	Expected: 1

	- Glyph name: aogonek	Contours detected: 3	Expected: 2

	- Glyph name: eogonek	Contours detected: 3	Expected: 2

	- Glyph name: uni20A6	Contours detected: 2	Expected: 1, 3 or 5

	- Glyph name: uni20BF	Contours detected: 7	Expected: 3

	- Glyph name: uogonek	Contours detected: 2	Expected: 1
 [code: contour-count]
</div></details><details><summary>⚠ <b>WARN:</b> Do any segments have colinear vectors? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Outline Correctness Checks>.html#com.google.fonts/check/outline_colinear_vectors">com.google.fonts/check/outline_colinear_vectors</a>)</summary><div>


* ⚠ **WARN** The following glyphs have colinear vectors:

	* thorn (U+00FE): L<<329.0,784.0>--<312.0,705.0>> -> L<<312.0,705.0>--<273.0,506.0>>

	* uni1EF9 (U+1EF9): L<<534.0,436.0>--<237.0,0.0>> -> L<<237.0,0.0>--<104.0,-216.0>>

	* y (U+0079): L<<534.0,436.0>--<237.0,0.0>> -> L<<237.0,0.0>--<104.0,-216.0>>

	* yacute (U+00FD): L<<534.0,436.0>--<237.0,0.0>> -> L<<237.0,0.0>--<104.0,-216.0>>

	* ycircumflex (U+0177): L<<534.0,436.0>--<237.0,0.0>> -> L<<237.0,0.0>--<104.0,-216.0>>

	* ydieresis (U+00FF): L<<534.0,436.0>--<237.0,0.0>> -> L<<237.0,0.0>--<104.0,-216.0>>

	* ygrave (U+1EF3): L<<534.0,436.0>--<237.0,0.0>> -> L<<237.0,0.0>--<104.0,-216.0>> [code: found-colinear-vectors]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Shaping Checks>.html#com.google.fonts/check/soft_dotted">com.google.fonts/check/soft_dotted</a>)</summary><div>


* ⚠ **WARN** The dot of soft dotted characters used in orthographies _must_ disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌

The dot of soft dotted characters _should_ disappear in other cases, for example: į̆ į̇ į̈ į̊ į̋ į̒ į̧̀ į̧́ į̧̂ į̧̃ į̧̄ į̧̆ į̧̇ į̧̈ į̧̊ į̧̋ į̧̌ į̧̒ į̨̀ į̨́

Your font fully covers the following languages that require the soft-dotted feature: Lithuanian (Latn, 2,357,094 speakers), Dutch (Latn, 31,709,104 speakers). 

Your font does *not* cover the following languages that require the soft-dotted feature: Zapotec (Latn, 490,000 speakers), Ijo, Southeast (Latn, 2,471,000 speakers), Navajo (Latn, 166,319 speakers), Kom (Latn, 360,685 speakers), Lugbara (Latn, 2,200,000 speakers), Makaa (Latn, 221,000 speakers), Mfumte (Latn, 79,000 speakers), Southern Kisi (Latn, 360,000 speakers), Bete-Bendi (Latn, 100,000 speakers), Basaa (Latn, 332,940 speakers), Ma’di (Latn, 584,000 speakers), Igbo (Latn, 27,823,640 speakers), Ngbaka (Latn, 1,020,000 speakers), Ebira (Latn, 2,200,000 speakers), Dii (Latn, 71,000 speakers), Belarusian (Cyrl, 10,064,517 speakers), Aghem (Latn, 38,843 speakers), Dan (Latn, 1,099,244 speakers), Kpelle, Guinea (Latn, 622,000 speakers), Ukrainian (Cyrl, 29,273,587 speakers), South Central Banda (Latn, 244,000 speakers), Avokaya (Latn, 100,000 speakers), Cicipu (Latn, 44,000 speakers), Ejagham (Latn, 120,000 speakers), Nzakara (Latn, 50,000 speakers), Fur (Latn, 1,230,163 speakers), Nateni (Latn, 100,000 speakers), Mundani (Latn, 34,000 speakers), Koonzime (Latn, 40,000 speakers), Gulay (Latn, 250,478 speakers), Ekpeye (Latn, 226,000 speakers), Bafut (Latn, 158,146 speakers), Yala (Latn, 200,000 speakers), Mango (Latn, 77,000 speakers), Sar (Latn, 500,000 speakers). [code: soft-dotted]
</div></details><br></div></details><details><summary><b>[9] Wittgenstein-BoldItalic.ttf</b></summary><div><details><summary>⚠ <b>WARN:</b> Check for codepoints not covered by METADATA subsets. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/metadata/unreachable_subsetting">com.google.fonts/check/metadata/unreachable_subsetting</a>)</summary><div>


* ⚠ **WARN** The following codepoints supported by the font are not covered by
    any subsets defined in the font's metadata file, and will never
    be served. You can solve this by either manually adding additional
    subset declarations to METADATA.pb, or by editing the glyphset
    definitions.

 * U+02C7 CARON: try adding one of: tifinagh, canadian-aboriginal, yi
 * U+02D8 BREVE: try adding one of: canadian-aboriginal, yi
 * U+02D9 DOT ABOVE: try adding one of: canadian-aboriginal, yi
 * U+02DB OGONEK: try adding one of: canadian-aboriginal, yi
 * U+02DD DOUBLE ACUTE ACCENT: not included in any glyphset definition
 * U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: coptic, math, tifinagh, cherokee
 * U+0306 COMBINING BREVE: try adding one of: old-permic, tifinagh
 * U+0307 COMBINING DOT ABOVE: try adding one of: coptic, old-permic, tai-le, canadian-aboriginal, tifinagh, syriac, math, malayalam
 * U+030A COMBINING RING ABOVE: try adding syriac
 * U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee
 * U+030C COMBINING CARON: try adding one of: tai-le, cherokee
 * U+0312 COMBINING TURNED COMMA ABOVE: not included in any glyphset definition
 * U+0326 COMBINING COMMA BELOW: not included in any glyphset definition
 * U+0327 COMBINING CEDILLA: not included in any glyphset definition
 * U+0328 COMBINING OGONEK: not included in any glyphset definition
 * U+03C0 GREEK SMALL LETTER PI: try adding one of: math, greek, yi
 * U+0E3F THAI CURRENCY SYMBOL BAHT: try adding thai
 * U+1EBC LATIN CAPITAL LETTER E WITH TILDE: try adding vietnamese
 * U+1EBD LATIN SMALL LETTER E WITH TILDE: try adding vietnamese
 * U+2000 EN QUAD: not included in any glyphset definition
 * U+2001 EM QUAD: not included in any glyphset definition
 * U+2003 EM SPACE: try adding nushu
 * U+2004 THREE-PER-EM SPACE: not included in any glyphset definition
 * U+2005 FOUR-PER-EM SPACE: not included in any glyphset definition
 * U+2006 SIX-PER-EM SPACE: not included in any glyphset definition
 * U+2007 FIGURE SPACE: not included in any glyphset definition
 * U+2008 PUNCTUATION SPACE: not included in any glyphset definition
 * U+200A HAIR SPACE: not included in any glyphset definition
 * U+200C ZERO WIDTH NON-JOINER: try adding one of: avestan, telugu, dogra, balinese, lepcha, rejang, yi, tirhuta, bengali, kayah-li, tifinagh, khudawadi, buginese, meetei-mayek, oriya, batak, tai-viet, kaithi, mongolian, khmer, tagalog, tai-le, tamil, buhid, mahajani, pahawh-hmong, javanese, khojki, phags-pa, devanagari, brahmi, duployan, hanunoo, sundanese, saurashtra, malayalam, hanifi-rohingya, warang-citi, manichaean, siddham, sinhala, mandaic, kharoshthi, kannada, syriac, chakma, cham, takri, thaana, nko, modi, gujarati, myanmar, psalter-pahlavi, gurmukhi, sharada, hatran, tagbanwa, new-tai-lue, thai, newa, syloti-nagri, tibetan, grantha, tai-tham, gunjala-gondi, limbu, sogdian
 * U+200D ZERO WIDTH JOINER: try adding one of: emoji, avestan, telugu, dogra, balinese, lepcha, rejang, yi, tirhuta, bengali, kayah-li, tifinagh, khudawadi, buginese, meetei-mayek, oriya, batak, tai-viet, kaithi, mongolian, tagalog, tai-le, tamil, buhid, mahajani, pahawh-hmong, javanese, khojki, phags-pa, devanagari, brahmi, duployan, hanunoo, sundanese, saurashtra, malayalam, hanifi-rohingya, warang-citi, manichaean, siddham, sinhala, mandaic, kharoshthi, kannada, syriac, chakma, cham, takri, thaana, old-hungarian, nko, modi, gujarati, myanmar, psalter-pahlavi, gurmukhi, sharada, thai, tagbanwa, new-tai-lue, newa, syloti-nagri, tibetan, grantha, tai-tham, gunjala-gondi, limbu
 * U+200E LEFT-TO-RIGHT MARK: try adding one of: nko, thaana, syriac, phags-pa
 * U+200F RIGHT-TO-LEFT MARK: try adding one of: nko, thaana, syriac, phags-pa
 * U+2016 DOUBLE VERTICAL LINE: not included in any glyphset definition
 * U+2021 DOUBLE DAGGER: try adding adlam
 * U+202F NARROW NO-BREAK SPACE: try adding one of: mongolian, yi
 * U+2030 PER MILLE SIGN: try adding adlam
 * U+205F MEDIUM MATHEMATICAL SPACE: not included in any glyphset definition
 * U+2126 OHM SIGN: not included in any glyphset definition
 * U+212E ESTIMATED SYMBOL: not included in any glyphset definition
 * U+2153 VULGAR FRACTION ONE THIRD: not included in any glyphset definition
 * U+2154 VULGAR FRACTION TWO THIRDS: not included in any glyphset definition
 * U+2190 LEFTWARDS ARROW: try adding one of: math, symbols
 * U+2192 RIGHTWARDS ARROW: try adding one of: math, symbols
 * U+2194 LEFT RIGHT ARROW: try adding one of: emoji, math, symbols
 * U+2195 UP DOWN ARROW: try adding one of: emoji, math, symbols
 * U+2196 NORTH WEST ARROW: try adding one of: emoji, math, symbols
 * U+2197 NORTH EAST ARROW: try adding one of: emoji, math, symbols
 * U+2198 SOUTH EAST ARROW: try adding one of: emoji, math, symbols
 * U+2199 SOUTH WEST ARROW: try adding one of: emoji, math, symbols
 * U+2202 PARTIAL DIFFERENTIAL: try adding math
 * U+2205 EMPTY SET: try adding math
 * U+2206 INCREMENT: try adding math
 * U+220F N-ARY PRODUCT: try adding math
 * U+2211 N-ARY SUMMATION: try adding math
 * U+221A SQUARE ROOT: try adding math
 * U+221E INFINITY: try adding math
 * U+222B INTEGRAL: try adding math
 * U+2248 ALMOST EQUAL TO: try adding math
 * U+2260 NOT EQUAL TO: try adding math
 * U+2264 LESS-THAN OR EQUAL TO: try adding math
 * U+2265 GREATER-THAN OR EQUAL TO: try adding math
 * U+25A0 BLACK SQUARE: try adding symbols
 * U+25A1 WHITE SQUARE: try adding symbols
 * U+25AA BLACK SMALL SQUARE: try adding one of: emoji, symbols
 * U+25AB WHITE SMALL SQUARE: try adding one of: emoji, symbols
 * U+25B2 BLACK UP-POINTING TRIANGLE: try adding symbols
 * U+25B3 WHITE UP-POINTING TRIANGLE: try adding one of: math, symbols
 * U+25B4 BLACK UP-POINTING SMALL TRIANGLE: try adding symbols
 * U+25B5 WHITE UP-POINTING SMALL TRIANGLE: try adding symbols
 * U+25B6 BLACK RIGHT-POINTING TRIANGLE: try adding one of: emoji, symbols
 * U+25B7 WHITE RIGHT-POINTING TRIANGLE: try adding one of: math, symbols
 * U+25B8 BLACK RIGHT-POINTING SMALL TRIANGLE: try adding symbols
 * U+25B9 WHITE RIGHT-POINTING SMALL TRIANGLE: try adding symbols
 * U+25BC BLACK DOWN-POINTING TRIANGLE: try adding symbols
 * U+25BD WHITE DOWN-POINTING TRIANGLE: try adding one of: math, symbols
 * U+25BE BLACK DOWN-POINTING SMALL TRIANGLE: try adding symbols
 * U+25BF WHITE DOWN-POINTING SMALL TRIANGLE: try adding symbols
 * U+25C0 BLACK LEFT-POINTING TRIANGLE: try adding one of: emoji, symbols
 * U+25C1 WHITE LEFT-POINTING TRIANGLE: try adding one of: math, symbols
 * U+25C2 BLACK LEFT-POINTING SMALL TRIANGLE: try adding symbols
 * U+25C3 WHITE LEFT-POINTING SMALL TRIANGLE: try adding symbols
 * U+25C6 BLACK DIAMOND: try adding symbols
 * U+25C7 WHITE DIAMOND: try adding symbols
 * U+25CA LOZENGE: try adding one of: math, symbols
 * U+25CB WHITE CIRCLE: try adding symbols
 * U+25CC DOTTED CIRCLE: try adding one of: balinese, adlam, soyombo, oriya, caucasian-albanian, khmer, tagalog, mahajani, brahmi, sundanese, malayalam, hanifi-rohingya, siddham, zanabazar-square, syriac, mende-kikakui, cham, takri, lao, modi, thai, newa, wancho, grantha, kayah-li, bassa-vah, lepcha, yi, tirhuta, tifinagh, buginese, batak, mongolian, coptic, sinhala, thaana, old-permic, gujarati, gurmukhi, sharada, tagbanwa, syloti-nagri, tibetan, telugu, sogdian, rejang, symbols, khudawadi, meetei-mayek, tai-le, osage, buhid, pahawh-hmong, khojki, masaram-gondi, phags-pa, devanagari, hanunoo, bhaiksuki, mandaic, kannada, chakma, miao, nko, myanmar, math, elbasan, dogra, bengali, music, tai-viet, kaithi, tamil, javanese, duployan, ahom, hebrew, manichaean, kharoshthi, psalter-pahlavi, new-tai-lue, marchen, gunjala-gondi, limbu
 * U+25CF BLACK CIRCLE: try adding symbols
 * U+25E6 WHITE BULLET: try adding symbols
 * U+27E8 MATHEMATICAL LEFT ANGLE BRACKET: try adding math
 * U+27E9 MATHEMATICAL RIGHT ANGLE BRACKET: try adding math

Or you can add the above codepoints to one of the subsets supported by the font: `cyrillic-ext`, `latin`, `latin-ext` [code: unreachable-subsetting]
</div></details><details><summary>⚠ <b>WARN:</b> Are there caret positions declared for every ligature? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/ligature_carets">com.google.fonts/check/ligature_carets</a>)</summary><div>


* ⚠ **WARN** This font lacks caret position values for ligature glyphs on its GDEF table. [code: lacks-caret-pos]
</div></details><details><summary>⚠ <b>WARN:</b> Is there kerning info for non-ligated sequences? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/kerning_for_non_ligated_sequences">com.google.fonts/check/kerning_for_non_ligated_sequences</a>)</summary><div>


* ⚠ **WARN** GPOS table lacks kerning info for the following non-ligated sequences:

	- f + i

	- i + l [code: lacks-kern-info]
</div></details><details><summary>⚠ <b>WARN:</b> Check font follows the Google Fonts vertical metric schema (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/vertical_metrics">com.google.fonts/check/vertical_metrics</a>)</summary><div>


* ⚠ **WARN** We recommend the absolute sum of the hhea metrics should be between 1.2-1.5x of the font's upm. This font has 1.65x (1650) [code: bad-hhea-range]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure fonts have ScriptLangTags declared on the 'meta' table. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/meta/script_lang_tags">com.google.fonts/check/meta/script_lang_tags</a>)</summary><div>


* ⚠ **WARN** This font file does not have a 'meta' table. [code: lacks-meta-table]
</div></details><details><summary>⚠ <b>WARN:</b> Check font contains no unreachable glyphs (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/unreachable_glyphs">com.google.fonts/check/unreachable_glyphs</a>)</summary><div>


* ⚠ **WARN** The following glyphs could not be reached by codepoint or substitution rules:

	- eight.inferior

	- eight.osf.tosf

	- eight.superior

	- five.inferior

	- five.osf.tosf

	- five.superior

	- four.inferior

	- four.osf.tosf

	- four.superior

	- nine.inferior

	- nine.osf.tosf

	- nine.superior

	- one.inferior

	- one.osf.tosf

	- one.superior

	- seven.inferior

	- seven.osf.tosf

	- seven.superior

	- six.inferior

	- six.osf.tosf

	- six.superior

	- three.inferior

	- three.osf.tosf

	- three.superior

	- two.inferior

	- two.osf.tosf

	- two.superior

	- uni004A0301

	- uni006A0301

	- zero.inferior

	- zero.osf.tosf

	- zero.superior
 [code: unreachable-glyphs]
</div></details><details><summary>⚠ <b>WARN:</b> Check if each glyph has the recommended amount of contours. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/contour_count">com.google.fonts/check/contour_count</a>)</summary><div>


* ⚠ **WARN** This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.

The following glyphs do not have the recommended number of contours:

	- Glyph name: aogonek	Contours detected: 3	Expected: 2

	- Glyph name: eogonek	Contours detected: 3	Expected: 2

	- Glyph name: Uogonek	Contours detected: 2	Expected: 1

	- Glyph name: uogonek	Contours detected: 2	Expected: 1

	- Glyph name: uni20BF	Contours detected: 7	Expected: 3

	- Glyph name: Uogonek	Contours detected: 2	Expected: 1

	- Glyph name: aogonek	Contours detected: 3	Expected: 2

	- Glyph name: eogonek	Contours detected: 3	Expected: 2

	- Glyph name: uni20BF	Contours detected: 7	Expected: 3

	- Glyph name: uogonek	Contours detected: 2	Expected: 1
 [code: contour-count]
</div></details><details><summary>⚠ <b>WARN:</b> Do any segments have colinear vectors? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Outline Correctness Checks>.html#com.google.fonts/check/outline_colinear_vectors">com.google.fonts/check/outline_colinear_vectors</a>)</summary><div>


* ⚠ **WARN** The following glyphs have colinear vectors:

	* thorn (U+00FE): L<<308.0,788.0>--<290.0,710.0>> -> L<<290.0,710.0>--<248.0,489.0>>

	* uni1EF9 (U+1EF9): L<<517.0,442.0>--<227.0,0.0>> -> L<<227.0,0.0>--<94.0,-216.0>>

	* y (U+0079): L<<517.0,442.0>--<227.0,0.0>> -> L<<227.0,0.0>--<94.0,-216.0>>

	* yacute (U+00FD): L<<517.0,442.0>--<227.0,0.0>> -> L<<227.0,0.0>--<94.0,-216.0>>

	* ycircumflex (U+0177): L<<517.0,442.0>--<227.0,0.0>> -> L<<227.0,0.0>--<94.0,-216.0>>

	* ydieresis (U+00FF): L<<517.0,442.0>--<227.0,0.0>> -> L<<227.0,0.0>--<94.0,-216.0>>

	* ygrave (U+1EF3): L<<517.0,442.0>--<227.0,0.0>> -> L<<227.0,0.0>--<94.0,-216.0>> [code: found-colinear-vectors]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Shaping Checks>.html#com.google.fonts/check/soft_dotted">com.google.fonts/check/soft_dotted</a>)</summary><div>


* ⚠ **WARN** The dot of soft dotted characters used in orthographies _must_ disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌

The dot of soft dotted characters _should_ disappear in other cases, for example: į̆ į̇ į̈ į̊ į̋ į̒ į̧̀ į̧́ į̧̂ į̧̃ į̧̄ į̧̆ į̧̇ į̧̈ į̧̊ į̧̋ į̧̌ į̧̒ į̨̀ į̨́

Your font fully covers the following languages that require the soft-dotted feature: Lithuanian (Latn, 2,357,094 speakers), Dutch (Latn, 31,709,104 speakers). 

Your font does *not* cover the following languages that require the soft-dotted feature: Zapotec (Latn, 490,000 speakers), Ijo, Southeast (Latn, 2,471,000 speakers), Navajo (Latn, 166,319 speakers), Kom (Latn, 360,685 speakers), Lugbara (Latn, 2,200,000 speakers), Makaa (Latn, 221,000 speakers), Mfumte (Latn, 79,000 speakers), Southern Kisi (Latn, 360,000 speakers), Bete-Bendi (Latn, 100,000 speakers), Basaa (Latn, 332,940 speakers), Ma’di (Latn, 584,000 speakers), Igbo (Latn, 27,823,640 speakers), Ngbaka (Latn, 1,020,000 speakers), Ebira (Latn, 2,200,000 speakers), Dii (Latn, 71,000 speakers), Belarusian (Cyrl, 10,064,517 speakers), Aghem (Latn, 38,843 speakers), Dan (Latn, 1,099,244 speakers), Kpelle, Guinea (Latn, 622,000 speakers), Ukrainian (Cyrl, 29,273,587 speakers), South Central Banda (Latn, 244,000 speakers), Avokaya (Latn, 100,000 speakers), Cicipu (Latn, 44,000 speakers), Ejagham (Latn, 120,000 speakers), Nzakara (Latn, 50,000 speakers), Fur (Latn, 1,230,163 speakers), Nateni (Latn, 100,000 speakers), Mundani (Latn, 34,000 speakers), Koonzime (Latn, 40,000 speakers), Gulay (Latn, 250,478 speakers), Ekpeye (Latn, 226,000 speakers), Bafut (Latn, 158,146 speakers), Yala (Latn, 200,000 speakers), Mango (Latn, 77,000 speakers), Sar (Latn, 500,000 speakers). [code: soft-dotted]
</div></details><br></div></details>

### Summary

| 💔 ERROR | ☠ FATAL | 🔥 FAIL | ⚠ WARN | 💤 SKIP | ℹ INFO | 🍞 PASS | 🔎 DEBUG |
|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|:-----:|
| 0 | 0 | 12 | 93 | 1212 | 61 | 1020 | 0 |
| 0% | 0% | 1% | 4% | 51% | 3% | 43% | 0% |

**Note:** The following loglevels were omitted in this report:
* **SKIP**
* **INFO**
* **PASS**
* **DEBUG**
