Cypress.Commands.add("Auth", () => {
    cy.visit("/");
    cy.contains("Вход и регистрация").click({force: true});
});

const selector = require("../fixtures/selectors.json");

Cypress.Commands.add("toLogin", (email, oldPassword) => {
    cy.get(selector.login.emailField).type(email);
    cy.get(selector.login.passwordField).type(oldPassword);
    cy.get(selector.login.loginButton).click();
});

Cypress.Commands.add("toChangePassword", (newPassword) => {
    cy.get(selector.changePassword.newPasswordField).type(newPassword);
    cy.get(selector.changePassword.confirmPasswordField).type(newPassword);
    cy.get(selector.changePassword.saveChangesButton).click();
});

Cypress.Commands.add("toLoginNewPassword", (newPassword) => {
    cy.get(selector.login.passwordField).clear();
    cy.get(selector.login.passwordField).type(newPassword);
    cy.get(selector.login.loginButton).click();
})