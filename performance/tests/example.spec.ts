import { test, expect, chromium } from '@playwright/test';
import { playAudit } from 'playwright-lighthouse';

test.describe.parallel('web performance tests', () => {
  
  // Resource Timing API
  test('Use Resource Timing API to see how fast css loads', async ({ page }) => {
    await page.goto('');
    const resourceTimingResponse = await page.evaluate(() =>
    JSON.stringify(window.performance.getEntriesByType('resource')))
    const resourceTiming = JSON.parse(resourceTimingResponse)
    const cssResourceTiming = resourceTiming.find((element: { name: string | string[]; }) => element.name.includes('.css'))
    console.log(cssResourceTiming)
  });

  // DevTools
  test('Simulate slow network connection', async ({ page }) => {
    const client = await page.context().newCDPSession(page)
    await client.send('Network.enable')
    await client.send('Network.emulateNetworkConditions', {
      offline: false,
      downloadThroughput: (2 * 1024 * 1024) / 4,
      uploadThroughput: (3 * 1024 * 1024) / 4,
      connectionType: 'cellular2g',
      latency: 10
    })
    await page.goto('');
  });

  // Lighthouse
  test('Run Lighthouse Audit', async () => {    
      const chrome = await chromium.launch({
        headless: true,
        args: ['--remote-debugging-port=9222'],
      })
      const page = await chrome.newPage()
      await page.goto('')
    
      await playAudit({
        page: page,
        port: 9222,
        thresholds: {
          performance: 90,
          accessibility: 90,
          'best-practices': 90,
          seo: 85,
        },
        reports: {
          formats: {
            html: true,
          },
          name: `lighthouse-${new Date().getTime()}`,
          directory:  `${process.cwd()}/lighthouse`,
        },
      });
  });  
});