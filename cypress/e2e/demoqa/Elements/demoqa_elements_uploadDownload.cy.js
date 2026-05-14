describe('Upload & Download', () => {
    const baseUrl = 'https://demoqa.com/upload-download'

    // Test de descarga mejorado
    describe('Download', () => {
        it('debería descargar archivo correctamente', () => {
            cy.visit(baseUrl)
            
            // Verificar que el botón existe y tiene href
            cy.get('a#downloadButton')
                .should('exist')
                .should('have.attr', 'href')
                .invoke('attr', 'href')
                .then(href => {
                    expect(href).to.include('.pdf') // O la extensión esperada
                })
            
            // Hacer click para descargar
            cy.get('a#downloadButton').click()
            
            // Opcional: verificar que archivo se descargó (requiere plugin)
            cy.readFile('cypress/downloads/nombreArchivo.pdf').should('exist')
        })
    })

    // Test de carga mejorado
    describe('Upload', () => {
        it('debería cargar archivo correctamente', () => {
            cy.visit(baseUrl)
            
            // Usar fixture con ruta correcta
            cy.get('input#uploadFile')
                .selectFile('cypress/fixtures/Archivo de Carga.png')
            
            // Esperar y validar respuesta
            cy.get('p')
                .contains('Archivo de Carga.png')
                .should('exist')
                .and('be.visible')
            
            // Validar que no hay errores
            cy.get('.alert-danger').should('not.exist')
        })

        it('debería rechazar archivo inválido', () => {
            cy.visit(baseUrl)
            cy.get('input#uploadFile')
                .selectFile('cypress/fixtures/example.json')
            
            // Validar comportamiento esperado
            cy.get('p').should('not.contain', 'example.json')
        })
    })
})

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
})