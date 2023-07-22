import {faker} from "@faker-js/faker";
import { LoginPage } from "../pages/Pages";
import {ChangePasswordPage} from "../pages/Pages";
import { NewPasswordPage } from "../pages/Pages";
const selector = require("../fixtures/selectors.json");
const logData = require("../fixtures/loginData.json");

describe("user cannot login with old password", () => {
    let loginPage = new LoginPage();
    let changePasswordPage = new ChangePasswordPage();
    let newPasswordPage = new NewPasswordPage();
    let newPassword = faker.internet.password(8); //8 characters

    beforeEach("Authorization", () => {
        cy.Auth();
    }),

    it("login with old password + change password", () => {
        
        loginPage.login(logData.email, logData.oldPassword);
        cy.contains("Коробки").should("exist");

        cy.contains("Анастасия").click({force: true});
        changePasswordPage.change(newPassword);
    }),    

    it("login with wrong password", () => {

        loginPage.login(logData.email, logData.oldPassword);
        cy.contains("Неверное имя пользователя или пароль").should("exist");

        cy.get(selector.login.passwordField).clear();
        newPasswordPage.useNew(newPassword);
    
        cy.contains("Анастасия").click({force: true});
        changePasswordPage.change(logData.oldPassword);
    })

})