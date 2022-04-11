/// <reference types = "Cypress" />
const { hostLimekitProd, limeKitToken_Ac_24_prod } = require('../../../support/constant');

describe('get overall agent performance status ', () => {

    it('get overall agent performance status', () => {

        cy.request({
            method: 'GET',
            url: `${hostLimekitProd}/agent-performance/overallagentperformance/`,
            headers: {
                'Authorization': `Bearer ${limeKitToken_Ac_24_prod}`
            },
            qs:{
                start_date : "2022/02/02",
                end_date : "2022/03/29",
                working_hours : "all"
            }

        }).then((res) => {
            cy.log(JSON.stringify(res.body));
            expect(res.status).to.eq(200);
            expect(res.body).to.have.all.keys('frt','resolution_time','no_of_conv','wait_time');
            Cypress._.each(res.body, (resp) => {
                expect(resp).to.not.be.null
              })

        })

    })

})