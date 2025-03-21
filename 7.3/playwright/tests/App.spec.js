const { test, expect } = require("@playwright/test");
const { chromium } = require("playwright");
const {
  email,
  password,
  incorrectEmail,
  incorrectPassport,
} = require("../user");
const browser = await chromium.launch({
    headless: false,
    slowMo: 5000,
    devtools: true
  });
  const page = await browser.newPage();

it("Successful authorization", async () => {
  
  await page.goto("https://netology.ru/?modal=sign_in");
  await page('[placeholder="Email"]', email);
  await page('[placeholder="Пароль"]', password);
  await page.click('[data-testid="login-submit-btn"]');
  await expect(page.locator("h2")).toContainText(["Моё обучение"]);
 
});
test("Failed authorization", async () => {
  
  await page.goto("https://netology.ru/?modal=sign_in");
  await page('[placeholder="Email"]', incorrectEmail);
  await page('[placeholder="Пароль"]', incorrectPassport);
  await page.click('[data-testid="login-submit-btn"]');
  const error = await page.locator('[data-testid="login-error-hint"]');
  await expect(error).toHaveText("Вы ввели неправильно логин или пароль");
  
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