import { test, expect } from '@playwright/test';

test('force fail demo', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page).toHaveTitle('THIS TITLE MUST FAIL');
});