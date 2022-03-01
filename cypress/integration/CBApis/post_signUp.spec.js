/// <reference types = "Cypress" />
const { hostLimeKit } = require('../../support/constant');
const payload = require('../../fixtures/CB/signUp.json');
import { randomTextFunction } from '../../support/commonMethods';

describe('signUp ', () => {

    it('signUp on staging CB ', () => {
        // const accountName = randomTextFunction('_QAAccountAPI');
        const email = randomTextFunction('CBQA@test.com');
        cy.request({
            method: 'POST',
            url: `${hostLimeKit}/campaign_builder/v1/auth/sign_up`,
            headers: {
                //'x-limechat-access-token' : "a1"
            },
            body: {
                "email": email,
                "password": payload.password,
                "password2": payload.password2
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
/// add a login with same user test


})