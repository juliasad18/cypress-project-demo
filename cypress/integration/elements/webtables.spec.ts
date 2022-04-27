describe('Elements page test', () => {

    beforeEach(() => {
        cy.visit('/webtables')
    })

    it('Add/Update/Delete row', () => {
        cy.get('button#addNewRecordButton').click()
        cy.get('input#firstName').click().type('Alpaca')
        cy.get('input#lastName').click().type('Funny')
        cy.get('input#userEmail').click().type('alpaca@gmail.com')
        cy.get('input#age').click().type('3')
        cy.get('input#salary').click().type('1000000')
        cy.get('input#department').click().type('Farm')

        cy.get('button#submit').click()


        cy.get('.rt-table').should('contain', 'Funny')
        .and('not.contain.text', 'Rich')

        cy.get('.action-buttons').eq(3).children().eq(0).click()
        cy.get('input#lastName').click().clear().type('Rich')
        cy.get('button#submit').click()

        cy.get('.rt-table').should('contain', 'Rich')
        .and('not.contain.text', 'Funny')

        cy.get('span[title="Delete"]').eq(3).click()
        cy.get('.rt-table').should('not.contain.text', 'Rich')

    })


})