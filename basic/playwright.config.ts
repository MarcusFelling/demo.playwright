import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  timeout: 5 * 1000,
  expect: {
    timeout: 1000,
  },
  forbidOnly: !!process.env.CI,
  retries: 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [
    ['list'],
    ['html'],
  ],
  webServer: {
    command: 'node ./server',
    port: 4345,
    cwd: __dirname,
  },
  use: {
    actionTimeout: 0,
    trace: 'on',
    acceptDownloads: true,
  },
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
});
