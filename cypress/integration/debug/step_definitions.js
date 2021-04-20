import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
 
const url = 'https://login.yahoo.com/account/create'
Given('Yahoo register form', () => {
  cy.visit(url)
})

When('Submission button is clicked', () => {
    cy.get('#reg-submit-button').click();
})

Then('Password error is shown with message: Este dato es obligatorio.', () => {
    cy.get('#reg-error-password').should('have.text', 'Este dato es obligatorio.');
})
