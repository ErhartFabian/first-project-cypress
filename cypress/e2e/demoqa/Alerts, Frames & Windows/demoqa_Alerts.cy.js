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

    it('Alert with text input', () => {
    cy.visit('https://demoqa.com/alerts')
    cy.window().then((win) => {
      cy.stub(win, 'prompt').returns('Prueba Cypress').as('promptStub')
    })
    cy.get('#promtButton').click()
    cy.get('@promptStub').should('have.been.calledOnce')
    cy.get('#promptResult')
      .should('be.visible')
      //.and('contain.text', 'Prueba Cypress')
      .and('contain.text', 'Prueba Cypress error esperado') //error

  })
})

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})