/// <reference types = "Cypress" />
const { hostLimekitProd, limeKitToken_Ac_71_prod } = require('../../../support/constant');

describe('get user activity for WSS', () => {

    it('get  user activity for WSS', () => {

        cy.request({
            method: 'GET',
            url: `${hostLimekitProd}/user_insights/user_activity/`,
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
                expect(resp.name).to.not.be.null
                expect(JSON.stringify(resp.data)).to.not.be.null
              })        
        })
    })
})