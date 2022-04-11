/// <reference types = "Cypress" />
const { hostLimekitProd, limeKitToken_Ac_71_prod } = require('../../../support/constant');

describe('get bot failing data for WSS', () => {

    it('get  bot failing data for WSS', () => {

        cy.request({
            method: 'GET',
            url: `${hostLimekitProd}/user_insights/bot_failing_data/`,
            headers: {
                'Authorization': `Bearer ${limeKitToken_Ac_71_prod}`
            },
            qs:{
                start_date : "2022/03/01",
                end_date : "2022/03/05"
                
            },
            timeout: 100000
        }).then((res) => {
            //cy.log(JSON.stringify(res.body));
            expect(res.status).to.eq(200);
            Cypress._.each(res.body, (resp) => {
                expect(resp).to.have.all.keys('Name','Conversation ID','Bot Confidence%','Reason');   
                expect(resp.Name).to.not.be.null
                expect(resp.Reason).to.not.be.null
              })        
        })
    })
})