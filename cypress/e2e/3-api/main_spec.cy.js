/// <reference types="cypress" />

describe("API test suite", () => {
  it("should be pass", () => {
    cy.request("GET", Cypress.env("base_url")).then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
