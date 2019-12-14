/* eslint-disable no-undef */
describe('Creating a log entry', () => {
  it('Displays entered log entry', () => {
    cy.visit('http://localhost:3000/campaign');
    cy.get('[data-testid="logText"]').type('New entry');
    cy.get('[data-testid="submitEntryButton"]').click();
    cy.get('[data-testid="logText"]').should('have.value', '');
    cy.contains('New entry');
  });
});
