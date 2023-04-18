describe('visitando link home', () => {
    it('passes', () => {
        cy.visit('https://demoqa.com/links')
        cy.get('a[id=simpleLink]').click()

    })
})

describe('visitando link homeTTIOR', () => {
    it('passes', () => {
        cy.visit('https://demoqa.com/links')
        cy.get('a[id=dynamicLink]').click()

    })
})



Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})