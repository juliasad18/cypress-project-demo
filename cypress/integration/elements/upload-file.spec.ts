describe('Elements page test', () => {
    const fileName_1 = 'cypress/fixtures/test-upload-image.jpeg'
    const fileName_2 = 'cypress/fixtures/book-store-response.json'

    beforeEach(() => {
        cy.visit('/upload-download')
    })

    it('If upload a file, its name appears on the page', () => {
        cy.get('input[type=file]').selectFile(fileName_1)
        cy.get('p#uploadedFilePath').should('contain', 'C:\fakepath\test-upload-image.jpeg')
    })

    it('If upload several files, their names appear on the page', () => {
        cy.get('input[type=file]').selectFile([fileName_1, fileName_2])
        cy.get('form').should('contain', '2 files')
    })



})