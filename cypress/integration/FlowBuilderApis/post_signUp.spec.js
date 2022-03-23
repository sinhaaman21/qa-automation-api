/// <reference types = "Cypress" />
const { hostFlowBuilder } = require('../../support/constant');
const payload = require('../../fixtures/CB/signUp.json');
import { randomTextFunction } from '../../support/commonMethods';

describe('signUp ', () => {

    it('signUp on staging CB ', () => {
        // const accountName = randomTextFunction('_QAAccountAPI');
        const email = randomTextFunction('CBQA@test.com');
        cy.request({
            method: 'POST',
            url: `https://flow-builder-stg.limechat.ai/auth/sign_up`,
            headers: {
                //'x-limechat-access-token' : "a1"
            },
            body: {
                "email": email,
                "password": payload.password,
                "confirm_password": payload.confirm_password,
                "name" : payload.name,
                "company": payload.company
            }

        }).then((res) => {
            //cy.log(JSON.stringify(res));
            expect(res.status).to.eq(201);
            expect(res.body.success).to.eq(true);
        })

    })
/// add a login with same user test


})