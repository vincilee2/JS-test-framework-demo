const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {  
  await page.goto('https://github.com/login');
  await page.fill('input[name="login"]', 'eran.kinsbrunner@gmail.com');
  await page.fill('input[name="password"]', 'rikiBon!2#');
  
  });