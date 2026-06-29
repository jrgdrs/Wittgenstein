import { writeFileSync } from 'fs';
import puppeteer from 'puppeteer';

const browser = await puppeteer.launch({ headless: 'new' });
const page = await browser.newPage();
await page.setJavaScriptEnabled(false);
await page.emulateMediaType('print');

await page.goto(`data:text/html,
<!DOCTYPE html>
<html lang="en">
    <head>
        <style>

            @page {
                size: 125mm 198mm;
                margin: 14mm 14mm 28mm 14mm;
            }   

            @page:first {
                margin: 7mm 7mm 14mm 7mm;
                background-color: yellowgreen;
            }

            @page :right {
                @bottom-left {
                    content: "My book - " counter(page);
                    font-size: 9pt;
                }
            }

            @page :left {
                @bottom-right {
                    content: "My book - " counter(page);
                    font-size: 9pt;
                }
            }

          html, body {
            font-family: OHamburgC;

          }
            .section { page-break-after: always; 
                        background-color:linen;
}
            .eins {         
            page-break-after: always;        
 }

        </style>
    </head>
    <body>
        <div class=" eins">
            <p>sxxc</p>   
        </div>
        <div class="section">
            <p>opo</p>   
        </div>
        <div class="section">
            <p>sxxc</p>   
        </div>
        <div class="section">
            <p>opo</p>   
        </div>
        <div class="section">
            <p>sxxc</p>   
        </div>
        <div class="section">
            <p>opo</p>   
        </div>
        <div class="section">
            <p>sxxc</p>   
        </div>
        <div class="section">
            <p>opo</p>   
        </div>
    </body>
</html>

`);

const out = await page.pdf({
    preferCSSPageSize: true, 
    //    margin: { top: 0, left: 0 },
//    displayHeaderFooter: true,
//    headerTemplate: `
//        <div style="margin: 0 !important; height: 100px; width: 100px; border: 1px solid black"></div>
//    `,
//    footerTemplate: ' ',
    printBackground: true
});

writeFileSync('out.pdf', out);

await page.close();
await browser.close();