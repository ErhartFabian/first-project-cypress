
describe('hacer click solo home', () => {
  it('passes', () => {
    cy.visit('https://demoqa.com/checkbox')
    cy.wait(3000)
    cy.get('.rc-tree-switcher').click({force: true})
    cy.get('.rc-tree-treenode-switcher-open > .rc-tree-checkbox').click({force: true})
  })
})


describe('hacer click solo en Desktop dentro de home', () => {
  it('passes', () => {
    cy.visit('https://demoqa.com/checkbox')
    cy.get('.rc-tree-switcher').click({force: true})
    cy.get(':nth-child(2) > .rc-tree-checkbox').click({force: true})
  })
})

describe('hacer click solo en Workspace dentro de Documents dentro de home', () => {
  it('passes', () => {
    cy.visit('https://demoqa.com/checkbox')
    cy.get('.rc-tree-switcher').click({force: true})
    cy.get(':nth-child(3) > .rc-tree-switcher').click({force: true})
    cy.get(':nth-child(4) > .rc-tree-checkbox').click({force: true})
  })
})

describe('hacer click en Angular que esta dentro de Workspace dentro de desktop dentro de home', () => {
  it('passes', () => {
    cy.visit('https://demoqa.com/checkbox')
    cy.visit('https://demoqa.com/checkbox')
    cy.get('.rc-tree-switcher').click({force: true})
    cy.get(':nth-child(3) > .rc-tree-switcher').click({force: true})
    cy.get(':nth-child(4) > .rc-tree-switcher').click({force: true})
    cy.get(':nth-child(6) > .rc-tree-checkbox').click({force: true})
  })
})


Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})