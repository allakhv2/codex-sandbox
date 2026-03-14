import { expect, test } from '@playwright/test';

test('landing hero is visible', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /Launch high-converting product pages/i })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Start free' })).toBeVisible();
});
