/**
 * In this test we define our worker fixtures.
 * @see https://playwright.dev/docs/test-fixtures#worker-fixtures
 */
import { test as base } from '@playwright/test';
import express from 'express';
import type { Express } from 'express';

// Declare worker fixtures.
type ExpressWorkerFixtures = {
  port: number;
  express: Express;
};

// Note that we did not provide any test-scoped fixtures, so we pass {}.
const test = base.extend<{}, ExpressWorkerFixtures>({

  // We pass a tuple to specify fixtures options.
  // In this case, we mark this fixture as worker-scoped.
  port: [ async ({}, use, workerInfo) => {
    // "port" fixture uses a unique value of the worker process index.
    await use(3000 + workerInfo.workerIndex);
  }, { scope: 'worker' } ],

  // "express" fixture starts automatically for every worker - we pass "auto" for that.
  express: [ async ({ port }, use) => {
    // Setup express app.
    const app = express();
    app.get('/1', (req, res) => {
      res.send('Hello World 1!')
    });
    app.get('/2', (req, res) => {
      res.send('Hello World 2!')
    });

    // Start the server.
    let server;
    console.log('Starting server...');
    await new Promise(f => {
      server = app.listen(port);
    });
    console.log('Server ready');

    // Use the server in the tests.
    await use(server);

    // Cleanup.
    console.log('Stopping server...');
    await new Promise(f => server.close(f));
    console.log('Server stopped');
  }, { scope: 'worker', auto: true } ],
});

export default test;