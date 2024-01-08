## FontBakery report

fontbakery version: 0.10.8

<details><summary><b>[12] Wittgenstein-Black.ttf</b></summary><div><details><summary>🔥 <b>FAIL:</b> Checking OS/2 usWinAscent & usWinDescent. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/family/win_ascent_and_descent">com.google.fonts/check/family/win_ascent_and_descent</a>)</summary><div>


* 🔥 **FAIL** OS/2.usWinAscent value should be equal or greater than 1179, but got 1100 instead [code: ascent]
* 🔥 **FAIL** OS/2.usWinDescent value should be equal or greater than 433, but got 350 instead [code: descent]
</div></details><details><summary>🔥 <b>FAIL:</b> Space and non-breaking space have the same width? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/whitespace_widths">com.google.fonts/check/whitespace_widths</a>)</summary><div>


* 🔥 **FAIL** Space and non-breaking space have differing width: The space glyph named space is 175 font units wide, non-breaking space named (uni00A0) is 600 font units wide, and both should be positive and the same. GlyphsApp has "Sidebearing arithmetic" (https://glyphsapp.com/tutorials/spacing) which allows you to set the non-breaking space width to always equal the space width. [code: different-widths]
</div></details><details><summary>⚠ <b>WARN:</b> Checking OS/2 achVendID. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/vendor_id">com.google.fonts/check/vendor_id</a>)</summary><div>


* ⚠ **WARN** OS/2 VendorID value 'TBLD' is not yet recognized. If you registered it recently, then it's safe to ignore this warning message. Otherwise, you should set it to your own unique 4 character code, and register it with Microsoft at https://www.microsoft.com/typography/links/vendorlist.aspx
 [code: unknown]
</div></details><details><summary>⚠ <b>WARN:</b> Check for codepoints not covered by METADATA subsets. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/metadata/unreachable_subsetting">com.google.fonts/check/metadata/unreachable_subsetting</a>)</summary><div>


* ⚠ **WARN** The following codepoints supported by the font are not covered by
    any subsets defined in the font's metadata file, and will never
    be served. You can solve this by either manually adding additional
    subset declarations to METADATA.pb, or by editing the glyphset
    definitions.

 * U+02C7 CARON: try adding one of: canadian-aboriginal, tifinagh, yi
 * U+02D8 BREVE: try adding one of: canadian-aboriginal, yi
 * U+02D9 DOT ABOVE: try adding one of: canadian-aboriginal, yi
 * U+02DB OGONEK: try adding one of: canadian-aboriginal, yi
 * U+02DD DOUBLE ACUTE ACCENT: not included in any glyphset definition
 * U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: coptic, cherokee, tifinagh, math
 * U+0306 COMBINING BREVE: try adding one of: old-permic, tifinagh
 * U+0307 COMBINING DOT ABOVE: try adding one of: canadian-aboriginal, malayalam, syriac, coptic, tai-le, math, old-permic, tifinagh
 * U+030A COMBINING RING ABOVE: try adding syriac
 * U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee
 * U+030C COMBINING CARON: try adding one of: cherokee, tai-le
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
 * U+200C ZERO WIDTH NON-JOINER: try adding one of: chakma, hatran, grantha, psalter-pahlavi, khmer, buhid, duployan, khudawadi, brahmi, modi, tai-tham, thai, tifinagh, limbu, tirhuta, gurmukhi, kayah-li, malayalam, cham, phags-pa, devanagari, new-tai-lue, sinhala, balinese, khojki, syloti-nagri, syriac, tagbanwa, tamil, yi, javanese, tai-le, batak, tagalog, tibetan, myanmar, rejang, avestan, bengali, kharoshthi, kannada, warang-citi, thaana, hanunoo, saurashtra, gujarati, lepcha, buginese, siddham, telugu, dogra, takri, kaithi, mongolian, pahawh-hmong, sundanese, manichaean, sharada, oriya, mandaic, gunjala-gondi, nko, sogdian, tai-viet, newa, meetei-mayek, hanifi-rohingya, mahajani
 * U+200D ZERO WIDTH JOINER: try adding one of: chakma, grantha, psalter-pahlavi, buhid, duployan, khudawadi, brahmi, modi, tai-tham, thai, tifinagh, limbu, tirhuta, gurmukhi, kayah-li, malayalam, cham, phags-pa, devanagari, new-tai-lue, sinhala, balinese, khojki, old-hungarian, syloti-nagri, syriac, tagbanwa, tamil, yi, javanese, tai-le, batak, tagalog, tibetan, myanmar, rejang, avestan, bengali, kharoshthi, kannada, warang-citi, thaana, hanunoo, saurashtra, gujarati, lepcha, buginese, siddham, telugu, dogra, takri, kaithi, mongolian, pahawh-hmong, emoji, sundanese, manichaean, sharada, oriya, mandaic, gunjala-gondi, nko, tai-viet, newa, meetei-mayek, hanifi-rohingya, mahajani
 * U+200E LEFT-TO-RIGHT MARK: try adding one of: nko, phags-pa, thaana, syriac
 * U+200F RIGHT-TO-LEFT MARK: try adding one of: nko, phags-pa, thaana, syriac
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
 * U+25CC DOTTED CIRCLE: try adding one of: grantha, psalter-pahlavi, khudawadi, brahmi, thai, cham, mende-kikakui, new-tai-lue, syloti-nagri, javanese, bhaiksuki, miao, bassa-vah, kaithi, wancho, mandaic, soyombo, tai-viet, hanifi-rohingya, adlam, chakma, hebrew, phags-pa, khojki, lao, zanabazar-square, rejang, kharoshthi, coptic, buginese, dogra, pahawh-hmong, manichaean, nko, sundanese, khmer, modi, tifinagh, limbu, tirhuta, kayah-li, malayalam, devanagari, sinhala, balinese, tagbanwa, tai-le, tagalog, myanmar, bengali, osage, thaana, caucasian-albanian, gujarati, lepcha, siddham, math, telugu, takri, oriya, gunjala-gondi, sogdian, music, mahajani, buhid, duployan, gurmukhi, marchen, syriac, tamil, yi, masaram-gondi, batak, tibetan, symbols, kannada, hanunoo, elbasan, mongolian, sharada, ahom, newa, meetei-mayek, old-permic
 * U+25CF BLACK CIRCLE: try adding symbols
 * U+25E6 WHITE BULLET: try adding symbols
 * U+27E8 MATHEMATICAL LEFT ANGLE BRACKET: try adding math
 * U+27E9 MATHEMATICAL RIGHT ANGLE BRACKET: try adding math

Or you can add the above codepoints to one of the subsets supported by the font: `cyrillic-ext`, `latin`, `latin-ext` [code: unreachable-subsetting]
</div></details><details><summary>⚠ <b>WARN:</b> Are there caret positions declared for every ligature? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/ligature_carets">com.google.fonts/check/ligature_carets</a>)</summary><div>


* ⚠ **WARN** This font lacks caret position values for ligature glyphs on its GDEF table. [code: lacks-caret-pos]
</div></details><details><summary>⚠ <b>WARN:</b> Is there kerning info for non-ligated sequences? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/kerning_for_non_ligated_sequences">com.google.fonts/check/kerning_for_non_ligated_sequences</a>)</summary><div>


* ⚠ **WARN** GPOS table lacks kerning info for the following non-ligated sequences:

	- T + b

	- b + l

	- l + d

	- f + i

	- i + l

	- t + b [code: lacks-kern-info]
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

	* b (U+0062): L<<220.0,784.0>--<218.0,718.0>> -> L<<218.0,718.0>--<218.0,498.0>>

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

	* ij (U+0133): L<<568.0,493.0>--<566.0,428.0>> -> L<<566.0,428.0>--<566.0,53.0>>

	* imacron (U+012B): L<<274.0,493.0>--<272.0,427.0>> -> L<<272.0,427.0>--<272.0,50.0>>

	* iogonek (U+012F): L<<274.0,493.0>--<272.0,427.0>> -> L<<272.0,427.0>--<272.0,50.0>>

	* itilde (U+0129): L<<274.0,493.0>--<272.0,427.0>> -> L<<272.0,427.0>--<272.0,50.0>>

	* j (U+006A): L<<250.0,493.0>--<248.0,428.0>> -> L<<248.0,428.0>--<248.0,53.0>>

	* jcircumflex (U+0135): L<<250.0,493.0>--<248.0,428.0>> -> L<<248.0,428.0>--<248.0,53.0>>

	* k (U+006B): L<<229.0,787.0>--<227.0,718.0>> -> L<<227.0,718.0>--<227.0,293.0>>

	* l (U+006C): L<<244.0,787.0>--<242.0,718.0>> -> L<<242.0,718.0>--<242.0,50.0>>

	* lacute (U+013A): L<<244.0,787.0>--<242.0,718.0>> -> L<<242.0,718.0>--<242.0,50.0>>

	* lcaron (U+013E): L<<244.0,787.0>--<242.0,718.0>> -> L<<242.0,718.0>--<242.0,50.0>>

	* lslash (U+0142): L<<244.0,787.0>--<242.0,718.0>> -> L<<242.0,718.0>--<242.0,474.0>>

	* thorn (U+00FE): L<<246.0,784.0>--<244.0,705.0>> -> L<<244.0,705.0>--<244.0,506.0>>

	* uni0137 (U+0137): L<<229.0,787.0>--<227.0,718.0>> -> L<<227.0,718.0>--<227.0,293.0>>

	* uni013C (U+013C): L<<244.0,787.0>--<242.0,718.0>> -> L<<242.0,718.0>--<242.0,50.0>>

	* uni0237 (U+0237): L<<250.0,493.0>--<248.0,428.0>> -> L<<248.0,428.0>--<248.0,53.0>>

	* uni1EF9 (U+1EF9): L<<506.0,436.0>--<295.0,0.0>> -> L<<295.0,0.0>--<204.0,-216.0>>

	* y (U+0079): L<<506.0,436.0>--<295.0,0.0>> -> L<<295.0,0.0>--<204.0,-216.0>>

	* yacute (U+00FD): L<<506.0,436.0>--<295.0,0.0>> -> L<<295.0,0.0>--<204.0,-216.0>>

	* ycircumflex (U+0177): L<<506.0,436.0>--<295.0,0.0>> -> L<<295.0,0.0>--<204.0,-216.0>>

	* ydieresis (U+00FF): L<<506.0,436.0>--<295.0,0.0>> -> L<<295.0,0.0>--<204.0,-216.0>>

	* ygrave (U+1EF3): L<<506.0,436.0>--<295.0,0.0>> -> L<<295.0,0.0>--<204.0,-216.0>> [code: found-colinear-vectors]
</div></details><details><summary>⚠ <b>WARN:</b> Do outlines contain any semi-vertical or semi-horizontal lines? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Outline Correctness Checks>.html#com.google.fonts/check/outline_semi_vertical">com.google.fonts/check/outline_semi_vertical</a>)</summary><div>


* ⚠ **WARN** The following glyphs have semi-vertical/semi-horizontal lines:

	* h (U+0068): L<<636.0,0.0>--<324.0,1.0>>

	* hbar (U+0127): L<<636.0,0.0>--<324.0,1.0>>

	* hcircumflex (U+0125): L<<636.0,0.0>--<324.0,1.0>>

	* n (U+006E): L<<648.0,-1.0>--<336.0,0.0>>

	* nacute (U+0144): L<<648.0,-1.0>--<336.0,0.0>>

	* ncaron (U+0148): L<<648.0,-1.0>--<336.0,0.0>>

	* ntilde (U+00F1): L<<648.0,-1.0>--<336.0,0.0>>

	* uni0146 (U+0146): L<<648.0,-1.0>--<336.0,0.0>>

	* uni018F (U+018F): L<<16.0,325.0>--<413.0,322.0>> [code: found-semi-vertical]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Shaping Checks>.html#com.google.fonts/check/soft_dotted">com.google.fonts/check/soft_dotted</a>)</summary><div>


* ⚠ **WARN** The dot of soft dotted characters used in orthographies _must_ disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌

The dot of soft dotted characters _should_ disappear in other cases, for example: į̆ į̇ į̈ į̊ į̋ į̒ į̧̀ į̧́ į̧̂ į̧̃ į̧̄ į̧̆ į̧̇ į̧̈ į̧̊ į̧̋ į̧̌ į̧̒ į̨̀ į̨́

Your font fully covers the following languages that require the soft-dotted feature: Dutch (Latn, 31,709,104 speakers), Lithuanian (Latn, 2,357,094 speakers). 

Your font does *not* cover the following languages that require the soft-dotted feature: Cicipu (Latn, 44,000 speakers), Ejagham (Latn, 120,000 speakers), Kom (Latn, 360,685 speakers), Dan (Latn, 1,099,244 speakers), Nateni (Latn, 100,000 speakers), Southern Kisi (Latn, 360,000 speakers), Mango (Latn, 77,000 speakers), Ebira (Latn, 2,200,000 speakers), Kpelle, Guinea (Latn, 622,000 speakers), Nzakara (Latn, 50,000 speakers), Mundani (Latn, 34,000 speakers), Mfumte (Latn, 79,000 speakers), Aghem (Latn, 38,843 speakers), Bete-Bendi (Latn, 100,000 speakers), Gulay (Latn, 250,478 speakers), Makaa (Latn, 221,000 speakers), South Central Banda (Latn, 244,000 speakers), Navajo (Latn, 166,319 speakers), Koonzime (Latn, 40,000 speakers), Fur (Latn, 1,230,163 speakers), Ngbaka (Latn, 1,020,000 speakers), Lugbara (Latn, 2,200,000 speakers), Sar (Latn, 500,000 speakers), Avokaya (Latn, 100,000 speakers), Dii (Latn, 71,000 speakers), Igbo (Latn, 27,823,640 speakers), Yala (Latn, 200,000 speakers), Ekpeye (Latn, 226,000 speakers), Belarusian (Cyrl, 10,064,517 speakers), Ijo, Southeast (Latn, 2,471,000 speakers), Zapotec (Latn, 490,000 speakers), Ukrainian (Cyrl, 29,273,587 speakers), Bafut (Latn, 158,146 speakers), Ma’di (Latn, 584,000 speakers), Basaa (Latn, 332,940 speakers). [code: soft-dotted]
</div></details><br></div></details><details><summary><b>[10] Wittgenstein-Regular.ttf</b></summary><div><details><summary>🔥 <b>FAIL:</b> Checking OS/2 usWinAscent & usWinDescent. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/family/win_ascent_and_descent">com.google.fonts/check/family/win_ascent_and_descent</a>)</summary><div>


* 🔥 **FAIL** OS/2.usWinAscent value should be equal or greater than 1179, but got 1100 instead [code: ascent]
* 🔥 **FAIL** OS/2.usWinDescent value should be equal or greater than 433, but got 350 instead [code: descent]
</div></details><details><summary>⚠ <b>WARN:</b> Checking OS/2 achVendID. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/vendor_id">com.google.fonts/check/vendor_id</a>)</summary><div>


* ⚠ **WARN** OS/2 VendorID value 'TBLD' is not yet recognized. If you registered it recently, then it's safe to ignore this warning message. Otherwise, you should set it to your own unique 4 character code, and register it with Microsoft at https://www.microsoft.com/typography/links/vendorlist.aspx
 [code: unknown]
</div></details><details><summary>⚠ <b>WARN:</b> Check for codepoints not covered by METADATA subsets. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/metadata/unreachable_subsetting">com.google.fonts/check/metadata/unreachable_subsetting</a>)</summary><div>


* ⚠ **WARN** The following codepoints supported by the font are not covered by
    any subsets defined in the font's metadata file, and will never
    be served. You can solve this by either manually adding additional
    subset declarations to METADATA.pb, or by editing the glyphset
    definitions.

 * U+02C7 CARON: try adding one of: canadian-aboriginal, tifinagh, yi
 * U+02D8 BREVE: try adding one of: canadian-aboriginal, yi
 * U+02D9 DOT ABOVE: try adding one of: canadian-aboriginal, yi
 * U+02DB OGONEK: try adding one of: canadian-aboriginal, yi
 * U+02DD DOUBLE ACUTE ACCENT: not included in any glyphset definition
 * U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: coptic, cherokee, tifinagh, math
 * U+0306 COMBINING BREVE: try adding one of: old-permic, tifinagh
 * U+0307 COMBINING DOT ABOVE: try adding one of: canadian-aboriginal, malayalam, syriac, coptic, tai-le, math, old-permic, tifinagh
 * U+030A COMBINING RING ABOVE: try adding syriac
 * U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee
 * U+030C COMBINING CARON: try adding one of: cherokee, tai-le
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
 * U+200C ZERO WIDTH NON-JOINER: try adding one of: chakma, hatran, grantha, psalter-pahlavi, khmer, buhid, duployan, khudawadi, brahmi, modi, tai-tham, thai, tifinagh, limbu, tirhuta, gurmukhi, kayah-li, malayalam, cham, phags-pa, devanagari, new-tai-lue, sinhala, balinese, khojki, syloti-nagri, syriac, tagbanwa, tamil, yi, javanese, tai-le, batak, tagalog, tibetan, myanmar, rejang, avestan, bengali, kharoshthi, kannada, warang-citi, thaana, hanunoo, saurashtra, gujarati, lepcha, buginese, siddham, telugu, dogra, takri, kaithi, mongolian, pahawh-hmong, sundanese, manichaean, sharada, oriya, mandaic, gunjala-gondi, nko, sogdian, tai-viet, newa, meetei-mayek, hanifi-rohingya, mahajani
 * U+200D ZERO WIDTH JOINER: try adding one of: chakma, grantha, psalter-pahlavi, buhid, duployan, khudawadi, brahmi, modi, tai-tham, thai, tifinagh, limbu, tirhuta, gurmukhi, kayah-li, malayalam, cham, phags-pa, devanagari, new-tai-lue, sinhala, balinese, khojki, old-hungarian, syloti-nagri, syriac, tagbanwa, tamil, yi, javanese, tai-le, batak, tagalog, tibetan, myanmar, rejang, avestan, bengali, kharoshthi, kannada, warang-citi, thaana, hanunoo, saurashtra, gujarati, lepcha, buginese, siddham, telugu, dogra, takri, kaithi, mongolian, pahawh-hmong, emoji, sundanese, manichaean, sharada, oriya, mandaic, gunjala-gondi, nko, tai-viet, newa, meetei-mayek, hanifi-rohingya, mahajani
 * U+200E LEFT-TO-RIGHT MARK: try adding one of: nko, phags-pa, thaana, syriac
 * U+200F RIGHT-TO-LEFT MARK: try adding one of: nko, phags-pa, thaana, syriac
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
 * U+25CC DOTTED CIRCLE: try adding one of: grantha, psalter-pahlavi, khudawadi, brahmi, thai, cham, mende-kikakui, new-tai-lue, syloti-nagri, javanese, bhaiksuki, miao, bassa-vah, kaithi, wancho, mandaic, soyombo, tai-viet, hanifi-rohingya, adlam, chakma, hebrew, phags-pa, khojki, lao, zanabazar-square, rejang, kharoshthi, coptic, buginese, dogra, pahawh-hmong, manichaean, nko, sundanese, khmer, modi, tifinagh, limbu, tirhuta, kayah-li, malayalam, devanagari, sinhala, balinese, tagbanwa, tai-le, tagalog, myanmar, bengali, osage, thaana, caucasian-albanian, gujarati, lepcha, siddham, math, telugu, takri, oriya, gunjala-gondi, sogdian, music, mahajani, buhid, duployan, gurmukhi, marchen, syriac, tamil, yi, masaram-gondi, batak, tibetan, symbols, kannada, hanunoo, elbasan, mongolian, sharada, ahom, newa, meetei-mayek, old-permic
 * U+25CF BLACK CIRCLE: try adding symbols
 * U+25E6 WHITE BULLET: try adding symbols
 * U+27E8 MATHEMATICAL LEFT ANGLE BRACKET: try adding math
 * U+27E9 MATHEMATICAL RIGHT ANGLE BRACKET: try adding math

Or you can add the above codepoints to one of the subsets supported by the font: `cyrillic-ext`, `latin`, `latin-ext` [code: unreachable-subsetting]
</div></details><details><summary>⚠ <b>WARN:</b> Are there caret positions declared for every ligature? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/ligature_carets">com.google.fonts/check/ligature_carets</a>)</summary><div>


* ⚠ **WARN** This font lacks caret position values for ligature glyphs on its GDEF table. [code: lacks-caret-pos]
</div></details><details><summary>⚠ <b>WARN:</b> Is there kerning info for non-ligated sequences? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/kerning_for_non_ligated_sequences">com.google.fonts/check/kerning_for_non_ligated_sequences</a>)</summary><div>


* ⚠ **WARN** GPOS table lacks kerning info for the following non-ligated sequences:

	- T + b

	- b + l

	- l + d

	- f + i

	- i + l

	- t + b [code: lacks-kern-info]
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

	* lslash (U+0142): L<<211.0,794.0>--<208.0,718.0>> -> L<<208.0,718.0>--<208.0,454.0>>

	* thorn (U+00FE): L<<201.0,794.0>--<197.0,718.0>> -> L<<197.0,718.0>--<197.0,464.0>>

	* uni0137 (U+0137): L<<206.0,794.0>--<204.0,718.0>> -> L<<204.0,718.0>--<204.0,255.0>>

	* uni013C (U+013C): L<<211.0,794.0>--<208.0,718.0>> -> L<<208.0,718.0>--<208.0,51.0>>

	* uni0237 (U+0237): L<<217.0,510.0>--<215.0,434.0>> -> L<<215.0,434.0>--<215.0,50.0>>

	* uni1EF9 (U+1EF9): L<<491.0,450.0>--<300.0,0.0>> -> L<<300.0,0.0>--<209.0,-216.0>>

	* y (U+0079): L<<491.0,450.0>--<300.0,0.0>> -> L<<300.0,0.0>--<209.0,-216.0>>

	* yacute (U+00FD): L<<491.0,450.0>--<300.0,0.0>> -> L<<300.0,0.0>--<209.0,-216.0>>

	* ycircumflex (U+0177): L<<491.0,450.0>--<300.0,0.0>> -> L<<300.0,0.0>--<209.0,-216.0>>

	* ydieresis (U+00FF): L<<491.0,450.0>--<300.0,0.0>> -> L<<300.0,0.0>--<209.0,-216.0>>

	* ygrave (U+1EF3): L<<491.0,450.0>--<300.0,0.0>> -> L<<300.0,0.0>--<209.0,-216.0>> [code: found-colinear-vectors]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Shaping Checks>.html#com.google.fonts/check/soft_dotted">com.google.fonts/check/soft_dotted</a>)</summary><div>


* ⚠ **WARN** The dot of soft dotted characters used in orthographies _must_ disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌

The dot of soft dotted characters _should_ disappear in other cases, for example: į̆ į̇ į̈ į̊ į̋ į̒ į̧̀ į̧́ į̧̂ į̧̃ į̧̄ į̧̆ į̧̇ į̧̈ į̧̊ į̧̋ į̧̌ į̧̒ į̨̀ į̨́

Your font fully covers the following languages that require the soft-dotted feature: Dutch (Latn, 31,709,104 speakers), Lithuanian (Latn, 2,357,094 speakers). 

Your font does *not* cover the following languages that require the soft-dotted feature: Cicipu (Latn, 44,000 speakers), Ejagham (Latn, 120,000 speakers), Kom (Latn, 360,685 speakers), Dan (Latn, 1,099,244 speakers), Nateni (Latn, 100,000 speakers), Southern Kisi (Latn, 360,000 speakers), Mango (Latn, 77,000 speakers), Ebira (Latn, 2,200,000 speakers), Kpelle, Guinea (Latn, 622,000 speakers), Nzakara (Latn, 50,000 speakers), Mundani (Latn, 34,000 speakers), Mfumte (Latn, 79,000 speakers), Aghem (Latn, 38,843 speakers), Bete-Bendi (Latn, 100,000 speakers), Gulay (Latn, 250,478 speakers), Makaa (Latn, 221,000 speakers), South Central Banda (Latn, 244,000 speakers), Navajo (Latn, 166,319 speakers), Koonzime (Latn, 40,000 speakers), Fur (Latn, 1,230,163 speakers), Ngbaka (Latn, 1,020,000 speakers), Lugbara (Latn, 2,200,000 speakers), Sar (Latn, 500,000 speakers), Avokaya (Latn, 100,000 speakers), Dii (Latn, 71,000 speakers), Igbo (Latn, 27,823,640 speakers), Yala (Latn, 200,000 speakers), Ekpeye (Latn, 226,000 speakers), Belarusian (Cyrl, 10,064,517 speakers), Ijo, Southeast (Latn, 2,471,000 speakers), Zapotec (Latn, 490,000 speakers), Ukrainian (Cyrl, 29,273,587 speakers), Bafut (Latn, 158,146 speakers), Ma’di (Latn, 584,000 speakers), Basaa (Latn, 332,940 speakers). [code: soft-dotted]
</div></details><br></div></details><details><summary><b>[13] Wittgenstein-Bold.ttf</b></summary><div><details><summary>🔥 <b>FAIL:</b> Checking OS/2 usWinAscent & usWinDescent. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/family/win_ascent_and_descent">com.google.fonts/check/family/win_ascent_and_descent</a>)</summary><div>


* 🔥 **FAIL** OS/2.usWinAscent value should be equal or greater than 1179, but got 1100 instead [code: ascent]
* 🔥 **FAIL** OS/2.usWinDescent value should be equal or greater than 433, but got 350 instead [code: descent]
</div></details><details><summary>🔥 <b>FAIL:</b> Space and non-breaking space have the same width? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/whitespace_widths">com.google.fonts/check/whitespace_widths</a>)</summary><div>


* 🔥 **FAIL** Space and non-breaking space have differing width: The space glyph named space is 185 font units wide, non-breaking space named (uni00A0) is 440 font units wide, and both should be positive and the same. GlyphsApp has "Sidebearing arithmetic" (https://glyphsapp.com/tutorials/spacing) which allows you to set the non-breaking space width to always equal the space width. [code: different-widths]
</div></details><details><summary>⚠ <b>WARN:</b> Checking OS/2 achVendID. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/vendor_id">com.google.fonts/check/vendor_id</a>)</summary><div>


* ⚠ **WARN** OS/2 VendorID value 'TBLD' is not yet recognized. If you registered it recently, then it's safe to ignore this warning message. Otherwise, you should set it to your own unique 4 character code, and register it with Microsoft at https://www.microsoft.com/typography/links/vendorlist.aspx
 [code: unknown]
</div></details><details><summary>⚠ <b>WARN:</b> Check for codepoints not covered by METADATA subsets. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/metadata/unreachable_subsetting">com.google.fonts/check/metadata/unreachable_subsetting</a>)</summary><div>


* ⚠ **WARN** The following codepoints supported by the font are not covered by
    any subsets defined in the font's metadata file, and will never
    be served. You can solve this by either manually adding additional
    subset declarations to METADATA.pb, or by editing the glyphset
    definitions.

 * U+02C7 CARON: try adding one of: canadian-aboriginal, tifinagh, yi
 * U+02D8 BREVE: try adding one of: canadian-aboriginal, yi
 * U+02D9 DOT ABOVE: try adding one of: canadian-aboriginal, yi
 * U+02DB OGONEK: try adding one of: canadian-aboriginal, yi
 * U+02DD DOUBLE ACUTE ACCENT: not included in any glyphset definition
 * U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: coptic, cherokee, tifinagh, math
 * U+0306 COMBINING BREVE: try adding one of: old-permic, tifinagh
 * U+0307 COMBINING DOT ABOVE: try adding one of: canadian-aboriginal, malayalam, syriac, coptic, tai-le, math, old-permic, tifinagh
 * U+030A COMBINING RING ABOVE: try adding syriac
 * U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee
 * U+030C COMBINING CARON: try adding one of: cherokee, tai-le
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
 * U+200C ZERO WIDTH NON-JOINER: try adding one of: chakma, hatran, grantha, psalter-pahlavi, khmer, buhid, duployan, khudawadi, brahmi, modi, tai-tham, thai, tifinagh, limbu, tirhuta, gurmukhi, kayah-li, malayalam, cham, phags-pa, devanagari, new-tai-lue, sinhala, balinese, khojki, syloti-nagri, syriac, tagbanwa, tamil, yi, javanese, tai-le, batak, tagalog, tibetan, myanmar, rejang, avestan, bengali, kharoshthi, kannada, warang-citi, thaana, hanunoo, saurashtra, gujarati, lepcha, buginese, siddham, telugu, dogra, takri, kaithi, mongolian, pahawh-hmong, sundanese, manichaean, sharada, oriya, mandaic, gunjala-gondi, nko, sogdian, tai-viet, newa, meetei-mayek, hanifi-rohingya, mahajani
 * U+200D ZERO WIDTH JOINER: try adding one of: chakma, grantha, psalter-pahlavi, buhid, duployan, khudawadi, brahmi, modi, tai-tham, thai, tifinagh, limbu, tirhuta, gurmukhi, kayah-li, malayalam, cham, phags-pa, devanagari, new-tai-lue, sinhala, balinese, khojki, old-hungarian, syloti-nagri, syriac, tagbanwa, tamil, yi, javanese, tai-le, batak, tagalog, tibetan, myanmar, rejang, avestan, bengali, kharoshthi, kannada, warang-citi, thaana, hanunoo, saurashtra, gujarati, lepcha, buginese, siddham, telugu, dogra, takri, kaithi, mongolian, pahawh-hmong, emoji, sundanese, manichaean, sharada, oriya, mandaic, gunjala-gondi, nko, tai-viet, newa, meetei-mayek, hanifi-rohingya, mahajani
 * U+200E LEFT-TO-RIGHT MARK: try adding one of: nko, phags-pa, thaana, syriac
 * U+200F RIGHT-TO-LEFT MARK: try adding one of: nko, phags-pa, thaana, syriac
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
 * U+25CC DOTTED CIRCLE: try adding one of: grantha, psalter-pahlavi, khudawadi, brahmi, thai, cham, mende-kikakui, new-tai-lue, syloti-nagri, javanese, bhaiksuki, miao, bassa-vah, kaithi, wancho, mandaic, soyombo, tai-viet, hanifi-rohingya, adlam, chakma, hebrew, phags-pa, khojki, lao, zanabazar-square, rejang, kharoshthi, coptic, buginese, dogra, pahawh-hmong, manichaean, nko, sundanese, khmer, modi, tifinagh, limbu, tirhuta, kayah-li, malayalam, devanagari, sinhala, balinese, tagbanwa, tai-le, tagalog, myanmar, bengali, osage, thaana, caucasian-albanian, gujarati, lepcha, siddham, math, telugu, takri, oriya, gunjala-gondi, sogdian, music, mahajani, buhid, duployan, gurmukhi, marchen, syriac, tamil, yi, masaram-gondi, batak, tibetan, symbols, kannada, hanunoo, elbasan, mongolian, sharada, ahom, newa, meetei-mayek, old-permic
 * U+25CF BLACK CIRCLE: try adding symbols
 * U+25E6 WHITE BULLET: try adding symbols
 * U+27E8 MATHEMATICAL LEFT ANGLE BRACKET: try adding math
 * U+27E9 MATHEMATICAL RIGHT ANGLE BRACKET: try adding math

Or you can add the above codepoints to one of the subsets supported by the font: `cyrillic-ext`, `latin`, `latin-ext` [code: unreachable-subsetting]
</div></details><details><summary>⚠ <b>WARN:</b> Are there caret positions declared for every ligature? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/ligature_carets">com.google.fonts/check/ligature_carets</a>)</summary><div>


* ⚠ **WARN** This font lacks caret position values for ligature glyphs on its GDEF table. [code: lacks-caret-pos]
</div></details><details><summary>⚠ <b>WARN:</b> Is there kerning info for non-ligated sequences? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/kerning_for_non_ligated_sequences">com.google.fonts/check/kerning_for_non_ligated_sequences</a>)</summary><div>


* ⚠ **WARN** GPOS table lacks kerning info for the following non-ligated sequences:

	- T + b

	- b + l

	- l + d

	- f + i

	- i + l

	- t + b [code: lacks-kern-info]
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

	* b (U+0062): L<<194.0,788.0>--<192.0,718.0>> -> L<<192.0,718.0>--<192.0,485.0>>

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

	* ij (U+0133): L<<531.0,500.0>--<529.0,430.0>> -> L<<529.0,430.0>--<529.0,52.0>>

	* imacron (U+012B): L<<253.0,500.0>--<251.0,430.0>> -> L<<251.0,430.0>--<251.0,50.0>>

	* iogonek (U+012F): L<<253.0,500.0>--<251.0,430.0>> -> L<<251.0,430.0>--<251.0,50.0>>

	* itilde (U+0129): L<<253.0,500.0>--<251.0,430.0>> -> L<<251.0,430.0>--<251.0,50.0>>

	* j (U+006A): L<<237.0,500.0>--<235.0,430.0>> -> L<<235.0,430.0>--<235.0,52.0>>

	* jcircumflex (U+0135): L<<237.0,500.0>--<235.0,430.0>> -> L<<235.0,430.0>--<235.0,52.0>>

	* k (U+006B): L<<220.0,790.0>--<218.0,718.0>> -> L<<218.0,718.0>--<218.0,277.0>>

	* l (U+006C): L<<231.0,790.0>--<228.0,718.0>> -> L<<228.0,718.0>--<228.0,50.0>>

	* lacute (U+013A): L<<231.0,790.0>--<228.0,718.0>> -> L<<228.0,718.0>--<228.0,50.0>>

	* lcaron (U+013E): L<<231.0,790.0>--<228.0,718.0>> -> L<<228.0,718.0>--<228.0,50.0>>

	* lslash (U+0142): L<<231.0,790.0>--<228.0,718.0>> -> L<<228.0,718.0>--<228.0,466.0>>

	* thorn (U+00FE): L<<228.0,788.0>--<225.0,710.0>> -> L<<225.0,710.0>--<225.0,489.0>>

	* uni0137 (U+0137): L<<220.0,790.0>--<218.0,718.0>> -> L<<218.0,718.0>--<218.0,277.0>>

	* uni013C (U+013C): L<<231.0,790.0>--<228.0,718.0>> -> L<<228.0,718.0>--<228.0,50.0>>

	* uni0237 (U+0237): L<<237.0,500.0>--<235.0,430.0>> -> L<<235.0,430.0>--<235.0,52.0>>

	* uni1EF9 (U+1EF9): L<<500.0,442.0>--<297.0,0.0>> -> L<<297.0,0.0>--<206.0,-216.0>>

	* y (U+0079): L<<500.0,442.0>--<297.0,0.0>> -> L<<297.0,0.0>--<206.0,-216.0>>

	* yacute (U+00FD): L<<500.0,442.0>--<297.0,0.0>> -> L<<297.0,0.0>--<206.0,-216.0>>

	* ycircumflex (U+0177): L<<500.0,442.0>--<297.0,0.0>> -> L<<297.0,0.0>--<206.0,-216.0>>

	* ydieresis (U+00FF): L<<500.0,442.0>--<297.0,0.0>> -> L<<297.0,0.0>--<206.0,-216.0>>

	* ygrave (U+1EF3): L<<500.0,442.0>--<297.0,0.0>> -> L<<297.0,0.0>--<206.0,-216.0>> [code: found-colinear-vectors]
</div></details><details><summary>⚠ <b>WARN:</b> Do outlines contain any jaggy segments? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Outline Correctness Checks>.html#com.google.fonts/check/outline_jaggy_segments">com.google.fonts/check/outline_jaggy_segments</a>)</summary><div>


* ⚠ **WARN** The following glyphs have jaggy segments:

	* fraction (U+2044): L<<288.0,280.0>--<64.0,0.0>>/L<<64.0,0.0>--<322.0,420.0>> = 7.097996412440741

	* fraction (U+2044): L<<322.0,420.0>--<546.0,700.0>>/L<<546.0,700.0>--<288.0,280.0>> = 7.097996412440638

	* onehalf (U+00BD): L<<288.0,280.0>--<64.0,0.0>>/L<<64.0,0.0>--<322.0,420.0>> = 7.097996412440741

	* onehalf (U+00BD): L<<322.0,420.0>--<546.0,700.0>>/L<<546.0,700.0>--<288.0,280.0>> = 7.097996412440638

	* onequarter (U+00BC): L<<288.0,280.0>--<64.0,0.0>>/L<<64.0,0.0>--<322.0,420.0>> = 7.097996412440741

	* onequarter (U+00BC): L<<322.0,420.0>--<546.0,700.0>>/L<<546.0,700.0>--<288.0,280.0>> = 7.097996412440638

	* threequarters (U+00BE): L<<288.0,280.0>--<64.0,0.0>>/L<<64.0,0.0>--<322.0,420.0>> = 7.097996412440741

	* threequarters (U+00BE): L<<322.0,420.0>--<546.0,700.0>>/L<<546.0,700.0>--<288.0,280.0>> = 7.097996412440638

	* uni2153 (U+2153): L<<288.0,280.0>--<64.0,0.0>>/L<<64.0,0.0>--<322.0,420.0>> = 7.097996412440741

	* uni2153 (U+2153): L<<322.0,420.0>--<546.0,700.0>>/L<<546.0,700.0>--<288.0,280.0>> = 7.097996412440638

	* uni2154 (U+2154): L<<288.0,280.0>--<64.0,0.0>>/L<<64.0,0.0>--<322.0,420.0>> = 7.097996412440741

	* uni2154 (U+2154): L<<322.0,420.0>--<546.0,700.0>>/L<<546.0,700.0>--<288.0,280.0>> = 7.097996412440638 [code: found-jaggy-segments]
</div></details><details><summary>⚠ <b>WARN:</b> Do outlines contain any semi-vertical or semi-horizontal lines? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Outline Correctness Checks>.html#com.google.fonts/check/outline_semi_vertical">com.google.fonts/check/outline_semi_vertical</a>)</summary><div>


* ⚠ **WARN** The following glyphs have semi-vertical/semi-horizontal lines:

	* h (U+0068): L<<626.0,0.0>--<337.0,1.0>>

	* hbar (U+0127): L<<626.0,0.0>--<337.0,1.0>>

	* hcircumflex (U+0125): L<<626.0,0.0>--<337.0,1.0>>

	* n (U+006E): L<<637.0,-1.0>--<348.0,0.0>>

	* nacute (U+0144): L<<637.0,-1.0>--<348.0,0.0>>

	* ncaron (U+0148): L<<637.0,-1.0>--<348.0,0.0>>

	* ntilde (U+00F1): L<<637.0,-1.0>--<348.0,0.0>>

	* uni0146 (U+0146): L<<637.0,-1.0>--<348.0,0.0>>

	* uni0259 (U+0259): L<<345.0,190.0>--<167.0,189.0>> [code: found-semi-vertical]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Shaping Checks>.html#com.google.fonts/check/soft_dotted">com.google.fonts/check/soft_dotted</a>)</summary><div>


* ⚠ **WARN** The dot of soft dotted characters used in orthographies _must_ disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌

The dot of soft dotted characters _should_ disappear in other cases, for example: į̆ į̇ į̈ į̊ į̋ į̒ į̧̀ į̧́ į̧̂ į̧̃ į̧̄ į̧̆ į̧̇ į̧̈ į̧̊ į̧̋ į̧̌ į̧̒ į̨̀ į̨́

Your font fully covers the following languages that require the soft-dotted feature: Dutch (Latn, 31,709,104 speakers), Lithuanian (Latn, 2,357,094 speakers). 

Your font does *not* cover the following languages that require the soft-dotted feature: Cicipu (Latn, 44,000 speakers), Ejagham (Latn, 120,000 speakers), Kom (Latn, 360,685 speakers), Dan (Latn, 1,099,244 speakers), Nateni (Latn, 100,000 speakers), Southern Kisi (Latn, 360,000 speakers), Mango (Latn, 77,000 speakers), Ebira (Latn, 2,200,000 speakers), Kpelle, Guinea (Latn, 622,000 speakers), Nzakara (Latn, 50,000 speakers), Mundani (Latn, 34,000 speakers), Mfumte (Latn, 79,000 speakers), Aghem (Latn, 38,843 speakers), Bete-Bendi (Latn, 100,000 speakers), Gulay (Latn, 250,478 speakers), Makaa (Latn, 221,000 speakers), South Central Banda (Latn, 244,000 speakers), Navajo (Latn, 166,319 speakers), Koonzime (Latn, 40,000 speakers), Fur (Latn, 1,230,163 speakers), Ngbaka (Latn, 1,020,000 speakers), Lugbara (Latn, 2,200,000 speakers), Sar (Latn, 500,000 speakers), Avokaya (Latn, 100,000 speakers), Dii (Latn, 71,000 speakers), Igbo (Latn, 27,823,640 speakers), Yala (Latn, 200,000 speakers), Ekpeye (Latn, 226,000 speakers), Belarusian (Cyrl, 10,064,517 speakers), Ijo, Southeast (Latn, 2,471,000 speakers), Zapotec (Latn, 490,000 speakers), Ukrainian (Cyrl, 29,273,587 speakers), Bafut (Latn, 158,146 speakers), Ma’di (Latn, 584,000 speakers), Basaa (Latn, 332,940 speakers). [code: soft-dotted]
</div></details><br></div></details><details><summary><b>[15] Wittgenstein-Extrabold.ttf</b></summary><div><details><summary>🔥 <b>FAIL:</b> Check the OS/2 usWeightClass is appropriate for the font's best SubFamily name. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/usweightclass">com.google.fonts/check/usweightclass</a>)</summary><div>


* 🔥 **FAIL** Best SubFamily name is 'Extrabold'. Expected OS/2 usWeightClass is 400, got 800. [code: bad-value]
</div></details><details><summary>🔥 <b>FAIL:</b> Check font names are correct (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/font_names">com.google.fonts/check/font_names</a>)</summary><div>


* 🔥 **FAIL** Font names are incorrect:

| nameID | current | expected |
| :--- | :--- | :--- |
| Family Name | Wittgenstein Extrabold | Wittgenstein Extrabold |
| Subfamily Name | Regular | Regular |
| Full Name | **Wittgenstein Extrabold** | **Wittgenstein Extrabold Regular** |
| Postscript Name | **Wittgenstein-Extrabold** | **WittgensteinExtrabold-Regular** |
| Typographic Family Name | **Wittgenstein** | **N/A** |
| Typographic Subfamily Name | **Extrabold** | **N/A** | [code: bad-names]
* ⚠ **WARN** Regular missing from full name [code: lacks-regular]
</div></details><details><summary>🔥 <b>FAIL:</b> Checking OS/2 usWinAscent & usWinDescent. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/family/win_ascent_and_descent">com.google.fonts/check/family/win_ascent_and_descent</a>)</summary><div>


* 🔥 **FAIL** OS/2.usWinAscent value should be equal or greater than 1179, but got 1100 instead [code: ascent]
* 🔥 **FAIL** OS/2.usWinDescent value should be equal or greater than 433, but got 350 instead [code: descent]
</div></details><details><summary>🔥 <b>FAIL:</b> Space and non-breaking space have the same width? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/whitespace_widths">com.google.fonts/check/whitespace_widths</a>)</summary><div>


* 🔥 **FAIL** Space and non-breaking space have differing width: The space glyph named space is 180 font units wide, non-breaking space named (uni00A0) is 520 font units wide, and both should be positive and the same. GlyphsApp has "Sidebearing arithmetic" (https://glyphsapp.com/tutorials/spacing) which allows you to set the non-breaking space width to always equal the space width. [code: different-widths]
</div></details><details><summary>⚠ <b>WARN:</b> Checking OS/2 achVendID. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/vendor_id">com.google.fonts/check/vendor_id</a>)</summary><div>


* ⚠ **WARN** OS/2 VendorID value 'TBLD' is not yet recognized. If you registered it recently, then it's safe to ignore this warning message. Otherwise, you should set it to your own unique 4 character code, and register it with Microsoft at https://www.microsoft.com/typography/links/vendorlist.aspx
 [code: unknown]
</div></details><details><summary>⚠ <b>WARN:</b> Check for codepoints not covered by METADATA subsets. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/metadata/unreachable_subsetting">com.google.fonts/check/metadata/unreachable_subsetting</a>)</summary><div>


* ⚠ **WARN** The following codepoints supported by the font are not covered by
    any subsets defined in the font's metadata file, and will never
    be served. You can solve this by either manually adding additional
    subset declarations to METADATA.pb, or by editing the glyphset
    definitions.

 * U+02C7 CARON: try adding one of: canadian-aboriginal, tifinagh, yi
 * U+02D8 BREVE: try adding one of: canadian-aboriginal, yi
 * U+02D9 DOT ABOVE: try adding one of: canadian-aboriginal, yi
 * U+02DB OGONEK: try adding one of: canadian-aboriginal, yi
 * U+02DD DOUBLE ACUTE ACCENT: not included in any glyphset definition
 * U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: coptic, cherokee, tifinagh, math
 * U+0306 COMBINING BREVE: try adding one of: old-permic, tifinagh
 * U+0307 COMBINING DOT ABOVE: try adding one of: canadian-aboriginal, malayalam, syriac, coptic, tai-le, math, old-permic, tifinagh
 * U+030A COMBINING RING ABOVE: try adding syriac
 * U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee
 * U+030C COMBINING CARON: try adding one of: cherokee, tai-le
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
 * U+200C ZERO WIDTH NON-JOINER: try adding one of: chakma, hatran, grantha, psalter-pahlavi, khmer, buhid, duployan, khudawadi, brahmi, modi, tai-tham, thai, tifinagh, limbu, tirhuta, gurmukhi, kayah-li, malayalam, cham, phags-pa, devanagari, new-tai-lue, sinhala, balinese, khojki, syloti-nagri, syriac, tagbanwa, tamil, yi, javanese, tai-le, batak, tagalog, tibetan, myanmar, rejang, avestan, bengali, kharoshthi, kannada, warang-citi, thaana, hanunoo, saurashtra, gujarati, lepcha, buginese, siddham, telugu, dogra, takri, kaithi, mongolian, pahawh-hmong, sundanese, manichaean, sharada, oriya, mandaic, gunjala-gondi, nko, sogdian, tai-viet, newa, meetei-mayek, hanifi-rohingya, mahajani
 * U+200D ZERO WIDTH JOINER: try adding one of: chakma, grantha, psalter-pahlavi, buhid, duployan, khudawadi, brahmi, modi, tai-tham, thai, tifinagh, limbu, tirhuta, gurmukhi, kayah-li, malayalam, cham, phags-pa, devanagari, new-tai-lue, sinhala, balinese, khojki, old-hungarian, syloti-nagri, syriac, tagbanwa, tamil, yi, javanese, tai-le, batak, tagalog, tibetan, myanmar, rejang, avestan, bengali, kharoshthi, kannada, warang-citi, thaana, hanunoo, saurashtra, gujarati, lepcha, buginese, siddham, telugu, dogra, takri, kaithi, mongolian, pahawh-hmong, emoji, sundanese, manichaean, sharada, oriya, mandaic, gunjala-gondi, nko, tai-viet, newa, meetei-mayek, hanifi-rohingya, mahajani
 * U+200E LEFT-TO-RIGHT MARK: try adding one of: nko, phags-pa, thaana, syriac
 * U+200F RIGHT-TO-LEFT MARK: try adding one of: nko, phags-pa, thaana, syriac
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
 * U+25CC DOTTED CIRCLE: try adding one of: grantha, psalter-pahlavi, khudawadi, brahmi, thai, cham, mende-kikakui, new-tai-lue, syloti-nagri, javanese, bhaiksuki, miao, bassa-vah, kaithi, wancho, mandaic, soyombo, tai-viet, hanifi-rohingya, adlam, chakma, hebrew, phags-pa, khojki, lao, zanabazar-square, rejang, kharoshthi, coptic, buginese, dogra, pahawh-hmong, manichaean, nko, sundanese, khmer, modi, tifinagh, limbu, tirhuta, kayah-li, malayalam, devanagari, sinhala, balinese, tagbanwa, tai-le, tagalog, myanmar, bengali, osage, thaana, caucasian-albanian, gujarati, lepcha, siddham, math, telugu, takri, oriya, gunjala-gondi, sogdian, music, mahajani, buhid, duployan, gurmukhi, marchen, syriac, tamil, yi, masaram-gondi, batak, tibetan, symbols, kannada, hanunoo, elbasan, mongolian, sharada, ahom, newa, meetei-mayek, old-permic
 * U+25CF BLACK CIRCLE: try adding symbols
 * U+25E6 WHITE BULLET: try adding symbols
 * U+27E8 MATHEMATICAL LEFT ANGLE BRACKET: try adding math
 * U+27E9 MATHEMATICAL RIGHT ANGLE BRACKET: try adding math

Or you can add the above codepoints to one of the subsets supported by the font: `cyrillic-ext`, `latin`, `latin-ext` [code: unreachable-subsetting]
</div></details><details><summary>⚠ <b>WARN:</b> Are there caret positions declared for every ligature? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/ligature_carets">com.google.fonts/check/ligature_carets</a>)</summary><div>


* ⚠ **WARN** This font lacks caret position values for ligature glyphs on its GDEF table. [code: lacks-caret-pos]
</div></details><details><summary>⚠ <b>WARN:</b> Is there kerning info for non-ligated sequences? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/kerning_for_non_ligated_sequences">com.google.fonts/check/kerning_for_non_ligated_sequences</a>)</summary><div>


* ⚠ **WARN** GPOS table lacks kerning info for the following non-ligated sequences:

	- T + b

	- b + l

	- l + d

	- f + i

	- i + l

	- t + b [code: lacks-kern-info]
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

	* b (U+0062): L<<207.0,786.0>--<205.0,718.0>> -> L<<205.0,718.0>--<205.0,491.0>>

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

	* ij (U+0133): L<<549.0,496.0>--<547.0,429.0>> -> L<<547.0,429.0>--<547.0,52.0>>

	* imacron (U+012B): L<<263.0,496.0>--<261.0,428.0>> -> L<<261.0,428.0>--<261.0,50.0>>

	* iogonek (U+012F): L<<263.0,496.0>--<261.0,428.0>> -> L<<261.0,428.0>--<261.0,50.0>>

	* itilde (U+0129): L<<263.0,496.0>--<261.0,428.0>> -> L<<261.0,428.0>--<261.0,50.0>>

	* j (U+006A): L<<243.0,496.0>--<241.0,429.0>> -> L<<241.0,429.0>--<241.0,52.0>>

	* jcircumflex (U+0135): L<<243.0,496.0>--<241.0,429.0>> -> L<<241.0,429.0>--<241.0,52.0>>

	* k (U+006B): L<<224.0,788.0>--<222.0,718.0>> -> L<<222.0,718.0>--<222.0,285.0>>

	* l (U+006C): L<<237.0,788.0>--<235.0,718.0>> -> L<<235.0,718.0>--<235.0,50.0>>

	* lacute (U+013A): L<<237.0,788.0>--<235.0,718.0>> -> L<<235.0,718.0>--<235.0,50.0>>

	* lcaron (U+013E): L<<237.0,788.0>--<235.0,718.0>> -> L<<235.0,718.0>--<235.0,50.0>>

	* lslash (U+0142): L<<237.0,788.0>--<235.0,718.0>> -> L<<235.0,718.0>--<235.0,470.0>>

	* thorn (U+00FE): L<<237.0,786.0>--<235.0,708.0>> -> L<<235.0,708.0>--<235.0,498.0>>

	* uni0137 (U+0137): L<<224.0,788.0>--<222.0,718.0>> -> L<<222.0,718.0>--<222.0,285.0>>

	* uni013C (U+013C): L<<237.0,788.0>--<235.0,718.0>> -> L<<235.0,718.0>--<235.0,50.0>>

	* uni0237 (U+0237): L<<243.0,496.0>--<241.0,429.0>> -> L<<241.0,429.0>--<241.0,52.0>>

	* uni1EF9 (U+1EF9): L<<503.0,439.0>--<296.0,0.0>> -> L<<296.0,0.0>--<205.0,-216.0>>

	* y (U+0079): L<<503.0,439.0>--<296.0,0.0>> -> L<<296.0,0.0>--<205.0,-216.0>>

	* yacute (U+00FD): L<<503.0,439.0>--<296.0,0.0>> -> L<<296.0,0.0>--<205.0,-216.0>>

	* ycircumflex (U+0177): L<<503.0,439.0>--<296.0,0.0>> -> L<<296.0,0.0>--<205.0,-216.0>>

	* ydieresis (U+00FF): L<<503.0,439.0>--<296.0,0.0>> -> L<<296.0,0.0>--<205.0,-216.0>>

	* ygrave (U+1EF3): L<<503.0,439.0>--<296.0,0.0>> -> L<<296.0,0.0>--<205.0,-216.0>> [code: found-colinear-vectors]
</div></details><details><summary>⚠ <b>WARN:</b> Do outlines contain any jaggy segments? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Outline Correctness Checks>.html#com.google.fonts/check/outline_jaggy_segments">com.google.fonts/check/outline_jaggy_segments</a>)</summary><div>


* ⚠ **WARN** The following glyphs have jaggy segments:

	* fraction (U+2044): L<<194.0,140.0>--<52.0,0.0>>/L<<52.0,0.0>--<416.0,560.0>> = 12.38247867751236

	* fraction (U+2044): L<<416.0,560.0>--<558.0,700.0>>/L<<558.0,700.0>--<194.0,140.0>> = 12.38247867751239

	* onehalf (U+00BD): L<<194.0,140.0>--<52.0,0.0>>/L<<52.0,0.0>--<416.0,560.0>> = 12.38247867751236

	* onehalf (U+00BD): L<<416.0,560.0>--<558.0,700.0>>/L<<558.0,700.0>--<194.0,140.0>> = 12.38247867751239

	* onequarter (U+00BC): L<<194.0,140.0>--<52.0,0.0>>/L<<52.0,0.0>--<416.0,560.0>> = 12.38247867751236

	* onequarter (U+00BC): L<<416.0,560.0>--<558.0,700.0>>/L<<558.0,700.0>--<194.0,140.0>> = 12.38247867751239

	* threequarters (U+00BE): L<<194.0,140.0>--<52.0,0.0>>/L<<52.0,0.0>--<416.0,560.0>> = 12.38247867751236

	* threequarters (U+00BE): L<<416.0,560.0>--<558.0,700.0>>/L<<558.0,700.0>--<194.0,140.0>> = 12.38247867751239

	* uni2153 (U+2153): L<<194.0,140.0>--<52.0,0.0>>/L<<52.0,0.0>--<416.0,560.0>> = 12.38247867751236

	* uni2153 (U+2153): L<<416.0,560.0>--<558.0,700.0>>/L<<558.0,700.0>--<194.0,140.0>> = 12.38247867751239

	* uni2154 (U+2154): L<<194.0,140.0>--<52.0,0.0>>/L<<52.0,0.0>--<416.0,560.0>> = 12.38247867751236

	* uni2154 (U+2154): L<<416.0,560.0>--<558.0,700.0>>/L<<558.0,700.0>--<194.0,140.0>> = 12.38247867751239 [code: found-jaggy-segments]
</div></details><details><summary>⚠ <b>WARN:</b> Do outlines contain any semi-vertical or semi-horizontal lines? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Outline Correctness Checks>.html#com.google.fonts/check/outline_semi_vertical">com.google.fonts/check/outline_semi_vertical</a>)</summary><div>


* ⚠ **WARN** The following glyphs have semi-vertical/semi-horizontal lines:

	* h (U+0068): L<<631.0,0.0>--<330.0,1.0>>

	* hbar (U+0127): L<<631.0,0.0>--<330.0,1.0>>

	* hcircumflex (U+0125): L<<631.0,0.0>--<330.0,1.0>>

	* n (U+006E): L<<643.0,-1.0>--<342.0,0.0>>

	* nacute (U+0144): L<<643.0,-1.0>--<342.0,0.0>>

	* ncaron (U+0148): L<<643.0,-1.0>--<342.0,0.0>>

	* ntilde (U+00F1): L<<643.0,-1.0>--<342.0,0.0>>

	* uni0146 (U+0146): L<<643.0,-1.0>--<342.0,0.0>>

	* uni018F (U+018F): L<<25.0,324.0>--<422.0,323.0>> [code: found-semi-vertical]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Shaping Checks>.html#com.google.fonts/check/soft_dotted">com.google.fonts/check/soft_dotted</a>)</summary><div>


* ⚠ **WARN** The dot of soft dotted characters used in orthographies _must_ disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌

The dot of soft dotted characters _should_ disappear in other cases, for example: į̆ į̇ į̈ į̊ į̋ į̒ į̧̀ į̧́ į̧̂ į̧̃ į̧̄ į̧̆ į̧̇ į̧̈ į̧̊ į̧̋ į̧̌ į̧̒ į̨̀ į̨́

Your font fully covers the following languages that require the soft-dotted feature: Dutch (Latn, 31,709,104 speakers), Lithuanian (Latn, 2,357,094 speakers). 

Your font does *not* cover the following languages that require the soft-dotted feature: Cicipu (Latn, 44,000 speakers), Ejagham (Latn, 120,000 speakers), Kom (Latn, 360,685 speakers), Dan (Latn, 1,099,244 speakers), Nateni (Latn, 100,000 speakers), Southern Kisi (Latn, 360,000 speakers), Mango (Latn, 77,000 speakers), Ebira (Latn, 2,200,000 speakers), Kpelle, Guinea (Latn, 622,000 speakers), Nzakara (Latn, 50,000 speakers), Mundani (Latn, 34,000 speakers), Mfumte (Latn, 79,000 speakers), Aghem (Latn, 38,843 speakers), Bete-Bendi (Latn, 100,000 speakers), Gulay (Latn, 250,478 speakers), Makaa (Latn, 221,000 speakers), South Central Banda (Latn, 244,000 speakers), Navajo (Latn, 166,319 speakers), Koonzime (Latn, 40,000 speakers), Fur (Latn, 1,230,163 speakers), Ngbaka (Latn, 1,020,000 speakers), Lugbara (Latn, 2,200,000 speakers), Sar (Latn, 500,000 speakers), Avokaya (Latn, 100,000 speakers), Dii (Latn, 71,000 speakers), Igbo (Latn, 27,823,640 speakers), Yala (Latn, 200,000 speakers), Ekpeye (Latn, 226,000 speakers), Belarusian (Cyrl, 10,064,517 speakers), Ijo, Southeast (Latn, 2,471,000 speakers), Zapotec (Latn, 490,000 speakers), Ukrainian (Cyrl, 29,273,587 speakers), Bafut (Latn, 158,146 speakers), Ma’di (Latn, 584,000 speakers), Basaa (Latn, 332,940 speakers). [code: soft-dotted]
</div></details><br></div></details><details><summary><b>[15] Wittgenstein-Semibold.ttf</b></summary><div><details><summary>🔥 <b>FAIL:</b> Check the OS/2 usWeightClass is appropriate for the font's best SubFamily name. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/usweightclass">com.google.fonts/check/usweightclass</a>)</summary><div>


* 🔥 **FAIL** Best SubFamily name is 'Semibold'. Expected OS/2 usWeightClass is 400, got 600. [code: bad-value]
</div></details><details><summary>🔥 <b>FAIL:</b> Check font names are correct (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/font_names">com.google.fonts/check/font_names</a>)</summary><div>


* 🔥 **FAIL** Font names are incorrect:

| nameID | current | expected |
| :--- | :--- | :--- |
| Family Name | Wittgenstein Semibold | Wittgenstein Semibold |
| Subfamily Name | Regular | Regular |
| Full Name | **Wittgenstein Semibold** | **Wittgenstein Semibold Regular** |
| Postscript Name | **Wittgenstein-Semibold** | **WittgensteinSemibold-Regular** |
| Typographic Family Name | **Wittgenstein** | **N/A** |
| Typographic Subfamily Name | **Semibold** | **N/A** | [code: bad-names]
* ⚠ **WARN** Regular missing from full name [code: lacks-regular]
</div></details><details><summary>🔥 <b>FAIL:</b> Checking OS/2 usWinAscent & usWinDescent. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/family/win_ascent_and_descent">com.google.fonts/check/family/win_ascent_and_descent</a>)</summary><div>


* 🔥 **FAIL** OS/2.usWinAscent value should be equal or greater than 1179, but got 1100 instead [code: ascent]
* 🔥 **FAIL** OS/2.usWinDescent value should be equal or greater than 433, but got 350 instead [code: descent]
</div></details><details><summary>🔥 <b>FAIL:</b> Space and non-breaking space have the same width? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/universal.html#com.google.fonts/check/whitespace_widths">com.google.fonts/check/whitespace_widths</a>)</summary><div>


* 🔥 **FAIL** Space and non-breaking space have differing width: The space glyph named space is 190 font units wide, non-breaking space named (uni00A0) is 360 font units wide, and both should be positive and the same. GlyphsApp has "Sidebearing arithmetic" (https://glyphsapp.com/tutorials/spacing) which allows you to set the non-breaking space width to always equal the space width. [code: different-widths]
</div></details><details><summary>⚠ <b>WARN:</b> Checking OS/2 achVendID. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/vendor_id">com.google.fonts/check/vendor_id</a>)</summary><div>


* ⚠ **WARN** OS/2 VendorID value 'TBLD' is not yet recognized. If you registered it recently, then it's safe to ignore this warning message. Otherwise, you should set it to your own unique 4 character code, and register it with Microsoft at https://www.microsoft.com/typography/links/vendorlist.aspx
 [code: unknown]
</div></details><details><summary>⚠ <b>WARN:</b> Check for codepoints not covered by METADATA subsets. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/metadata/unreachable_subsetting">com.google.fonts/check/metadata/unreachable_subsetting</a>)</summary><div>


* ⚠ **WARN** The following codepoints supported by the font are not covered by
    any subsets defined in the font's metadata file, and will never
    be served. You can solve this by either manually adding additional
    subset declarations to METADATA.pb, or by editing the glyphset
    definitions.

 * U+02C7 CARON: try adding one of: canadian-aboriginal, tifinagh, yi
 * U+02D8 BREVE: try adding one of: canadian-aboriginal, yi
 * U+02D9 DOT ABOVE: try adding one of: canadian-aboriginal, yi
 * U+02DB OGONEK: try adding one of: canadian-aboriginal, yi
 * U+02DD DOUBLE ACUTE ACCENT: not included in any glyphset definition
 * U+0302 COMBINING CIRCUMFLEX ACCENT: try adding one of: coptic, cherokee, tifinagh, math
 * U+0306 COMBINING BREVE: try adding one of: old-permic, tifinagh
 * U+0307 COMBINING DOT ABOVE: try adding one of: canadian-aboriginal, malayalam, syriac, coptic, tai-le, math, old-permic, tifinagh
 * U+030A COMBINING RING ABOVE: try adding syriac
 * U+030B COMBINING DOUBLE ACUTE ACCENT: try adding one of: osage, cherokee
 * U+030C COMBINING CARON: try adding one of: cherokee, tai-le
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
 * U+200C ZERO WIDTH NON-JOINER: try adding one of: chakma, hatran, grantha, psalter-pahlavi, khmer, buhid, duployan, khudawadi, brahmi, modi, tai-tham, thai, tifinagh, limbu, tirhuta, gurmukhi, kayah-li, malayalam, cham, phags-pa, devanagari, new-tai-lue, sinhala, balinese, khojki, syloti-nagri, syriac, tagbanwa, tamil, yi, javanese, tai-le, batak, tagalog, tibetan, myanmar, rejang, avestan, bengali, kharoshthi, kannada, warang-citi, thaana, hanunoo, saurashtra, gujarati, lepcha, buginese, siddham, telugu, dogra, takri, kaithi, mongolian, pahawh-hmong, sundanese, manichaean, sharada, oriya, mandaic, gunjala-gondi, nko, sogdian, tai-viet, newa, meetei-mayek, hanifi-rohingya, mahajani
 * U+200D ZERO WIDTH JOINER: try adding one of: chakma, grantha, psalter-pahlavi, buhid, duployan, khudawadi, brahmi, modi, tai-tham, thai, tifinagh, limbu, tirhuta, gurmukhi, kayah-li, malayalam, cham, phags-pa, devanagari, new-tai-lue, sinhala, balinese, khojki, old-hungarian, syloti-nagri, syriac, tagbanwa, tamil, yi, javanese, tai-le, batak, tagalog, tibetan, myanmar, rejang, avestan, bengali, kharoshthi, kannada, warang-citi, thaana, hanunoo, saurashtra, gujarati, lepcha, buginese, siddham, telugu, dogra, takri, kaithi, mongolian, pahawh-hmong, emoji, sundanese, manichaean, sharada, oriya, mandaic, gunjala-gondi, nko, tai-viet, newa, meetei-mayek, hanifi-rohingya, mahajani
 * U+200E LEFT-TO-RIGHT MARK: try adding one of: nko, phags-pa, thaana, syriac
 * U+200F RIGHT-TO-LEFT MARK: try adding one of: nko, phags-pa, thaana, syriac
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
 * U+25CC DOTTED CIRCLE: try adding one of: grantha, psalter-pahlavi, khudawadi, brahmi, thai, cham, mende-kikakui, new-tai-lue, syloti-nagri, javanese, bhaiksuki, miao, bassa-vah, kaithi, wancho, mandaic, soyombo, tai-viet, hanifi-rohingya, adlam, chakma, hebrew, phags-pa, khojki, lao, zanabazar-square, rejang, kharoshthi, coptic, buginese, dogra, pahawh-hmong, manichaean, nko, sundanese, khmer, modi, tifinagh, limbu, tirhuta, kayah-li, malayalam, devanagari, sinhala, balinese, tagbanwa, tai-le, tagalog, myanmar, bengali, osage, thaana, caucasian-albanian, gujarati, lepcha, siddham, math, telugu, takri, oriya, gunjala-gondi, sogdian, music, mahajani, buhid, duployan, gurmukhi, marchen, syriac, tamil, yi, masaram-gondi, batak, tibetan, symbols, kannada, hanunoo, elbasan, mongolian, sharada, ahom, newa, meetei-mayek, old-permic
 * U+25CF BLACK CIRCLE: try adding symbols
 * U+25E6 WHITE BULLET: try adding symbols
 * U+27E8 MATHEMATICAL LEFT ANGLE BRACKET: try adding math
 * U+27E9 MATHEMATICAL RIGHT ANGLE BRACKET: try adding math

Or you can add the above codepoints to one of the subsets supported by the font: `cyrillic-ext`, `latin`, `latin-ext` [code: unreachable-subsetting]
</div></details><details><summary>⚠ <b>WARN:</b> Are there caret positions declared for every ligature? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/ligature_carets">com.google.fonts/check/ligature_carets</a>)</summary><div>


* ⚠ **WARN** This font lacks caret position values for ligature glyphs on its GDEF table. [code: lacks-caret-pos]
</div></details><details><summary>⚠ <b>WARN:</b> Is there kerning info for non-ligated sequences? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/googlefonts.html#com.google.fonts/check/kerning_for_non_ligated_sequences">com.google.fonts/check/kerning_for_non_ligated_sequences</a>)</summary><div>


* ⚠ **WARN** GPOS table lacks kerning info for the following non-ligated sequences:

	- T + b

	- b + l

	- l + d

	- f + i

	- i + l

	- t + b [code: lacks-kern-info]
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

	* b (U+0062): L<<181.0,790.0>--<179.0,718.0>> -> L<<179.0,718.0>--<179.0,478.0>>

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

	* ij (U+0133): L<<512.0,503.0>--<510.0,432.0>> -> L<<510.0,432.0>--<510.0,51.0>>

	* imacron (U+012B): L<<242.0,503.0>--<240.0,431.0>> -> L<<240.0,431.0>--<240.0,51.0>>

	* iogonek (U+012F): L<<242.0,503.0>--<240.0,431.0>> -> L<<240.0,431.0>--<240.0,51.0>>

	* itilde (U+0129): L<<242.0,503.0>--<240.0,431.0>> -> L<<240.0,431.0>--<240.0,51.0>>

	* j (U+006A): L<<230.0,503.0>--<228.0,432.0>> -> L<<228.0,432.0>--<228.0,51.0>>

	* jcircumflex (U+0135): L<<230.0,503.0>--<228.0,432.0>> -> L<<228.0,432.0>--<228.0,51.0>>

	* k (U+006B): L<<215.0,791.0>--<213.0,718.0>> -> L<<213.0,718.0>--<213.0,270.0>>

	* l (U+006C): L<<224.0,791.0>--<222.0,718.0>> -> L<<222.0,718.0>--<222.0,50.0>>

	* lacute (U+013A): L<<224.0,791.0>--<222.0,718.0>> -> L<<222.0,718.0>--<222.0,50.0>>

	* lcaron (U+013E): L<<224.0,791.0>--<222.0,718.0>> -> L<<222.0,718.0>--<222.0,50.0>>

	* lslash (U+0142): L<<224.0,791.0>--<222.0,718.0>> -> L<<222.0,718.0>--<222.0,462.0>>

	* thorn (U+00FE): L<<219.0,790.0>--<216.0,713.0>> -> L<<216.0,713.0>--<216.0,481.0>>

	* uni0137 (U+0137): L<<215.0,791.0>--<213.0,718.0>> -> L<<213.0,718.0>--<213.0,270.0>>

	* uni013C (U+013C): L<<224.0,791.0>--<222.0,718.0>> -> L<<222.0,718.0>--<222.0,50.0>>

	* uni0237 (U+0237): L<<230.0,503.0>--<228.0,432.0>> -> L<<228.0,432.0>--<228.0,51.0>>

	* uni1EF9 (U+1EF9): L<<497.0,445.0>--<298.0,0.0>> -> L<<298.0,0.0>--<207.0,-216.0>>

	* y (U+0079): L<<497.0,445.0>--<298.0,0.0>> -> L<<298.0,0.0>--<207.0,-216.0>>

	* yacute (U+00FD): L<<497.0,445.0>--<298.0,0.0>> -> L<<298.0,0.0>--<207.0,-216.0>>

	* ycircumflex (U+0177): L<<497.0,445.0>--<298.0,0.0>> -> L<<298.0,0.0>--<207.0,-216.0>>

	* ydieresis (U+00FF): L<<497.0,445.0>--<298.0,0.0>> -> L<<298.0,0.0>--<207.0,-216.0>>

	* ygrave (U+1EF3): L<<497.0,445.0>--<298.0,0.0>> -> L<<298.0,0.0>--<207.0,-216.0>> [code: found-colinear-vectors]
</div></details><details><summary>⚠ <b>WARN:</b> Do outlines contain any jaggy segments? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Outline Correctness Checks>.html#com.google.fonts/check/outline_jaggy_segments">com.google.fonts/check/outline_jaggy_segments</a>)</summary><div>


* ⚠ **WARN** The following glyphs have jaggy segments:

	* fraction (U+2044): L<<228.0,280.0>--<534.0,700.0>>/L<<534.0,700.0>--<382.0,420.0>> = 7.580372938123589

	* fraction (U+2044): L<<382.0,420.0>--<76.0,0.0>>/L<<76.0,0.0>--<228.0,280.0>> = 7.580372938123589

	* onehalf (U+00BD): L<<228.0,280.0>--<534.0,700.0>>/L<<534.0,700.0>--<382.0,420.0>> = 7.580372938123589

	* onehalf (U+00BD): L<<382.0,420.0>--<76.0,0.0>>/L<<76.0,0.0>--<228.0,280.0>> = 7.580372938123589

	* onequarter (U+00BC): L<<228.0,280.0>--<534.0,700.0>>/L<<534.0,700.0>--<382.0,420.0>> = 7.580372938123589

	* onequarter (U+00BC): L<<382.0,420.0>--<76.0,0.0>>/L<<76.0,0.0>--<228.0,280.0>> = 7.580372938123589

	* threequarters (U+00BE): L<<228.0,280.0>--<534.0,700.0>>/L<<534.0,700.0>--<382.0,420.0>> = 7.580372938123589

	* threequarters (U+00BE): L<<382.0,420.0>--<76.0,0.0>>/L<<76.0,0.0>--<228.0,280.0>> = 7.580372938123589

	* uni2153 (U+2153): L<<228.0,280.0>--<534.0,700.0>>/L<<534.0,700.0>--<382.0,420.0>> = 7.580372938123589

	* uni2153 (U+2153): L<<382.0,420.0>--<76.0,0.0>>/L<<76.0,0.0>--<228.0,280.0>> = 7.580372938123589

	* uni2154 (U+2154): L<<228.0,280.0>--<534.0,700.0>>/L<<534.0,700.0>--<382.0,420.0>> = 7.580372938123589

	* uni2154 (U+2154): L<<382.0,420.0>--<76.0,0.0>>/L<<76.0,0.0>--<228.0,280.0>> = 7.580372938123589 [code: found-jaggy-segments]
</div></details><details><summary>⚠ <b>WARN:</b> Do outlines contain any semi-vertical or semi-horizontal lines? (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Outline Correctness Checks>.html#com.google.fonts/check/outline_semi_vertical">com.google.fonts/check/outline_semi_vertical</a>)</summary><div>


* ⚠ **WARN** The following glyphs have semi-vertical/semi-horizontal lines:

	* asterisk (U+002A): L<<191.0,482.0>--<190.0,598.0>>

	* asterisk (U+002A): L<<239.0,599.0>--<240.0,482.0>>

	* uni018F (U+018F): L<<42.0,323.0>--<439.0,325.0>> [code: found-semi-vertical]
</div></details><details><summary>⚠ <b>WARN:</b> Ensure soft_dotted characters lose their dot when combined with marks that replace the dot. (<a href="https://font-bakery.readthedocs.io/en/stable/fontbakery/profiles/<Section: Shaping Checks>.html#com.google.fonts/check/soft_dotted">com.google.fonts/check/soft_dotted</a>)</summary><div>


* ⚠ **WARN** The dot of soft dotted characters used in orthographies _must_ disappear in the following strings: į̀ į́ į̂ į̃ į̄ į̌

The dot of soft dotted characters _should_ disappear in other cases, for example: į̆ į̇ į̈ į̊ į̋ į̒ į̧̀ į̧́ į̧̂ į̧̃ į̧̄ į̧̆ į̧̇ į̧̈ į̧̊ į̧̋ į̧̌ į̧̒ į̨̀ į̨́

Your font fully covers the following languages that require the soft-dotted feature: Dutch (Latn, 31,709,104 speakers), Lithuanian (Latn, 2,357,094 speakers). 

Your font does *not* cover the following languages that require the soft-dotted feature: Cicipu (Latn, 44,000 speakers), Ejagham (Latn, 120,000 speakers), Kom (Latn, 360,685 speakers), Dan (Latn, 1,099,244 speakers), Nateni (Latn, 100,000 speakers), Southern Kisi (Latn, 360,000 speakers), Mango (Latn, 77,000 speakers), Ebira (Latn, 2,200,000 speakers), Kpelle, Guinea (Latn, 622,000 speakers), Nzakara (Latn, 50,000 speakers), Mundani (Latn, 34,000 speakers), Mfumte (Latn, 79,000 speakers), Aghem (Latn, 38,843 speakers), Bete-Bendi (Latn, 100,000 speakers), Gulay (Latn, 250,478 speakers), Makaa (Latn, 221,000 speakers), South Central Banda (Latn, 244,000 speakers), Navajo (Latn, 166,319 speakers), Koonzime (Latn, 40,000 speakers), Fur (Latn, 1,230,163 speakers), Ngbaka (Latn, 1,020,000 speakers), Lugbara (Latn, 2,200,000 speakers), Sar (Latn, 500,000 speakers), Avokaya (Latn, 100,000 speakers), Dii (Latn, 71,000 speakers), Igbo (Latn, 27,823,640 speakers), Yala (Latn, 200,000 speakers), Ekpeye (Latn, 226,000 speakers), Belarusian (Cyrl, 10,064,517 speakers), Ijo, Southeast (Latn, 2,471,000 speakers), Zapotec (Latn, 490,000 speakers), Ukrainian (Cyrl, 29,273,587 speakers), Bafut (Latn, 158,146 speakers), Ma’di (Latn, 584,000 speakers), Basaa (Latn, 332,940 speakers). [code: soft-dotted]
</div></details><br></div></details>

### Summary

| 💔 ERROR | ☠ FATAL | 🔥 FAIL | ⚠ WARN | 💤 SKIP | ℹ INFO | 🍞 PASS | 🔎 DEBUG |
|:-----:|:----:|:----:|:----:|:----:|:----:|:----:|
| 0 | 0 | 13 | 52 | 613 | 31 | 494 |
| 0% | 0% | 1% | 4% | 51% | 3% | 41% |

**Note:** The following loglevels were omitted in this report:
* **SKIP**
* **INFO**
* **PASS**
* **DEBUG**
