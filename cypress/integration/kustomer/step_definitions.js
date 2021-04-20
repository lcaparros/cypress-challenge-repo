import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
 
const url = 'https://kustomer.com'

When('Accessing Kustomer', () => {
  cy.visit(url)
})

Then('Header link is https://www.kustomer.com/', () => {
  cy.get('a.custom-logo-link').should('have.attr', 'href', 'https://www.kustomer.com/')
})