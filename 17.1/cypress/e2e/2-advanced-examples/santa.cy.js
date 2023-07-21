import {faker} from "@faker-js/faker";

describe("santa login - UI", () => {
    it("user cannot login with old password", () => {
        let oldPassword = "123456";
        let newPassword = faker.internet.password(8); //8 characters

        cy.visit("/");
        cy.contains("Вход и регистрация").click({force: true});
        cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__main > div:nth-child(3) > input").type("lisenysh1@yandex.ru");
        cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__main > div:nth-child(4) > input").type(oldPassword);
        cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__button > div").click();
        cy.contains("Коробки").should("exist");

        cy.contains("Анастасия").click({force: true});
        cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > div.form-page__main > div:nth-child(4) > div.form-page-group__main > div.layout-column-start > div:nth-child(1) > input").type(newPassword);
        cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > div.form-page__main > div:nth-child(4) > div.form-page-group__main > div.layout-column-start > div:nth-child(2) > input").type(newPassword);
        cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > div.form-page__main > div:nth-child(4) > div.form-page-group__main > div.layout-column-start > div.layout-row-end > div").click();

        cy.contains("Выйти с сайта").click();
        cy.contains("Вход и регистрация").click({force: true});
        cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__main > div:nth-child(3) > input").type("lisenysh1@yandex.ru");
        cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__main > div:nth-child(4) > input").type(oldPassword);
        cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__button > div").click();
        cy.contains("Неверное имя пользователя или пароль").should("exist");

        cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__main > div:nth-child(4) > input").clear();
        cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__main > div:nth-child(4) > input").type(newPassword);
        cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__button > div").click();
    
        cy.contains("Анастасия").click({force: true});
        cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > div.form-page__main > div:nth-child(4) > div.form-page-group__main > div.layout-column-start > div:nth-child(1) > input").type(oldPassword);
        cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > div.form-page__main > div:nth-child(4) > div.form-page-group__main > div.layout-column-start > div:nth-child(2) > input").type(oldPassword);
        cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > div.form-page__main > div:nth-child(4) > div.form-page-group__main > div.layout-column-start > div.layout-row-end > div").click();


    })
})