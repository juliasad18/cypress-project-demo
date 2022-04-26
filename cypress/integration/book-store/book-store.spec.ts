describe('Book Store page test', () => {
    

    beforeEach(() => {
        cy.visit('/books')
    })

    context('Assert items on the Book page', () => {
        
        it('Assert that elements are present on the Book page', () => {

            cy.get('#searchBox')
            .should('have.attr', 'placeholder', 'Type to search')

            cy.get('button#login')
            .should('contain', 'Login')

            cy.get('.rt-table')
            .should('contain', 'Image')

            cy.get('.rt-table')
            .should('contain', 'Title')

            cy.get('.rt-table')
            .should('contain', 'Author')

            cy.get('.rt-table')
            .should('contain', 'Publisher')

        })
        
    })

    context('Iteration with the Book page', () => {

        it('If type existing book in search input, the book should be found', () => {
            cy.get('#searchBox')
            .click().type('Git Pocket Guide')

            cy.get('.rt-tr-group').eq(0)
            .and('contain', 'Git Pocket Guide')

            cy.get('.rt-tr-group').eq(1).not('.rt-tr -odd')
        })

        it('If click on the book title, should redirect to the page with the book information', () => {
            cy.get('.action-buttons').eq(0)
            .should('contain', 'Git Pocket Guide')
            .click()
            
            cy.assertCorrectLocation('https://demoqa.com/books?book=9781449325862')
        })

        it('If click on the Login button, should redirect to the Login page', () => {
            cy.get('button#login')
            .click()
            
            cy.assertCorrectLocation('https://demoqa.com/login') 
        })        

    })


})