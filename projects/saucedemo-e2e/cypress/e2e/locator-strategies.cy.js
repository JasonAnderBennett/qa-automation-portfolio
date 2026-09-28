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
// Class names often reflect styling or state, not something meant to identify this field long term. 
it('finds it by class', () => {
  cy.get('.input_error.form_input').should('be.visible')
})
// Finds something by position but the risk is position can change and this would be pointing at the wrong thing but could provide a false positive. 
it('finds it by position', () => {
  cy.get('input').first().should('be.visible')
})
})


describe('Locator strategies on the login button', () => {
  beforeEach(() => {
    cy.visit('/')
  })
// Searches looking for an element that contains what you are looking for
  it('finds it by looking for where it may be contained', () => {
    cy.contains('Login').should('be.visible')
  })
})
  //<input class="input_error form_input" placeholder="Username" aria-label="Username" data-test="username" id="user-name" autocorrect="off" autocapitalize="none" type="text" value="" name="user-name">