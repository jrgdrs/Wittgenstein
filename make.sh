gftools builder sources/config.yaml  

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

node print.js /documentation/Specimen.html
node print.js /documentation/PullQuote.html
node print.js /documentation/Etik.html

node print.js /documentation/Brentano.html
node print.js /documentation/Woolf.html
node print.js /documentation/Dumas.html
node print.js /documentation/Adamson.html
node print.js /documentation/Endrődi.html