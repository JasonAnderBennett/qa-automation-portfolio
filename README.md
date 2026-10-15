# QA Automation Portfolio

Cypress end-to-end test automation projects and testing coursework, built while transitioning from manual QA into test automation.

## Projects

### `projects/saucedemo-e2e`

An end-to-end Cypress test suite built against [Sauce Labs' demo site](https://www.saucedemo.com/).

- **Login tests:** Covers valid login and locked-out user scenarios, with real assertions verifying application state (e.g. confirming successful navigation to the inventory page, not just that no error appeared).
- **Locator strategies:** A dedicated exercise comparing five different ways to target the same element (ID, class, attribute, text content, and structural selectors), with comments explaining the tradeoffs of each and when a broader vs. more exact selector makes sense.


## Roadmap

Next (near-term)

Custom Cypress commands and page object structure, extracting repeated steps like login into reusable functions
Basic CI integration (GitHub Actions), so tests run automatically on every push instead of manually

After that

API-level testing with cy.request(), testing backend responses directly instead of only through the UI
Fixture-driven test data, pulling test inputs from files instead of hardcoding them in each test

Later

Basic accessibility checks (cypress-axe), a natural next step given the aria-label locator work already in the repo
Test reporting (Mochawesome or similar), for readable pass/fail output beyond the terminal

## Tech

Cypress, JavaScript, Git/GitHub
