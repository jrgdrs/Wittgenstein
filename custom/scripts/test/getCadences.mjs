import fs from 'fs';
import puppeteer from 'puppeteer';

var master = "CanvasRasterize.html"

berechne( master  )
async function berechne( master ){
        const browser = await puppeteer.launch();
        const page = await browser.newPage();	
        const version = await page.browser().version();
        await page.goto('file://' + process.cwd() +"/"+ master, { 'waitUntil' : 'domcontentloaded'});

        //await page.addStyleTag({content: '@font-face{font-family: TESTFONT; src: url( ' + FONTFILE + '); }'})

       // await delay(500);

       /* await page.emulateMediaType('print'); 
        await page.pdf({ 
            path: 'out.pdf', 
            printBackground: true,     
        })
        await page.setViewport({ width: 1280, height: 960, deviceScaleFactor: 1 });*/
    
        
        var elem = await page.waitForSelector('#myMessage');
        if( elem != null ){
            console.log( await page.evaluate( el => el.innerHTML, elem ) )   
        }

        //into file
        var raus = JSON.stringify( await page.evaluate( el => el.innerHTML, elem, null, 2))
        var ofilename = master + ".json"
        fs.writeFileSync(ofilename, raus, 'utf8', function (err) {
             if (err) return console.log(err);
        });
        await page.close();
        await browser.close();

}

function delay(time) {
    return new Promise(function(resolve) { 
        setTimeout(resolve, time)
    });
 }