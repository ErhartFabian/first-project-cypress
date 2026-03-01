describe('Abrir nueva pestaña', () => {
  it('abre en la misma pestaña para validar', () => {
    cy.visit('https://demoqa.com/browser-windows')

    cy.window().then((win) => {
      cy.stub(win, 'open').as('windowOpen')
    })

    cy.get('#tabButton').click()

    cy.get('@windowOpen').should('have.been.calledOnce')

    cy.get('@windowOpen').then((stub) => {
      const rawUrl = stub.getCall(0).args[0]   // ej: "/sample"
      const absoluteUrl = new URL(rawUrl, 'https://demoqa.com').toString()
      cy.visit(absoluteUrl)
    })

    cy.get('#sampleHeading').should('have.text', 'This is a sample page')
  })
})

describe('Abrir nueva ventana', () => {
  it('abre en la misma ventana para validar', () => {
    cy.visit('https://demoqa.com/browser-windows')
    cy.window().then((win) => {
      cy.stub(win, 'open').as('windowOpen')
    })
    cy.get('#windowButton').click()
    cy.get('@windowOpen').should('have.been.calledOnce')
    cy.get('@windowOpen').then((stub) => {
      const rawUrl = stub.getCall(0).args[0]   // ej: "/sample"
      const absoluteUrl = new URL(rawUrl, 'https://demoqa.com').toString()
      cy.visit(absoluteUrl)
    })
    cy.get('#sampleHeading').should('have.text', 'This is a sample page')
  })
})

describe('Abrir nueva ventana con mensaje', () => {
  it('valida contenido cuando abre about:blank', () => {
    cy.visit('https://demoqa.com/browser-windows')

    cy.window().then((win) => {
      const writeStub = cy.stub().as('documentWrite')

      const fakeWindow = {
        document: {
          write: writeStub
        }
      }

      cy.stub(win, 'open')
        .callsFake(() => fakeWindow)   // sin forzar url exacta aquí
        .as('windowOpen')
    })

    cy.get('#messageWindowButton').click()

    cy.get('@windowOpen').should('have.been.calledOnce')
    cy.get('@documentWrite')
      .should('have.been.calledOnce')
      .and('have.been.calledWithMatch', 'Knowledge increases by sharing')
  })
})

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})