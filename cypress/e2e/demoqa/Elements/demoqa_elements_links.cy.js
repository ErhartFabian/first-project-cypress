 describe('visitando link home', () => {
     it('passes', () => {
        cy.visit('https://demoqa.com/links')
        cy.get('a[id=simpleLink]').invoke('removeAttr', 'target').click()
        cy.url().should('eq', 'https://demoqa.com/')

     })
 })

 describe('visitando link home con nombre no estatico', () => {
     it('passes', () => {
        cy.visit('https://demoqa.com/links')
        cy.get('a[id=dynamicLink]').invoke('removeAttr', 'target').click()
        cy.url().should('eq', 'https://demoqa.com/')
     })
 })


describe('visitando link created', () => {
  it('passes', () => {
    cy.intercept('GET', '**/created').as('createdRequest')
    cy.visit('https://demoqa.com/links')
    cy.get('a[id=created]').click()

    cy.wait('@createdRequest')
      .its('response.statusCode')
      .should('eq', 201)
  })
})

describe('visitando link no content', () => {
    it('passes', () => {
        cy.intercept('GET', '**/no-content').as('noContentRequest')
        cy.visit('https://demoqa.com/links')
        cy.get('a[id=no-content]').click()

        cy.wait('@noContentRequest')
          .its('response.statusCode')
          .should('eq', 204)
    })
})

describe('visitando link moved', () => {
    it('passes', () => {
        cy.intercept('GET', '**/moved').as('movedRequest')
        cy.visit('https://demoqa.com/links')
        cy.get('a[id=moved]').click()

        cy.wait('@movedRequest')
            .its('response.statusCode')
            .should('eq', 301)
    })
})

describe ('visitando link bad request', () => {
    it('passes', () => {
        cy.intercept('GET', '**/bad-request').as('badRequest')
        cy.visit('https://demoqa.com/links')
        cy.get('a[id=bad-request]').click()

        cy.wait('@badRequest')
            .its('response.statusCode')
            .should('eq', 400)
    })
})

describe('visitando link unauthorized', () => {
    it('passes', () => {
        cy.intercept('GET', '**/unauthorized').as('unauthorized')
        cy.visit('https://demoqa.com/links')
        cy.get('a[id=unauthorized]').click()

        cy.wait('@unauthorized')
        .its('response.statusCode')
        .should('eq', 401)
    })
})

describe('visitando link forbidden', () => {
    it('passes', () => {
        cy.intercept('GET', '**/forbidden').as('forbidden')
        cy.visit('https://demoqa.com/links')
        cy.get('a[id=forbidden]').click()

        cy.wait('@forbidden')   
            .its('response.statusCode')
            .should('eq', 403)
    })
})

describe('visitando link not found', () => {
    it('passes', () => {
        cy.intercept('GET', '**/invalid-url').as('invalid-url')
        cy.visit('https://demoqa.com/links')
        cy.get('a[id=invalid-url]').click()
        
        cy.wait('@invalid-url')
            .its('response.statusCode')
            .should('eq', 404)
    })
})


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})