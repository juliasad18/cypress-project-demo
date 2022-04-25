describe('Profile page test', () => {
    
    beforeEach(() => {
        cy.visit('/profile')
    })

    context('Assert that elements present on the Profile page', () => {
        
        it('If not logged in info message should be present', () => {
            cy.get('#notLoggin-label')
            .should('contain', 'Currently you are not logged into the Book Store application, please visit the ')
            .and('contain', ' page to enter or ')
            .and('contain', ' page to register yourself.')

        })
    })

    context('Iteration with the Registration page', () => {

        it('If press login, should redirect to /login page', () => {
            cy.get('#notLoggin-label').find('a').eq(0).should('have.attr', 'href', '/login').click()
            cy.assertCorrectLocation('/login')

        })

        it('If press register, should redirect to /register page', () => {
            cy.get('#notLoggin-label').find('a').eq(1).should('have.attr', 'href', '/register').click()
            cy.assertCorrectLocation('/register')
        })
    })
})