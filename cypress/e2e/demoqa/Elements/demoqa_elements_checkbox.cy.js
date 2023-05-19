describe('hacer click solo home', () => {
  it('passes', () => {
    cy.visit('https://demoqa.com/checkbox')
    cy.wait(3000)
    cy.get('button[title=Toggle]').click()
    cy.get('input[id=tree-node-home]').click({force: true})
  })
})

describe('hacer click solo en Desktop dentro de home', () => {
  it('passes', () => {
    cy.visit('https://demoqa.com/checkbox')
    cy.get('button[title=Toggle]').click()
    cy.get('button[title=Toggle]').eq(1).click()
    cy.get('input[id=tree-node-desktop]').click({force: true})
  })
})

describe('hacer click solo en Workspace dentro de desktop dentro de home', () => {
  it('passes', () => {
    cy.visit('https://demoqa.com/checkbox')
    cy.get('button[title=Toggle]').click()
    cy.get('button[title=Toggle]').eq(2).click()
    cy.get('button[title=Toggle]').eq(3).click()
    cy.get('input[id=tree-node-workspace]').click({force: true})
  })
})

describe('hacer click en Angular que esta dentro de Workspace dentro de desktop dentro de home', () => {
  it('passes', () => {
    cy.visit('https://demoqa.com/checkbox')
    cy.get('button[title=Toggle]').click()
    cy.get('button[title=Toggle]').eq(2).click()
    cy.get('button[title=Toggle]').eq(3).click()
    cy.get('button[title=Toggle]').eq(5).click()
    cy.get('input[id=tree-node-angular]').click({force: true})

  })
})


Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})