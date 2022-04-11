/// <reference types = "Cypress" />
const { hostLimekitProd, limeKitToken_Ac_71_prod } = require('../../../support/constant');

describe('get bot conversion_rate', () => {

    it('get  bot conversion Rate', () => {

        cy.request({
            method: 'GET',
            url: `${hostLimekitProd}/bot_performance/conversion_rate/`,
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
            expect(res.body).to.have.all.keys('yaxis','xaxis');   
            expect(res.body.yaxis[0].name).to.not.be.null
        })
    })
})