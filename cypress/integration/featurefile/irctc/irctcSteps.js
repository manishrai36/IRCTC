import {Given,When,Then,And} from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../HomePage/homepage";
//import dayjs from "dayjs"
const dayjs=require('dayjs')
const { describe } = require("mocha");

const hm=new HomePage();
Given("visit IRCTC HomePage",()=>
{
    cy.visit("https://www.irctc.co.in/nget/train-search")
    cy.wait(2000)
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
    let currentDate;
    //cy.get('.ui-calendar > .ng-tns-c58-10').click();
    // cy.get('.ui-calendar > .ng-tns-c58-10').then(($date)=>
    // {
    //     currentDate=$date.text();
    // });


    // cy.log("Date is "+currentDate);
   // cy.get('.ui-calendar > .ui-inputtext').type('18-07-2024').trigger('change');


//    const startDate = dayjs().format('YYYY-MM-DD');
//     cy.get(startDate);
//     cy.log(startDate);
    cy.get('.ui-calendar > .ui-inputtext').clear().type("18/07/2024");

    // const selectDate=(daysToAdd,monthsToAdd,yearsToAdd)=>
    // {
    //     const dateToSelect=dayjs().add(daysToAdd,'day')
    //     .add(monthsToAdd,'month')
    //     .add(yearsToAdd,'year').format('DD-MM-YYYY');

    //     cy.get('.ui-calendar > .ui-inputtext').contains(dateToSelect).click();
    // };

    // selectDate(16,2,0);


//     for(let i=0;i<2;i++)
//     {
//         cy.get('a[class="ui-datepicker-next ui-corner-all ng-tns-c58-10 ng-star-inserted"]>span').click();
//     }
//     cy.get(':nth-child(3) > :nth-child(7) > .ui-state-default').click();
//    Cypress.$("#dateSpecific").trigger('click');
//    cy.get('.col-md-3 > .search_btn').click();
//    cy.wait(2000);
//    cy.get(':nth-child(1) > .bull-back > app-train-avl-enq > :nth-child(1) > :nth-child(5) > .white-back > table > tr > :nth-child(1) > .pre-avl > .col-xs-12').click();
//    cy.get(':nth-child(5) > .pre-avl > .AVAILABLE').click();
//    cy.get(':nth-child(1) > .bull-back > app-train-avl-enq > [style="padding-top: 10px; padding-bottom: 20px;"] > [style="overflow-x: auto;"] > .pull-left > :nth-child(1) > .btnDefault').click();
//    cy.get('.ui-confirmdialog-acceptbutton > .ui-button-text').click();
})

And("Submit the Details",()=>
{
    // Cypress.$("#dateSpecific").trigger('click');
    cy.get('.col-md-3 > .search_btn').click();
})

Then("Verify Ticket is Available",()=>
{
   
   cy.log("true");
})

