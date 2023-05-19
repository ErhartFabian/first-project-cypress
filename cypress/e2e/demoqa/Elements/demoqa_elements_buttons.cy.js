describe.only('double click button', () => {
    it('passes', () => {
        cy.visit('https://demoqa.com/buttons')
        cy.get('button[id=doubleClickBtn]').dblclick()
        cy.wait(3000)
    })
})

describe('right click button', () => {
    it('passes', () => {
        cy.visit('https://demoqa.com/buttons')
        cy.get('button[id=rightClickBtn]').rightclick()
        cy.wait(3000)
    })
})

describe('normal click button', () => {
    it('passes', () => {
        cy.visit('https://demoqa.com/buttons')
        cy.get('button').eq(3).click()
        cy.wait(3000)
    })
})


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})