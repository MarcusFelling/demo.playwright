import { test, expect } from '@playwright/test';
import { TodoPage } from './todoPage.pom';

test.describe('ToDo App', () => {
  test('should display zero initial items', async ({ page }) => {
    const todoPage = new TodoPage(page);
    await todoPage.goto();
    await expect(todoPage.listItems).toHaveCount(0);
  });

  test('should be able to add new items', async ({ page }) => {
    const todoPage = new TodoPage(page);
    await todoPage.goto();
    await todoPage.addItem('Example #1');
    await todoPage.addItem('Example #2');
    await expect(todoPage.listItems).toHaveText(['Example #2', 'Example #1']);
  });

  test('should be able to mark items as completed', async ({ page }) => {
    const todoPage = new TodoPage(page);
    await todoPage.goto();
    await todoPage.addItem('Example #1');
    const firstListItem = todoPage.listItems.first();
    await expect(firstListItem).not.toHaveClass('completed');
    await firstListItem.locator('.toggle').check();
    await expect(firstListItem).toHaveClass('completed');
  });

  test('should be able to filter by uncompleted items', async ({ page }) => {
    const todoPage = new TodoPage(page);
    await todoPage.goto();
    await todoPage.addItem('Example #1');
    await todoPage.addItem('Example #2');
    await todoPage.addItem('Example #3');
    await todoPage.listItems.last().locator('.toggle').check();
    await todoPage.filterByActiveItemsButton.click();
    await expect(todoPage.listItems).toContainText(['Example #3', 'Example #2']);
  });

  test('should be able to filter by completed items', async ({ page }) => {
    const todoPage = new TodoPage(page);
    await todoPage.goto();
    await todoPage.addItem('Example #1');
    await todoPage.addItem('Example #2');
    await todoPage.addItem('Example #3');
    await todoPage.listItems.last().locator('.toggle').check();
    await todoPage.filterByCompletedItemsButton.click();
    await expect(todoPage.listItems).toHaveText(['Example #1']);
  });

  test('should be able to delete completed items', async ({ page }) => {
    const todoPage = new TodoPage(page);
    await todoPage.goto();
    await todoPage.addItem('Example #1');
    await todoPage.listItems.last().locator('.toggle').check();
    await expect(todoPage.listItems).toHaveText(['Example #1']);
    await todoPage.listItems.first().locator('button.destroy').click();
    await expect(todoPage.listItems).toHaveText([]);
  });
});
