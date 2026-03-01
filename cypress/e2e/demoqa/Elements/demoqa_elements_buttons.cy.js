describe('double click button', () => {
    it('passes', () => {
        cy.visit('https://demoqa.com/buttons')
        //posible escenario erroneo
        //cy.get('button[id=doubleClickBtn]').dblclick() correcto
        cy.get('button[id=doubleClickBtns]').dblclick() 
    })
})

describe('right click button', () => {
    it('passes', () => {
        cy.visit('https://demoqa.com/buttons')
        cy.get('button[id=rightClickBtn]').rightclick()
    })
})

describe('normal click button', () => {
    it('passes', () => {
        cy.visit('https://demoqa.com/buttons')
        cy.get('button').eq(3).click()
    })
})


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})