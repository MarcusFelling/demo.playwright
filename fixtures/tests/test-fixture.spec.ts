/**
 * In this test we use test fixtures
 * @see https://playwright.dev/docs/test-fixtures#test-fixtures
 */
import test from './hello-test-fixture';

test('hello', ({ hello }) => {
  test.expect(hello).toBe('Hello');
});

test('hello world', ({ helloWorld }) => {
  test.expect(helloWorld).toBe('Hello, world!');
});
