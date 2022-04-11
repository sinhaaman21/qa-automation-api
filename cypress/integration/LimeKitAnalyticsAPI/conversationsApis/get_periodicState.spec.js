/// <reference types = "Cypress" />
const { hostLimekitProd, limeKitToken_Ac_24_prod } = require('../../../support/constant');

describe('get periodic state status ', () => {

    it('get periodic state', () => {

        cy.request({
            method: 'GET',
            url: `${hostLimekitProd}/conversation/periodic-states/`,
            headers: {
                'Authorization': `Bearer ${limeKitToken_Ac_24_prod}`
            },
            qs:{
                start_date : "2022/02/01",
                end_date : "2022/03/29",
                working_hours : "all"
            }

        }).then((res) => {
            cy.log(JSON.stringify(res.body));
            expect(res.status).to.eq(200);
             expect(res.body).to.have.all.keys('categories','series');
            Cypress._.each(res.body.series, (series) => {
                expect(series.name).to.not.be.null
              })

        })

    })

})