import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps";
const { describe } = require("mocha");

Given("visit IRCTC HomePage",()=>
{
    cy.visit("https://www.irctc.co.in/nget/train-search")
    cy.wait(2000)
})

When("Choose From",()=>
{
    cy.get('span[class="ng-tns-c57-8 ui-autocomplete ui-widget"]>input').type('patna');
    cy.get('ul[id="pr_id_1_list"]>li').each(($ele,index,$list)=>
    {
        if($ele.text().includes("PATNA JN - PNBE"))
        {
            cy.wrap($ele).click();
        }
    })
   cy.wait(3000);
})
And("Choose To",()=>
{
    cy.get('span[class="ng-tns-c57-9 ui-autocomplete ui-widget"]>input').type('Muzaffarpur');
    cy.get('ul[id="pr_id_2_list"]>li').each(($ele,index,$list)=>
    {
        if($ele.text().includes("MUZAFFARPUR JN - MFP "))
        {
            cy.wrap($ele).click();
        }
    })
    cy.wait(3000);
})

And("Select the Date",()=>
{
    cy.get('.ui-calendar > .ng-tns-c58-10').click();
    for(let i=0;i<2;i++)
    {
        cy.get('a[class="ui-datepicker-next ui-corner-all ng-tns-c58-10 ng-star-inserted"]>span').click();
    }
    cy.get(':nth-child(3) > :nth-child(7) > .ui-state-default').click();
   Cypress.$("#dateSpecific").trigger('click');
   cy.get('.col-md-3 > .search_btn').click();
   cy.wait(2000);
   cy.get(':nth-child(1) > .bull-back > app-train-avl-enq > :nth-child(1) > :nth-child(5) > .white-back > table > tr > :nth-child(1) > .pre-avl > .col-xs-12').click();
   cy.get(':nth-child(5) > .pre-avl > .AVAILABLE').click();
   cy.get(':nth-child(1) > .bull-back > app-train-avl-enq > [style="padding-top: 10px; padding-bottom: 20px;"] > [style="overflow-x: auto;"] > .pull-left > :nth-child(1) > .btnDefault').click();
   cy.get('.ui-confirmdialog-acceptbutton > .ui-button-text').click();
})

And("Submit the Details",()=>
{
     Cypress.$("#dateSpecific").trigger('click');
})

Then("Verify Ticket is Available",()=>
{
   
   cy.log("true");
})

