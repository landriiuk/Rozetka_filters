import BasePage from "./base.page";
class LoginPage extends BasePage {

    emailInput() {
        return cy.get('input[placeholder="Company email"]');
    }

    passwordInput() {
        return cy.get('input[type="password"]');
    }

}

export default LoginPage;