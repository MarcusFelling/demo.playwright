// Docs: https://playwright.dev/docs/test-snapshots
import { test, expect } from '@playwright/test';

test.describe('comparison tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('');
  });

  test('compare landing page with golden screenshot', async ({ page }) => {
    expect(await page.screenshot()).toMatchSnapshot('landing.png', { threshold: 0.2 });
  });

  test('compare text content of title with golden text file', async ({ page }) => {
    expect(await page.textContent('.hero__title')).toMatchSnapshot('hero.txt');
  });

});