import { test, expect } from '@playwright/test';

test.describe('Simple App', () => {
  test('has title', async ({ page }) => {
    await page.goto('http://localhost:4200/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/SimpleApp/);
  });

  test('face icon is visible and has the correct initial classes', async ({ page }) => {
    await page.goto('http://localhost:4200/');

    // Expect an element "to be visible".
    await expect(page.locator('i').first()).toBeVisible();

    // Expect an element "to have class".
    await expect(page.locator('i').first()).toHaveClass('bi-emoji-frown-fill');
  });
});