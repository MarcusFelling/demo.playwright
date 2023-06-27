/**
 * Example automation on Android with WebView
 * @see https://playwright.dev/docs/api/class-android
 */
import {_android as android, test} from '@playwright/test';

test.describe('Run native Android tests', async () => {
  test('WebView', async () => {
    // Connect to the device.
    const [device] = await android.devices();
    console.log(`Model: ${device.model()}`);
    console.log(`Serial: ${device.serial()}`);
    // Take screenshot of the whole device.
    await device.screenshot({path: 'device.png'});
    // Launch an application with WebView.
    await device.shell('am force-stop org.chromium.webview_shell');
    await device.shell('am start org.chromium.webview_shell/.WebViewBrowserActivity');
    // Get the WebView.
    const webview = await device.webView({pkg: 'org.chromium.webview_shell'});
    // Fill the input box.
    await device.fill({res: 'org.chromium.webview_shell:id/url_field'}, 'github.com/microsoft/playwright');
    await device.press({res: 'org.chromium.webview_shell:id/url_field'}, 'Enter');
    // Work with WebView's page as usual.
    const page = await webview.page();
    console.log(await page.title());
    // Close the device.
    await device.close();
  });
});
