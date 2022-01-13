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

  // log in to Reddit
  test.beforeEach(async ({ page }) => {
    await page.goto('');
    await page.locator('text=Log In').click();

    /** Use frame.locator to find the login form and fill it in
    * @see https://playwright.dev/docs/frames
    */
    const frame = page.frame({ url: /.*login.*/ });
    const username = frame.locator('#loginUsername');
    await username.fill(process.env.REDDIT_USER);
    const password = frame.locator('#loginPassword');
    await password.fill(process.env.PW_PWD);
    const login = frame.locator('text=Log In');
    await login.click();
    await page.waitForNavigation();
    await expect(page).toHaveTitle('Reddit - Dive into anything');
  });
  
  // wss://gql-realtime.reddit.com/query logs events with categories like USER_IS_ONLINE, VOTE_COUNT_UPDATE, COMMENT_COUNT_UPDATE
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
