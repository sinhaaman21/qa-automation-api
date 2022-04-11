/// <reference types = "Cypress" />
const { hostLimekitProd, limeKitToken_Ac_71_prod } = require('../../../support/constant');

describe('get handoff_intent_breakdown for WSS', () => {

    it('get  handoff_intent_breakdown for WSS', () => {

        cy.request({
            method: 'GET',
            url: `${hostLimekitProd}/user_insights/handoff_intent_breakdown/`,
            headers: {
                'Authorization': `Bearer ${limeKitToken_Ac_71_prod}`
            },
            qs:{
                start_date : "2022/03/01",
                end_date : "2022/03/09"
                
            },
            timeout: 100000
        }).then((res) => {
            cy.log(JSON.stringify(res.body));
            expect(res.status).to.eq(200);
            expect(res.body).to.have.all.keys('values','labels');   
        })
    })
})