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


describe('visitando link created', () => {
    it('passes', () => {
        cy.intercept('GET', 'https://demoqa.com/links')
        cy.visit('https://demoqa.com/links')
        cy.get('a[id=bad-request]').click()
        // expected code 400 after click
        cy.get('p[id=linkResponse]').should('contain', 'Bad Request')

    })
})



Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})