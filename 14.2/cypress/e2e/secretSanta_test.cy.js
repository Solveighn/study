describe("Check Header", () => {
    it("first test", () => {
        cy.visit("https://staging.lpitko.ru/");
        cy.get("head > title").should("have.text", "Тайный Санта | бесплатный онлайн организатор жеребьевки")
    })
})