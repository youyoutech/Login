const puppeteer = require('puppeteer');

test('Wrong Password Error', () => {
  (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000/login');

    await page.type('#emailInput', 'test@test.test');
    await page.type('#passwordInput', 'wrong_password');

    await Promise.all([
      page.click('#submitBtn'),
      page.waitForSelector('#error')
    ]);

    let error = await page.evaluate(() => document.querySelector('#error').innerText);

    await browser.close();

    expect(error).toBe('Wrong password')
  })();
})