// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

Cypress.on('uncaught:exception', (err, runnable) => {
	// returning false here prevents Cypress from
	// failing the test
	return false
});


//workaround for XHR requests issue 
// Cypress.on('window:load', (window) => {
// 	// Get webApp iframe
// 	const docIframe = window.parent.document.getElementById("Your App: 'itg.js'");
// 	const webAppWindow = docIframe.contentWindow;

// 	// Get current cypress server thats started
// 	const server = Cypress.state().server;
// 	if (server) {
// 		// bind server to our webApp window
// 		server.bindTo(webAppWindow);
// 	}
// });
