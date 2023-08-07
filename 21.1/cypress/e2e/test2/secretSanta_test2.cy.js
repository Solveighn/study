describe("2-SecretSanta_tests", () => {
    beforeEach("Authorization", () => {
        cy.Auth();
    });
    it("Check boxes", () => {
        cy.checkLink("#root > div.layout-1 > section.layout-1__header-wrapper-fixed > header > section > div > div > a:nth-child(1) > div > div.header-item__text > span", "account/boxes");
    });    
})