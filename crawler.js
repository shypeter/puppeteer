const puppeteer = require("puppeteer");
const iPhone8p = puppeteer.devices['iPhone 8 Plus'];

(async () => {
	try {
		var browser = await puppeteer.launch({
			args: [
				'--no-sandbox',
				'--disable-setuid-sandbox',
				'--disable-gpu',
				//'--remote-debugging-port=9222',
				'--incognito'
			],
			headless: false
		});

		// close initial page window
		var pages = await browser.pages();
		var page = pages.shift();
		page.setViewport({width: 800, height: 600});
		page.setJavaScriptEnabled(true);
    await page.emulate(iPhone8p);
		await page.goto("https://www.google.com/");
    //await page.goto("https://gu2surfboards.com/");

    await page.type(".gLFyf", "gu2", {delay:400});
    await page.keyboard.press("Enter", {delay:3000});
		await page.screenshot({path: "screenshot.png"});
    html = await page.content();
    console.log(html);
//    await page.evaluate(() => {
//      let elements = document.getElementsByClassName("gLFyf");
//      for (let element of elements) {
//        element.
//      }
//    });

		await browser.close();
	} catch (e) {
		console.log(e);
	}

})();
