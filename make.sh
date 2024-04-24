gftools builder sources/config.yaml  

echo '-- create png preview images'

python3 documentation/imageTTF.py --ttf fonts/ttf/Wittgenstein-Regular.ttf --output documentation/image-Regular.png
python3 documentation/imageTTF.py --ttf fonts/ttf/Wittgenstein-Italic.ttf --output documentation/image-Italic.png

python3 documentation/imageTTF.py --ttf fonts/ttf/Wittgenstein-SemiBold.ttf --output documentation/image-SemiBold.png
python3 documentation/imageTTF.py --ttf fonts/ttf/Wittgenstein-SemiBoldItalic.ttf --output documentation/image-SemiBoldItalic.png

python3 documentation/imageTTF.py --ttf fonts/ttf/Wittgenstein-Bold.ttf --output documentation/image-Bold.png
python3 documentation/imageTTF.py --ttf fonts/ttf/Wittgenstein-BoldItalic.ttf --output documentation/image-BoldItalic.png

python3 documentation/imageTTF.py --ttf fonts/ttf/Wittgenstein-ExtraBold.ttf --output documentation/image-ExtraBold.png
python3 documentation/imageTTF.py --ttf fonts/ttf/Wittgenstein-ExtraBoldItalic.ttf --output documentation/image-ExtraBoldItalic.png

python3 documentation/imageTTF.py --ttf fonts/ttf/Wittgenstein-Black.ttf --output documentation/image-Black.png
python3 documentation/imageTTF.py --ttf fonts/ttf/Wittgenstein-BlackItalic.ttf --output documentation/image-BlackItalic.png

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
