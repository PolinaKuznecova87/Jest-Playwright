const { test, expect } = require("@playwright/test");
const { chromium } = require("playwright");
const {
  email,
  password,
  incorrectEmail,
  incorrectPassport,
} = require("../user");

it("Successful authorization", async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 5000,
    devtools: true
  });
  const page = await browser.newPage();
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.fill('[placeholder="Email"]', email);
  await page.fill('[placeholder="Пароль"]', password);
  await page.click('[data-testid="login-submit-btn"]');
  await expect(page.locator("h2")).toContainText(["Моё обучение"]);
  await browser.close();
});
test("Failed authorization", async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 5000,
    devtools: true
  });
  const page = await browser.newPage();
  await page.goto("https://netology.ru/?modal=sign_in");
  await page.fill('[placeholder="Email"]', incorrectEmail);
  await page.fill('[placeholder="Пароль"]', incorrectPassport);
  await page.click('[data-testid="login-submit-btn"]');
  const error = await page.locator('[data-testid="login-error-hint"]');
  await expect(error).toHaveText("Вы ввели неправильно логин или пароль");
  await browser.close();
});


//test("test", async ({ page }) => {
  // Go to https://netology.ru/free/management#/
  //await page.goto("https://netology.ru/free/management#/");

  // Click a
 // await page.click("a");
  //await expect(page).toHaveURL("https://netology.ru/");

  // Click text=Учиться бесплатно
 // await page.click("text=Учиться бесплатно");
  //await expect(page).toHaveURL("https://netology.ru/free");

  //page.click("text=Бизнес и управление");

  // Click text=Как перенести своё дело в онлайн
 // await page.click("text=Как перенести своё дело в онлайн");
  //await expect(page).toHaveURL(
   // "https://netology.ru/programs/kak-perenesti-svoyo-delo-v-onlajn-bp"
 // );
//});