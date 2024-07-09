import { test, expect } from '@playwright/test';

test.describe('Simple App', () => {
  test('has title', async ({ page }) => {
    await page.goto('http://localhost:4200/');

    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/SimpleApp/);
  });

  test('face icon is visible and has the correct initial classes', async ({
    page,
  }) => {
    await page.goto('http://localhost:4200/');

    const headingIcon = await page.getByRole('heading').first().locator('i');

    // Expect an element "to be visible".
    await expect(headingIcon).toBeVisible();

    // Expect an element "to have class".
    await expect(headingIcon).toHaveClass('bi bi-emoji-frown-fill text-danger');
  });

  test("clicking on the magic icon changes the face's class", async ({
    page,
  }) => {
    await page.goto('http://localhost:4200/');

    const headingIcon = await page.getByRole('heading').first().locator('i');
    await page.getByRole('button').locator('i.bi-magic').click();

    // Expect an element "to have class".
    await expect(headingIcon).toHaveClass(
      'bi bi-emoji-smile-fill text-warning'
    );
  });

  test('clicking on the magic icon makes the clear button visible', async ({
    page,
  }) => {
    await page.goto('http://localhost:4200/');

    const clearButton = await page.getByRole('button').locator('i.bi-x');
    await page.getByRole('button').locator('i.bi-magic').click();

    // Expect an element "to be visible".
    await expect(clearButton).toBeVisible();
  });
});