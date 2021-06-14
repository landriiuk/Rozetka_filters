/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */

module.exports = (on, config) => {
	// `on` is used to hook into various events Cypress emits
	// `config` is the resolved Cypress config
	// console.log(config) // see what all is in here!

	on('task', {
		log(message) {
			console.log(message);
			return null;
		}
	});

	on('task', {
		datenow() {
			return Date.now()
		}
	})

	const { downloadFile } = require('cypress-downloadfile/lib/addPlugin')
	module.exports = (on, config) => {
		on('task', { downloadFile })
	}
	/**
	 * fix for issue "Cypress runs commands twice when no baseUrl defined"
	 */
	// const env = config.env.environment;
	// const url = config.env[env].core_url;

	// // modify config values
	// config.baseUrl = url;

	return config;
}

