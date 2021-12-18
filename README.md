# Demo.Playwright 🎭

This repo is used to demo [Playwright's](https://playwright.dev/) capabilities. The project uses the [Playwright Test](https://playwright.dev/docs/intro) test runner and tests authored in TypeScript.

The [test.yml](.github/workflows/test.yml) GitHub Action workflow is used to:
1. Run Playwright example tests ([basic](./basic), [todomvc](./todomvc), [svgomg](./svgomg), [github-api](./github-api))
1. Publish each HTML report to their respective directory:
- [testresults.marcusfelling.com/basic](https://testresults.marcusfelling.com/basic)
- [testresults.marcusfelling.com/todomvc](https://testresults.marcusfelling.com/todomvc)
- [testresults.marcusfelling.com/svgomg](https://testresults.marcusfelling.com/svgomg)
- [testresults.marcusfelling.com/github-api](https://testresults.marcusfelling.com/github-api) 
