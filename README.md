# 🎭 demo.playwright

This repo is used to demo various testing scenarios with [Playwright](https://playwright.dev/) 🎭, using the official test-runner and scripts authored in TypeScript.

The [test.yml](../../actions/workflows/test.yml) GitHub Action workflow is used to:

## Run Playwright example tests

**[accessibility](./accessibility/tests/example.spec.ts)** - runs accessibility checks against [https://www.w3.org](https://www.w3.org)

**[android](./android/tests/example.spec.ts)** - runs a basic test using Android's WebView.

**[basic](./basic)** - basic tests to show interactions, element selectors, assertions, upload files, read a response, mock a response, and page object model (POM).

**[chrome-extension](./chrome-extension/tests/example.spec.ts)** - basic test that gets a handle to the background page of Chrome extension.

**[drag-and-drop](./drag-and-drop/tests/example.spec.ts)** - runs example drag-and-drop test utilizing [https://www.w3schools.com/html/html5_draganddrop.asp](https://www.w3schools.com/html/html5_draganddrop.asp).

**[electron](./electron/tests/example.spec.ts)** - runs a basic test for Electron application, controlling main electron process and working with Electron window.

**[fixtures](./fixtures/tests)** - runs example tests utilizing [test and worker fixtures](https://playwright.dev/docs/test-fixtures).

**[github-api](./github-api/tests/example.spec.ts)** - uses GitHub API to test creation of a new repo, bug, and feature, then deletion of repo.

**[oauth](./oauth/tests/example.spec.ts)** - runs oauth tests for LinkedIn, Facebook, and Google, to login to <https://courses.ultimateqa.com/users/sign_in>.

**[performance](./performance/tests/example.spec.ts)** - web performance tests using resource timing API, DevTools, and lighthouse, run against
[https://fastestwebsite.net](https://fastestwebsite.net/)

**[svgomg](./svgomg/tests/example.spec.ts)** - End-to-end tests for SVGOMG! site, hosted at [https://demo.playwright.dev/svgomg](https://demo.playwright.dev/svgomg)

**[todomvc](./todomvc/tests/example.spec.ts)** - End-to-end tests for ToDoMVC site, hosted at [https://demo.playwright.dev/todomvc](https://demo.playwright.dev/todomvc)

**[visual-comparison](./visual-comparison/tests/example.spec.ts)** - visually compares snapshots with golden screenshots and text content for playwright.dev landing page.

## Publish each HTML report to their respective directory

When the above tests are finished, the results are published to GitHub pages:

* [testresults.marcusfelling.com/accessibility](https://testresults.marcusfelling.com/accessibility)
* [testresults.marcusfelling.com/android](https://testresults.marcusfelling.com/android)
* [testresults.marcusfelling.com/basic](https://testresults.marcusfelling.com/basic)
* [testresults.marcusfelling.com/chrome-extension](https://testresults.marcusfelling.com/chrome-extension)
* [testresults.marcusfelling.com/drag-and-drop](https://testresults.marcusfelling.com/drag-and-drop)
* [testresults.marcusfelling.com/electron](https://testresults.marcusfelling.com/electron)
* [testresults.marcusfelling.com/fixtures](https://testresults.marcusfelling.com/fixtures)
* [testresults.marcusfelling.com/github-api](https://testresults.marcusfelling.com/github-api)
* [testresults.marcusfelling.com/oauth](https://testresults.marcusfelling.com/oauth)
* [testresults.marcusfelling.com/performance](https://testresults.marcusfelling.com/performance)
* [testresults.marcusfelling.com/svgomg](https://testresults.marcusfelling.com/svgomg)
* [testresults.marcusfelling.com/todomvc](https://testresults.marcusfelling.com/todomvc)
* [testresults.marcusfelling.com/visual-comparison](https://testresults.marcusfelling.com/visual-comparison)

## Configuration

The [baseURL](https://playwright.dev/docs/api/class-testoptions#test-options-base-url) value for most tests is set as a [workflow environment variable](https://docs.github.com/en/actions/learn-github-actions/environment-variables). This allows flexibility for the URL of the sites tested. By not hardcoding a URL in `page.goTo('')` we can simply pass baseURL without changing the test script e.g. test.site.com -> stage.site.com -> prod.site.com

## Have a testing scenario you'd like to see included?

Please [open an issue](../../issues/new?assignees=MarcusFelling&labels=testing-scenario-idea&template=testing-scenario-idea-template.md&title=%5BIdea+for+testing+scenario%5D) with details.
