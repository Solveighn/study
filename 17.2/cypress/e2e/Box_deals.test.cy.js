import {faker} from "@faker-js/faker";
const body = require("../fixtures/body.json");

describe("Operations with boxes", () => {
    let newPassword = faker.internet.password(8); //8 characters
    let duplicatePassword = newPassword;
    let newName = faker.string.alphanumeric(20); //20 characters
    let duplicateName = newName;
    let santaCookie = "jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMwMDE0NDYsImlhdCI6MTY5MDIzMTI2MiwiZXhwIjoxNjkwMjM0ODYyfQ.wNOHBjM4HRy0CXieQqGGRZ_Icd9AStyj6Wem9wwcpPQ; Max-Age=3600; Path=/; Expires=Mon, 24 Jul 2023 21:41:02 GMT; HttpOnly";


    it("Create box - positive", () => {
        let reqBody = body.positive_Duplicate;
        reqBody.name = newName;
        reqBody.key = newPassword;
        cy.request({
            method: "POST",
            headers: {
                Cookie: santaCookie
            },
            url: "/",
            body: reqBody
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.box.name).to.eql(newName);
            expect(response.body.admin.email).to.eql("lisenysh1@yandex.ru");
        })
    }),
    it("Create box - duplicate", () => {
        let reqBody = body.positive_Duplicate;
        reqBody.name = duplicateName;
        reqBody.key = duplicatePassword;
        cy.request({
            method: "POST",
            headers: {
                Cookie: santaCookie
            },
            url: "/",
            body: reqBody
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.admin.email).to.eql("lisenysh1@yandex.ru");
        })
    }),
    it("Create box - negative1", () => {
        let reqBody = body.negative1;
        reqBody.name = newName;
        reqBody.key = newPassword;
        cy.request({
            method: "POST",
            headers: {
                Cookie: santaCookie
            },
            url: "/",
            body: reqBody,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body.error.name).to.eql("ValidationError");
            expect(response.body.error.errors[0].field).to.eql("cashLimitCurrency");
        })
    }),
    it("Create box - negative2", () => {
        let reqBody = body.negative2;
        reqBody.key = newPassword;
        cy.request({
            method: "POST",
            headers: {
                Cookie: santaCookie
            },
            url: "/",
            body: reqBody,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body.error.name).to.eql("ValidationError");
            expect(response.body.error.errors[0].field).to.eql("name");
        })
    }),
    it("Create box - negative3", () => {
        let reqBody = body.negative3;
        reqBody.name = newName;
        reqBody.key = newPassword;
        cy.request({
            method: "POST",
            headers: {
                Cookie: santaCookie
            },
            url: "/",
            body: reqBody
        }).then((response) => {
            
            expect(response.status).to.equal(200);
            expect(response.body.box.useCashLimit).to.be.false;
        })
    }),
    it("Update box - positive", () => {
        let reqBody = body.positive_Duplicate;
        reqBody.name = newName;
        reqBody.key = newPassword;
        cy.request({
            method: "PUT",
            headers: {
                Cookie: santaCookie
            },
            url: "/",
            body: reqBody
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.box.name).to.eql(newName);
            expect(response.body.admin.email).to.eql("lisenysh1@yandex.ru");
        })
    }),
    it("Update box - duplicate", () => {
        let reqBody = body.positive_Duplicate;
        reqBody.name = duplicateName;
        reqBody.key = duplicatePassword;
        cy.request({
            method: "PUT",
            headers: {
                Cookie: santaCookie
            },
            url: "/",
            body: reqBody
        }).then((response) => {
            expect(response.status).to.equal(200);
            expect(response.body.admin.email).to.eql("lisenysh1@yandex.ru");
        })
    }),
    it("Update box - negative1", () => {
        let reqBody = body.negative1;
        reqBody.name = newName;
        reqBody.key = newPassword;
        cy.request({
            method: "PUT",
            headers: {
                Cookie: santaCookie
            },
            url: "/",
            body: reqBody,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body.error.name).to.eql("ValidationError");
            expect(response.body.error.errors[0].field).to.eql("cashLimitCurrency");
        })
    }),
    it("Update box - negative2", () => {
        let reqBody = body.negative2;
        reqBody.key = newPassword;
        cy.request({
            method: "PUT",
            headers: {
                Cookie: santaCookie
            },
            url: "/",
            body: reqBody,
            failOnStatusCode: false
        }).then((response) => {
            expect(response.status).to.equal(400);
            expect(response.body.error.name).to.eql("ValidationError");
            expect(response.body.error.errors[0].field).to.eql("name");
        })
    }),
    it("Update box - negative3", () => {
        let reqBody = body.negative3;
        reqBody.name = newName;
        reqBody.key = newPassword;
        cy.request({
            method: "PUT",
            headers: {
                Cookie: santaCookie
            },
            url: "/",
            body: reqBody
        }).then((response) => {
            
            expect(response.status).to.equal(200);
            expect(response.body.box.useCashLimit).to.be.false;
        })
        
    }),
    it("Delete box - positive", () => {
        cy.request({
            method: "DELETE",
            headers: {
                Cookie: santaCookie
            },
            url: "/" + duplicatePassword
        }).then((response) => {
            
            expect(response.status).to.equal(200);
        })        
    }),
    it("Delete box - duplicate", () => {
        cy.request({
            method: "DELETE",
            headers: {
                Cookie: santaCookie
            },
            url: "/" + duplicatePassword,
            failOnStatusCode: false
        }).then((response) => {            
            expect(response.status).to.equal(404);
            expect(response.body.error.name).to.eql("NotFoundError");
            expect(response.body.error.message).to.eql("BOX_NOT_FOUND");
        })        
    }),
    it("Delete box - random key", () => {
        cy.request({
            method: "DELETE",
            headers: {
                Cookie: santaCookie
            },
            url: "/" + newPassword,
            failOnStatusCode: false
        }).then((response) => {            
            expect(response.status).to.equal(404);
            expect(response.body.error.name).to.eql("NotFoundError");
            expect(response.body.error.message).to.eql("BOX_NOT_FOUND");
        })        
    })
})    