/**
 * Example automation for electron
 * @see https://playwright.dev/docs/api/class-electron
 */
import {_electron as electron, test, expect, ElectronApplication} from '@playwright/test';

let electronApp: ElectronApplication;

test.beforeEach(async () => {
  // Launch Electron app.
  electronApp = await electron.launch({args: ['dist/index.js']});
});

test.afterEach(async () => {
  // Launch Electron app.
  await electronApp.close();
});

test('app path', async () => {
  // Evaluation expression in the Electron context.
  const appPath = await electronApp.evaluate(async ({app}) => {
    // This runs in the main Electron process, parameter here is always
    // the result of the require('electron') in the main app script.
    return app.getAppPath();
  });
  expect(appPath).toContain('electron/dist');
});

test('app title', async () => {
  // Get the first window that the app opens, wait if necessary.
  const window = await electronApp.firstWindow();
  // Print the title.
  await expect(window).toHaveTitle('DevTools');
});
