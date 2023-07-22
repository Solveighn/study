import {faker} from "@faker-js/faker";
const logData = require("../fixtures/loginData.json");

describe("user cannot login with old password", () => {
    
        let newPassword = faker.internet.password(8, true); //8 characters
        beforeEach("Authorization", () => {
            cy.Auth();
        }),

        it("login with old password + change password", () => {

        cy.toLogin(logData.email, logData.oldPassword);
        cy.contains("Коробки").should("exist");

        cy.contains("Анастасия").click({force: true});
        cy.toChangePassword(newPassword);
        })

        it("login with wrong password", () => {

        cy.toLogin(logData.email, logData.oldPassword);
        cy.contains("Неверное имя пользователя или пароль").should("exist");

        cy.toLoginNewPassword(newPassword);
    
        cy.contains("Анастасия").click({force: true});
        cy.toChangePassword(logData.oldPassword);
    })
})