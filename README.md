# Usage

##### Before running the test for the first time, install node.js(only once).
1. Install dependencies:
```bash
npm install 
```

2. Run the tests:
```bash
npm run test:chrome
```

Passing `:headless` will force the browser to be hidden.

3. Open the cypress test editor:
```bash
npm run test:debug
```

## Technologies
Project is created with:
* Cypress version: ^7.4.0
* Mocha : ^8.2.1
* Page Object pattern

## About Cypress
- JavaScript End to End Testing Framework.
- Cypress has been made specifically for developers and QA engineers, to help them get more done.
- Cypress benefits from our amazing open source community - and our tools are evolving better and faster than if we worked on them alone.
- Cypress takes snapshots as your tests run. Simply hover over commands in the Command Log to see exactly what happened at each step.
- Debug directly from familiar tools like Chrome DevTools. Our readable errors and stack traces make debugging lightning fast.
- Cypress automatically reloads whenever you make changes to your tests.
- Cypress automatically waits for commands and assertions before moving on. No more async hell.

## Directory structure  
* fixtures - contains test data.
* integration -  contains integration test files.
* methods - takes the selectors from the page object and uses them to create methods such as login, create something new, edit something, delete something etc.
* page-object folder- contains the page selectors.
* plugins/index.js - import external plugins for Cypress or add code that runs in Node instead of browser.
* If screenshots were taken via the cy.screenshot() command or automatically when a test fails, the screenshots are stored in the screenshotsFolder which is set to `cypress/screenshots` by default.
* support
    - commands.js - allows to create custom commands and overwriting existing commands. 
    - index.js - allows to put reusable behavior such as custom commands or global overrides that you want applied and available to all of your spec files.
* cypress.json - the first time you open Cypress Test Runner, it creates the `cypress.json` configuration file. This JSON file is used to store any configuration values you supply.