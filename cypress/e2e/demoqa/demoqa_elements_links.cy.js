describe('visitando link home', () => {
    it('passes', () => {
        cy.visit('https://demoqa.com/links')
        cy.get('p[id=simpleLink]').click()

    })
})


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})