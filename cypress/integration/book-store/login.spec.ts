describe('Login page test', () => {
    
    beforeEach(() => {
        cy.visit('/login')
    })

    context('Assert items on the Login page', () => {
        
        it('Assert that elements are present on the Login page', () => {
            cy.get('.login-wrapper')
            .find('h2').should('contain', 'Welcome,')

            cy.get('.login-wrapper')
            .find('h5').should('contain', 'Login in Book Store')

            cy.get('.login-wrapper')
            .find('#userName-wrapper').should('contain', 'UserName : ')
            
            cy.get('.login-wrapper')
            .find('#password-wrapper').should('contain', 'Password : ')

            cy.get('input').get('#userName')
            .should('have.attr', 'placeholder', 'UserName')
            .and('have.class', 'mr-sm-2 form-control')

            cy.get('input').get('#password')
            .should('have.attr', 'placeholder', 'Password')
            .and('have.class', 'mr-sm-2 form-control')

            cy.get('button').get('#login')
            .should('contain', 'Login')

            cy.get('button').get('#newUser')
            .should('contain', 'New User')

        })
        
    })

    context('Iteration with the Login page', () => {

        it('If press the Login button with empty input fileds, the warning sign should appear and class of the input should be changed', () => {
            cy.get('button').get('#login').click()

            cy.get('input').get('#userName')
            .and('have.class', 'mr-sm-2 is-invalid form-control')
            .and('have.css', 'background-image')

            cy.get('input').get('#password')
            .and('have.class', 'mr-sm-2 is-invalid form-control')
            .and('have.css', 'background-image')

        })

        it('If type an unexisting user, should show the error: Invalid username or password!', () => {
            cy.get('#userName').click().type('i dont exist in the system')

            cy.get('#password').click().type('1234')

            cy.get('button').get('#login').click()

            cy.get('.mb-1')
            .should('contain', 'Invalid username or password!')
            .and('have.css', 'color', 'rgb(255, 0, 0)')  //#ff000 = rgb((255, 0, 0))

        })

        it('If press New User button, should redirect to the /register page', () => {
            cy.get('button').get('#newUser').click()
            cy.assertCorrectLocation('/register')

        })
        

    })
    
})


