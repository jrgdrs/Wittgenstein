## FontBakery report

fontbakery version: 0.10.8

<details><summary><b>[2] Experimental checks</b></summary><div><details><summary>🔥 <b>FAIL:</b> Shapes languages in all GF glyphsets. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/glyphsets/shape_languages">com.google.fonts/check/glyphsets/shape_languages</a>)</summary><div>


* 🔥 **FAIL** GF_Latin_Core glyphset:

| Language | FAIL messages |
| :--- | :--- |
| nl_Latn (Dutch) | Shaper didn't attach acutecomb to j |
|  ^  | Shaper didn't attach acutecomb to J |
| ro_Latn (Romanian) | in Romanian, S-cedilla should become S-comma-accent; both buffers returned Scedilla=0+548 |

 [code: failed-language-shaping]
</div></details><details><summary>🔥 <b>FAIL:</b> Shapes languages in all GF glyphsets. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/glyphsets/shape_languages">com.google.fonts/check/glyphsets/shape_languages</a>)</summary><div>


* 🔥 **FAIL** GF_Latin_Core glyphset:

| Language | FAIL messages |
| :--- | :--- |
| nl_Latn (Dutch) | Shaper didn't attach acutecomb to j |
|  ^  | Shaper didn't attach acutecomb to J |
| ro_Latn (Romanian) | in Romanian, S-cedilla should become S-comma-accent; both buffers returned Scedilla=0+548 |

 [code: failed-language-shaping]
</div></details><br></div></details><details><summary><b>[11] Wittgenstein-Regular.ttf</b></summary><div><details><summary>🔥 <b>FAIL:</b> Checking OS/2 Metrics match hhea Metrics. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/os2_metrics_match_hhea">com.google.fonts/check/os2_metrics_match_hhea</a>)</summary><div>


* 🔥 **FAIL** OS/2 sTypoAscender (950) and hhea ascent (1100) must be equal. [code: ascender]
</div></details><details><summary>🔥 <b>FAIL:</b> Font contains '.notdef' as its first glyph? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/mandatory_glyphs">com.google.fonts/check/mandatory_glyphs</a>)</summary><div>


* 🔥 **FAIL** The '.notdef' glyph should contain a drawing, but it is blank. [code: notdef-is-blank]
</div></details><details><summary>🔥 <b>FAIL:</b> Check if each glyph has the recommended amount of contours. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/contour_count">com.google.fonts/check/contour_count</a>)</summary><div>


