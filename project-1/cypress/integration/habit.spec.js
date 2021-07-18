/// <reference types="cypress" />

describe("Habit Dashboard", () => {

    beforeEach(() => {
        cy.visit("/habits")
    })

    it("should display modal on 'Add' button click", () => {
        cy.get('.modal-dialog').should("not.exist")
	cy.wait(1000)
        cy.contains("button", "Add").click()
	cy.wait(1000)
        cy.get('.modal-dialog').should("be.visible")
    })

    it("should display new card on save habit", () => {
        cy.get("#habit-add-btn").click()
	cy.wait(1000)
        cy.get("input[placeholder='Habit']").type("Drink 8 glasses of water")
	cy.wait(1000)
        cy.contains("Save Changes").click()

	cy.wait(1000)
        cy.contains("Drink 8 glasses of water")
            .should("be.visible")
            .and("have.class", "HabitCard__habit-container")
    })

    it("should toggle icon when habit card is clicked", () => {
        cy.get("#habit-add-btn").click()
	cy.wait(1000)
        cy.get("input[placeholder='Habit']").type("Drink 8 glasses of water")
	cy.wait(1000)
        cy.contains("Save Changes").click()

	cy.wait(1000)
        cy.contains("Drink 8 glasses of water")
            .should("be.visible")
            .and("have.class", "HabitCard__habit-container")
	cy.wait(1000)
        cy.get("[src='/static/media/close.fa7e5ead.svg']").should("be.visible")

	cy.wait(1000)
        cy.contains("Drink 8 glasses of water").click()
	cy.wait(1000)
        cy.get("[src='/static/media/check.9e8832df.svg']").should("be.visible")
    })

    it("Empty habit will not update list", () => {
        cy.get("#habit-add-btn").click()
	cy.wait(1000)
        cy.contains("Save Changes").click()
	cy.wait(1000)
        cy.get(".modal-dialog").should("be.visible")
    })

    it("Closing model will not update list", () => {
        cy.get("#habit-add-btn").click()
	cy.wait(1000)
        cy.get("input[placeholder='Habit']").type("Code every night")
	cy.wait(1000)
        cy.contains("Close").click()

	cy.wait(1000)
        cy.contains("Code every night").should("not.exist")
    })
})
