/// <reference types = "Cypress" />
const { hostLimekitProd, limeKitToken_Ac_71_prod } = require('../../../support/constant');

describe('get user_intent_breakdown for WSS', () => {

    it('get  user Intent Breakdown for WSS', () => {

        cy.request({
            method: 'GET',
            url: `${hostLimekitProd}/bot_performance/user_intent_breakdown/`,
            headers: {
                'Authorization': `Bearer ${limeKitToken_Ac_71_prod}`
            },
            qs:{
                start_date : "2022/02/05",
                end_date : "2022/02/26"
                
            },
            timeout: 100000
        }).then((res) => {
            cy.log(JSON.stringify(res.body));
            expect(res.status).to.eq(200);
            //expect(res.body).to.have.keys('Cancel Order','Complaint','Deals and Offers','Find Products','Talk to Agent','Track Order','User sends image to Bot');   
            Cypress._.each(res.body, (resp) => {
                expect(resp).to.not.be.null
              })
        })
    })
})