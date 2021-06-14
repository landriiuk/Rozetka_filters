const { performLogin } = require("../../models/login");

describe('Login Tests', function () {

	let envVariables = Cypress.env(Cypress.env('environment'));

	beforeEach(() => {
		cy.visit(envVariables.url);
		cy.url().should('include', envVariables.url);
	});

	it('Successful login via ui', () => {
		performLogin(envVariables.user.login, envVariables.user.password);
	});
});