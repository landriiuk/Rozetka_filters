describe('API TEST', function () {

	let envVariables = Cypress.env();

	//context('Unauthorized', () => {

	// 	it('[POST] 401 /user', () => {
	// 		cy.request({
	// 			method: 'POST',
	// 			url: envVariables.api_url + 'user',
	// 			failOnStatusCode: false
	// 		}).then((response) => {
	// 			expect(response.status).to.eq(401);
	// 			expect(response.body).to.have.property('message', 'Missing authentication');
	// 		});
	// 	});
	// });

	// context('Authorized', () => {

	// 	it('[POST] 200 /login', () => {
	// 		cy.request({
	// 			method: 'POST',
	// 			url: envVariables.api_url + 'login',
	// 			body: {
	// 				email: envVariables.user.login,
	// 				password: envVariables.user.password,
	// 			}
	// 		}).then((response) => {
	// 			expect(response.status).to.eq(200);
	// 			expect(response.body).to.have.deep.property('result.user').to.have.property('token');
	// 			this.user = response.body.result.user;
	// 		});
	// 	});
	// });
});