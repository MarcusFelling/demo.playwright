# 🎭 demo.playwright

This repo is used to demo various testing scenarios with [Playwright](https://playwright.dev/) 🎭, using the official test-runner and scripts authored in TypeScript.

The [test.yml](../../actions/workflows/test.yml) GitHub Action workflow is used to:

## Run Playwright example tests

**[basic](./basic)** - basic tests to show interactions, element selectors, assertions, upload files, read a response, mock a response, and page object model (POM).

**[todomvc](./todomvc/tests/example.spec.ts)** - End-to-end tests for ToDoMVC site, hosted at [https://demo.playwright.dev/todomvc](https://demo.playwright.dev/todomvc)

**[svgomg](./svgomg/tests/example.spec.ts)** - End-to-end tests for SVGOMG! site, hosted at [https://demo.playwright.dev/svgomg](https://demo.playwright.dev/svgomg)

**[github-api](./github-api/tests/example.spec.ts)** - uses GitHub API to test creation of a new repo, bug, and feature, then deletion of repo.

**[visual-comparison](./visual-comparison/tests/example.spec.ts)** - visually compares snapshots with golden screenshots and text content for playwright.dev landing page.

**[performance](./performance/tests/example.spec.ts)** - web performance tests using resource timing API, DevTools, and lighthouse, run against
[https://fastestwebsite.net](https://fastestwebsite.net/)

**[accessibility](./accessibility/tests/example.spec.ts)** - runs accessibility checks against [https://www.w3.org](https://www.w3.org)

**[android](./android/tests/example.spec.ts)** - runs a basic test using Android's WebView.

**[electron](./electron/tests/example.spec.ts)** - runs a basic test for Electron application, controlling main electron process and working with Electron window.

**[oauth](./oauth/tests/example.spec.ts)** - runs oauth tests for LinkedIn, Facebook, and Google, to login to <https://courses.ultimateqa.com/users/sign_in>.

**[fixtures](./fixtures/tests)** - runs example tests utilizing [test and worker fixtures](https://playwright.dev/docs/test-fixtures).

**[drag-and-drop](./drag-and-drop/tests/example.spec.ts)** - runs example drag-and-drop test utilizing [https://www.w3schools.com/html/html5_draganddrop.asp](https://www.w3schools.com/html/html5_draganddrop.asp).

**[websockets](./websockets/tests/example.spec.ts)** - runs example test that logs in to Reddit.com, then inspects WebSockets using page.on('websocket').

## Publish each HTML report to their respective directory

When the above tests are finished, the results are published to GitHub pages:

* [testresults.marcusfelling.com/basic](https://testresults.marcusfelling.com/basic)
* [testresults.marcusfelling.com/todomvc](https://testresults.marcusfelling.com/todomvc)
* [testresults.marcusfelling.com/svgomg](https://testresults.marcusfelling.com/svgomg)
* [testresults.marcusfelling.com/github-api](https://testresults.marcusfelling.com/github-api)
* [testresults.marcusfelling.com/visual-comparison](https://testresults.marcusfelling.com/visual-comparison)
* [testresults.marcusfelling.com/performance](https://testresults.marcusfelling.com/performance)
* [testresults.marcusfelling.com/accessibility](https://testresults.marcusfelling.com/accessibility)
* [testresults.marcusfelling.com/android](https://testresults.marcusfelling.com/android)
* [testresults.marcusfelling.com/electron](https://testresults.marcusfelling.com/electron)
* [testresults.marcusfelling.com/oauth](https://testresults.marcusfelling.com/oauth)
* [testresults.marcusfelling.com/fixtures](https://testresults.marcusfelling.com/fixtures)
* [testresults.marcusfelling.com/drag-and-drop](https://testresults.marcusfelling.com/drag-and-drop)
* [testresults.marcusfelling.com/websockets](https://testresults.marcusfelling.com/websockets)

## Have a testing scenario you'd like to see included?

Please [open an issue](../../issues/new?assignees=MarcusFelling&labels=testing-scenario-idea&template=testing-scenario-idea-template.md&title=%5BIdea+for+testing+scenario%5D) with details.
