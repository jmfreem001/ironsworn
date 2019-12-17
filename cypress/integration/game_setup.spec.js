/* eslint-disable no-undef */
describe('Setup a new game entry', () => {
  beforeEach(() => {
    cy.seedAndVisit();
    cy.get('[data-testid="setupPageLink"]').click();
  });
  it('visits the setup page', () => {
    cy.get('[data-testid="pageHeader"]').should('be.visible');
  });
  it.only('create a character', () => {
    // Character create button
    cy.get('[data-testid="createCharacterButton"]').click();
    cy.get('[data-testid="characterNameInput"]').type('Mikus');
    cy.get('[data-testid="characterRoleInput"]').type(
      'Gruff Hunter of Einsmark'
    );
    cy.get('[data-testid="primaryStatInput"]')
      .children()
      .children()
      .check('edge');
    cy.get('[data-testid="firstSecondaryStatInput"]')
      .children()
      .children()
      .check('heart');
    cy.get('[data-testid="secondSecondaryStatInput"]')
      .children()
      .children()
      .check('wits');

    cy.get('[data-testid="characterSubmitButton"]').click();

    cy.get('[data-testid="characterSubmitResult"]').contains('successfully');

    //stats

    //vows 1 background vow at extreme or epic then inciting incident

    // bonds (up to 3)

    // character notes, A paragraph filling in some info on the character
    // motivations, interests, skills, personality, and weaknesses

    //character creation form
  });
  it('create a fully randomized character', () => {
    // Character create button
    cy.get('[data-testid="createCharacterButton"]').click();

    //character creation form
  });

  // Setting create button
  it('create setting', () => {
    cy.get('[data-testid="createSettingButton"]').click();
    //setting creation form
  });
  // Forms for creating each item.

  // Submit and Get started
});
