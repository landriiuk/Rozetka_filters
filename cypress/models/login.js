import LoginPage from '../page-objects/login.page.js';
import BasePage from '../page-objects/base.page.js';

const loginPage = new LoginPage();
const basePage = new BasePage();

export function performLogin(usedLogin, usedPassword) {
    navigateToLogin();
    enterLogin(usedLogin, usedPassword);
}

function enterLogin(usedLogin, usedPassword) {
  //  cy.intercept('/api/v1/auth/sign_in').as('login')
    loginPage.emailInput().click().clear().type(usedLogin);
    loginPage.passwordInput().clear().type(usedPassword);
    basePage.button('Log in').click();
  //  cy.wait("@login", { timeout: 25000 });
}