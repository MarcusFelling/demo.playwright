# 🎭 Demo.Playwright
This repo is used to demo [Playwright's](https://playwright.dev/) end-to-end testing capabilities. The project uses the [Playwright Test](https://playwright.dev/docs/intro) test runner and tests authored in TypeScript.

The [test.yml](../../actions/workflows/test.yml) GitHub Action workflow is used to:

## Run Playwright example tests

**[basic](./basic)** - basic tests to show interactions, element selectors, assertions, upload files, read a response, mock a response, and page object model (POM).

**[todomvc](./todomvc/tests/example.spec.ts)** - End-to-end tests for ToDoMVC site, hosted at [https://demo.playwright.dev/todomvc](https://demo.playwright.dev/todomvc)

**[svgomg](./svgomg/tests/example.spec.ts)** - End-to-end tests for SVGOMG! site, hosted at [https://demo.playwright.dev/svgomg](https://demo.playwright.dev/svgomg)

**[github-api](./github-api/tests/example.spec.ts)** - uses GitHub API to test creation of a new repo, bug, and feature, then deletion of repo.

## Publish each HTML report to their respective directory

When the above tests are finished, the results are published to GitHub pages:

* [testresults.marcusfelling.com/basic](https://testresults.marcusfelling.com/basic)
* [testresults.marcusfelling.com/todomvc](https://testresults.marcusfelling.com/todomvc)
* [testresults.marcusfelling.com/svgomg](https://testresults.marcusfelling.com/svgomg)
* [testresults.marcusfelling.com/github-api](https://testresults.marcusfelling.com/github-api)

# Have a testing scenario you'd like to see included?

Please [open an issue](../../issues/new) with details.
