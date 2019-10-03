/* INSTRUCTIONS
 * 1.  Open the Cypress GUI: yarn cypress:open
 * 2.  Click debug.spec.js to run the spec.
 * 3.  You'll see the assertion fail with this message:
 *       expected <div#reg-error-password.oneid-error-message> to have text This is required., but the text was This is required.
 * 4.  Hmm...puzzling, right?
 * 5.  Debug the problem.
 * 6.  Implement a fix or a workaround to get the assertion to pass.
 * 7.  Feel free to ask the internet for help.
 * 8.  The Cypress docs are also a good resource: https://docs.cypress.io
 * 9.  You can uncomment cy.pause() to poke around before it fails.
*/

describe('Debug Spec', function() {
  it('should verify password is required', function() {
    cy.visit('https://login.yahoo.com/account/create');
    cy.get('#reg-submit-button').click();
    // cy.pause();
    cy.get('#reg-error-password').should('have.text', 'This is required.');
  });
});
