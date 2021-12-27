# 🎭 Demo.Playwright

This repo is used to demo [Playwright's](https://playwright.dev/) testing capabilities. The project uses the [Playwright Test](https://playwright.dev/docs/intro) test runner and tests authored in TypeScript.

The [test.yml](../../actions/workflows/test.yml) GitHub Action workflow is used to:

## Run Playwright example tests

**[basic](./basic)** - basic tests to show interactions, element selectors, assertions, upload files, read a response, mock a response, and page object model (POM).

**[todomvc](./todomvc/tests/example.spec.ts)** - End-to-end tests for ToDoMVC site, hosted at [https://demo.playwright.dev/todomvc](https://demo.playwright.dev/todomvc)

**[svgomg](./svgomg/tests/example.spec.ts)** - End-to-end tests for SVGOMG! site, hosted at [https://demo.playwright.dev/svgomg](https://demo.playwright.dev/svgomg)

**[github-api](./github-api/tests/example.spec.ts)** - uses GitHub API to test creation of a new repo, bug, and feature, then deletion of repo.

**[visual-comparison](./visual-comparison/tests/example.spec.ts)** - visually compares snapshots with golden screenshots and text content for playwright.dev landing page.

**[performance](./performance/tests/example.spec.ts)** - web performance tests using resource timing API, DevTools, and lighthouse, run against
[https://fastestwebsite.net](https://fastestwebsite.net/)

**[accessibility](./accessibility/tests/example.spec.ts)** - runs accessibility checks against [https://www.w3.org/WAI/fundamentals/accessibility-intro/](https://www.w3.org/WAI/fundamentals/accessibility-intro/)

## Publish each HTML report to their respective directory

When the above tests are finished, the results are published to GitHub pages:

* [testresults.marcusfelling.com/basic](https://testresults.marcusfelling.com/basic)
* [testresults.marcusfelling.com/todomvc](https://testresults.marcusfelling.com/todomvc)
* [testresults.marcusfelling.com/svgomg](https://testresults.marcusfelling.com/svgomg)
* [testresults.marcusfelling.com/github-api](https://testresults.marcusfelling.com/github-api)
* [testresults.marcusfelling.com/visual-comparison](https://testresults.marcusfelling.com/visual-comparison)
* [testresults.marcusfelling.com/performance](https://testresults.marcusfelling.com/performance)
* [testresults.marcusfelling.com/accessibility](https://testresults.marcusfelling.com/accessibility)

## Have a testing scenario you'd like to see included?

Please [open an issue](../../issues/new) with details.
