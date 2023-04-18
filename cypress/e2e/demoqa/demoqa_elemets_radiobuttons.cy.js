describe('Yes Button', () => {
  it('passes', () => {
    cy.visit('https://demoqa.com/radio-button')
    cy.get('input[id=yesRadio]').click({force: true})

  })
})

describe('Impressive', () => {
  it('passes', () => {
    cy.visit('https://demoqa.com/radio-button')
    cy.get('input[id=impressiveRadio]').click({force: true})

  })
})

describe('No', () => {
  it('passes', () => {
    cy.visit('https://demoqa.com/radio-button')
    cy.get('input[id=noRadio]').click()

  })
})


Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})