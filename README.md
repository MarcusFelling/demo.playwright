# Demo.Playwright 🎭

This repo is used to demo [Playwright's](https://playwright.dev/) capabilities. The project is leveraging the [Playwright Test](https://playwright.dev/docs/intro) test runner and tests authored in TypeScript.

The [example site](./e2e-examples/server) is configured to run locally before starting tests, as configured in [./e2e-examples/playwright.config.ts](./e2e-examples/playwright.config.ts). The site also gets deployed to Azure Static Web Apps, which has DNS to point to [demo.marcusfelling.com](https://demo.marcusfelling.com). There are endpoints at [/fileuploads.html](https://demo.marcusfelling.com/file-uploads.html) and [/network.html](https://demo.marcusfelling.com/network.html)

The [pipline.yml](.github/workflows/pipeline.yml) GitHub Action workflow is used to:
1. Build and deploy server assets to Azure Static Web Apps
1. Run Playwright tests using [HTML reporter](https://playwright.dev/docs/test-reporters/#html-reporter)
1. Upload HTML report as artifact
1. Publish the HTML report to [testresults.marcusfelling.com](https://testresults.marcusfelling.com/)
