/// <reference types = "Cypress" />
const { hostLimekitProd, limeKitToken_Ac_71_prod } = require('../../../support/constant');

describe('get All agent performance for WSS ', () => {

    it('get All agent performance for WSS ', () => {

        cy.request({
            method: 'GET',
            url: `${hostLimekitProd}/agent-performance/allagentsperformance/`,
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
            Cypress._.each(res.body, (resp) => {
                expect(resp.name).to.not.be.null;
                expect(resp.frt).to.not.be.null;
                expect(resp.resolution_time).to.not.be.null;
                expect(resp.no_of_conv).to.not.be.null;
                expect(resp.wait_time).to.not.be.null;
                expect(resp).to.have.all.keys
                    ('name','frt','resolution_time','no_of_conv','wait_time');   
              })
        })
    })
})