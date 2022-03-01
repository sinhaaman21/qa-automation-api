/// <reference types = "Cypress" />
const { hostLimeKit } = require('../../support/constant');
const payload = require('../../fixtures/CB/login.json');

describe('login ', () => {

    it('logim on staging CB ', () => {

        cy.request({
            method: 'POST',
            url: `${hostLimeKit}/campaign_builder/v1/auth/login`,
            headers: {
                //'x-limechat-access-token' : "a1"
            },
            body: {
                "email": payload.email,
                "password": payload.password
            }

        }).then((res) => {
            cy.log(JSON.stringify(res));
            expect(res.status).to.eq(201);
            expect(res.body.success).to.eq(true);
            // cy.task("dbQuery", {
            //     "query": `select name from accounts where name = '${accountName}';`
            // }).then(queryResponse => {
            //     expect(JSON.stringify(queryResponse)).to.contains(accountName)
            // });

        })

    })



})