describe("SecretSanta_tests", () => {
    beforeEach("Authorization", () => {
        cy.visit("/");
        cy.get("#root > div.layout-1 > section.layout-1__header-wrapper-fixed > header > section > div > a > div > div > span").click();
        cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__main > div:nth-child(3) > input").type("lisenysh1@yandex.ru");
        cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__main > div:nth-child(4) > input").type("123456");
        cy.get("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.form-auth__button > div").click();
    });
    it("Check boxes", () => {
        cy.checkLink("#root > div.layout-1 > section.layout-1__header-wrapper-fixed > header > section > div > div > a:nth-child(1) > div > div.header-item__text > span", "account/boxes");
    });
    it("Check CreateBox", () => {
        cy.checkLink("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.home-page-buttons > a:nth-child(1)", "box/new");
    });
    it("Check FastToss", () => {
        cy.checkLink("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.home-page-buttons > a:nth-child(2)", "randomizer");
    });   
    it("Check Account", () => {
        cy.checkLink("#root > div.layout-1 > section.layout-1__header-wrapper-fixed > header > section > div > div > a:nth-child(3)", "account");
    });       
})