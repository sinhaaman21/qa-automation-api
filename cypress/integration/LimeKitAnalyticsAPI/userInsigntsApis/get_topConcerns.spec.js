/// <reference types = "Cypress" />
const { hostLimekitProd, limeKitToken_Ac_71_prod } = require('../../../support/constant');

describe('get top_concerns for WSS', () => {

    it('get  top_concerns for WSS', () => {

        cy.request({
            method: 'GET',
            url: `${hostLimekitProd}/user_insights/top_concerns/`,
            headers: {
                'Authorization': `Bearer ${limeKitToken_Ac_71_prod}`
            },
            qs:{
                start_date : "2022/02/01",
                end_date : "2022/03/01"
                
            },
            timeout: 100000
        }).then((res) => {
            cy.log(JSON.stringify(res.body));
            expect(res.status).to.eq(200);
            Cypress._.each(res.body, (resp) => {
                expect(resp.Name).to.not.be.null
                expect(resp.Concerns).to.not.be.null
              })        
            })
    })
})