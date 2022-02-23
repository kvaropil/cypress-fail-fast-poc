describe('Following tests are POC for test skipping functionality.', function (): void {
  beforeEach(function (): void {
    cy.visit('https://google.com');
    cy.get('#L2AGLb').click();
  });

  afterEach(function () {
    if (this.currentTest.state === 'failed') {
      // @ts-ignore
      Cypress.runner.stop();
    }
  });

  it('Go on Google.com and find element contains text', (): void => {
    cy.log('This test will fail:');
    cy.contains('This text is not here...').click();
  });

  it("Let's google something", function (): void {
    cy.log('This test would pass, but is skipped:');
    cy.get('[name="q"]').type('3yourmind{enter}');
    cy.url().should('contain', '3yourmind');
  });
});
