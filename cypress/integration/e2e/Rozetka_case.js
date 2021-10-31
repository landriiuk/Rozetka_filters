describe('AQA intro', () => {

	let envVariables = Cypress.env(Cypress.env('environment'));

	before('Navigate to the website and verify url', () => {
		cy.visit(envVariables.url);
		cy.url().should('include', envVariables.url);
	});

	it('Apply filters and verify if the filters are working correctly', () => {

		cy.get(`.menu-categories__link:contains(Ноутбуки та комп’ютери)`).eq(1).should('exist').click();
		cy.wait(2000);
		cy.url().should('include', '/computers-notebooks');

		cy.get('[title="Ноутбуки"]').eq(1).click();
		cy.url().should('include', '/notebooks');
		cy.wait(2000);

		cy.get('[for="Acer"]').should('contain', 'Acer').click({ force: true });
		cy.wait(2000);

		cy.get('[formcontrolname="min"]').clear().type(20000, '{enter}');
		cy.get('[type="submit"]').eq(0).click();
		cy.wait(2000);

		cy.get('[class="goods-tile__title"]').each(($elements) => {
			expect($elements.text()).to.contain('Acer');
		});

		cy.get('[class="goods-tile__price-value"]').each(($elements) => {
			let elems = $elements.text();
			let newElements = elems.replace( /\s/g, '');
			expect(parseInt(newElements)).to.be.greaterThan(20000);
		});
	});
});