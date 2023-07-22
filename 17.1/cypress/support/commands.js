Cypress.Commands.add("Auth", () => {
    cy.visit("/");
    cy.contains("Вход и регистрация").click({force: true});
});