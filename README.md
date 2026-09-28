# QA Automation Portfolio

Cypress end-to-end test automation projects and testing coursework, built while transitioning from manual QA into test automation.

## Background

I've spent 8+ years doing manual QA and test case design across content and product platforms, without automation as part of the job. This repo is where I'm building that skill deliberately: real test suites, written and debugged myself, with a clean commit history showing the actual work.

## Projects

### `projects/saucedemo-e2e`

An end-to-end Cypress test suite built against [Sauce Labs' demo site](https://www.saucedemo.com/).

- **Login tests:** Covers valid login and locked-out user scenarios, with real assertions verifying application state (e.g. confirming successful navigation to the inventory page, not just that no error appeared).
- **Locator strategies:** A dedicated exercise comparing five different ways to target the same element (ID, class, attribute, text content, and structural selectors), with comments explaining the tradeoffs of each and when a broader vs. more exact selector makes sense.

### JavaScript fundamentals

Alongside the Cypress work, I've been building core JavaScript understanding through function-writing exercises, including debugging real logic errors I introduced myself (boundary condition mistakes, duplicate function definitions) rather than just following a tutorial script.

## What's next

Currently working toward: custom Cypress commands and page object structure, basic CI integration, and API-level testing.

## Tech

Cypress, JavaScript, Git/GitHub
