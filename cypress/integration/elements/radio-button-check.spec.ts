describe('Book Store page test', () => {
    beforeEach(() => {
        cy.visit('/radio-button')
    })

    it('If check Yes, the message is shown', () => {
        cy.get('input[type=radio]#yesRadio').check({force: true})

        cy.get('p').should('contain', 'You have selected Yes')

    })

    it('No option is disabled', () => {
        cy.get('input[type=radio]#noRadio').should('be.disabled')

    })
})