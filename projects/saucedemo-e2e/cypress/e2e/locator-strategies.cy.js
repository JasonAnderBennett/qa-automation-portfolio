describe('Locator strategies on the username field', () => {
  beforeEach(() => {
    cy.visit('/')
  })
// Exists purely for tests, won't change for styling or content reasons
  it('finds it by data-test attribute (strongest)', () => {
    cy.get('[data-test="username"]').should('be.visible')
  })
// Likely unique and stable, but not guaranteed to exist on every element
  it('finds it by id (strong, but not test-specific)', () => {
    cy.get('#user-name').should('be.visible')
  })
  // Could change if form logic changes, less likely than a styling change
  it('finds it by name attribute', () => {
  cy.get('[name="user-name"]').should('be.visible')
})
// Not every app is built with accessibility attributes in mind
it('finds it by aria-label', () => {
  cy.get('[aria-label="Username"]').should('be.visible')
})
// Placeholder is user-facing copy, easily changed by a design update
it('finds it by placeholder', () => {
  cy.get('[placeholder="Username"]').should('be.visible')
})
})

