import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../HomePage/homepage";
const { describe } = require("mocha");

const hm=new HomePage();
Given("visit IRCTC HomePage",()=>
{
    cy.visit("https://www.irctc.co.in/nget/train-search")
    cy.wait(2000)
})

When("Login to IRCTC",()=>
{
    hm.login();
})

When("Choose From",()=>
{
    hm.setFrom('patna');
   cy.wait(3000);
})
And("Choose To",()=>
{
   hm.setTo('Muzaffarpur');
    cy.wait(3000);
})

And("Select the Date",()=>
{
   hm.setDate("18/07/2024");
})

And("Submit the Details",()=>
{
    // Cypress.$("#dateSpecific").trigger('click');
    Cypress.$('.col-md-3 > .search_btn').trigger('click');
    //cy.get('.col-md-3 > .search_btn').click();
})

Then("Verify Ticket is Available",()=>
{
    cy.wait(5000);
    //choose Class
    cy.get(':nth-child(1) > .bull-back > app-train-avl-enq > :nth-child(1) > :nth-child(5) > .white-back > table > tr > :nth-child(1) > .pre-avl > .col-xs-12').click();
    //Click on Available
    cy.get(':nth-child(2) > .pre-avl > .AVAILABLE > strong').click();
    //Click on Book
    cy.get(':nth-child(1) > .bull-back > app-train-avl-enq > [style="padding-top: 10px; padding-bottom: 20px;"] > [style="overflow-x: auto;"] > .pull-left > :nth-child(1) > .btnDefault').click();
    //Click Yes to Proceed
    cy.get('.ui-confirmdialog-acceptbutton > .ui-button-text').click();
    //Add Passenger Name
    cy.get('.ui-autocomplete > .ng-tns-c57-64').type("Manish Kumar");
    //Add Passenger Age
    cy.get('.col-sm-1 > .form-control').type("25");
    //Select Passenger Gender
    cy.get('.col-sm-2 > .form-control').select('M');
    //Select Preference of Seat
    cy.get('.Layer_7.ng-star-inserted > .form-control').select('LB');
    //Submit
    Cypress.$('.train_Search').trigger('click');
   // cy.get('.train_Search').click();
    // cy.get('div[class="form-group no-pad col-xs-12 bull-back border-all"]').each(($trainName,index,$list)=>
    // {
    //     cy.wrap($trainName).find('div[class="col-sm-5 col-xs-11 train-heading"]>strong:nth-child(1)').then(($ele)=>
    //     {
    //         const trainName="INTERCITY EXP (13226)";
    //        // cy.log("Train Not Found");
    //         if($ele.text()==trainName)
    //         {
    //             cy.log("Train Found");
    //         }
    //     })
    // })
//     cy.get('div[class="col-sm-5 col-xs-11 train-heading"]>strong').each(($ele,index,$list)=>
//     {
//         const trainName="INTERCITY EXP (13226)";
//         //if($ele.text()=="")
//         //cy.log($ele.text());
//         if($ele.text()==trainName)
//         {
//             cy.log("true")
//         }
//     })
//    cy.log("true");
})

