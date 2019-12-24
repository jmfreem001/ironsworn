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

    cy.get('[data-testid="characterSubmitResult"]').contains(/created/i);
    /* Hides and disables form once submitted' */

    cy.get('[data-testid="characterNameInput"]').should('not.exist');
    cy.get('[data-testid="createCharacterButton"]').should('be.disabled');

    cy.get('[data-testid="characterDisplay"]')
      .children()
      .contains('Mikus');

    // create bonds or leave some in reserve.
    cy.get('[data-testid="bondsRemaining"]').contains('3');
    cy.get('[data-testid="bondNameInput"]').type('Einsmark');
    cy.get('[data-testid="bondNotesInput"]');
    cy.get('[data-testid="bondSubmitButton"]').click();
    cy.get('[data-testid="bondsRemaining"]').contains('2');

    //Place middle bond in reserve.
    cy.get('[data-testid="bondReserveBox"]').click();
    cy.get('[data-testid="bondSubmitButton"]').click();
    cy.get('[data-testid="bondsRemaining"]').contains('1');
    // create final bond
    cy.get('[data-testid="bondReserveBox"]').should('not.have.attr', 'checked');
    cy.get('[data-testid="bondNameInput"]').type('Mira');
    cy.get('[data-testid="bondNotesInput"]').type(
      'Sister. High Spirited. Has a friendly rivalry with Mikus'
    );
    cy.get('[data-testid="bondSubmitButton"]').click();

    cy.get('[data-testid="bondsSubmitResult"]').contains(/created/i);
    cy.get('[data-testid="bondsRemaining"]').should('not.be.visible');

    // Bonds should be visible on character card.
    cy.get('[data-testid="characterDisplay"]')
      .children()
      .contains(/bonds/i);
    // Create background vow
    cy.get('[data-testid="vowNameInput"]').type('Slay the great wyvern');
    cy.get('[data-testid="vowNotesInput"]').type(
      "As a child Mikus and his sister narrowly escaped the desctruction. Their parent's and the rest of the village did not"
    );
    cy.get('[data-testid="vowRankInput"]').select('epic');
    cy.get('[data-testid="vowMilestonesInput"]').type(
      'Research Great Wyvern and its location'
    );
    cy.get('[data-testid="vowMilestonesSubmit"]').click();
    cy.get('[data-testid="vowMilestonesInput"]').type('Gain allies');
    cy.get('[data-testid="vowMilestonesSubmit"]').click();
    cy.get('[data-testid="vowMilestonesInput"]').type(
      'Procure the Arrow of Annihilation'
    );
    cy.get('[data-testid="vowMilestonesSubmit"]').click();
    cy.get('[data-testid="vowMilestonesInput"]').type(
      "Travel to Wyvern's lair"
    );
    cy.get('[data-testid="vowMilestonesSubmit"]').click();
    cy.get('[data-testid="vowMilestonesInput"]').type(
      'Develop a plan of attack'
    );
    cy.get('[data-testid="vowMilestonesSubmit"]').click();
    cy.get('[data-testid="vowMilestonesInput"]').type('Defeat Wyvern');
    cy.get('[data-testid="vowMilestonesSubmit"]').click();
    cy.get('[data-testid="vowMilestonesList"]').should('be.visible');
    cy.get('[data-testid="vowSubmitButton"]').click();

    //Create inciting incident

    cy.get('[data-testid="vowNameInput"]').type(
      'Find out why the river has gone dry'
    );
    cy.get('[data-testid="vowNotesInput"]').type(
      'The river has run strong for as long as ironlanders have lived in Einsmark, but one day not a drop of water. ' +
        'The villagers are worried because it was the sourve of water and food for the village. Without it life is unsustationable. ' +
        'And with no other settlements nearby this could be the end for many.'
    );
    cy.get('[data-testid="vowRankInput"]').select('dangerous');
    cy.get('[data-testid="vowMilestonesInput"]').type('Travel upstream');
    cy.get('[data-testid="vowMilestonesSubmit"]').click();
    cy.get('[data-testid="vowMilestonesInput"]').type(
      'Restore the flow of the river.'
    );
    cy.get('[data-testid="vowMilestonesSubmit"]').click();
    cy.get('[data-testid="vowMilestonesList"]').should('be.visible');
    cy.get('[data-testid="vowSubmitButton"]').click();

    // vowsshould be visible on character card.
    cy.get('[data-testid="characterDisplay"]')
      .children()
      .contains(/vows/i);
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
