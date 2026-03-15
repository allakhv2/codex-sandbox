import { expect, test } from '@playwright/test';

test('carousel agent UI is visible and interactive', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { name: /AI-агент для красивых Instagram-каруселей/i })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Generate carousel' })).toBeVisible();

  const nicheField = page.getByLabel('Ниша');
  await nicheField.fill('Недвижимость');

  await expect(page.getByText(/Как Недвижимость может привлекать/i)).toBeVisible();
});
