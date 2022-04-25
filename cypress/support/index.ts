// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to select DOM element by data-cy attribute.
       * @example cy.dataCy('greeting')
       */
       clickLeftPanelButton(elementPosition: number)
       assertCorrectLocation(location: string)
       seedAndVisit(seedData: string): Chainable<Element>
    }
  }
}

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from failing the test
    return false
  })

Cypress.Commands.add('clickLeftPanelButton', (elementPosition) => {
    cy
    //.get('.accordion')
    //.get('.element-group')
    //.eq(5)
    .get('.btn').eq(elementPosition).click({force: true})
}) 

Cypress.Commands.add('assertCorrectLocation', (location) => {
  cy.location().should((loc) => {
    expect(loc.pathname.toString()).to.contain(location);
  })

})

Cypress.Commands.add('seedAndVisit', (seedData) => {
  cy.intercept('GET', 'https://demoqa.com/BookStore/v1/Books', seedData)
  cy.visit('/books')
  
})
// Alternatively you can use CommonJS syntax:
// require('./commands')
