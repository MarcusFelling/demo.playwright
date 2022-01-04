import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('');
});

test.describe('Oauth tests', () => {
  test.('Should be able to login with Facebook', async ({ page }) => {
    await page.locator('a.button.facebook').click();
    await page.locator('[placeholder="Email or phone number"]').fill(process.env.OUTLOOK_USER);
    await page.locator('[placeholder="Email or phone number"]').press('Tab');
    await page.locator('[placeholder="Password"]').fill(process.env.PW_PWD);
    await page.locator('button:has-text("Log In")').click();
  });

  test('Should be able to login with Google', async ({ page }) => {
    await page.locator('a.button.google').click();
    await page.locator('[aria-label="Email or phone"]').fill(process.env.GMAIL_USER);
    await page.locator('button:has-text("Next")').click()
    await page.locator('[aria-label="Enter your password"]').fill(process.env.PW_PWD);
    await page.locator('button:has-text("Next") >> nth=0').click()
  });

  test('Should be able to login with LinkedIn', async ({ page }) => {
    await page.locator('a.button.linkedin').click();
    await page.locator('[aria-label="Email or Phone"]').fill(process.env.OUTLOOK_USER);
    await page.locator('[aria-label="Email or Phone"]').press('Tab');
    await page.locator('input[name="session_password"]').fill(process.env.PW_PWD);
    await page.locator('[aria-label="Sign in"]').click(); 
  });   
});

test.afterEach(async ({ page }) => {
  // URL should be changed to collections page after login
  await expect(page).toHaveURL(/.*collections/);
  // Check menu items after login
  const menuItems = page.locator('ul.dropdown__menu li.dropdown__menu-item');
  await expect(menuItems).toHaveText([
    'My Account',
    'My Dashboard',
    'Support',
    'Sign Out',
  ]);
});