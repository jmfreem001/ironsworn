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
    cy.get('[data-testid="characterNotesInput"]').type(
      "Mikus is tough guy and is afraid of snakes. Spends a lot of time working with animals and doesn't always get along with humans."
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

    cy.get('[data-testid="characterDisplay"]'.contains('Mikus'));

    //vows 1 background vow at extreme or epic then inciting incident
    // Vows input fields.
    // bonds (up to 3)
    //Get bonds input fields
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
