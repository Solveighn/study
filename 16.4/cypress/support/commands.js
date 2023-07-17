// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add("Register", () => {
    cy.visit("/");
    cy.get("#root > div.layout-1 > section.layout-1__header-wrapper-fixed > header > section > div > a > div").click();
    cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__header > span.form-auth__header__subtitle.txt-secondary--med.txt.txt--grey > a > span").click();
});

Cypress.Commands.add("Auth", () => {
    cy.visit("/");
    cy.get("#root > div.layout-1 > section.layout-1__header-wrapper-fixed > header > section > div > a > div").click();
});  

Cypress.Commands.add("checkNamePositive_R", (value) => {
    cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__main > div > div:nth-child(3) > input").clear();
    cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__main > div > div:nth-child(3) > input").type(value);
    cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__button > div").click();
    cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__main > div > div:nth-child(3) > div.frm-wrapper__top > span").should("not.exist");
});

Cypress.Commands.add("checkNameNegative_R", (value) => {
    
    cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__main > div > div:nth-child(3) > input").clear();
    if (value.a.length > 0) {
    cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__main > div > div:nth-child(3) > input").type(value.a);
    } else {
        cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__main > div > div:nth-child(3) > input").type("44");
        cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__main > div > div:nth-child(3) > input").clear();   
    }
    cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__button > div").click();
    cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__main > div > div:nth-child(3) > div.frm-wrapper__top > span").should("exist");
    cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__main > div > div:nth-child(3) > div.frm-wrapper__top > span").should("contain", value.b);
});

Cypress.Commands.add("checkEmailPositive_R", (value) => {
    cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__main > div > div:nth-child(4) > input").clear();
    cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__main > div > div:nth-child(4) > input").type(value);
    cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__button > div").click();
    cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__main > div > div:nth-child(4) > div > span").should("not.exist");
});

Cypress.Commands.add("checkEmailNegative_R", (value) => {
    
    cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__main > div > div:nth-child(4) > input").clear();
    if (value.a.length > 0) {
    cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__main > div > div:nth-child(4) > input").type(value.a);
    } else {
        cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__main > div > div:nth-child(4) > input").type("44");
        cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__main > div > div:nth-child(4) > input").clear();   
    }
    cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__button > div").click();
    cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__main > div > div:nth-child(4) > div > span").should("exist");
    cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__main > div > div:nth-child(4) > div > span").should("contain", value.b);
});

Cypress.Commands.add("checkEmailPositive_A", (value) => {
    cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__main > div:nth-child(3) > input").clear();
    cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__main > div:nth-child(3) > input").type(value);
    cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__button > div").click();
    cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__main > div:nth-child(3) > div.frm-wrapper__top > span").should("not.exist");
});

Cypress.Commands.add("checkEmailNegative_A", (value) => {
    
    cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__main > div:nth-child(3) > input").clear();
    if (value.a.length > 0) {
    cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__main > div:nth-child(3) > input").type(value.a);
    } else {
        cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__main > div:nth-child(3) > input").type("44");
        cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__main > div:nth-child(3) > input").clear();   
    }
    cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__button > div").click();
    cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__main > div:nth-child(3) > div.frm-wrapper__top > span").should("exist");
    cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__main > div:nth-child(3) > div.frm-wrapper__top > span").should("contain", value.b);
});

Cypress.Commands.add("checkPasswordPositive", (value) => {
    cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__main > div:nth-child(3) > input").clear(); 
    cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__main > div:nth-child(3) > input").type("lisenysh1@yandex.ru"); 
    cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__main > div:nth-child(4) > input").clear();
    cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__main > div:nth-child(4) > input").type(value);
    cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__button > div").click();
    cy.get("#root > div.layout-1 > section.layout-1__header-wrapper-fixed > header > section > div > div > a:nth-child(3) > div > div.header-item__text > span", {timeout: 4000}).should("contain", "Анастасия")
})

Cypress.Commands.add("checkPasswordNegative", (value) => {
    cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__main > div:nth-child(3) > input").clear(); 
    cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__main > div:nth-child(3) > input").type("lisenysh1@yandex.ru"); 
    cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__main > div:nth-child(4) > input").clear();
    if (value.length > 0) {
        cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__main > div:nth-child(4) > input").type(value);
        cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__button > div").click();
        cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__error > div > span").should("contain", "Неверное имя пользователя или пароль")
    } else {
        cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__button > div").click();
        cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__main > div:nth-child(4) > div.frm-wrapper__top > span").should("contain", "Обязательное поле");
        cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__error > div > span").should("contain", "В форме допущены ошибки")
    }
})