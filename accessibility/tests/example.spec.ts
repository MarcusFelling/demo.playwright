import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('accessibility checks', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('');
  });
  /**
   * This example demonstrates how to test an entire page for automatically detectable accessibility violations. 
   * @see https://playwright.dev/docs/accessibility-testing
   */
  test('should not have any automatically detectable accessibility issues', async ({ page }) => {
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });

  test('should not have any automatically detectable WCAG A or AA violations', async ({ page }) => {

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
