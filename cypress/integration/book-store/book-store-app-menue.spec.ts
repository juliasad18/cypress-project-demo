describe('', () => {

    beforeEach(() => {
        cy.visit('/books')
    })

    it('Left side menue should contain Login, Book Store and Profile options', () => {
        cy.get('.accordion')
        .should('contain', 'Login')
        .and('contain', 'Book Store')
        .and('contain', 'Profile')
    })

    it('Left Side Panel Buttons should redirect to the correct page', () => {
        cy.clickLeftPanelButton(29)  //the button which I am interested in is 29th in the list of 34 similar elements
        cy.assertCorrectLocation('/login')

        cy.clickLeftPanelButton(30)  //the button which I am interested in is 30th in the list of 34 similar elements
        cy.assertCorrectLocation('/books')

        cy.clickLeftPanelButton(31)  //the button which I am interested in is 31st in the list of 34 similar elements
        cy.assertCorrectLocation('/profile')
    })

})