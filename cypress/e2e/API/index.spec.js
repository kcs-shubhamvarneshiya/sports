describe('Event handlers',()=>{

    it('Should return event data',()=>{
        cy.request({
            method : "GET",
            url : `http://localhost:8001/`,
            failOnStatusCode : false
        }).as("response")

        cy.get("@response")
        .its("status").should("equal",200);
    })

    it('Should return about page',()=>{
        cy.request({
            method : "GET",
            url : `http://localhost:8001/about`,
            failOnStatusCode: false
        }).as("response")

        cy.get("@response")
        .its("status").should("equal",200);
    })

    it('Should return error message when url is invalid url',()=>{
        cy.request({
            method : "GET",
            url : `http://localhost:8001/about/hvg`,
            failOnStatusCode: false
        }).as("response")

        cy.get("@response")
        .its("status").should("equal",404);
    })

    it('Should return error message when url is invalid url base url',()=>{
        cy.request({
            method : "GET",
            url : `http://localhost:8001/hvg`,
            failOnStatusCode: false
        }).as("response")

        cy.get("@response")
        .its("status").should("equal",404);
    })

    it('Should return sports details',()=>{
        cy.request({
            method : "GET",
            url : `http://localhost:8001/sports/14`,
            failOnStatusCode: false
        }).as("response")

        cy.get("@response")
        .its("status").should("equal",200);
    })


})

module.exports = {}