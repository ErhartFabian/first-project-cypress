describe('Button Will Enable 5 seconds not able to clic', () => {
    it('passes', () => {
        cy.visit('https://demoqa.com/dynamic-properties')
        cy.get('button[id=enableAfter]').should('have.css', 'opacity', '0.65')
    })
})

describe('Button Will Enable 5 seconds able to clic', () => {
    it('passes', () => {
        cy.visit('https://demoqa.com/dynamic-properties')
        cy.wait(5000)
        cy.get('button[id=enableAfter]').should('be.enabled')
    })
})

describe('Button text color white', () => {
    it('passes', () => {
        cy.visit('https://demoqa.com/dynamic-properties')
        cy.get('button[id=colorChange]').should('have.css', 'color', 'rgb(255, 255, 255)')
    })
})

describe('Button text color changed to red', () => {
    it('passes', () => {
        cy.visit('https://demoqa.com/dynamic-properties')
        cy.wait(5000)
        cy.get('button[id=colorChange]').should('have.css', 'color', 'rgb(220, 53, 69)')
    })
})

describe(' Button visible after 5 seconds not visible', () => {
    it('passes', () => {
        cy.visit('https://demoqa.com/dynamic-properties')
        //boton no debe existir
        cy.get('button[id=visibleAfter]').should('not.exist')
    })
})

describe(' Button visible after 5 seconds visible', () => {
    it('passes', () => {
        cy.visit('https://demoqa.com/dynamic-properties')
        cy.wait(5000)
        cy.get('button[id=visibleAfter]').should('exist')
    })
})


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})