
const persona = {
    first_name: 'María',
    last_name: 'González',
    email: 'maria.gonzalez@example.com',
    mobile_number: '7751342301',
    subjects: ['Maths', 'Biology', 'chemistry'],
    hobbies: ['reading', 'Music', 'sports'],
    file: 'Archivo de Carga.png',
    current_address: '456 Oak St.',
    state: 'NCR',
    city: 'Gurgaon'
}

// describe('Llenar todos los campos de la forma', () => {
//     it('passes', () => {
//         cy.visit('https://demoqa.com/automation-practice-form')
//         cy.get('input[id=firstName]').type(persona.first_name)
//         cy.get('input[id=lastName]').type(persona.last_name)
//         cy.get('input[id=userEmail]').type(persona.email)
//         cy.get('input[id=gender-radio-2]').click({ force: true })
//         cy.get('input[id=userNumber]').type(persona.mobile_number)
//         cy.get('input[id=dateOfBirthInput]').click()
//         cy.get('#dateOfBirthInput').click();
//         cy.get('.react-datepicker__month-select').select('3');
//         cy.get('.react-datepicker__year-select').select('1999');
//         cy.get('.react-datepicker__day--024').click();
//         cy.get('.subjects-auto-complete__value-container').click();
//         cy.get('#subjectsInput').type(persona.subjects[0]);
//         cy.get('#react-select-2-option-0').click();
//         cy.get('#subjectsInput').type(persona.subjects[1]);
//         cy.get('#react-select-2-option-0').click();
//         cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(3) > .custom-control-label').click({ force: true });
//         cy.get('#hobbies-checkbox-3').check();
//         cy.get('input[id=uploadPicture]').selectFile(persona.file)
//         cy.get('textarea[id=currentAddress]').type(persona.current_address)
//         cy.get('#state').click();
//         cy.get('#react-select-3-option-0').click();
//         cy.get('#city').click();
//         cy.get('#react-select-4-option-1').click();
//         cy.get('#userForm').click();
//         cy.get('#submit').click({ force: true });

//         //confirmacion de los datos ingresados
//         cy.get('tbody > :nth-child(1) > :nth-child(2)').should('contain', persona.first_name + ' ' + persona.last_name)
//         cy.get('tbody > :nth-child(2) > :nth-child(2)').should('contain', persona.email)
//         cy.get('tbody > :nth-child(3) > :nth-child(2)').should('contain', 'Female')
//         cy.get('tbody > :nth-child(4) > :nth-child(2)').should('contain', persona.mobile_number)
//         cy.get('tbody > :nth-child(5) > :nth-child(2)').should('contain', '24 April,1999')
//         cy.get('tbody > :nth-child(6) > :nth-child(2)').should('contain', persona.subjects[0] + ', ' + persona.subjects[1])
//         cy.get('tbody > :nth-child(7) > :nth-child(2)').should('contain', persona.hobbies[1])
//         cy.get('tbody > :nth-child(8) > :nth-child(2)').should('contain', persona.file)
//         cy.get('tbody > :nth-child(9) > :nth-child(2)').should('contain', persona.current_address)
//         cy.get('tbody > :nth-child(10) > :nth-child(2)').should('contain', persona.state + ' ' + persona.city)
//     })
// })




// describe('Comprobar todos los campos obligatorios', () => {
//     it('passes', () => {
//         cy.visit('https://demoqa.com/automation-practice-form')
//         cy.get('input[id=firstName]').should(have.attr('required', 'required'))


//     })
// })




Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})