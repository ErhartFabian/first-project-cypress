describe('DemoQA Alerts', () => {
    beforeEach(() => {
        cy.visit('https://demoqa.com/alerts')
    })

    it('Alert with OK', () => {
        cy.get('#alertButton').click()
        cy.on('window:alert', (str) => {
            expect(str).to.equal('You clicked a button')
        })
    })

    it('Alert with OK and Cancel', () => {
        cy.get('#confirmButton').click()
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Do you confirm action?')
            return false
        })
    })

    it('Alert with Textbox', () => {
        cy.get('#promtButton').click()
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('Cypress')
            cy.get('#promptResult').should('have.text', 'You entered Cypress')
        })
    })
})

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})