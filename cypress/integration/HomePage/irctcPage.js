
describe("IRCTC WebPage Automation",()=>
{

     before("Launch IRCTC",()=>
    {
       // cy.restoreLocalStorage();
        cy.visit("https://www.irctc.co.in/nget/train-search")
        cy.wait(2000)
    })

   

    before("From",()=>
    {
       
        //cy.get('div[class="col-md-7 col-xs-12 remove-padding"]>div>p-autocomplete>span>input').type('patna');
        cy.get('span[class="ng-tns-c57-8 ui-autocomplete ui-widget"]>input').type('patna');
        cy.get('ul[id="pr_id_1_list"]>li').each(($ele,index,$list)=>
        {
            if($ele.text().includes("PATNA JN - PNBE"))
            {
                cy.wrap($ele).click();
            }
        })
       cy.wait(7000);
    })

    before("To",()=>
    {
        cy.get('span[class="ng-tns-c57-9 ui-autocomplete ui-widget"]>input').type('Muzaffarpur');
        cy.get('ul[id="pr_id_2_list"]>li').each(($ele,index,$list)=>
        {
            if($ele.text().includes("MUZAFFARPUR JN - MFP "))
            {
                cy.wrap($ele).click();
            }
        })
        cy.wait(7000);
    })

    it("Date",()=>
    {
        cy.get('.ui-calendar > .ng-tns-c58-10').click();
        for(let i=0;i<2;i++)
        {
            cy.get('a[class="ui-datepicker-next ui-corner-all ng-tns-c58-10 ng-star-inserted"]>span').click();
        }
        cy.get(':nth-child(3) > :nth-child(7) > .ui-state-default').click();
       // cy.get('div[class="col-xs-12 remove-padding"]>span:nth-child(2)>input').click();
       //cy.get("#dateSpecific").should('be.visible').click({force:true});
       Cypress.$("#dateSpecific").trigger('click');
       cy.get('.col-md-3 > .search_btn').click();
    })
})