## FontBakery report

fontbakery version: 0.10.8

<details><summary><b>[2] Experimental checks</b></summary><div><details><summary>🔥 <b>FAIL:</b> Shapes languages in all GF glyphsets. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/glyphsets/shape_languages">com.google.fonts/check/glyphsets/shape_languages</a>)</summary><div>


* 🔥 **FAIL** GF_Latin_Core glyphset:

| Language | FAIL messages |
| :--- | :--- |
| nl_Latn (Dutch) | Shaper didn't attach acutecomb to uni0237 |
|  ^  | Shaper didn't attach acutecomb to J |

 [code: failed-language-shaping]
</div></details><details><summary>🔥 <b>FAIL:</b> Shapes languages in all GF glyphsets. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/glyphsets/shape_languages">com.google.fonts/check/glyphsets/shape_languages</a>)</summary><div>


* 🔥 **FAIL** GF_Latin_Core glyphset:

| Language | FAIL messages |
| :--- | :--- |
| nl_Latn (Dutch) | Shaper didn't attach acutecomb to uni0237 |
|  ^  | Shaper didn't attach acutecomb to J |

 [code: failed-language-shaping]
</div></details><br></div></details><details><summary><b>[7] Wittgenstein-Regular.ttf</b></summary><div><details><summary>⚠ <b>WARN:</b> Checking OS/2 achVendID. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/vendor_id">com.google.fonts/check/vendor_id</a>)</summary><div>


* ⚠ **WARN** OS/2 VendorID value 'TBLD' is not yet recognized. If you registered it recently, then it's safe to ignore this warning message. Otherwise, you should set it to your own unique 4 character code, and register it with Microsoft at https://www.microsoft.com/typography/links/vendorlist.aspx
 [code: unknown]
</div></details><details><summary>⚠ <b>WARN:</b> Check for codepoints not covered by METADATA subsets. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/metadata/unreachable_subsetting">com.google.fonts/check/metadata/unreachable_subsetting</a>)</summary><div>


