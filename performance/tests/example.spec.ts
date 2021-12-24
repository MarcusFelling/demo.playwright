import { test, expect } from '@playwright/test';

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
});