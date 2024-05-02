class HomePage{

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
    
}

export default HomePage;