const testData = require("../fixtures/testData.json");

describe("SecretSanta_Registration_tests", () => {
    beforeEach("Registration", () => {
    cy.Register();
}),
    it("Check valid Name", () => {
        testData.namePositive.forEach((value) => {
            cy.checkNamePositive_R(value); 
        })           
    }),
    it("Check INvalid Name", () => {
        testData.nameNegative.forEach((value) => {
            cy.checkNameNegative_R(value); 
        })    
    }),
    it("Check valid Email", () => {
        testData.emailPositive.forEach((value) => {
            cy.checkEmailPositive_R(value); 
        })       
    }),
    it("Check INvalid Email", () => {
        testData.emailNegative.forEach((value) => {
            cy.checkEmailNegative_R(value); 
        })       
    })
}
)