* ⚠ **WARN** The following codepoints supported by the font are not covered by
    any subsets defined in the font's metadata file, and will never
    be served. You can solve this by either manually adding additional
    subset declarations to METADATA.pb, or by editing the glyphset
    definitions.

 * U+02C7 CARON: try adding one of: yi, canadian-aboriginal, tifinagh
 * U+02D8 BREVE: try adding one of: yi, canadian-aboriginal
 * U+02D9 DOT ABOVE: try adding one of: yi, canadian-aboriginal
 * U+02DB OGONEK: try adding one of: yi, canadian-aboriginal
 * U+02DD DOUBLE ACUTE ACCENT: not included in any glyphset definition
 * U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: coptic, cherokee, math, tifinagh
 * U+0306 COMBINING BREVE: try adding one of: old-permic, tifinagh
 * U+0307 COMBINING DOT ABOVE: try adding one of: canadian-aboriginal, syriac, tai-le, coptic, malayalam, old-permic, math, tifinagh
 * U+030A COMBINING RING ABOVE: try adding syriac
 * U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee
 * U+030C COMBINING CARON: try adding one of: tai-le, cherokee
 * U+0312 COMBINING TURNED COMMA ABOVE: not included in any glyphset definition
 * U+0326 COMBINING COMMA BELOW: not included in any glyphset definition
 * U+0327 COMBINING CEDILLA: not included in any glyphset definition
 * U+0328 COMBINING OGONEK: not included in any glyphset definition
 * U+03C0 GREEK SMALL LETTER PI: try adding one of: greek, yi, math
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
 * U+200C ZERO WIDTH NON-JOINER: try adding one of: grantha, gunjala-gondi, tibetan, balinese, rejang, kaithi, modi, javanese, buhid, lepcha, gurmukhi, meetei-mayek, pahawh-hmong, sundanese, devanagari, kharoshthi, myanmar, brahmi, takri, hatran, tagalog, khmer, sharada, tai-viet, tirhuta, avestan, nko, sogdian, saurashtra, duployan, thai, hanunoo, manichaean, oriya, syriac, hanifi-rohingya, sinhala, syloti-nagri, tai-le, yi, bengali, khudawadi, new-tai-lue, batak, dogra, buginese, thaana, tifinagh, tagbanwa, limbu, phags-pa, mahajani, kannada, khojki, mandaic, mongolian, cham, kayah-li, gujarati, newa, tai-tham, telugu, malayalam, warang-citi, siddham, chakma, psalter-pahlavi, tamil
 * U+200D ZERO WIDTH JOINER: try adding one of: grantha, gunjala-gondi, tibetan, balinese, rejang, kaithi, modi, javanese, buhid, lepcha, gurmukhi, meetei-mayek, pahawh-hmong, sundanese, devanagari, kharoshthi, myanmar, brahmi, takri, tagalog, sharada, tai-viet, tirhuta, avestan, nko, saurashtra, duployan, thai, hanunoo, manichaean, oriya, syriac, hanifi-rohingya, sinhala, syloti-nagri, tai-le, yi, bengali, khudawadi, new-tai-lue, batak, dogra, buginese, thaana, tifinagh, tagbanwa, limbu, phags-pa, mahajani, kannada, khojki, mandaic, mongolian, cham, kayah-li, gujarati, newa, old-hungarian, tai-tham, malayalam, telugu, warang-citi, emoji, siddham, chakma, psalter-pahlavi, tamil
 * U+200E LEFT-TO-RIGHT MARK: try adding one of: phags-pa, syriac, nko, thaana
 * U+200F RIGHT-TO-LEFT MARK: try adding one of: phags-pa, syriac, nko, thaana
 * U+2016 DOUBLE VERTICAL LINE: not included in any glyphset definition
 * U+2021 DOUBLE DAGGER: try adding adlam
 * U+202F NARROW NO-BREAK SPACE: try adding one of: mongolian, yi
 * U+2030 PER MILLE SIGN: try adding adlam
 * U+205F MEDIUM MATHEMATICAL SPACE: not included in any glyphset definition
 * U+2075 SUPERSCRIPT FIVE: not included in any glyphset definition
 * U+2076 SUPERSCRIPT SIX: not included in any glyphset definition
 * U+2077 SUPERSCRIPT SEVEN: not included in any glyphset definition
 * U+2078 SUPERSCRIPT EIGHT: not included in any glyphset definition
 * U+2079 SUPERSCRIPT NINE: not included in any glyphset definition
 * U+2081 SUBSCRIPT ONE: not included in any glyphset definition
 * U+2082 SUBSCRIPT TWO: not included in any glyphset definition
 * U+2083 SUBSCRIPT THREE: not included in any glyphset definition
 * U+2084 SUBSCRIPT FOUR: not included in any glyphset definition
 * U+2085 SUBSCRIPT FIVE: not included in any glyphset definition
 * U+2086 SUBSCRIPT SIX: not included in any glyphset definition
 * U+2087 SUBSCRIPT SEVEN: not included in any glyphset definition
 * U+2088 SUBSCRIPT EIGHT: not included in any glyphset definition
 * U+2089 SUBSCRIPT NINE: not included in any glyphset definition
 * U+2126 OHM SIGN: not included in any glyphset definition
 * U+212E ESTIMATED SYMBOL: not included in any glyphset definition
 * U+2153 VULGAR FRACTION ONE THIRD: not included in any glyphset definition
 * U+2154 VULGAR FRACTION TWO THIRDS: not included in any glyphset definition
 * U+2190 LEFTWARDS ARROW: try adding one of: math, symbols
 * U+2192 RIGHTWARDS ARROW: try adding one of: math, symbols
 * U+2194 LEFT RIGHT ARROW: try adding one of: math, emoji, symbols
 * U+2195 UP DOWN ARROW: try adding one of: math, emoji, symbols
 * U+2196 NORTH WEST ARROW: try adding one of: math, emoji, symbols
 * U+2197 NORTH EAST ARROW: try adding one of: math, emoji, symbols
 * U+2198 SOUTH EAST ARROW: try adding one of: math, emoji, symbols
 * U+2199 SOUTH WEST ARROW: try adding one of: math, emoji, symbols
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
 * U+25CC DOTTED CIRCLE: try adding one of: ahom, buhid, pahawh-hmong, sundanese, mende-kikakui, brahmi, tirhuta, nko, sogdian, hebrew, caucasian-albanian, hanifi-rohingya, syloti-nagri, new-tai-lue, batak, dogra, mandaic, malayalam, adlam, music, miao, balinese, rejang, zanabazar-square, kaithi, symbols, modi, lepcha, devanagari, kharoshthi, myanmar, takri, marchen, bhaiksuki, lao, manichaean, oriya, syriac, sinhala, tai-le, khudawadi, elbasan, old-permic, buginese, thaana, tagbanwa, mahajani, kannada, cham, soyombo, wancho, siddham, tamil, grantha, gunjala-gondi, tibetan, gurmukhi, meetei-mayek, tagalog, khmer, sharada, math, thai, hanunoo, yi, coptic, bengali, tifinagh, osage, khojki, mongolian, newa, kayah-li, gujarati, chakma, javanese, masaram-gondi, tai-viet, duployan, bassa-vah, limbu, phags-pa, telugu, psalter-pahlavi
 * U+25CF BLACK CIRCLE: try adding symbols
 * U+25E6 WHITE BULLET: try adding symbols
 * U+27E8 MATHEMATICAL LEFT ANGLE BRACKET: try adding math
 * U+27E9 MATHEMATICAL RIGHT ANGLE BRACKET: try adding math

