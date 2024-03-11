// Add reference types so cypress can auto-complete itself:
/// <reference types="cypress">

describe('accessibility', () => {
  it('should run accessibility audits', () => {
    cy.visit('https://ecommerce-playground.lambdatest.io/')
  })
})