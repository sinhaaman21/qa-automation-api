/// <reference types = "Cypress" />
const { hostFlowBuilder } = require('../../support/constant');
const payload = require('../../fixtures/CB/login.json');

describe('login ', () => {

    it('login on staging  ', () => {

        cy.request({
            method: 'POST',
            url: `https://flow-builder-stg.limechat.ai/auth/login`,
            headers: {
                //'x-limechat-access-token' : "a1"
            },
            body: {
                "email": payload.email,
                "password": payload.password
            }

        }).then((res) => {
            //cy.log(JSON.stringify(res));
            expect(res.status).to.eq(200);
            expect(res.body.success).to.eq(true);

        })

    })



})