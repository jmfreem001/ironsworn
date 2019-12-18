describe('Creating a log entry', () => {
  beforeEach(() => {
    cy.seedAndVisit();
    // cy.get('[data-testid="campaignPageLink"]').click();
    cy.wait(500);
    cy.get('[data-testid="campaignPageLink"]').click();
  });
  it('visits the campaign page', () => {
    cy.url().should('include', '/campaign');
  });
  it('Displays entered log entry', () => {
    // cy.seedAndVisit();
    // cy.visit('/campaign');
    // cy.get('[data-testid="campaignPageLink"]').click();

    cy.get('[data-testid="logText"]').type('New entry');
    cy.get('[data-testid="submitEntryButton"]').click();
    cy.get('[data-testid="logText"]').should('have.value', '');
    cy.contains('New entry');
    cy.get('[data-testid="logText"]').type('Another entry');
    cy.get('[data-testid="submitEntryButton"]').click();
    cy.get('[data-testid="logText"]').type('Yet another entry');
    cy.get('[data-testid="submitEntryButton"]').click();
  });
});
