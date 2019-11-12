const puppeteer = require('puppeteer');

test('Wrong Email Error', () => {
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/login');

    await page.type('#emailInput', 'wrong_email');
    await page.type('#passwordInput', 'test');

    await Promise.all([
      page.click('#submitBtn'),
      page.waitForSelector('#error')
    ]);

    let error = await page.evaluate(() => document.querySelector('#error').innerText);

    await browser.close();

    expect(error).toBe('User does not exist')
  })();
})