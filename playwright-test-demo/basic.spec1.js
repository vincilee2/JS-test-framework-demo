const { test, expect } = require('@playwright/test');

test('Navigate to Google', async ({ page }) => {
  await page.goto('https://google.com/');
  const url = await page.url();
  expect(url).toContain('google');
});