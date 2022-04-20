/// <reference types = "Cypress" />
const { host, accountsIdQA, dashboardApiAccessToken, conversationsId } = require('../../support/constant');

describe('get lables', () => {

    it('get chat lables', () => {

        cy.request({
            method: 'GET',
            url: `${host}/api/v1/accounts/${accountsIdQA}/conversations/${conversationsId}/labels`,
            headers: {
                'api_access_token': dashboardApiAccessToken
            }
        }).then((res) => {
            cy.log(JSON.stringify(res))
            expect(res.status).to.eq(200)
            //cy.log(res.body.payload.length);
            for (let i = 0; i < res.body.payload.length; i++) {
                cy.task("dbQuery", {
                    "query": `select title from labels where title = '${res.body.payload[i]}';`
                }).then(queryResponse => {
                    expect(JSON.stringify(queryResponse)).to.contains(res.body.payload[i])
                });
            }

        })


    })


})