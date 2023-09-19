/**
 * In this test we use expect(value).toMatchSnapshot(snapshotName)
 * to visually compare screenshots
 * @see https://playwright.dev/docs/test-snapshots
 */
import { test, expect } from '@playwright/test';

test.describe('visual comparison test', () => {
  test('compare landing page title with golden screenshot', async ({ page }) => {
    await page.goto('');
    await expect(page.locator('.heroTitle_ohkl')).toHaveScreenshot('landing.png', { maxDiffPixels: 1 });
  });
});
