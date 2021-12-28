import { test, expect } from '@playwright/test';
import { injectAxe, checkA11y } from 'axe-playwright';

test.describe.parallel('accessibility checks', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('');
  });

/**
 * In this test we use accessibility.snapshot() method to capture the current state of the accessibility tree
 * @see https://playwright.dev/docs/api/class-accessibility
 */
  test('Dump the entire accessibility tree', async ({ page }) => {
    const snapshot = await page.accessibility.snapshot();
    console.log(snapshot);
  });

/**
 * In this test we use the Axe accessibility testing engine to run analysis on page
 * @see https://github.com/abhinaba-ghosh/axe-playwright
 */
  test('Check entire page accessibility', async ({ page }) => {
    await injectAxe(page) // inject the axe-core runtime into the page under test
    
    await checkA11y(page, null, {
      detailedReport: true,
      axeOptions: {
        runOnly: {
          type: 'tag',
          values: ['wcag2a', 'best-practice'] // all tags and standards listed here: https://www.deque.com/axe/core-documentation/api-documentation/#axe-core-tags
        },
      }
    })
  });
});
