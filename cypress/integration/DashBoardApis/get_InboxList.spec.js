/// <reference types = "Cypress" />
const { host, accountsIdQA, dashboardApiAccessToken } = require('../../support/constant');


describe('get inbox list', () => {

    it('get inbox list data', () => {

        cy.request({
            method: 'GET',
            url: `${host}/api/v1/accounts/${accountsIdQA}/inboxes/no_policy`,
            headers: {
                'api_access_token': dashboardApiAccessToken
            }
        }).then((res) => {
            cy.log(JSON.stringify(res));
            expect(res.status).to.eq(200)
            for (let i = 0; i < res.body.payload.length; i++) {
                // cy.log(res.body.payload[i].name );
                // !!!need to fix the duplicate database connection warning 
                cy.task("dbQuery", {
                    "query": `select name from inboxes where id = ${res.body.payload[i].id};`
                }).then(queryResponse => {
                    expect(JSON.stringify(queryResponse)).to.contains(res.body.payload[i].name)
                });
            }
        });
    });
});