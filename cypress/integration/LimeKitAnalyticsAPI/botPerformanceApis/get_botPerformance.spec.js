/// <reference types = "Cypress" />
const { hostLimekitProd, limeKitToken_Ac_71_prod } = require('../../../support/constant');

describe('get bot performance stat_cards', () => {

    it('get  bot performance stat_cards', () => {

        cy.request({
            method: 'GET',
            url: `${hostLimekitProd}/bot_performance/stat_cards/`,
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
            expect(res.body).to.have.all.keys('bot_conversations','automation','resolution_time','conversion_rate','bot_sales');   
        })
    })
})