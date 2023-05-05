describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://demoqa.com/text-box')
    cy.get('input[id=userName]').type('Erhart Fabian Castillo Castellanos')
    cy.get('input[id=userEmail]').type('erhart831@gmail.com')
    cy.get('textarea[id=currentAddress]').type('Calle Instituto de Higiene #23 Col. Popotla, CDMX')
    cy.get('textarea[id=permanentAddress]').type('Calle Robles #33 Col. Pinos de Santa Ana, CDMX')
    cy.get('button[id=submit]').click()
  })
})

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})