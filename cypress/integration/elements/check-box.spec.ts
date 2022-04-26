describe('Book Store page test', () => {
    beforeEach(() => {
        cy.visit('/checkbox')
    })

    function clickButton(title) {
        cy.get(`button[title="${title}"]`).click()
        
    }

    it('If press toggle button, the Home Directory should be expanded or collapsed', () => {
        cy.get('.check-box-tree-wrapper').should('not.contain.text', 'Desktop')

        clickButton('Toggle')

        cy.get('.check-box-tree-wrapper').should('contain.text', 'Desktop')

        cy.get('button[title="Toggle"]').first().click()

        cy.get('.check-box-tree-wrapper').should('not.contain.text', 'Desktop')
    })

    it('If press expand all button, all folders and files apeares', () => {
        cy.get('.rct-title').should('have.length', 1)
        
        clickButton('Expand all')

        cy.get('.rct-title').should('have.length', 17)

    })

    it('If press collapse all button, only one element is present', () => {
        clickButton('Expand all')
        clickButton('Collapse all')

        cy.get('.rct-title').should('have.length', 1)
        
    })



})