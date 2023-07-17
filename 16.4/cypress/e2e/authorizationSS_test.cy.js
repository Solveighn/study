const testData = require("../fixtures/testData.json");

describe("SecretSanta_Authorization_tests", () => {
    beforeEach("Authorization", () => {
    cy.Auth();
}),
    it("Check valid Email", () => {
        testData.emailPositive.forEach((value) => {
            cy.checkEmailPositive_A(value); 
        })       
    }),
    it("Check INvalid Email", () => {
        testData.emailNegative.forEach((value) => {
            cy.checkEmailNegative_A(value); 
        })       
    }),
    it("Check valid Password", () => {
        testData.passwordPositive.forEach((value) => {
            cy.checkPasswordPositive(value); 
        })       
    }),
    it("Check INvalid Password", () => {
        testData.passwordNegative.forEach((value) => {
            cy.checkPasswordNegative(value); 
        })       
    })
})