//node print.js /documentation/Specimen.html

var puppeteer = require('puppeteer');
var INFILE = process.argv[2];
var PDFFILE = "." + process.argv[2] + '.pdf';
var PNGFILE = "." + process.argv[2] + '.png';

console.log( "print " + INFILE );

( async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('file://' + process.cwd() + INFILE, { 'waitUntil' : 'domcontentloaded'});
    await page.emulateMediaType('print'); // https://pptr.dev/api/puppeteer.page.emulatemediatype
    await page.pdf({ path: PDFFILE, printBackground: true, preferCSSPageSize: true, displayHeaderFooter: true,
        headerTemplate: '<html></html>',
        footerTemplate: "<div style='width:100%;'><div style='text-align:center;font-size:11pt;' class='pageNumber'></div>"
    })
    await page.setViewport({ width: 1280, height: 960, deviceScaleFactor: 1 });
    await page.screenshot({ path: PNGFILE }); // fullPage: true 
    await browser.close();
})();