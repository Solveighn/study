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
Cypress.Commands.add('checkLink', (selector,text) => {
    cy.get(selector).should("be.visible").click();
    cy.url().should("include", text);
});

Cypress.Commands.add('Auth', () => {
    cy.visit("/");
    cy.get("#root > div.layout-1 > section.layout-1__header-wrapper-fixed > header > section > div > a > div > div > span").click();
    cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__main > div:nth-child(3) > input").type("lisenysh1@yandex.ru");
    cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__main > div:nth-child(4) > input").type("123456");
    cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__button > div").click();
});

Cypress.Commands.add('checkTitle', (title, text) => {
    cy.title().should("include", text);
})