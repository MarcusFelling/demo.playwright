import { test, chromium } from '@playwright/test';
import { playAudit } from 'playwright-lighthouse';

test.describe('web performance tests', () => {
  test('Use Performance API to measure performance', async ({ page }, TestInfo) => {
    const [performanceTiming] = await page.evaluate(() => {
      const [timing] = performance.getEntriesByType('navigation');
      return [timing];
    });
    // Get the start to load event end time
    const startToLoadEventEnd = (performanceTiming as PerformanceNavigationTiming).loadEventEnd - (performanceTiming as PerformanceNavigationTiming).startTime;
    // Add the performance annotation to the HTML report
    test.info().annotations.push({ type: 'Performance', description: `"${TestInfo.project.name}" - Navigation start to load event end: ${startToLoadEventEnd}ms` });
  }); 

  /**
   * In this test we start CDPSession to talk to DevTools
   * and a simulate a slow network connection
   * @see https://playwright.dev/docs/api/class-cdpsession
   */
  test('Simulate slow network connection', async ({ page }) => {
    const client = await page.context().newCDPSession(page);
    await client.send('Network.enable');
    await client.send('Network.emulateNetworkConditions', {
      offline: false,
      downloadThroughput: (2 * 1024 * 1024) / 4,
      uploadThroughput: (3 * 1024 * 1024) / 4,
      connectionType: 'cellular2g',
      latency: 10,
    });
    await page.goto('');
  });

  /**
   * In this test we use playwright-lighhouse package
   * to audit performance of the page
   * @see https://www.npmjs.com/package/playwright-lighthouse
   */
  test('Run Lighthouse Audit', async () => {
    const browser = await chromium.launch({
      headless: true,
      args: ['--remote-debugging-port=9222'],
    });
    const page = await browser.newPage();
    await page.goto('');

    await playAudit({
      page: page,
      port: 9222,
      thresholds: {
        performance: 90,
      },
      reports: {
        formats: {
          html: true,
        },
        name: `lighthouse-${new Date().getTime()}`,
        directory: `${process.cwd()}/lighthouse`,
      },
    });

    await browser.close();
  });
});