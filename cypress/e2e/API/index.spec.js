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
})

module.exports = {}