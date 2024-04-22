const { describe } = require("mocha");

describe("Demo",()=>
{
    it("TestCase1",()=>
    {
        cy.visit("https://www.google.com/");
        cy.viewport('iphone-3');
    })
})