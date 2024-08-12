import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  timeout: 10 * 1000,
  expect: {
    timeout: 5000,
  },
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['list'],
    ['html'],
  ],
  use: {
    actionTimeout: 0,
    baseURL: 'https://todomvc.com/examples/javascript-es6/dist/',
    trace: 'on',
    acceptDownloads: true,
  },
  projects: [
    {
      name: 'chromium',
      testIgnore: ['4-*', '5-*'] ,
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
});
