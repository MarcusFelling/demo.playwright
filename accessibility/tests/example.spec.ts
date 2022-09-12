import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe.parallel('accessibility checks', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('');
  });

/**
 * This example demonstrates how to test an entire page for automatically detectable accessibility violations. 
 * @see https://playwright.dev/docs/accessibility-testing
 */
test.describe('Scanning an entire page', () => {
    test('should not have any automatically detectable accessibility issues', async ({ page }) => {
      const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
  
      expect(accessibilityScanResults.violations).toEqual([]);
    });
  });    
});
