gftools builder sources/config.yaml  

echo '-- create png preview images'

node printImage.js documentation/Image.html fonts/ttf/Wittgenstein-Regular.ttf documentation/image-Regular.png
node printImage.js documentation/Image.html fonts/ttf/Wittgenstein-Italic.ttf documentation/image-Italic.png

node printImage.js documentation/Image.html fonts/ttf/Wittgenstein-SemiBold.ttf documentation/image-SemiBold.png
node printImage.js documentation/Image.html fonts/ttf/Wittgenstein-SemiBoldItalic.ttf documentation/image-SemiBoldItalic.png

node printImage.js documentation/Image.html fonts/ttf/Wittgenstein-Bold.ttf documentation/image-Bold.png
node printImage.js documentation/Image.html fonts/ttf/Wittgenstein-BoldItalic.ttf documentation/image-BoldItalic.png

node printImage.js documentation/Image.html fonts/ttf/Wittgenstein-ExtraBold.ttf documentation/image-ExtraBold.png
node printImage.js documentation/Image.html fonts/ttf/Wittgenstein-ExtraBoldItalic.ttf documentation/image-ExtraBoldItalic.png

node printImage.js documentation/Image.html fonts/ttf/Wittgenstein-Black.ttf documentation/image-Black.png
node printImage.js documentation/Image.html fonts/ttf/Wittgenstein-BlackItalic.ttf documentation/image-BlackItalic.png

echo '-- create pdfs for tests'

for i in Regular Italic Black BlackItalic; do 
  node print.js qa/Glyphs.html fonts/ttf/Wittgenstein-$i.ttf qa/1-Glyphs-$i.pdf
  node print.js qa/Spacing.html fonts/ttf/Wittgenstein-$i.ttf qa/2-Spacing-$i.pdf
  node print.js qa/Kerning.html fonts/ttf/Wittgenstein-$i.ttf qa/3-Kerning-$i.pdf
  node print.js qa/Frequency.html fonts/ttf/Wittgenstein-$i.ttf qa/4-Frequency-$i.pdf
  node print.js qa/Kafka.html fonts/ttf/Wittgenstein-$i.ttf qa/5-Kafka-$i.pdf
  node print.js qa/News.html fonts/ttf/Wittgenstein-$i.ttf qa/6-News-$i.pdf
  node print.js qa/Diacritics.html fonts/ttf/Wittgenstein-$i.ttf qa/7-Diacritics-$i.pdf
done

echo '-- create specimen for documentation'

node print.js documentation/Specimen.html
node print.js documentation/PullQuote.html

node print.js documentation/Etik.html
node print.js documentation/Brentano.html
node print.js documentation/Woolf.html
node print.js documentation/Dumas.html
node print.js documentation/Adamson.html
node print.js documentation/Endrődi.html
