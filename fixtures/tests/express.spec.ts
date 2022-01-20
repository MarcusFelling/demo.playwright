/**
 * In this test we use worker fixtures to test the express server.
 * @see https://playwright.dev/docs/test-fixtures#worker-fixtures
 */
import test from './express-test';
import fetch from 'node-fetch';

test('fetch 1', async ({port}) => {
  const result = await fetch(`http://localhost:${port}/1`);
  test.expect(await result.text()).toBe('Hello World 1!');
});

test('fetch 2', async ({port}) => {
  const result = await fetch(`http://localhost:${port}/2`);
  test.expect(await result.text()).toBe('Hello World 2!');
});
