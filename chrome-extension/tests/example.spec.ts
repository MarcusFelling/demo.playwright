/**
   * In this test we get a handle to the background page
   * of an extension whose source is located in ./my-extension
   * @see https://playwright.dev/docs/chrome-extensions
  */ 
 import { test, chromium, expect, BrowserContext } from '@playwright/test';

 test.describe('chrome extension tests', () => { 
   let browserContext: BrowserContext;
 
   test.beforeEach(async ({}, testInfo) => {
     const pathToExtension = require('path').join(__dirname, '../my-extension');
     const userDataDir = testInfo.outputPath('test-user-data-dir');
     browserContext = await chromium.launchPersistentContext(userDataDir, {
       args: [
         `--disable-extensions-except=${pathToExtension}`,
         `--load-extension=${pathToExtension}`
       ]
     });
   });
 
   test.afterEach(async () => {
     // Don't forget to close the created context.
     // Closing persistent context will close the browser.
     await browserContext.close();
   });
 
   test('Should get handle to background page of extension', async ({}, testInfo) => {
     // Wait for background page if it is not yet loaded.
     let [backgroundPage] = browserContext.backgroundPages();
     if (!backgroundPage)
       backgroundPage = await browserContext.waitForEvent('backgroundpage');
 
     expect(backgroundPage).toBeTruthy();
     // Test the background page as you would any other page.
   });
 });