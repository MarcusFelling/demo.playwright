import {expect, test} from '@playwright/test';
import {injectAxe, getViolations} from 'axe-playwright';

test.describe.parallel('accessibility checks', () => {
  test.beforeEach(async ({page}) => {
    await page.goto('');
  });

  /**
   * In this test we use the Axe accessibility testing engine
   * to run analysis on page
   * @see https://github.com/abhinaba-ghosh/axe-playwright
   */
  test('Check entire page accessibility', async ({page}) => {
    // inject the axe-core runtime into the page under test
    await injectAxe(page);

    const violations = await getViolations(page, null, {
      detailedReport: true,
      axeOptions: {
        runOnly: {
          type: 'tag',
          values: ['wcag2a', 'best-practice'], // all tags and standards listed here: https://www.deque.com/axe/core-documentation/api-documentation/#axe-core-tags
        },
      },
    });
    expect(violations).toEqual([]);
  });
});
