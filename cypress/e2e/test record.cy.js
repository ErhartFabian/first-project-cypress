

Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

/* ==== Test Created with Cypress Studio ==== */
it('redcor', function() {
  /* ==== Generated with Cypress Studio ==== */
  cy.visit('https://demoqa.com/automation-practice-form');
  cy.get('#firstName').clear('p');
  cy.get('#firstName').type('pepe');
  cy.get('#lastName').clear('h');
  cy.get('#lastName').type('hernandez');
  cy.get('#userEmail').clear('p');
  cy.get('#userEmail').type('pepe@gmail.com');
  cy.get('#genterWrapper > .col-md-9 > :nth-child(2) > .custom-control-label').click();
  cy.get('#gender-radio-2').check();
  cy.get('#userNumber').clear('7');
  cy.get('#userNumber').type('7751342301');
  cy.get('#dateOfBirthInput').click();
  cy.get('.react-datepicker__month-select').select('5');
  cy.get('.react-datepicker__year-select').select('2022');
  cy.get('.react-datepicker__day--031').click();
  cy.get('.subjects-auto-complete__value-container').click();
  cy.get('#subjectsInput').type('math');
  cy.get('#react-select-2-option-0').click();
  cy.get('#hobbiesWrapper > .col-md-9 > :nth-child(2) > .custom-control-label').click();
  cy.get('#hobbies-checkbox-2').check();
  cy.get('#currentAddress').click();
  cy.get('#state').click();
  cy.get('#react-select-3-option-0').click();
  cy.get('#city').click();
  cy.get('#react-select-4-option-0').click();
  cy.get('#city').click();
  cy.get('#userForm').click();
  cy.get('#submit').click();
  /* ==== End Cypress Studio ==== */
});

