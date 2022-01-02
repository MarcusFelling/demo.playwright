/**
 * Example automation on Android with WebView and Chrome browser.
 * @see https://playwright.dev/docs/api/class-android
 */
import { _android as android, test } from '@playwright/test';

test.describe('Run native Android tests', async () => {
  test('WebView', async () => {
    // Connect to the device.
    const [device] = await android.devices();
    console.log(`Model: ${device.model()}`);
    console.log(`Serial: ${device.serial()}`); 
    // Take screenshot of the whole device.
    await device.screenshot({ path: 'device-test2.png' });    
    console.log("log 1...");
    // Launch an application with WebView.
    await device.shell('am force-stop org.chromium.webview_shell');
    console.log("log 2...");
    await device.shell('am start org.chromium.webview_shell/.WebViewBrowserActivity');
    // Get the WebView.
    console.log("log 3...");
    const webview = await device.webView({ pkg: 'org.chromium.webview_shell' });

    // Fill the input box.
    console.log("log 4...");
    await device.fill({ res: 'org.chromium.webview_shell:id/url_field' }, 'github.com/microsoft/playwright');
    console.log("log 5...");
    await device.press({ res: 'org.chromium.webview_shell:id/url_field' }, 'Enter');

    // Work with WebView's page as usual.
    console.log("log 6...");
    const page = await webview.page();
    console.log("log 7...");
    await page.waitForNavigation({ url: /.*microsoft\/playwright.*/ });
    console.log("log 8...");
    console.log(await page.title());
    console.log("log 9...");

    // Close the device.
    await device.close();    
  });

  test('Chrome', async () => {
    // Connect to the device.
    const [device] = await android.devices();
    console.log(`Model: ${device.model()}`);
    console.log(`Serial: ${device.serial()}`);
    // Take screenshot of the whole device.
    await device.screenshot({ path: 'device-test1.png' });
    console.log("log 10...");
    // Launch Chrome browser.
    await device.shell('am force-stop com.android.chrome');
    console.log("log 11...");
    const context = await device.launchBrowser();

    // Use BrowserContext as usual.
    console.log("log 12...");
    const page = await context.newPage();
    console.log("log 13...");
    await page.goto('https://github.com/microsoft/playwright');
    console.log("log 14...");
    console.log(await page.evaluate(() => window.location.href));
    console.log("log 15...");
    await page.screenshot({ path: 'page.png' });
    console.log("log 16...");

    await context.close(); // Close the device.

    await device.close();    
  });  
});