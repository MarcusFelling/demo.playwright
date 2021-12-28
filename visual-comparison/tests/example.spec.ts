/**
 * In this test we use expect(value).toMatchSnapshot(snapshotName)
 * to visually compare screenshots
 * @see https://playwright.dev/docs/test-snapshots
*/
import { test, expect } from '@playwright/test';

test.describe('comparison tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('');
  });

  test('compare landing page title with golden screenshot', async ({ page }) => {
    expect(await page.locator('.heroTitle_2lCx').screenshot()).toMatchSnapshot('landing.png', { threshold: 0.4 });
  });

  test('compare landing page title with golden text file', async ({ page }) => {
    expect(await page.textContent('.hero__title')).toMatchSnapshot('hero.txt');
  });
});