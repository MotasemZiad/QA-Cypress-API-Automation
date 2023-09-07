/// <reference types="cypress" />

describe("Navigation on both Web and Mobile", () => {
  before(() => {
    cy.visit("https://www.waset.sa/");
  });

  it("The navigation bar should be visible", () => {
    visibilityOfNavigation("be.visible");
    cy.viewport("iphone-x");
    visibilityOfNavigation("not.be.visible");
    getHamburger().click();
    visibilityOfNavigation("be.visible");
  });
});

function getNavigationLinks() {
  return cy.get(".header .content-links");
}

function getHamburger() {
  return cy.get(".header .wrap .hamburger");
}

function visibilityOfNavigation(visibility) {
  getNavigationLinks().should(visibility);
}
