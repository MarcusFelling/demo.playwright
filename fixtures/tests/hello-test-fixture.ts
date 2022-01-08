/**
 * In this file we define our test fixtures.
 * @see https://playwright.dev/docs/test-fixtures#test-fixtures
 */

import { test as base } from '@playwright/test';

// Define test fixtures "hello" and "helloWorld".
type TestFixtures = {
  hello: string;
  helloWorld: string;
};

// Extend base test with our fixtures.
const test = base.extend<TestFixtures>({
  // This fixture is a constant, so we can just provide the value.
  hello: 'Hello',

  // This fixture has some complex logic and is defined with a function.
  helloWorld: async ({ hello }, use) => {
    // Set up the fixture.
    const value = hello + ', world!';

    // Use the fixture value in the test.
    await use(value);

    // Clean up the fixture. Nothing to cleanup in this example.
  },
});

// Now, this "test" can be used in multiple test files, and each of them will get the fixtures.
export default test;