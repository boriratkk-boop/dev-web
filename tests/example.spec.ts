import { test, expect } from '@playwright/test';

test('FAIL DEMO', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page).toHaveTitle('THIS TITLE WILL NEVER MATCH');
});