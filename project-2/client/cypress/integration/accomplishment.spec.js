/// <reference types="cypress" />

describe("Accomplishment", () => {
    beforeEach(() => {
        cy.visit("/accomplishments")
    })

    it("should display inappropriate error when text includes giraffe", () => {
        cy.get("[placeholder='Title']").type("This is my accomplishment")
        cy.get("[placeholder='My accomplishment...']").type("I fucked a giraffe")
        cy.get("[type='checkbox']").click()
        cy.get("button").click()
        cy.contains("Your content is not appropriate").should("be.visible")
    })
    
    it("should display inappropriate error when text includes giraffe MOCK", () => {
        cy.intercept("POST", "http://localhost:4000/", req => {
            req.reply(res => {
                res.send({
                    msg: 'Your accom is not appropriate'
                })
            })
        })

        cy.get("[placeholder='Title']").type("This is my accomplishment")
        cy.get("[placeholder='My accomplishment...']").type("I fucked a giraffe")
        cy.get("[type='checkbox']").click()
        cy.get("button").click()
        cy.contains("Your accom is not appropriate").should("be.visible")
    })
})