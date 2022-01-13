/**
 * In this test we login to Reddit,
 * then inspect WebSockets using page.on('websocket') event
 * @see https://playwright.dev/docs/network#websockets
 */
import { test, expect } from '@playwright/test';

test.describe('WebSockets', async () => {
  test.use({
    permissions: [
      'notifications', // bypasses prompt to allow notifications on firefox
    ],
  })

  // login to Reddit
  test.beforeEach(async ({ page }) => {
    await page.goto('');
    await page.locator('text=Log In').click();

    // Use frameLocator to find the frame with the login form and fill it https://playwright.dev/docs/frames#frames
    const username = page.frameLocator('._25r3t_lrPF3M6zD2YkWvZU').locator('#loginUsername');
    await username.fill(process.env.REDDIT_USER);
    const password = page.frameLocator('._25r3t_lrPF3M6zD2YkWvZU').locator('#loginPassword');
    await password.fill(process.env.PW_PWD);
    const login = page.frameLocator('._25r3t_lrPF3M6zD2YkWvZU').locator('text=Log In');
    await login.click();
    await page.waitForNavigation();
    await expect(page).toHaveTitle('Reddit - Dive into anything');
  });

  test('Should be able to inspect websocket event', async ({ page }) => {
    page.on('websocket', ws => {
      console.log(`WebSocket opened: ${ws.url()}>`);
      ws.on('framesent', event => console.log(event.payload));
      ws.on('framereceived', event => console.log(event.payload));
    })
    // go to webdev subreddit and log the websocket events
    await page.goto('/r/webdev');
  });
});
