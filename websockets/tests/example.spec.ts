/**
 * In this test we launch our app using webServer in global config,
 * submit text, then wait for websocket event, followed by an assertion
 * on the received payload.
 * @see https://playwright.dev/docs/network#websockets
 */
import { test, expect } from '@playwright/test';

test.describe('WebSockets', async () => {
  test('Should be able to inspect websocket event', async ({ page }) => {
    // Navigate to page and capture created websocket.
    const [ws] = await Promise.all([
      page.waitForEvent('websocket'),
      page.goto('http://localhost:3000'),
    ]);

    // Type in text.
    await page.fill('input', 'woof');

    // Submit text and wait for websocket received event.
    const [received] = await Promise.all([
      ws.waitForEvent('framereceived'),
      page.keyboard.press('Enter'),
    ]);
    expect(received.payload).toContain('woof');
  });
});
