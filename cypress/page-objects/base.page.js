class BasePage {

    currentUrl() {
        return cy.url();
    }

    getTitle() {
        return cy.title();
    }

    button(value) {
        return cy.get(`button:contains(${value})`);
    }

}
export default BasePage;