Or you can add the above codepoints to one of the subsets supported by the font: `cyrillic-ext`, `latin`, `latin-ext` [code: unreachable-subsetting]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure fonts have ScriptLangTags declared on the 'meta' table. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/meta/script_lang_tags">com.google.fonts/check/meta/script_lang_tags</a>)</summary><div>


* ⚠ **WARN** This font file does not have a 'meta' table. [code: lacks-meta-table]
</div></details><details><summary>⚠ <b>WARN:</b> Check font contains no unreachable glyphs (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/unreachable_glyphs">com.google.fonts/check/unreachable_glyphs</a>)</summary><div>


* ⚠ **WARN** The following glyphs could not be reached by codepoint or substitution rules:

	- uni20B8.001
 [code: unreachable-glyphs]
</div></details><details><summary>⚠ <b>WARN:</b> Check if each glyph has the recommended amount of contours. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/contour_count">com.google.fonts/check/contour_count</a>)</summary><div>


* ⚠ **WARN** This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.

The following glyphs do not have the recommended number of contours:

	- Glyph name: aogonek	Contours detected: 3	Expected: 2

	- Glyph name: eogonek	Contours detected: 3	Expected: 2

	- Glyph name: Eng	Contours detected: 2	Expected: 1

	- Glyph name: eng	Contours detected: 2	Expected: 1

	- Glyph name: Uogonek	Contours detected: 2	Expected: 1

	- Glyph name: uogonek	Contours detected: 2	Expected: 1

	- Glyph name: uni20BF	Contours detected: 7	Expected: 3

	- Glyph name: filledbox	Contours detected: 12	Expected: 1

	- Glyph name: uni25A1	Contours detected: 13	Expected: 2

	- Glyph name: Eng	Contours detected: 2	Expected: 1

	- Glyph name: Uogonek	Contours detected: 2	Expected: 1

	- Glyph name: aogonek	Contours detected: 3	Expected: 2

	- Glyph name: eng	Contours detected: 2	Expected: 1

	- Glyph name: eogonek	Contours detected: 3	Expected: 2

	- Glyph name: uni20BF	Contours detected: 7	Expected: 3

	- Glyph name: uni25A1	Contours detected: 13	Expected: 2

	- Glyph name: uogonek	Contours detected: 2	Expected: 1
 [code: contour-count]
</div></details><details><summary>⚠ <b>WARN:</b> Do any segments have colinear vectors? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Outline Correctness Checks>.html#com.google.fonts/check/outline_colinear_vectors">com.google.fonts/check/outline_colinear_vectors</a>)</summary><div>


* ⚠ **WARN** The following glyphs have colinear vectors:

	* b (U+0062): L<<155.0,794.0>--<153.0,718.0>> -> L<<153.0,718.0>--<153.0,466.0>>

	* d (U+0064): L<<483.0,811.0>--<478.0,735.0>> -> L<<478.0,735.0>--<478.0,57.0>>

	* dcaron (U+010F): L<<483.0,811.0>--<478.0,735.0>> -> L<<478.0,735.0>--<478.0,57.0>>

	* dcroat (U+0111): L<<483.0,811.0>--<478.0,735.0>> -> L<<478.0,735.0>--<478.0,639.0>>

	* dong (U+20AB): L<<481.0,843.0>--<476.0,779.0>> -> L<<476.0,779.0>--<476.0,698.0>>

	* dotlessi (U+0131): L<<221.0,510.0>--<219.0,434.0>> -> L<<219.0,434.0>--<219.0,51.0>>

	* eng (U+014B): L<<197.0,510.0>--<204.0,434.0>> -> L<<204.0,434.0>--<204.0,431.0>>

	* h (U+0068): L<<196.0,794.0>--<194.0,718.0>> -> L<<194.0,718.0>--<194.0,448.0>>

	* hbar (U+0127): L<<196.0,794.0>--<194.0,718.0>> -> L<<194.0,718.0>--<194.0,639.0>>

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

	* k (U+006B): L<<206.0,794.0>--<204.0,718.0>> -> L<<204.0,718.0>--<204.0,255.0>>

	* l (U+006C): L<<211.0,794.0>--<209.0,718.0>> -> L<<209.0,718.0>--<209.0,50.0>>

	* lacute (U+013A): L<<211.0,794.0>--<209.0,718.0>> -> L<<209.0,718.0>--<209.0,50.0>>

	* lcaron (U+013E): L<<211.0,794.0>--<209.0,718.0>> -> L<<209.0,718.0>--<209.0,50.0>>

	* lslash (U+0142): L<<211.0,794.0>--<209.0,718.0>> -> L<<209.0,718.0>--<209.0,454.0>>

	* n (U+006E): L<<197.0,510.0>--<204.0,434.0>> -> L<<204.0,434.0>--<204.0,431.0>>

	* nacute (U+0144): L<<197.0,510.0>--<204.0,434.0>> -> L<<204.0,434.0>--<204.0,431.0>>

	* ncaron (U+0148): L<<197.0,510.0>--<204.0,434.0>> -> L<<204.0,434.0>--<204.0,431.0>>

	* ntilde (U+00F1): L<<197.0,510.0>--<204.0,434.0>> -> L<<204.0,434.0>--<204.0,431.0>>

	* r (U+0072): L<<198.0,509.0>--<202.0,434.0>> -> L<<202.0,434.0>--<202.0,400.0>>

	* racute (U+0155): L<<198.0,509.0>--<202.0,434.0>> -> L<<202.0,434.0>--<202.0,400.0>>

	* rcaron (U+0159): L<<198.0,509.0>--<202.0,434.0>> -> L<<202.0,434.0>--<202.0,400.0>>

	* thorn (U+00FE): L<<201.0,794.0>--<199.0,718.0>> -> L<<199.0,718.0>--<199.0,466.0>>

	* uni0137 (U+0137): L<<206.0,794.0>--<204.0,718.0>> -> L<<204.0,718.0>--<204.0,255.0>>

	* uni013C (U+013C): L<<211.0,794.0>--<209.0,718.0>> -> L<<209.0,718.0>--<209.0,50.0>>

	* uni0146 (U+0146): L<<197.0,510.0>--<204.0,434.0>> -> L<<204.0,434.0>--<204.0,431.0>>

	* uni0157 (U+0157): L<<198.0,509.0>--<202.0,434.0>> -> L<<202.0,434.0>--<202.0,400.0>>

	* uni0237 (U+0237): L<<217.0,510.0>--<215.0,434.0>> -> L<<215.0,434.0>--<215.0,50.0>>

	* uni1EF9 (U+1EF9): L<<491.0,450.0>--<300.0,0.0>> -> L<<300.0,0.0>--<209.0,-216.0>>

	* y (U+0079): L<<491.0,450.0>--<300.0,0.0>> -> L<<300.0,0.0>--<209.0,-216.0>>

	* yacute (U+00FD): L<<491.0,450.0>--<300.0,0.0>> -> L<<300.0,0.0>--<209.0,-216.0>>

	* ycircumflex (U+0177): L<<491.0,450.0>--<300.0,0.0>> -> L<<300.0,0.0>--<209.0,-216.0>>

	* ydieresis (U+00FF): L<<491.0,450.0>--<300.0,0.0>> -> L<<300.0,0.0>--<209.0,-216.0>>

	* ygrave (U+1EF3): L<<491.0,450.0>--<300.0,0.0>> -> L<<300.0,0.0>--<209.0,-216.0>> [code: found-colinear-vectors]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Shaping Checks>.html#com.google.fonts/check/soft_dotted">com.google.fonts/check/soft_dotted</a>)</summary><div>


* ⚠ **WARN** The dot of soft dotted characters used in orthographies _must_ disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌

The dot of soft dotted characters _should_ disappear in other cases, for example: ĭ̦ i̦̇ i̦̊ i̦̋ ǐ̦ i̦̒ j̦̀ j̦́ ĵ̦ j̦̃ j̦̄ j̦̆ j̦̇ j̦̈ j̦̊ j̦̋ ǰ̦ j̦̒ į̆ į̇

Your font fully covers the following languages that require the soft-dotted feature: Lithuanian (Latn, 2,357,094 speakers). 

Your font does *not* cover the following languages that require the soft-dotted feature: Igbo (Latn, 27,823,640 speakers), Belarusian (Cyrl, 10,064,517 speakers), Bete-Bendi (Latn, 100,000 speakers), Navajo (Latn, 166,319 speakers), Ijo, Southeast (Latn, 2,471,000 speakers), Bafut (Latn, 158,146 speakers), Dutch (Latn, 31,709,104 speakers), Lugbara (Latn, 2,200,000 speakers), Dan (Latn, 1,099,244 speakers), Sar (Latn, 500,000 speakers), Ebira (Latn, 2,200,000 speakers), Ejagham (Latn, 120,000 speakers), South Central Banda (Latn, 244,000 speakers), Koonzime (Latn, 40,000 speakers), Ma’di (Latn, 584,000 speakers), Mundani (Latn, 34,000 speakers), Basaa (Latn, 332,940 speakers), Kom (Latn, 360,685 speakers), Fur (Latn, 1,230,163 speakers), Gulay (Latn, 250,478 speakers), Mango (Latn, 77,000 speakers), Avokaya (Latn, 100,000 speakers), Zapotec (Latn, 490,000 speakers), Mfumte (Latn, 79,000 speakers), Ukrainian (Cyrl, 29,273,587 speakers), Southern Kisi (Latn, 360,000 speakers), Nateni (Latn, 100,000 speakers), Nzakara (Latn, 50,000 speakers), Aghem (Latn, 38,843 speakers). [code: soft-dotted]
</div></details><br></div></details><details><summary><b>[7] Wittgenstein-Bold.ttf</b></summary><div><details><summary>⚠ <b>WARN:</b> Checking OS/2 achVendID. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/vendor_id">com.google.fonts/check/vendor_id</a>)</summary><div>


* ⚠ **WARN** OS/2 VendorID value 'TBLD' is not yet recognized. If you registered it recently, then it's safe to ignore this warning message. Otherwise, you should set it to your own unique 4 character code, and register it with Microsoft at https://www.microsoft.com/typography/links/vendorlist.aspx
 [code: unknown]
</div></details><details><summary>⚠ <b>WARN:</b> Check for codepoints not covered by METADATA subsets. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/metadata/unreachable_subsetting">com.google.fonts/check/metadata/unreachable_subsetting</a>)</summary><div>


* ⚠ **WARN** The following codepoints supported by the font are not covered by
    any subsets defined in the font's metadata file, and will never
    be served. You can solve this by either manually adding additional
    subset declarations to METADATA.pb, or by editing the glyphset
    definitions.

 * U+02C7 CARON: try adding one of: yi, canadian-aboriginal, tifinagh
 * U+02D8 BREVE: try adding one of: yi, canadian-aboriginal
 * U+02D9 DOT ABOVE: try adding one of: yi, canadian-aboriginal
 * U+02DB OGONEK: try adding one of: yi, canadian-aboriginal
 * U+02DD DOUBLE ACUTE ACCENT: not included in any glyphset definition
 * U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: coptic, cherokee, math, tifinagh
 * U+0306 COMBINING BREVE: try adding one of: old-permic, tifinagh
 * U+0307 COMBINING DOT ABOVE: try adding one of: canadian-aboriginal, syriac, tai-le, coptic, malayalam, old-permic, math, tifinagh
 * U+030A COMBINING RING ABOVE: try adding syriac
 * U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee
 * U+030C COMBINING CARON: try adding one of: tai-le, cherokee
 * U+0312 COMBINING TURNED COMMA ABOVE: not included in any glyphset definition
 * U+0326 COMBINING COMMA BELOW: not included in any glyphset definition
 * U+0327 COMBINING CEDILLA: not included in any glyphset definition
 * U+0328 COMBINING OGONEK: not included in any glyphset definition
 * U+03C0 GREEK SMALL LETTER PI: try adding one of: greek, yi, math
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
 * U+200C ZERO WIDTH NON-JOINER: try adding one of: grantha, gunjala-gondi, tibetan, balinese, rejang, kaithi, modi, javanese, buhid, lepcha, gurmukhi, meetei-mayek, pahawh-hmong, sundanese, devanagari, kharoshthi, myanmar, brahmi, takri, hatran, tagalog, khmer, sharada, tai-viet, tirhuta, avestan, nko, sogdian, saurashtra, duployan, thai, hanunoo, manichaean, oriya, syriac, hanifi-rohingya, sinhala, syloti-nagri, tai-le, yi, bengali, khudawadi, new-tai-lue, batak, dogra, buginese, thaana, tifinagh, tagbanwa, limbu, phags-pa, mahajani, kannada, khojki, mandaic, mongolian, cham, kayah-li, gujarati, newa, tai-tham, telugu, malayalam, warang-citi, siddham, chakma, psalter-pahlavi, tamil
 * U+200D ZERO WIDTH JOINER: try adding one of: grantha, gunjala-gondi, tibetan, balinese, rejang, kaithi, modi, javanese, buhid, lepcha, gurmukhi, meetei-mayek, pahawh-hmong, sundanese, devanagari, kharoshthi, myanmar, brahmi, takri, tagalog, sharada, tai-viet, tirhuta, avestan, nko, saurashtra, duployan, thai, hanunoo, manichaean, oriya, syriac, hanifi-rohingya, sinhala, syloti-nagri, tai-le, yi, bengali, khudawadi, new-tai-lue, batak, dogra, buginese, thaana, tifinagh, tagbanwa, limbu, phags-pa, mahajani, kannada, khojki, mandaic, mongolian, cham, kayah-li, gujarati, newa, old-hungarian, tai-tham, malayalam, telugu, warang-citi, emoji, siddham, chakma, psalter-pahlavi, tamil
 * U+200E LEFT-TO-RIGHT MARK: try adding one of: phags-pa, syriac, nko, thaana
 * U+200F RIGHT-TO-LEFT MARK: try adding one of: phags-pa, syriac, nko, thaana
 * U+2016 DOUBLE VERTICAL LINE: not included in any glyphset definition
 * U+2021 DOUBLE DAGGER: try adding adlam
 * U+202F NARROW NO-BREAK SPACE: try adding one of: mongolian, yi
 * U+2030 PER MILLE SIGN: try adding adlam
 * U+205F MEDIUM MATHEMATICAL SPACE: not included in any glyphset definition
 * U+2075 SUPERSCRIPT FIVE: not included in any glyphset definition
 * U+2076 SUPERSCRIPT SIX: not included in any glyphset definition
 * U+2077 SUPERSCRIPT SEVEN: not included in any glyphset definition
 * U+2078 SUPERSCRIPT EIGHT: not included in any glyphset definition
 * U+2079 SUPERSCRIPT NINE: not included in any glyphset definition
 * U+2081 SUBSCRIPT ONE: not included in any glyphset definition
 * U+2082 SUBSCRIPT TWO: not included in any glyphset definition
 * U+2083 SUBSCRIPT THREE: not included in any glyphset definition
 * U+2084 SUBSCRIPT FOUR: not included in any glyphset definition
 * U+2085 SUBSCRIPT FIVE: not included in any glyphset definition
 * U+2086 SUBSCRIPT SIX: not included in any glyphset definition
 * U+2087 SUBSCRIPT SEVEN: not included in any glyphset definition
 * U+2088 SUBSCRIPT EIGHT: not included in any glyphset definition
 * U+2089 SUBSCRIPT NINE: not included in any glyphset definition
 * U+2126 OHM SIGN: not included in any glyphset definition
 * U+212E ESTIMATED SYMBOL: not included in any glyphset definition
 * U+2153 VULGAR FRACTION ONE THIRD: not included in any glyphset definition
 * U+2154 VULGAR FRACTION TWO THIRDS: not included in any glyphset definition
 * U+2190 LEFTWARDS ARROW: try adding one of: math, symbols
 * U+2192 RIGHTWARDS ARROW: try adding one of: math, symbols
 * U+2194 LEFT RIGHT ARROW: try adding one of: math, emoji, symbols
 * U+2195 UP DOWN ARROW: try adding one of: math, emoji, symbols
 * U+2196 NORTH WEST ARROW: try adding one of: math, emoji, symbols
 * U+2197 NORTH EAST ARROW: try adding one of: math, emoji, symbols
 * U+2198 SOUTH EAST ARROW: try adding one of: math, emoji, symbols
 * U+2199 SOUTH WEST ARROW: try adding one of: math, emoji, symbols
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
 * U+25CC DOTTED CIRCLE: try adding one of: ahom, buhid, pahawh-hmong, sundanese, mende-kikakui, brahmi, tirhuta, nko, sogdian, hebrew, caucasian-albanian, hanifi-rohingya, syloti-nagri, new-tai-lue, batak, dogra, mandaic, malayalam, adlam, music, miao, balinese, rejang, zanabazar-square, kaithi, symbols, modi, lepcha, devanagari, kharoshthi, myanmar, takri, marchen, bhaiksuki, lao, manichaean, oriya, syriac, sinhala, tai-le, khudawadi, elbasan, old-permic, buginese, thaana, tagbanwa, mahajani, kannada, cham, soyombo, wancho, siddham, tamil, grantha, gunjala-gondi, tibetan, gurmukhi, meetei-mayek, tagalog, khmer, sharada, math, thai, hanunoo, yi, coptic, bengali, tifinagh, osage, khojki, mongolian, newa, kayah-li, gujarati, chakma, javanese, masaram-gondi, tai-viet, duployan, bassa-vah, limbu, phags-pa, telugu, psalter-pahlavi
 * U+25CF BLACK CIRCLE: try adding symbols
 * U+25E6 WHITE BULLET: try adding symbols
 * U+27E8 MATHEMATICAL LEFT ANGLE BRACKET: try adding math
 * U+27E9 MATHEMATICAL RIGHT ANGLE BRACKET: try adding math

Or you can add the above codepoints to one of the subsets supported by the font: `cyrillic-ext`, `latin`, `latin-ext` [code: unreachable-subsetting]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure fonts have ScriptLangTags declared on the 'meta' table. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/meta/script_lang_tags">com.google.fonts/check/meta/script_lang_tags</a>)</summary><div>


* ⚠ **WARN** This font file does not have a 'meta' table. [code: lacks-meta-table]
</div></details><details><summary>⚠ <b>WARN:</b> Check font contains no unreachable glyphs (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/unreachable_glyphs">com.google.fonts/check/unreachable_glyphs</a>)</summary><div>


* ⚠ **WARN** The following glyphs could not be reached by codepoint or substitution rules:

	- uni20B8.001
 [code: unreachable-glyphs]
</div></details><details><summary>⚠ <b>WARN:</b> Check if each glyph has the recommended amount of contours. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/contour_count">com.google.fonts/check/contour_count</a>)</summary><div>


* ⚠ **WARN** This check inspects the glyph outlines and detects the total number of contours in each of them. The expected values are infered from the typical ammounts of contours observed in a large collection of reference font families. The divergences listed below may simply indicate a significantly different design on some of your glyphs. On the other hand, some of these may flag actual bugs in the font such as glyphs mapped to an incorrect codepoint. Please consider reviewing the design and codepoint assignment of these to make sure they are correct.

The following glyphs do not have the recommended number of contours:

	- Glyph name: aogonek	Contours detected: 3	Expected: 2

	- Glyph name: eogonek	Contours detected: 3	Expected: 2

	- Glyph name: Eng	Contours detected: 2	Expected: 1

	- Glyph name: eng	Contours detected: 2	Expected: 1

	- Glyph name: Uogonek	Contours detected: 2	Expected: 1

	- Glyph name: uogonek	Contours detected: 2	Expected: 1

	- Glyph name: uni20BF	Contours detected: 7	Expected: 3

	- Glyph name: filledbox	Contours detected: 12	Expected: 1

	- Glyph name: uni25A1	Contours detected: 13	Expected: 2

	- Glyph name: Eng	Contours detected: 2	Expected: 1

	- Glyph name: Uogonek	Contours detected: 2	Expected: 1

	- Glyph name: aogonek	Contours detected: 3	Expected: 2

	- Glyph name: eng	Contours detected: 2	Expected: 1

	- Glyph name: eogonek	Contours detected: 3	Expected: 2

	- Glyph name: uni20BF	Contours detected: 7	Expected: 3

	- Glyph name: uni25A1	Contours detected: 13	Expected: 2

	- Glyph name: uogonek	Contours detected: 2	Expected: 1
 [code: contour-count]
</div></details><details><summary>⚠ <b>WARN:</b> Do any segments have colinear vectors? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Outline Correctness Checks>.html#com.google.fonts/check/outline_colinear_vectors">com.google.fonts/check/outline_colinear_vectors</a>)</summary><div>


* ⚠ **WARN** The following glyphs have colinear vectors:

	* b (U+0062): L<<181.0,788.0>--<179.0,718.0>> -> L<<179.0,718.0>--<179.0,489.0>>

	* d (U+0064): L<<509.0,805.0>--<504.0,735.0>> -> L<<504.0,735.0>--<504.0,56.0>>

	* dcaron (U+010F): L<<509.0,805.0>--<504.0,735.0>> -> L<<504.0,735.0>--<504.0,56.0>>

	* dcroat (U+0111): L<<509.0,805.0>--<504.0,735.0>> -> L<<504.0,735.0>--<504.0,641.0>>

	* dong (U+20AB): L<<505.0,838.0>--<500.0,779.0>> -> L<<500.0,779.0>--<500.0,700.0>>

	* dotlessi (U+0131): L<<247.0,504.0>--<245.0,434.0>> -> L<<245.0,434.0>--<245.0,47.0>>

	* h (U+0068): L<<222.0,788.0>--<220.0,718.0>> -> L<<220.0,718.0>--<220.0,478.0>>

	* hbar (U+0127): L<<222.0,788.0>--<220.0,718.0>> -> L<<220.0,718.0>--<220.0,641.0>>

	* i (U+0069): L<<247.0,504.0>--<245.0,434.0>> -> L<<245.0,434.0>--<245.0,47.0>>

	* iacute (U+00ED): L<<247.0,504.0>--<245.0,434.0>> -> L<<245.0,434.0>--<245.0,47.0>>

	* icircumflex (U+00EE): L<<247.0,504.0>--<245.0,434.0>> -> L<<245.0,434.0>--<245.0,47.0>>

	* idieresis (U+00EF): L<<247.0,504.0>--<245.0,434.0>> -> L<<245.0,434.0>--<245.0,47.0>>

	* igrave (U+00EC): L<<247.0,504.0>--<245.0,434.0>> -> L<<245.0,434.0>--<245.0,47.0>>

	* ij (U+0133): L<<247.0,504.0>--<245.0,434.0>> -> L<<245.0,434.0>--<245.0,47.0>>

	* ij (U+0133): L<<501.0,504.0>--<499.0,434.0>> -> L<<499.0,434.0>--<499.0,52.0>>

	* imacron (U+012B): L<<247.0,504.0>--<245.0,434.0>> -> L<<245.0,434.0>--<245.0,47.0>>

	* iogonek (U+012F): L<<247.0,504.0>--<245.0,434.0>> -> L<<245.0,434.0>--<245.0,47.0>>

	* itilde (U+0129): L<<247.0,504.0>--<245.0,434.0>> -> L<<245.0,434.0>--<245.0,47.0>>

	* j (U+006A): L<<243.0,504.0>--<241.0,434.0>> -> L<<241.0,434.0>--<241.0,52.0>>

	* k (U+006B): L<<232.0,788.0>--<230.0,718.0>> -> L<<230.0,718.0>--<230.0,305.0>>

	* l (U+006C): L<<237.0,788.0>--<235.0,718.0>> -> L<<235.0,718.0>--<235.0,48.0>>

	* lacute (U+013A): L<<237.0,788.0>--<235.0,718.0>> -> L<<235.0,718.0>--<235.0,48.0>>

	* lcaron (U+013E): L<<237.0,788.0>--<235.0,718.0>> -> L<<235.0,718.0>--<235.0,48.0>>

	* lslash (U+0142): L<<237.0,788.0>--<235.0,718.0>> -> L<<235.0,718.0>--<235.0,477.0>>

	* thorn (U+00FE): L<<227.0,788.0>--<225.0,718.0>> -> L<<225.0,718.0>--<225.0,491.0>>

	* uni0137 (U+0137): L<<232.0,788.0>--<230.0,718.0>> -> L<<230.0,718.0>--<230.0,305.0>>

	* uni013C (U+013C): L<<237.0,788.0>--<235.0,718.0>> -> L<<235.0,718.0>--<235.0,48.0>>

	* uni0237 (U+0237): L<<243.0,504.0>--<241.0,434.0>> -> L<<241.0,434.0>--<241.0,52.0>> [code: found-colinear-vectors]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Shaping Checks>.html#com.google.fonts/check/soft_dotted">com.google.fonts/check/soft_dotted</a>)</summary><div>


* ⚠ **WARN** The dot of soft dotted characters used in orthographies _must_ disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌

The dot of soft dotted characters _should_ disappear in other cases, for example: ĭ̦ i̦̇ i̦̊ i̦̋ ǐ̦ i̦̒ j̦̀ j̦́ ĵ̦ j̦̃ j̦̄ j̦̆ j̦̇ j̦̈ j̦̊ j̦̋ ǰ̦ j̦̒ į̆ į̇

Your font fully covers the following languages that require the soft-dotted feature: Lithuanian (Latn, 2,357,094 speakers). 

Your font does *not* cover the following languages that require the soft-dotted feature: Igbo (Latn, 27,823,640 speakers), Belarusian (Cyrl, 10,064,517 speakers), Bete-Bendi (Latn, 100,000 speakers), Navajo (Latn, 166,319 speakers), Ijo, Southeast (Latn, 2,471,000 speakers), Bafut (Latn, 158,146 speakers), Dutch (Latn, 31,709,104 speakers), Lugbara (Latn, 2,200,000 speakers), Dan (Latn, 1,099,244 speakers), Sar (Latn, 500,000 speakers), Ebira (Latn, 2,200,000 speakers), Ejagham (Latn, 120,000 speakers), South Central Banda (Latn, 244,000 speakers), Koonzime (Latn, 40,000 speakers), Ma’di (Latn, 584,000 speakers), Mundani (Latn, 34,000 speakers), Basaa (Latn, 332,940 speakers), Kom (Latn, 360,685 speakers), Fur (Latn, 1,230,163 speakers), Gulay (Latn, 250,478 speakers), Mango (Latn, 77,000 speakers), Avokaya (Latn, 100,000 speakers), Zapotec (Latn, 490,000 speakers), Mfumte (Latn, 79,000 speakers), Ukrainian (Cyrl, 29,273,587 speakers), Southern Kisi (Latn, 360,000 speakers), Nateni (Latn, 100,000 speakers), Nzakara (Latn, 50,000 speakers), Aghem (Latn, 38,843 speakers). [code: soft-dotted]
</div></details><br></div></details>

### Summary

| 💔 ERROR | ☠ FATAL | 🔥 FAIL | ⚠ WARN | 💤 SKIP | ℹ INFO | 🍞 PASS | 🔎 DEBUG |
|:-----:|:----:|:----:|:----:|:----:|:----:|:----:|
| 0 | 0 | 2 | 14 | 246 | 13 | 217 |
| 0% | 0% | 0% | 3% | 50% | 3% | 44% |

**Note:** The following loglevels were omitted in this report:
* **SKIP**
* **INFO**
* **PASS**
* **DEBUG**
