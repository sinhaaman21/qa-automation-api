/// <reference types = "Cypress" />
const { hostLimekitProd, limeKitToken_Ac_71_prod } = require('../../../support/constant');

describe('get overall agent performance convo state for WSS ', () => {

    it('get overall agent performance convo state for WSS', () => {

        cy.request({
            method: 'GET',
            url: `${hostLimekitProd}/agent-performance/agentperformanceconvstates/`,
            headers: {
                'Authorization': `Bearer ${limeKitToken_Ac_71_prod}`
            },
            qs:{
                start_date : "2022/02/02",
                end_date : "2022/03/29",
                working_hours : "all"
            }

        }).then((res) => {
            cy.log(JSON.stringify(res.body));
            expect(res.status).to.eq(200);
            Cypress._.each(res.body, (resp) => {
                expect(resp.name).to.not.be.null;
                expect(resp).to.have.all.keys
                    ('name','open','resolved','bot','closed','followup','waiting','outbound');
   
              })

        })

    })

})