/// <reference types="cypress" />

describe("Accomplishments", () => {
    beforeEach(() => {
        cy.visit("/accomplishments")
    })

    it("should show error for missing information", () => {
        cy.getTestById("accomplishment-title-input").type("First in coding")
        cy.getTestById("accomplishment-input").type("Lorem ipsum dolor sit amet consectetur adipisicing elit.")
        cy.contains("Submit Accomplishment").click()

        cy.contains("Complete the items above to continue").should("be.visible")
    })

    it("should display validation component if information is correct", () => {
        cy.getTestById("accomplishment-title-input").type("First in coding")
        cy.getTestById("accomplishment-input").type("Lorem ipsum dolor sit amet consectetur adipisicing elit.")
        cy.get("[type='checkbox']").click()
        cy.contains("Submit Accomplishment").click()

        cy.contains("This Accomplisment was Successfully Submitted").should("be.visible")
    })

    it("should return back to accomplishment with empty inputs", () => {
        cy.getTestById("accomplishment-title-input").type("First in coding")
        cy.getTestById("accomplishment-input").type("Lorem ipsum dolor sit amet consectetur adipisicing elit.")
        cy.get("[type='checkbox']").click()
        cy.contains("Submit Accomplishment").click()

        cy.contains("This Accomplisment was Successfully Submitted").should("be.visible")
        cy.contains("Go Back").click()

        cy.contains("h2", "Accomplishment").should("be.visible")
        cy.getTestById("accomplishment-title-input").should("have.value", "")
        cy.getTestById("accomplishment-input").should("have.value", "")
        cy.get("[type='checkbox']").should("not.be.checked")
    })
})