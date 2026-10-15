# QA Automation Portfolio

Cypress end-to-end test automation projects and testing coursework, built while transitioning from manual QA into test automation.

## Projects

### `projects/saucedemo-e2e`

An end-to-end Cypress test suite built against [Sauce Labs' demo site](https://www.saucedemo.com/).

- **Login tests:** Covers valid login and locked-out user scenarios, with real assertions verifying application state (e.g. confirming successful navigation to the inventory page, not just that no error appeared).
- **Locator strategies:** A dedicated exercise comparing five different ways to target the same element (ID, class, attribute, text content, and structural selectors), with comments explaining the tradeoffs of each and when a broader vs. more exact selector makes sense.


## Roadmap
Next

Custom Cypress commands and page object structure
CI integration via GitHub Actions, so tests run automatically on every push

Then

API-level testing with cy.request()
TypeScript, since it’s increasingly the default for Cypress projects at larger teams
Fixture-driven test data instead of hardcoded inputs

Further out

Accessibility testing (cypress-axe)
Visual regression testing (catching unintended UI changes, not just broken logic)
Test reporting and basic metrics (Mochawesome or similar)

## Tech

Cypress, JavaScript, Git/GitHub
