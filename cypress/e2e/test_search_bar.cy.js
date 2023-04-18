// realiza la busqueda de un texto en la barra de busqueda de google y luego hace enter
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.google.com')
    cy.get('textarea[name=q]').type('test searchbar')
    cy.screenshot('evidence1', {capture: 'fullPage'})
    cy.get('textarea[name=q]').type('{enter}')

  })
})

// realiza la busqueda de un texto en la barra de busqueda de google y luego hace click en el boton de buscar
describe('template spec second', () => {
  it('passes', () => {
    cy.visit('https://www.google.com')
    cy.get('textarea[name=q]').type('test searchbar').type('{esc}')
    cy.screenshot('evidence2', {capture: 'fullPage'})
    cy.contains('Buscar con Google').click({force: true})
    
  })
})