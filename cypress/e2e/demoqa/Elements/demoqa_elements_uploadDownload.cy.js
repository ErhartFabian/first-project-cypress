describe('Download', () => {
    it('passes', () => {
        cy.visit('https://demoqa.com/upload-download')
        cy.get('a[id=downloadButton]').click()
        cy.should('have.attr', 'href')
    })
})


describe('Upload', () => {
    it('passes', () => {
        cy.visit('https://demoqa.com/upload-download')
        cy.get('input[id=uploadFile]').click().selectFile('Archivo de Carga.png')
        //debe existir el elemento p el cual contenga la palabra "Archivo de Carga.png"
        cy.get('p').contains('Archivo de Carga.png').should('exist')
    })
})


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})