describe('Following tests are POC for test skipping functionality.', function (): void {
  beforeEach(function (): void {
    cy.visit('https://altavista.com');
    cy.get('button[name="agree"]').click();
  });

  it('Go on Altavista.com and find element contains text', (): void => {
    cy.log('This test will fail:');
    cy.contains('This text is not here...').click();
  });

  it("Let's do altavista magic", function (): void {
    cy.log(`This test will pass and isn't skipped:`);
    cy.get('#yschsp').type('3yourmind{enter}');
    cy.url().should('contain', '3yourmind');
  });
});
