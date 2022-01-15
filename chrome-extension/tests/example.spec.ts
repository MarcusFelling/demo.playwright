/**
 * In this test we get a handle to the background page
 * of an extension whose source is located in ./my-extension
 * @see https://playwright.dev/docs/chrome-extensions
 */ 
import { test, chromium } from '@playwright/test';

test.describe('chrome extension tests', () => { 
  test('Should get handle to background page of extension', async () => {
    const pathToExtension = require('path').join(__dirname, '../my-extension');
    const userDataDir = '/tmp/test-user-data-dir';
    const browserContext = await chromium.launchPersistentContext(userDataDir,{
      headless: false,
      args: [
        `--disable-extensions-except=${pathToExtension}`,
        `--load-extension=${pathToExtension}`
      ]
    });
    const backgroundPage = browserContext.backgroundPages()[0];
    // Test the background page as you would any other page.
  });
});