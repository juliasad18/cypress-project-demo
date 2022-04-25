describe('Register page test', () => {
    
    beforeEach(() => {
        cy.visit('/register')
    })

    context('Assert items on the Registration form page', () => {
        it('Assert that elements are present on the /register page', () => {
            cy.get('#userForm')
            .should('contain', 'Register to Book Store')
            .and('contain', 'First Name :')
            .and('contain', 'Last Name : ')
            .and('contain', 'UserName : ')
            .and('contain', 'Password : ')

            cy.get('input').get('#firstname')
            .should('have.attr', 'placeholder', 'First Name')
            .and('have.class', 'mr-sm-2 form-control')

            cy.get('input').get('#lastname')
            .should('have.attr', 'placeholder', 'Last Name')
            .and('have.class', 'mr-sm-2 form-control')

            cy.get('input').get('#userName')
            .should('have.attr', 'placeholder', 'UserName')
            .and('have.class', 'mr-sm-2 form-control')

            cy.get('input').get('#password')
            .should('have.attr', 'placeholder', 'Password')
            .and('have.class', 'mr-sm-2 form-control')

            // cy.get('#recaptcha-anchor-label')
            // .should('contain', 'I\'m not a robot')

            cy.get('button').get('#register')
            .should('contain', 'Register')

            cy.get('button').get('#gotologin')
            .should('contain', 'Back to Login')
        })
    })

    context('Iteration with the Registration page', () => {

        it('If press Back to Login button, should redirect to /login page', () => {
            cy.get('button').get('#gotologin').click()
            cy.assertCorrectLocation('/login')
        })

        it('If press Register button with empty input fields, the warning sign should appear and class of the input should be changed', () => {
            cy.get('button').get('#register').click()

            cy.get('#firstname')
            .and('have.class', 'mr-sm-2 is-invalid form-control')
            .and('have.css', 'background-image')

            cy.get('#lastname')
            .and('have.class', 'mr-sm-2 is-invalid form-control')
            .and('have.css', 'background-image')

            cy.get('#userName')
            .and('have.class', 'mr-sm-2 is-invalid form-control')
            .and('have.css', 'background-image')

            cy.get('#password')
            .and('have.class', 'mr-sm-2 is-invalid form-control')
            .and('have.css', 'background-image')
        })

        it.only('If fill all fields and press Register without checking the \'I am not a robot\' box, should show the error', () => {
            cy.get('#firstname').click().type('Funny')

            cy.get('#lastname').click().type('Alpaca')

            cy.get('#userName').click().type('funnyAlpaca')

            cy.get('#password').click().type('1234')

            cy.get('button').get('#register').click()

            cy.get('#userForm')
            .should('contain', 'Please verify reCaptcha to register!')

        })


    })
})