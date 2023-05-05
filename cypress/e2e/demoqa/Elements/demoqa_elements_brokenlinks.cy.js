describe('Valid Link', () => {
    it('passes', () => {
        cy.visit('https://demoqa.com/broken')
        cy.contains('Click Here for Valid Link').click()
    })
})

describe('Broken Link', () => {
    it('fails', () => {
        cy.visit('https://demoqa.com/broken')
        console.log('BERORE')
        cy.contains('Click Here for Broken Link').click()
        console.log('AFTER')


    })
})


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})