import { test, expect, chromium } from '@playwright/test';
import { matchers } from 'expect-axe-playwright';
import { injectAxe, checkA11y } from 'axe-playwright';

test.describe.parallel('accessibility checks', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('');
  });

  // accessibility.snapshot() https://playwright.dev/docs/api/class-accessibility
  test('Dump the entire accessibility tree', async ({ page }) => {
    const snapshot = await page.accessibility.snapshot();
    console.log(snapshot);    
  });

  // expect-axe-playwright https://github.com/Widen/expect-axe-playwright
  test('Check if table of contents is accessible', async ({ page }) => {  
    expect.extend(matchers)
    await expect(page).toBeAccessible('#table-of-contents')
  });

  // axe-playwright https://github.com/abhinaba-ghosh/axe-playwright
  test('Check entire page accessibility', async ({ page }) => {
    await injectAxe(page)
    await checkA11y(page, null, {      
      detailedReport: true,
      axeOptions: {
        runOnly: {
          type: 'tag',
          values: ['wcag2a'] // all tags and standards listed here: https://www.deque.com/axe/core-documentation/api-documentation/#axe-core-tags
        },
      },
      includedImpacts: ['critical'] 
    })  
  });
});
