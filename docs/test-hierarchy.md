# Playwright Test Suite Hierarchy

> [!NOTE]
> In the simplist form, `Suite` is a group of tests.

The root suite has a child suite for each `[TestProject]`:

- 📂 Project suite #1 (child suite for each test file)
  - 📄 File suite #1
    - 🧪`[TestCase]` #1
    - 🧪`[TestCase]` #2
    - Suite corresponding to a [test.describe(title, callback)](https://playwright.dev/docs/api/class-test#test-describe) group
      - 🧪`[TestCase]` #1 in a group
      - 🧪`[TestCase]` #2 in a group
      - 🧪< more test cases ... >
  - 📄File suite #2
  - 📄< more file suites ... >
- 📂 Project suite #2
- 📂 < more project suites ... >

> [!NOTE]
> `[TestCase]` corresponds to every [test.(call)(title, testFunction)](https://playwright.dev/docs/api/class-test#test-call) call in a test file. When a single [test.(call)(title, testFunction)](https://playwright.dev/docs/api/class-test#test-call) is running in multiple projects or repeated multiple times, it will have multiple `[TestCase]` objects in corresponding projects' suites.
