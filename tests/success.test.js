const puppeteer = require('puppeteer');

test('Login Success', () => {
    (async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('http://localhost:3000/login');

        await page.type('#emailInput', 'test@test.test');
        await page.type('#passwordInput', 'test');

        await Promise.all([
          page.waitForNavigation(),
          page.click('#submitBtn')
        ]);

        let success_url = page.url();

        await browser.close();

        expect(success_url).toBe('http://localhost:3000/success');
      })();
})
