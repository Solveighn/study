describe("SecretSanta_tests", () => {
    beforeEach("Authorization", () => {
        cy.Auth();
    });
    it("Check boxes", () => {
        cy.checkLink("#root > div.layout-1 > section.layout-1__header-wrapper-fixed > header > section > div > div > a:nth-child(1) > div > div.header-item__text > span", "account/boxes");
        cy.checkTitle("head > title", "Тайный Санта | мои коробки");
    });
    it("Check CreateBox", () => {
        cy.checkLink("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.home-page-buttons > a:nth-child(1)", "box/new");
        cy.checkTitle("head > title", "Тайный Санта | создать коробку");
    });
    it("Check FastToss", () => {
        cy.checkLink("#root > div.layout-1 > section.layout-1__main-wrapper > div.layout-1__main > section > div > section > div > div.home-page-buttons > a:nth-child(2)", "randomizer");
        cy.checkTitle("head > title", "Тайный Санта | быстрая жеребьевка");
    });   
    it("Check Account", () => {
        cy.checkLink("#root > div.layout-1 > section.layout-1__header-wrapper-fixed > header > section > div > div > a:nth-child(3)", "account");
        cy.checkTitle("head > title", "Тайный Санта | настройки профиля");
    });       
})