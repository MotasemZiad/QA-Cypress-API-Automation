describe("template spec", () => {
  it("passes", () => {
    cy.request({
      method: "GET",
      url: "http://api.weatherstack.com/current",
      qs: {
        //Access key given by the website
        access_key: Cypress.env("access_key"),
        //Name of the city for which you are viewing temperature
        query: "Chennai",
      },
    }).then((response) => {
      //Asserting the status code to be 200 for successful response
      expect(response.status).to.eq(200);

      //Asserting the location name
      expect(response.body.location.name).to.eq("Chennai");
    });
  });
});
