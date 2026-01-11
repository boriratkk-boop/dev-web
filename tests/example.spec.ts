import { test, expect } from '@playwright/test';

test('force fail demo', async ({ page }) => {
  await page.goto('http://localhost:3000');
  expect(1).toBe(2); // ❌ fail แน่นอน 555
});