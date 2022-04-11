/// <reference types = "Cypress" />
const { hostLimekitProd, limeKitToken_Ac_71_prod } = require('../../../support/constant');

describe('get agent hourly performance', () => {

    it('get agent hourly performance', () => {

        cy.request({
            method: 'GET',
            url: `${hostLimekitProd}/agent-performance/agenthourlyperformance/`,
            headers: {
                'Authorization': `Bearer ${limeKitToken_Ac_71_prod}`
            },
            qs:{
                start_date : "2022/03/02",
                end_date : "2022/03/29",
                working_hours : "all"
            }

        }).then((res) => {
            cy.log(JSON.stringify(res.body));
            expect(res.status).to.eq(200);
            expect(res.body).to.have.all.keys('assigned_resolved_conv_data','frt','pending_chats');   
            Cypress._.each(res.body, (resp) => {
                expect(JSON.stringify(resp.xaxis)).to.not.be.null;
                expect(JSON.stringify(resp.yaxis)).to.not.be.null;
                expect(resp).to.have.all.keys('xaxis','yaxis');   
              })
        })
    })
})