describe("Event rendering API",()=>{
    it("Should be return sports event data",()=>{
        cy.request({
            method : "GET",
            url : `localhost:8001/sports/15`
        }).as("response")

        cy.get("@response")
        .its("status")
        .should("equal",200)
    })

    it("Should render about page",()=>{
        cy.request({
            method : "GET",
            url : `localhost:8001/about/*`
        }).as("response")

        cy.get("@response")
        .its("status")
        .should("equal",200)
    })
})

