/// <reference types = "Cypress" />
const { hostLimekitProd, limeKitToken_Ac_24_prod } = require('../../../support/constant');

describe('get convesation status ', () => {

    it('get convesation status', () => {

        cy.request({
            method: 'GET',
            url: `${hostLimekitProd}/conversation/status/`,
            headers: {
                'Authorization': `Bearer ${limeKitToken_Ac_24_prod}`
            },
            qs:{
                start_date : "2022/03/23",
                end_date : "2022/03/29"
            }

        }).then((res) => {
            cy.log(JSON.stringify(res.body));
            cy.log()
            expect(res.status).to.eq(200);
            expect(res.body).property('open').to.be.a('number');
            expect(res.body).property('resolved').to.be.a('number');
            expect(res.body).property('bot').to.be.a('number');
            expect(res.body).property('closed').to.be.a('number');
            expect(res.body).property('followup').to.be.a('number');
            expect(res.body).property('waiting').to.be.a('number');
            expect(res.body).property('outbound').to.be.a('number');
            expect(res.body).property('total_conv').to.be.a('number');
            expect(res.body).property('inbound').to.be.a('number');

        })

    })

    it('get convesation status with inbox param', () => {

        cy.request({
            method: 'GET',
            url: `${hostLimekitProd}/conversation/status/`,
            headers: {
                'Authorization': `Bearer ${limeKitToken_Ac_24_prod}`
            },
            qs:{
                start_date : "2021/01/01",
                end_date : "2022/03/29",
                'inboxes[]' : 533
            }

        }).then((res) => {
            cy.log(JSON.stringify(res.body));
            cy.log()
            expect(res.status).to.eq(200);
            expect(res.body).property('open').to.be.a('number');
            expect(res.body).property('resolved').to.be.a('number');
            expect(res.body).property('bot').to.be.a('number');
            expect(res.body).property('closed').to.be.a('number');
            expect(res.body).property('followup').to.be.a('number');
            expect(res.body).property('waiting').to.be.a('number');
            expect(res.body).property('outbound').to.be.a('number');
            expect(res.body).property('total_conv').to.be.a('number');
            expect(res.body).property('inbound').to.be.a('number');

        })

    })


})