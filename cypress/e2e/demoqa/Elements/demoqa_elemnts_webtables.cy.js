//arrelgo de objetos con los datos de las personas
let personas = [
    { firstname: "Juan", lastname: "Pérez García", email: "juan.perez@example.com", age: 30, salary: 50000, department: "Ventas" },
    { firstname: "María", lastname: "García López", email: "maria.garcia@example.com", age: 25, salary: 60000, department: "Marketing" },
    { firstname: "José", lastname: "Rodríguez Fernández", email: "jose.rodriguez@example.com", age: 40, salary: 70000, department: "Operaciones" },
    { firstname: "Ana", lastname: "Martínez Sánchez", email: "ana.martinez@example.com", age: 35, salary: 55000, department: "Recursos Humanos" },
    { firstname: "Pedro", lastname: "López Pérez", email: "pedro.lopez@example.com", age: 28, salary: 45000, department: "Ventas" },
    { firstname: "Laura", lastname: "Hernández García", email: "laura.hernandez@example.com", age: 32, salary: 65000, department: "Marketing" },
    { firstname: "Antonio", lastname: "Gómez Rodríguez", email: "antonio.gomez@example.com", age: 50, salary: 80000, department: "Operaciones" },
    { firstname: "Carmen", lastname: "Sánchez Ruiz", email: "carmen.sanchez@example.com", age: 45, salary: 75000, department: "Recursos Humanos" },
    { firstname: "Ricardo", lastname: "Ruiz Fernández", email: "ricardo.ruiz@example.com", age: 31, salary: 60000, department: "Ventas" },
    { firstname: "Isabel", lastname: "Fernández López", email: "isabel.fernandez@example.com", age: 27, salary: 50000, department: "Marketing" },
    { firstname: "Miguel", lastname: "Pérez Sánchez", email: "miguel.perez@example.com", age: 30, salary: 36000, department: "Ventas" },
    { firstname: "Lucía", lastname: "Rodríguez Gómez", email: "lucia.rodriguez@example.com", age: 26, salary: 31000, department: "Marketing" },
    { firstname: "Antonio", lastname: "García López", email: "antonio.garcia@example.com", age: 36, salary: 48000, department: "Recursos Humanos" },
];

describe('añadir 13 filas', () => {
    it('passes', () => {
        cy.visit('https://demoqa.com/webtables')
        for (let i = 0; i < 12; i++) {
            cy.get('button[id=addNewRecordButton]').click()
            cy.get('input[id=firstName]').type(personas[i].firstname)
            cy.get('input[id=lastName]').type(personas[i].lastname)
            cy.get('input[id=userEmail]').type(personas[i].email)
            cy.get('input[id=age]').type(personas[i].age)
            cy.get('input[id=salary]').type(personas[i].salary)
            cy.get('input[id=department]').type(personas[i].department)
            cy.get('button[id=submit]').click()
        }
        cy.get('span.select-wrap > select').select(2)

    })
})

describe('mostrar 20 filas', () => {
    it('passes', () => {
        cy.visit('https://demoqa.com/webtables')
        cy.get('span.select-wrap > select').select(2)
    })
})


describe('probar el filtro', () => {
    it('passes', () => {
        cy.visit('https://demoqa.com/webtables')
        for (let i = 0; i < 5; i++) {
            cy.get('button[id=addNewRecordButton]').click()
            cy.get('input[id=firstName]').type(personas[i].firstname)
            cy.get('input[id=lastName]').type(personas[i].lastname)
            cy.get('input[id=userEmail]').type(personas[i].email)
            cy.get('input[id=age]').type(personas[i].age)
            cy.get('input[id=salary]').type(personas[i].salary)
            cy.get('input[id=department]').type(personas[i].department)
            cy.get('button[id=submit]').click()

        }
        cy.get('input[id=searchBox]').type('Juan')
        cy.get('div').contains(personas[0].firstname)
    })
})

describe('botones previous y next', () => {
    it('passes', () => {
        cy.visit('https://demoqa.com/webtables')
        for (let i = 0; i < 12; i++) {
            cy.get('button[id=addNewRecordButton]').click()
            cy.get('input[id=firstName]').type(personas[i].firstname)
            cy.get('input[id=lastName]').type(personas[i].lastname)
            cy.get('input[id=userEmail]').type(personas[i].email)
            cy.get('input[id=age]').type(personas[i].age)
            cy.get('input[id=salary]').type(personas[i].salary)
            cy.get('input[id=department]').type(personas[i].department)
            cy.get('button[id=submit]').click()
        }
        cy.get('span.select-wrap > select').select(1)
        cy.get('button').contains('Next').click()
        cy.wait(3000)
        cy.get('button').contains('Previous').click()

    })
})


Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})