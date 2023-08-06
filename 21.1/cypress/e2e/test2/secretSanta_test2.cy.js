describe("2-SecretSanta_tests", () => {
    beforeEach("Authorization", () => {
        cy.Auth();
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