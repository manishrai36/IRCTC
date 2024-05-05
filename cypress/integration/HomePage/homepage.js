/// <reference types="cypress"/>
///<reference types="cypress-iframe"/>
import 'cypress-iframe'
class HomePage{

    login()
    {
         cy.get('.h_menu_drop_button.hidden-xs > a > .fa').click();
        cy.get('.ng-star-inserted > .search_btn').click();
       
         cy.get('div[class="form-group form-sd ui-inputgroup"]:nth-child(1) input').type("Enter Your UserID");
         cy.get('div[class="form-group form-sd ui-inputgroup"]:nth-child(2) input').type("Enter Your Password");
         cy.wait(20000);
         cy.get('form[class="ng-valid ng-dirty ng-touched"] >span button').click();

    }

     setFrom(from) {
        cy.get('span[class="ng-tns-c57-8 ui-autocomplete ui-widget"]>input').type(from);
        cy.get('ul[id="pr_id_1_list"]>li').each(($ele,index,$list)=>
    {
        if($ele.text().includes("PATNA JN - PNBE"))
        {
            cy.wrap($ele).click();
        }
    })
    }

    setTo(to)
    {
        cy.get('span[class="ng-tns-c57-9 ui-autocomplete ui-widget"]>input').type(to);
        cy.get('ul[id="pr_id_2_list"]>li').each(($ele,index,$list)=>
        {
            if($ele.text().includes("MUZAFFARPUR JN - MFP "))
            {
                cy.wrap($ele).click();
            }
        })
    }

    setDate(date)
    {
        cy.get('.ui-calendar > .ui-inputtext').clear().type(date);
    }
    
}

export default HomePage;