/**
 * In this test we test drag and drop using page.dragAndDrop()
 * @see https://playwright.dev/docs/api/class-page#page-drag-and-drop
 */
import { test, expect } from '@playwright/test';

test('W3 schools logo should drag and drop', async ({ page }) => {
  await page.goto('');
  // drag image by id, and drop it to div with id 'div2'
  await page.dragAndDrop('#drag1', '#div2');
  // verify that div2 contains the image
  expect(page.locator('#div2.#drag1')).toBeTruthy();

  // reverse and drag from div2, back to div1
  await page.dragAndDrop('#drag1', '#div1');
  // verify that div2 contains the image
  expect(page.locator('#div1.#drag1')).toBeTruthy();  
});
