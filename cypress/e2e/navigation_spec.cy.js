/// <reference types="cypress" />

describe("Navigation on both Web and Mobile", () => {
  before(() => {
    cy.visit("https://www.waset.sa/");
  });

  it("The navigation bar should be visible", () => {
    cy.get(".header .content-links").should("be.visible");
    cy.viewport("iphone-x");
    cy.get(".header .content-links").should("not.be.visible");
    cy.get(".header .wrap .hamburger").click();
    cy.get(".header .content-links").should("be.visible");
  });
});

// function getNavigationLinks() {
//   return cy.get(".header .content-links");
// }

// function getHamburger() {
//   return cy.get(".header .wrap .hamburger");
// }

// function visibilityOfNavigation(visibility) {
//   getNavigationLinks().should(visibility);
// }
