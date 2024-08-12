import {test, expect} from '@playwright/test';

test('basic test', async ({page}) => {
  await page.goto('');

  // Use locators to represent a selector and re-use them
  const inputBox = page.locator('input.new-todo');
  const todoList = page.locator('.todo-list');

  await inputBox.fill('Learn Playwright');
  await inputBox.press('Enter');
  await expect(todoList).toHaveText('Learn Playwright');
});
