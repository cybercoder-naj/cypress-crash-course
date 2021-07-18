/// <reference types="cypress" />

describe('Locators', () => {
    beforeEach(() => {
        cy.visit("/elements")
    })

    it('Locating elemets with get', () => {
        // Get all elements by tag names
        cy.get('button')

        // Get all elements by class name
        cy.get('.btn-with-class')

        // Get all elements with id
        cy.get("[id='btn-with-id']")

        // Get all elements by data-cy property
        cy.get("[data-cy='btn-id-1']")
        cy.getByTestId("btn-id-1")
    })

    it('Locating elements with contains', () => {
        // Get elements by unique text
        cy.contains('Unique Text')

        // Get elements with non unique Text
        cy.contains('Not Unique Text')

        // With a selector
        cy.contains("[type='submit']", "Not Unique Text")
        // or
        cy.get("[type='submit']").contains("Not Unique Text")
    })

    it("Locating elements with find", () => {
        cy.get("#form-1").find(".btn-1")
    })
})