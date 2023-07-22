const selector = require("../fixtures/selectors.json");

export class LoginPage {
    elements = {
        loginField: () => cy.get(selector.login.emailField),
        passwordField: () => cy.get(selector.login.passwordField),
        loginButton: () => cy.get(selector.login.loginButton)
    };
    login(email, password) {
        this.elements.loginField().type(email);
        this.elements.passwordField().type(password);
        this.elements.loginButton().click()
    }
};

export class ChangePasswordPage {
    elements = {
        newPasswordField: () => cy.get(selector.changePassword.newPasswordField),
        confirmPasswordField: () => cy.get(selector.changePassword.confirmPasswordField),
        saveChangesButton: () => cy.get(selector.changePassword.saveChangesButton)
    };
    change(password) {
        this.elements.newPasswordField().type(password),
        this.elements.confirmPasswordField().type(password),
        this.elements.saveChangesButton().click()
    }
};
export class NewPasswordPage {
    elements = {
        passwordField: () => cy.get(selector.login.passwordField),
        loginButton: () => cy.get(selector.login.loginButton)
    };
    useNew(password) {
        this.elements.passwordField().type(password);
        this.elements.loginButton().click()   
    }
 }