* 🔥 **FAIL** The following glyphs have no contours even though they were expected to have some:

	- Glyph name: uni25CC	Expected: 16 or 12

	- Glyph name: uni25CC	Expected: 16 or 12
 [code: no-contour]
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
</div></details><details><summary>🔥 <b>FAIL:</b> Check accent of Lcaron, dcaron, lcaron, tcaron (derived from com.google.fonts/check/alt_caron) (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/alt_caron">com.google.fonts/check/alt_caron</a>)</summary><div>


* 🔥 **FAIL** Lcaron uses component uni030C. [code: wrong-mark]
* 🔥 **FAIL** dcaron uses component uni030C. [code: wrong-mark]
* 🔥 **FAIL** lcaron uses component uni030C. [code: wrong-mark]
* 🔥 **FAIL** tcaron uses component uni030C. [code: wrong-mark]
</div></details><details><summary>⚠ <b>WARN:</b> Checking OS/2 achVendID. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/vendor_id">com.google.fonts/check/vendor_id</a>)</summary><div>


* ⚠ **WARN** OS/2 VendorID value 'TBLD' is not yet recognized. If you registered it recently, then it's safe to ignore this warning message. Otherwise, you should set it to your own unique 4 character code, and register it with Microsoft at https://www.microsoft.com/typography/links/vendorlist.aspx
 [code: unknown]
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
 * U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: tifinagh, coptic, cherokee, math
 * U+0306 COMBINING BREVE: try adding one of: tifinagh, old-permic
 * U+0307 COMBINING DOT ABOVE: try adding one of: tifinagh, malayalam, syriac, coptic, math, canadian-aboriginal, tai-le, old-permic
 * U+030A COMBINING RING ABOVE: try adding syriac
 * U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: cherokee, osage
 * U+030C COMBINING CARON: try adding one of: tai-le, cherokee
 * U+0312 COMBINING TURNED COMMA ABOVE: not included in any glyphset definition
 * U+0326 COMBINING COMMA BELOW: not included in any glyphset definition
 * U+0327 COMBINING CEDILLA: not included in any glyphset definition
 * U+0328 COMBINING OGONEK: not included in any glyphset definition
 * U+03C0 GREEK SMALL LETTER PI: try adding one of: greek, math, yi
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
 * U+200C ZERO WIDTH NON-JOINER: try adding one of: syloti-nagri, mahajani, nko, hanifi-rohingya, modi, kharoshthi, sharada, bengali, kayah-li, myanmar, saurashtra, tagalog, lepcha, tirhuta, hanunoo, duployan, tibetan, batak, gujarati, pahawh-hmong, avestan, warang-citi, buginese, brahmi, mandaic, tai-tham, tifinagh, siddham, devanagari, limbu, telugu, balinese, oriya, gurmukhi, gunjala-gondi, meetei-mayek, tagbanwa, rejang, tai-le, khmer, syriac, mongolian, sundanese, tai-viet, dogra, malayalam, thaana, yi, tamil, sogdian, sinhala, takri, grantha, newa, cham, manichaean, khojki, javanese, kannada, khudawadi, thai, kaithi, buhid, chakma, hatran, new-tai-lue, phags-pa, psalter-pahlavi
 * U+200D ZERO WIDTH JOINER: try adding one of: syloti-nagri, mahajani, nko, hanifi-rohingya, modi, kharoshthi, sharada, bengali, kayah-li, myanmar, saurashtra, tagalog, lepcha, tirhuta, hanunoo, duployan, tibetan, batak, gujarati, pahawh-hmong, avestan, warang-citi, buginese, brahmi, mandaic, tai-tham, tifinagh, siddham, devanagari, limbu, old-hungarian, telugu, balinese, oriya, gurmukhi, gunjala-gondi, meetei-mayek, tagbanwa, emoji, rejang, tai-le, syriac, tai-viet, mongolian, sundanese, dogra, malayalam, thaana, yi, tamil, sinhala, takri, grantha, newa, cham, manichaean, khojki, javanese, kannada, khudawadi, thai, kaithi, buhid, chakma, new-tai-lue, phags-pa, psalter-pahlavi
 * U+200E LEFT-TO-RIGHT MARK: try adding one of: syriac, nko, phags-pa, thaana
 * U+200F RIGHT-TO-LEFT MARK: try adding one of: syriac, nko, phags-pa, thaana
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
 * U+2190 LEFTWARDS ARROW: try adding one of: symbols, math
 * U+2192 RIGHTWARDS ARROW: try adding one of: symbols, math
 * U+2194 LEFT RIGHT ARROW: try adding one of: symbols, emoji, math
 * U+2195 UP DOWN ARROW: try adding one of: symbols, emoji, math
 * U+2196 NORTH WEST ARROW: try adding one of: symbols, emoji, math
 * U+2197 NORTH EAST ARROW: try adding one of: symbols, emoji, math
 * U+2198 SOUTH EAST ARROW: try adding one of: symbols, emoji, math
 * U+2199 SOUTH WEST ARROW: try adding one of: symbols, emoji, math
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
 * U+25AA BLACK SMALL SQUARE: try adding one of: symbols, emoji
 * U+25AB WHITE SMALL SQUARE: try adding one of: symbols, emoji
 * U+25B2 BLACK UP-POINTING TRIANGLE: try adding symbols
 * U+25B3 WHITE UP-POINTING TRIANGLE: try adding one of: symbols, math
 * U+25B4 BLACK UP-POINTING SMALL TRIANGLE: try adding symbols
 * U+25B5 WHITE UP-POINTING SMALL TRIANGLE: try adding symbols
 * U+25B6 BLACK RIGHT-POINTING TRIANGLE: try adding one of: symbols, emoji
 * U+25B7 WHITE RIGHT-POINTING TRIANGLE: try adding one of: symbols, math
 * U+25B8 BLACK RIGHT-POINTING SMALL TRIANGLE: try adding symbols
 * U+25B9 WHITE RIGHT-POINTING SMALL TRIANGLE: try adding symbols
 * U+25BC BLACK DOWN-POINTING TRIANGLE: try adding symbols
 * U+25BD WHITE DOWN-POINTING TRIANGLE: try adding one of: symbols, math
 * U+25BE BLACK DOWN-POINTING SMALL TRIANGLE: try adding symbols
 * U+25BF WHITE DOWN-POINTING SMALL TRIANGLE: try adding symbols
 * U+25C0 BLACK LEFT-POINTING TRIANGLE: try adding one of: symbols, emoji
 * U+25C1 WHITE LEFT-POINTING TRIANGLE: try adding one of: symbols, math
 * U+25C2 BLACK LEFT-POINTING SMALL TRIANGLE: try adding symbols
 * U+25C3 WHITE LEFT-POINTING SMALL TRIANGLE: try adding symbols
 * U+25C6 BLACK DIAMOND: try adding symbols
 * U+25C7 WHITE DIAMOND: try adding symbols
 * U+25CA LOZENGE: try adding one of: symbols, math
 * U+25CB WHITE CIRCLE: try adding symbols
 * U+25CC DOTTED CIRCLE: try adding one of: lao, sharada, tagalog, batak, pahawh-hmong, buginese, mandaic, tifinagh, devanagari, dogra, coptic, newa, marchen, manichaean, soyombo, buhid, chakma, tirhuta, nko, kharoshthi, lepcha, osage, brahmi, siddham, limbu, zanabazar-square, tai-viet, mongolian, sundanese, thaana, takri, mende-kikakui, bhaiksuki, khojki, kannada, khmer, syloti-nagri, old-permic, myanmar, miao, tibetan, gujarati, oriya, rejang, tai-le, ahom, elbasan, malayalam, tamil, sogdian, music, math, grantha, javanese, khudawadi, thai, kaithi, mahajani, hanifi-rohingya, modi, bengali, kayah-li, adlam, caucasian-albanian, wancho, hanunoo, duployan, bassa-vah, telugu, balinese, tagbanwa, gurmukhi, gunjala-gondi, hebrew, meetei-mayek, syriac, symbols, yi, sinhala, cham, masaram-gondi, new-tai-lue, phags-pa, psalter-pahlavi
 * U+25CF BLACK CIRCLE: try adding symbols
 * U+25E6 WHITE BULLET: try adding symbols
 * U+27E8 MATHEMATICAL LEFT ANGLE BRACKET: try adding math
 * U+27E9 MATHEMATICAL RIGHT ANGLE BRACKET: try adding math

Or you can add the above codepoints to one of the subsets supported by the font: `cyrillic-ext`, `latin`, `latin-ext` [code: unreachable-subsetting]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure fonts have ScriptLangTags declared on the 'meta' table. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/meta/script_lang_tags">com.google.fonts/check/meta/script_lang_tags</a>)</summary><div>


* ⚠ **WARN** This font file does not have a 'meta' table. [code: lacks-meta-table]
</div></details><details><summary>⚠ <b>WARN:</b> Check font contains no unreachable glyphs (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/unreachable_glyphs">com.google.fonts/check/unreachable_glyphs</a>)</summary><div>


* ⚠ **WARN** The following glyphs could not be reached by codepoint or substitution rules:

	- eight.dnom

	- eight.numr

	- eight.tf

	- five.dnom

	- five.numr

	- five.tf

	- four.dnom

	- four.numr

	- four.tf

	- i.loclTRK

	- nine.dnom

	- nine.numr

	- nine.tf

	- one.dnom

	- one.numr

	- one.tf

	- periodcentered.loclCAT

	- periodcentered.loclCAT.case

	- seven.dnom

	- seven.numr

	- seven.tf

	- six.dnom

	- six.numr

	- six.tf

	- three.dnom

	- three.numr

	- three.tf

	- two.dnom

	- two.numr

	- two.tf

	- uni004A0301

	- uni006A0301

	- uni013B.loclMAH

	- uni013C.loclMAH

	- uni0145.loclMAH

	- uni0146.loclMAH

	- uni030C.alt

	- uni0326.loclMAH

	- uni20B8.001

	- zero.dnom

	- zero.numr

	- zero.tf

	- zero.zero
 [code: unreachable-glyphs]
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
</div></details><details><summary>⚠ <b>WARN:</b> Do outlines contain any semi-vertical or semi-horizontal lines? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Outline Correctness Checks>.html#com.google.fonts/check/outline_semi_vertical">com.google.fonts/check/outline_semi_vertical</a>)</summary><div>


* ⚠ **WARN** The following glyphs have semi-vertical/semi-horizontal lines:

	* four (U+0034): L<<435.0,185.0>--<434.0,0.0>>

	* four (U+0034): L<<436.0,698.0>--<435.0,256.0>>

	* one (U+0031): L<<353.0,700.0>--<351.0,50.0>>

	* onehalf (U+00BD): L<<147.0,707.0>--<146.0,415.0>>

	* onequarter (U+00BC): L<<147.0,707.0>--<146.0,415.0>>

	* section (U+00A7): L<<140.0,-177.0>--<141.0,-38.0>>

	* section (U+00A7): L<<489.0,678.0>--<488.0,549.0>>

	* uni00B9 (U+00B9): L<<353.0,700.0>--<351.0,50.0>>

	* uni2074 (U+2074): L<<435.0,185.0>--<434.0,0.0>>

	* uni2074 (U+2074): L<<436.0,698.0>--<435.0,256.0>>

	* uni2081 (U+2081): L<<353.0,700.0>--<351.0,50.0>>

	* uni2084 (U+2084): L<<435.0,185.0>--<434.0,0.0>>

	* uni2084 (U+2084): L<<436.0,698.0>--<435.0,256.0>>

	* uni2153 (U+2153): L<<147.0,707.0>--<146.0,415.0>> [code: found-semi-vertical]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Shaping Checks>.html#com.google.fonts/check/soft_dotted">com.google.fonts/check/soft_dotted</a>)</summary><div>


* ⚠ **WARN** The dot of soft dotted characters used in orthographies _must_ disappear in the following strings: i̊ i̋ j̀ j́ j̃ j̄ j̈ į̀ į́ į̂ į̃ į̄ į̌

The dot of soft dotted characters _should_ disappear in other cases, for example: ĭ i̇ ǐ i̒ ĭ̦ i̦̇ i̦̊ i̦̋ ǐ̦ i̦̒ ĭ̧ i̧̇ i̧̊ i̧̋ ǐ̧ i̧̒ ĵ j̆ j̇ j̊

Your font fully covers the following languages that require the soft-dotted feature: Lithuanian (Latn, 2,357,094 speakers). 

Your font does *not* cover the following languages that require the soft-dotted feature: Lugbara (Latn, 2,200,000 speakers), Kom (Latn, 360,685 speakers), Nzakara (Latn, 50,000 speakers), Zapotec (Latn, 490,000 speakers), Dan (Latn, 1,099,244 speakers), Sar (Latn, 500,000 speakers), Dutch (Latn, 31,709,104 speakers), Nateni (Latn, 100,000 speakers), Igbo (Latn, 27,823,640 speakers), Ukrainian (Cyrl, 29,273,587 speakers), Avokaya (Latn, 100,000 speakers), South Central Banda (Latn, 244,000 speakers), Bete-Bendi (Latn, 100,000 speakers), Aghem (Latn, 38,843 speakers), Ebira (Latn, 2,200,000 speakers), Mfumte (Latn, 79,000 speakers), Gulay (Latn, 250,478 speakers), Ma’di (Latn, 584,000 speakers), Bafut (Latn, 158,146 speakers), Ejagham (Latn, 120,000 speakers), Navajo (Latn, 166,319 speakers), Mango (Latn, 77,000 speakers), Mundani (Latn, 34,000 speakers), Ijo, Southeast (Latn, 2,471,000 speakers), Fur (Latn, 1,230,163 speakers), Koonzime (Latn, 40,000 speakers), Southern Kisi (Latn, 360,000 speakers), Basaa (Latn, 332,940 speakers), Belarusian (Cyrl, 10,064,517 speakers). [code: soft-dotted]
</div></details><br></div></details><details><summary><b>[12] Wittgenstein-Bold.ttf</b></summary><div><details><summary>🔥 <b>FAIL:</b> Checking OS/2 Metrics match hhea Metrics. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/os2_metrics_match_hhea">com.google.fonts/check/os2_metrics_match_hhea</a>)</summary><div>


* 🔥 **FAIL** OS/2 sTypoAscender (950) and hhea ascent (1100) must be equal. [code: ascender]
</div></details><details><summary>🔥 <b>FAIL:</b> Font contains '.notdef' as its first glyph? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/mandatory_glyphs">com.google.fonts/check/mandatory_glyphs</a>)</summary><div>


* 🔥 **FAIL** The '.notdef' glyph should contain a drawing, but it is blank. [code: notdef-is-blank]
</div></details><details><summary>🔥 <b>FAIL:</b> Check if each glyph has the recommended amount of contours. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/contour_count">com.google.fonts/check/contour_count</a>)</summary><div>


* 🔥 **FAIL** The following glyphs have no contours even though they were expected to have some:

	- Glyph name: uni25CC	Expected: 16 or 12

	- Glyph name: uni25CC	Expected: 16 or 12
 [code: no-contour]
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
</div></details><details><summary>🔥 <b>FAIL:</b> Check accent of Lcaron, dcaron, lcaron, tcaron (derived from com.google.fonts/check/alt_caron) (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/alt_caron">com.google.fonts/check/alt_caron</a>)</summary><div>


* 🔥 **FAIL** Lcaron uses component uni030C. [code: wrong-mark]
* 🔥 **FAIL** dcaron uses component uni030C. [code: wrong-mark]
* 🔥 **FAIL** lcaron uses component uni030C. [code: wrong-mark]
* 🔥 **FAIL** tcaron uses component uni030C. [code: wrong-mark]
</div></details><details><summary>⚠ <b>WARN:</b> Checking OS/2 achVendID. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/vendor_id">com.google.fonts/check/vendor_id</a>)</summary><div>


* ⚠ **WARN** OS/2 VendorID value 'TBLD' is not yet recognized. If you registered it recently, then it's safe to ignore this warning message. Otherwise, you should set it to your own unique 4 character code, and register it with Microsoft at https://www.microsoft.com/typography/links/vendorlist.aspx
 [code: unknown]
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
 * U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: tifinagh, coptic, cherokee, math
 * U+0306 COMBINING BREVE: try adding one of: tifinagh, old-permic
 * U+0307 COMBINING DOT ABOVE: try adding one of: tifinagh, malayalam, syriac, coptic, math, canadian-aboriginal, tai-le, old-permic
 * U+030A COMBINING RING ABOVE: try adding syriac
 * U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: cherokee, osage
 * U+030C COMBINING CARON: try adding one of: tai-le, cherokee
 * U+0312 COMBINING TURNED COMMA ABOVE: not included in any glyphset definition
 * U+0326 COMBINING COMMA BELOW: not included in any glyphset definition
 * U+0327 COMBINING CEDILLA: not included in any glyphset definition
 * U+0328 COMBINING OGONEK: not included in any glyphset definition
 * U+03C0 GREEK SMALL LETTER PI: try adding one of: greek, math, yi
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
 * U+200C ZERO WIDTH NON-JOINER: try adding one of: syloti-nagri, mahajani, nko, hanifi-rohingya, modi, kharoshthi, sharada, bengali, kayah-li, myanmar, saurashtra, tagalog, lepcha, tirhuta, hanunoo, duployan, tibetan, batak, gujarati, pahawh-hmong, avestan, warang-citi, buginese, brahmi, mandaic, tai-tham, tifinagh, siddham, devanagari, limbu, telugu, balinese, oriya, gurmukhi, gunjala-gondi, meetei-mayek, tagbanwa, rejang, tai-le, khmer, syriac, mongolian, sundanese, tai-viet, dogra, malayalam, thaana, yi, tamil, sogdian, sinhala, takri, grantha, newa, cham, manichaean, khojki, javanese, kannada, khudawadi, thai, kaithi, buhid, chakma, hatran, new-tai-lue, phags-pa, psalter-pahlavi
 * U+200D ZERO WIDTH JOINER: try adding one of: syloti-nagri, mahajani, nko, hanifi-rohingya, modi, kharoshthi, sharada, bengali, kayah-li, myanmar, saurashtra, tagalog, lepcha, tirhuta, hanunoo, duployan, tibetan, batak, gujarati, pahawh-hmong, avestan, warang-citi, buginese, brahmi, mandaic, tai-tham, tifinagh, siddham, devanagari, limbu, old-hungarian, telugu, balinese, oriya, gurmukhi, gunjala-gondi, meetei-mayek, tagbanwa, emoji, rejang, tai-le, syriac, tai-viet, mongolian, sundanese, dogra, malayalam, thaana, yi, tamil, sinhala, takri, grantha, newa, cham, manichaean, khojki, javanese, kannada, khudawadi, thai, kaithi, buhid, chakma, new-tai-lue, phags-pa, psalter-pahlavi
 * U+200E LEFT-TO-RIGHT MARK: try adding one of: syriac, nko, phags-pa, thaana
 * U+200F RIGHT-TO-LEFT MARK: try adding one of: syriac, nko, phags-pa, thaana
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
 * U+2190 LEFTWARDS ARROW: try adding one of: symbols, math
 * U+2192 RIGHTWARDS ARROW: try adding one of: symbols, math
 * U+2194 LEFT RIGHT ARROW: try adding one of: symbols, emoji, math
 * U+2195 UP DOWN ARROW: try adding one of: symbols, emoji, math
 * U+2196 NORTH WEST ARROW: try adding one of: symbols, emoji, math
 * U+2197 NORTH EAST ARROW: try adding one of: symbols, emoji, math
 * U+2198 SOUTH EAST ARROW: try adding one of: symbols, emoji, math
 * U+2199 SOUTH WEST ARROW: try adding one of: symbols, emoji, math
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
 * U+25AA BLACK SMALL SQUARE: try adding one of: symbols, emoji
 * U+25AB WHITE SMALL SQUARE: try adding one of: symbols, emoji
 * U+25B2 BLACK UP-POINTING TRIANGLE: try adding symbols
 * U+25B3 WHITE UP-POINTING TRIANGLE: try adding one of: symbols, math
 * U+25B4 BLACK UP-POINTING SMALL TRIANGLE: try adding symbols
 * U+25B5 WHITE UP-POINTING SMALL TRIANGLE: try adding symbols
 * U+25B6 BLACK RIGHT-POINTING TRIANGLE: try adding one of: symbols, emoji
 * U+25B7 WHITE RIGHT-POINTING TRIANGLE: try adding one of: symbols, math
 * U+25B8 BLACK RIGHT-POINTING SMALL TRIANGLE: try adding symbols
 * U+25B9 WHITE RIGHT-POINTING SMALL TRIANGLE: try adding symbols
 * U+25BC BLACK DOWN-POINTING TRIANGLE: try adding symbols
 * U+25BD WHITE DOWN-POINTING TRIANGLE: try adding one of: symbols, math
 * U+25BE BLACK DOWN-POINTING SMALL TRIANGLE: try adding symbols
 * U+25BF WHITE DOWN-POINTING SMALL TRIANGLE: try adding symbols
 * U+25C0 BLACK LEFT-POINTING TRIANGLE: try adding one of: symbols, emoji
 * U+25C1 WHITE LEFT-POINTING TRIANGLE: try adding one of: symbols, math
 * U+25C2 BLACK LEFT-POINTING SMALL TRIANGLE: try adding symbols
 * U+25C3 WHITE LEFT-POINTING SMALL TRIANGLE: try adding symbols
 * U+25C6 BLACK DIAMOND: try adding symbols
 * U+25C7 WHITE DIAMOND: try adding symbols
 * U+25CA LOZENGE: try adding one of: symbols, math
 * U+25CB WHITE CIRCLE: try adding symbols
 * U+25CC DOTTED CIRCLE: try adding one of: lao, sharada, tagalog, batak, pahawh-hmong, buginese, mandaic, tifinagh, devanagari, dogra, coptic, newa, marchen, manichaean, soyombo, buhid, chakma, tirhuta, nko, kharoshthi, lepcha, osage, brahmi, siddham, limbu, zanabazar-square, tai-viet, mongolian, sundanese, thaana, takri, mende-kikakui, bhaiksuki, khojki, kannada, khmer, syloti-nagri, old-permic, myanmar, miao, tibetan, gujarati, oriya, rejang, tai-le, ahom, elbasan, malayalam, tamil, sogdian, music, math, grantha, javanese, khudawadi, thai, kaithi, mahajani, hanifi-rohingya, modi, bengali, kayah-li, adlam, caucasian-albanian, wancho, hanunoo, duployan, bassa-vah, telugu, balinese, tagbanwa, gurmukhi, gunjala-gondi, hebrew, meetei-mayek, syriac, symbols, yi, sinhala, cham, masaram-gondi, new-tai-lue, phags-pa, psalter-pahlavi
 * U+25CF BLACK CIRCLE: try adding symbols
 * U+25E6 WHITE BULLET: try adding symbols
 * U+27E8 MATHEMATICAL LEFT ANGLE BRACKET: try adding math
 * U+27E9 MATHEMATICAL RIGHT ANGLE BRACKET: try adding math

Or you can add the above codepoints to one of the subsets supported by the font: `cyrillic-ext`, `latin`, `latin-ext` [code: unreachable-subsetting]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure fonts have ScriptLangTags declared on the 'meta' table. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/meta/script_lang_tags">com.google.fonts/check/meta/script_lang_tags</a>)</summary><div>


* ⚠ **WARN** This font file does not have a 'meta' table. [code: lacks-meta-table]
</div></details><details><summary>⚠ <b>WARN:</b> Check font contains no unreachable glyphs (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/unreachable_glyphs">com.google.fonts/check/unreachable_glyphs</a>)</summary><div>


* ⚠ **WARN** The following glyphs could not be reached by codepoint or substitution rules:

	- eight.dnom

	- eight.numr

	- eight.tf

	- five.dnom

	- five.numr

	- five.tf

	- four.dnom

	- four.numr

	- four.tf

	- i.loclTRK

	- nine.dnom

	- nine.numr

	- nine.tf

	- one.dnom

	- one.numr

	- one.tf

	- periodcentered.loclCAT

	- periodcentered.loclCAT.case

	- seven.dnom

	- seven.numr

	- seven.tf

	- six.dnom

	- six.numr

	- six.tf

	- three.dnom

	- three.numr

	- three.tf

	- two.dnom

	- two.numr

	- two.tf

	- uni004A0301

	- uni006A0301

	- uni013B.loclMAH

	- uni013C.loclMAH

	- uni0145.loclMAH

	- uni0146.loclMAH

	- uni030C.alt

	- uni0326.loclMAH

	- uni20B8.001

	- zero.dnom

	- zero.numr

	- zero.tf

	- zero.zero
 [code: unreachable-glyphs]
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
</div></details><details><summary>⚠ <b>WARN:</b> Do outlines contain any jaggy segments? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Outline Correctness Checks>.html#com.google.fonts/check/outline_jaggy_segments">com.google.fonts/check/outline_jaggy_segments</a>)</summary><div>


* ⚠ **WARN** The following glyphs have jaggy segments:

	* C (U+0043): B<<421.0,666.5>-<379.0,679.0>-<341.0,672.0>>/L<<341.0,672.0>--<341.0,672.0>> = 10.437475351118158

	* C (U+0043): B<<429.5,-14.5>-<392.0,-19.0>-<363.0,-16.0>>/L<<363.0,-16.0>--<363.0,-16.0>> = 5.906141113770497

	* C (U+0043): L<<341.0,672.0>--<341.0,672.0>>/B<<341.0,672.0>-<294.0,665.0>-<257.0,631.5>> = 8.471144633014832

	* C (U+0043): L<<363.0,-16.0>--<363.0,-16.0>>/B<<363.0,-16.0>-<263.0,-11.0>-<184.5,36.0>> = 2.862405226111651

	* Cacute (U+0106): B<<421.0,666.5>-<379.0,679.0>-<341.0,672.0>>/L<<341.0,672.0>--<341.0,672.0>> = 10.437475351118158

	* Cacute (U+0106): B<<429.5,-14.5>-<392.0,-19.0>-<363.0,-16.0>>/L<<363.0,-16.0>--<363.0,-16.0>> = 5.906141113770497

	* Cacute (U+0106): L<<341.0,672.0>--<341.0,672.0>>/B<<341.0,672.0>-<294.0,665.0>-<257.0,631.5>> = 8.471144633014832

	* Cacute (U+0106): L<<363.0,-16.0>--<363.0,-16.0>>/B<<363.0,-16.0>-<263.0,-11.0>-<184.5,36.0>> = 2.862405226111651

	* Ccaron (U+010C): B<<421.0,666.5>-<379.0,679.0>-<341.0,672.0>>/L<<341.0,672.0>--<341.0,672.0>> = 10.437475351118158

	* Ccaron (U+010C): B<<429.5,-14.5>-<392.0,-19.0>-<363.0,-16.0>>/L<<363.0,-16.0>--<363.0,-16.0>> = 5.906141113770497

	* Ccaron (U+010C): L<<341.0,672.0>--<341.0,672.0>>/B<<341.0,672.0>-<294.0,665.0>-<257.0,631.5>> = 8.471144633014832

	* Ccaron (U+010C): L<<363.0,-16.0>--<363.0,-16.0>>/B<<363.0,-16.0>-<263.0,-11.0>-<184.5,36.0>> = 2.862405226111651

	* Ccedilla (U+00C7): B<<421.0,666.5>-<379.0,679.0>-<341.0,672.0>>/L<<341.0,672.0>--<341.0,672.0>> = 10.437475351118158

	* Ccedilla (U+00C7): B<<429.5,-14.5>-<392.0,-19.0>-<363.0,-16.0>>/L<<363.0,-16.0>--<363.0,-16.0>> = 5.906141113770497

	* Ccedilla (U+00C7): L<<341.0,672.0>--<341.0,672.0>>/B<<341.0,672.0>-<294.0,665.0>-<257.0,631.5>> = 8.471144633014832

	* Ccedilla (U+00C7): L<<363.0,-16.0>--<363.0,-16.0>>/B<<363.0,-16.0>-<263.0,-11.0>-<184.5,36.0>> = 2.862405226111651

	* Cdotaccent (U+010A): B<<421.0,666.5>-<379.0,679.0>-<341.0,672.0>>/L<<341.0,672.0>--<341.0,672.0>> = 10.437475351118158

	* Cdotaccent (U+010A): B<<429.5,-14.5>-<392.0,-19.0>-<363.0,-16.0>>/L<<363.0,-16.0>--<363.0,-16.0>> = 5.906141113770497

	* Cdotaccent (U+010A): L<<341.0,672.0>--<341.0,672.0>>/B<<341.0,672.0>-<294.0,665.0>-<257.0,631.5>> = 8.471144633014832

	* Cdotaccent (U+010A): L<<363.0,-16.0>--<363.0,-16.0>>/B<<363.0,-16.0>-<263.0,-11.0>-<184.5,36.0>> = 2.862405226111651

	* G (U+0047): B<<502.0,647.0>-<456.0,669.0>-<402.0,673.0>>/L<<402.0,673.0>--<402.0,673.0>> = 4.236394799058849

	* G (U+0047): L<<546.0,252.0>--<549.0,252.0>>/L<<549.0,252.0>--<415.0,283.0>> = 13.025840646870815

	* Gbreve (U+011E): B<<502.0,647.0>-<456.0,669.0>-<402.0,673.0>>/L<<402.0,673.0>--<402.0,673.0>> = 4.236394799058849

	* Gbreve (U+011E): L<<546.0,252.0>--<549.0,252.0>>/L<<549.0,252.0>--<415.0,283.0>> = 13.025840646870815

	* Gdotaccent (U+0120): B<<502.0,647.0>-<456.0,669.0>-<402.0,673.0>>/L<<402.0,673.0>--<402.0,673.0>> = 4.236394799058849

	* Gdotaccent (U+0120): L<<546.0,252.0>--<549.0,252.0>>/L<<549.0,252.0>--<415.0,283.0>> = 13.025840646870815

	* P (U+0050): B<<437.0,330.5>-<373.0,302.0>-<288.0,298.0>>/L<<288.0,298.0>--<288.0,298.0>> = 2.694284289856061

	* Thorn (U+00DE): B<<437.0,185.5>-<373.0,157.0>-<288.0,153.0>>/L<<288.0,153.0>--<288.0,153.0>> = 2.694284289856061

	* colonmonetary (U+20A1): B<<414.0,673.0>-<389.0,676.0>-<367.0,672.0>>/L<<367.0,672.0>--<367.0,672.0>> = 10.304846468766044

	* colonmonetary (U+20A1): B<<455.5,-14.5>-<418.0,-19.0>-<389.0,-16.0>>/L<<389.0,-16.0>--<389.0,-16.0>> = 5.906141113770497

	* colonmonetary (U+20A1): L<<367.0,672.0>--<367.0,672.0>>/B<<367.0,672.0>-<320.0,665.0>-<283.0,631.5>> = 8.471144633014832

	* colonmonetary (U+20A1): L<<389.0,-16.0>--<389.0,-16.0>>/B<<389.0,-16.0>-<362.0,-15.0>-<336.0,-10.0>> = 2.1210963966614473

	* uni0122 (U+0122): B<<502.0,647.0>-<456.0,669.0>-<402.0,673.0>>/L<<402.0,673.0>--<402.0,673.0>> = 4.236394799058849

	* uni0122 (U+0122): L<<546.0,252.0>--<549.0,252.0>>/L<<549.0,252.0>--<415.0,283.0>> = 13.025840646870815

	* uni1E20 (U+1E20): B<<502.0,647.0>-<456.0,669.0>-<402.0,673.0>>/L<<402.0,673.0>--<402.0,673.0>> = 4.236394799058849

	* uni1E20 (U+1E20): L<<546.0,252.0>--<549.0,252.0>>/L<<549.0,252.0>--<415.0,283.0>> = 13.025840646870815

	* uni20B1 (U+20B1): B<<463.0,330.5>-<399.0,302.0>-<314.0,298.0>>/L<<314.0,298.0>--<314.0,298.0>> = 2.694284289856061

	* uni20B2 (U+20B2): B<<535.0,647.0>-<489.0,669.0>-<435.0,673.0>>/L<<435.0,673.0>--<435.0,673.0>> = 4.236394799058849

	* uni20B2 (U+20B2): L<<579.0,252.0>--<582.0,252.0>>/L<<582.0,252.0>--<448.0,283.0>> = 13.025840646870815

	* uni20B5 (U+20B5): B<<376.0,683.0>-<372.0,683.0>-<367.0,682.0>>/L<<367.0,682.0>--<367.0,682.0>> = 11.309932474020195

	* uni20B5 (U+20B5): L<<367.0,682.0>--<367.0,682.0>>/B<<367.0,682.0>-<320.0,675.0>-<283.0,641.5>> = 8.471144633014832 [code: found-jaggy-segments]
</div></details><details><summary>⚠ <b>WARN:</b> Do outlines contain any semi-vertical or semi-horizontal lines? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Outline Correctness Checks>.html#com.google.fonts/check/outline_semi_vertical">com.google.fonts/check/outline_semi_vertical</a>)</summary><div>


* ⚠ **WARN** The following glyphs have semi-vertical/semi-horizontal lines:

	* four (U+0034): L<<461.0,183.0>--<460.0,-2.0>>

	* four (U+0034): L<<462.0,692.0>--<461.0,258.0>>

	* one (U+0031): L<<379.0,694.0>--<377.0,52.0>>

	* onehalf (U+00BD): L<<159.0,704.0>--<158.0,415.0>>

	* onequarter (U+00BC): L<<159.0,704.0>--<158.0,415.0>>

	* onequarter (U+00BC): L<<539.0,311.0>--<538.0,116.0>>

	* section (U+00A7): L<<114.0,-170.0>--<115.0,-36.0>>

	* section (U+00A7): L<<515.0,671.0>--<514.0,547.0>>

	* threequarters (U+00BE): L<<539.0,311.0>--<538.0,116.0>>

	* uni00B9 (U+00B9): L<<379.0,694.0>--<377.0,52.0>>

	* uni2074 (U+2074): L<<461.0,183.0>--<460.0,-2.0>>

	* uni2074 (U+2074): L<<462.0,692.0>--<461.0,258.0>>

	* uni2081 (U+2081): L<<379.0,694.0>--<377.0,52.0>>

	* uni2084 (U+2084): L<<461.0,183.0>--<460.0,-2.0>>

	* uni2084 (U+2084): L<<462.0,692.0>--<461.0,258.0>>

	* uni2153 (U+2153): L<<159.0,704.0>--<158.0,415.0>> [code: found-semi-vertical]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Shaping Checks>.html#com.google.fonts/check/soft_dotted">com.google.fonts/check/soft_dotted</a>)</summary><div>


* ⚠ **WARN** The dot of soft dotted characters used in orthographies _must_ disappear in the following strings: i̊ i̋ j̀ j́ j̃ j̄ j̈ į̀ į́ į̂ į̃ į̄ į̌

The dot of soft dotted characters _should_ disappear in other cases, for example: ĭ i̇ ǐ i̒ ĭ̦ i̦̇ i̦̊ i̦̋ ǐ̦ i̦̒ ĭ̧ i̧̇ i̧̊ i̧̋ ǐ̧ i̧̒ ĵ j̆ j̇ j̊

Your font fully covers the following languages that require the soft-dotted feature: Lithuanian (Latn, 2,357,094 speakers). 

Your font does *not* cover the following languages that require the soft-dotted feature: Lugbara (Latn, 2,200,000 speakers), Kom (Latn, 360,685 speakers), Nzakara (Latn, 50,000 speakers), Zapotec (Latn, 490,000 speakers), Dan (Latn, 1,099,244 speakers), Sar (Latn, 500,000 speakers), Dutch (Latn, 31,709,104 speakers), Nateni (Latn, 100,000 speakers), Igbo (Latn, 27,823,640 speakers), Ukrainian (Cyrl, 29,273,587 speakers), Avokaya (Latn, 100,000 speakers), South Central Banda (Latn, 244,000 speakers), Bete-Bendi (Latn, 100,000 speakers), Aghem (Latn, 38,843 speakers), Ebira (Latn, 2,200,000 speakers), Mfumte (Latn, 79,000 speakers), Gulay (Latn, 250,478 speakers), Ma’di (Latn, 584,000 speakers), Bafut (Latn, 158,146 speakers), Ejagham (Latn, 120,000 speakers), Navajo (Latn, 166,319 speakers), Mango (Latn, 77,000 speakers), Mundani (Latn, 34,000 speakers), Ijo, Southeast (Latn, 2,471,000 speakers), Fur (Latn, 1,230,163 speakers), Koonzime (Latn, 40,000 speakers), Southern Kisi (Latn, 360,000 speakers), Basaa (Latn, 332,940 speakers), Belarusian (Cyrl, 10,064,517 speakers). [code: soft-dotted]
</div></details><br></div></details>

### Summary

| 💔 ERROR | ☠ FATAL | 🔥 FAIL | ⚠ WARN | 💤 SKIP | ℹ INFO | 🍞 PASS | 🔎 DEBUG |
|:-----:|:----:|:----:|:----:|:----:|:----:|:----:|
| 0 | 0 | 10 | 15 | 246 | 13 | 208 |
| 0% | 0% | 2% | 3% | 50% | 3% | 42% |

**Note:** The following loglevels were omitted in this report:
* **SKIP**
* **INFO**
* **PASS**
* **DEBUG**
