/// <reference types = "Cypress" />
const { hostLimekitProd, limeKitToken_Ac_24_prod } = require('../../../support/constant');

describe('get agent handoff status ', () => {

    it('get agent handoff status', () => {

        cy.request({
            method: 'GET',
            url: `${hostLimekitProd}/conversation/agent-handoff/`,
            headers: {
                'Authorization': `Bearer ${limeKitToken_Ac_24_prod}`
            },
            qs:{
                start_date : "2021/02/02",
                end_date : "2022/03/29",
                working_hours : "all"
            }

        }).then((res) => {
            cy.log(JSON.stringify(res.body));
            cy.log()
            expect(res.status).to.eq(200);
            expect(res.body).property('agent').to.be.a('number');
            expect(res.body).property('bot').to.be.a('number');

        })

    })

})