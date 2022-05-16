/// <reference types = "Cypress" />
const { hostFlowBuilder, connection_flow_builder } = require('../../support/constant');
const payload = require('../../fixtures/CB/passwordResetInit.json');
const payload1 = require('../../fixtures/CB/passwordReset.json');

import { randomTextFunction } from '../../support/commonMethods';

describe('password_reset on flowBuilder stage ', () => {

    it('password_reset on staging FB ', () => {

        //email = "pj97nb4envle85lCBQA@test.com" accoint id = '10'
        const id = `10`;
        cy.request({
            method: 'POST',
            url: `https://flow-builder-stg.limechat.ai/auth/password_reset/init`,
            headers: {
                //'x-limechat-access-token' : "a1"
            },
            body: {
                "email": payload.email,
            }

        }).then((res) => {
            cy.log("ResetPassword Initialisation");
            expect(res.status).to.eq(200);
            expect(res.body.success).to.eq(true);
            cy.task("dbQuery", {
                "query": `select token from account_passwordresettoken where account_id = ${id};`,
                "connection": connection_flow_builder
            }).then(queryResponse => {
                //cy.log(JSON.stringify(queryResponse));
                let body0 = JSON.stringify(queryResponse);
                const token1 = (body0.slice(11, (body0.length - 3)));
                cy.request({

                    method: 'POST',
                    url: `https://flow-builder-stg.limechat.ai/auth/password_reset/verify`,
                    body: {
                        "token": token1
                    }
                }).then((res) => {
                    cy.log("ResetPassword token validation")
                    expect(res.status).to.eq(200);
                    cy.request({
                        method: 'POST',
                        url: `https://flow-builder-stg.limechat.ai/auth/password_reset`,
                        body: {
                           "token" : token1,
                            "password": payload1.password,
                            "confirm_password": payload1.confirm_password
                        }
                    }).then((res) => {
                        //cy.log(JSON.stringify(res));
                        expect(res.status).to.eq(200);
                        cy.log("passwordResetSucess");
                    })
                })
                
            })
        })
    })

    it('password_reset with password fields mismatch on staging FB ', () => {

        //email = "pj97nb4envle85lCBQA@test.com" accoint id = '10'
        const id = `10`;
        cy.request({
            method: 'POST',
            url: `https://flow-builder-stg.limechat.ai/auth/password_reset/init`,
            headers: {
                //'x-limechat-access-token' : "a1"
            },
            body: {
                "email": payload.email,
            }

        }).then((res) => {
            cy.log("Reset password initialisation");
            expect(res.status).to.eq(200);
            expect(res.body.success).to.eq(true);
            cy.task("dbQuery", {
                "query": `select token from account_passwordresettoken where account_id = ${id};`,
                "connection": connection_flow_builder
            }).then(queryResponse => {
                cy.log(JSON.stringify(queryResponse));
                let body0 = JSON.stringify(queryResponse);
                const token1 = (body0.slice(11, (body0.length - 3)));
                cy.request({

                    method: 'POST',
                    url: `https://flow-builder-stg.limechat.ai/auth/password_reset/verify`,
                    body: {
                        "token": token1
                    }
                }).then((res) => {
                    cy.log("Reset password token validation")
                    expect(res.status).to.eq(200);
                    cy.request({
                        method: 'POST',
                        url: `https://flow-builder-stg.limechat.ai/auth/password_reset`,
                        body: {
                            "token" : token1,
                            "password": payload1.password,
                            "confirm_password": payload1.Inconfirm_password
                        },
                        failOnStatusCode: false,

                    }).then((res) => {
                        //cy.log(JSON.stringify(res));
                        expect(res.status).to.eq(400);
                        expect(JSON.stringify(res.body.error.invalid_params.password)).to.contains(`"Password fields didn't match."`)
                        cy.log("passwordResetFail");
                    })
                })                
            })
        })
    })

    it('password_reset with incorrect token on staging FB ', () => {

        //email = "pj97nb4envle85lCBQA@test.com" accoint id = '10'
        const id = `10`;
        cy.request({
            method: 'POST',
            url: `https://flow-builder-stg.limechat.ai/auth/password_reset/init`,
            headers: {
                //'x-limechat-access-token' : "a1"
            },
            body: {
                "email": payload.email,
            }

        }).then((res) => {
            cy.log("Reset Password Initialisation");
            expect(res.status).to.eq(200);
            expect(res.body.success).to.eq(true);
            cy.task("dbQuery", {
                "query": `select token from account_passwordresettoken where account_id = ${id};`,
                "connection": connection_flow_builder
            }).then(queryResponse => {
                cy.log(JSON.stringify(queryResponse));
                let body0 = JSON.stringify(queryResponse);
                const token1 = (body0.slice(11, (body0.length - 3)));
                cy.request({

                    method: 'POST',
                    url: `https://flow-builder-stg.limechat.ai/auth/password_reset/verify`,
                    body: {
                        "token": token1
                    }
                }).then((res) => {
                    cy.log("Reset password token validation")
                    expect(res.status).to.eq(200);
                    cy.request({
                        method: 'POST',
                        url: `https://flow-builder-stg.limechat.ai/auth/password_reset`,
                        body: {
                            "token": "junkToken",
                            "password": payload1.password,
                            "confirm_password": payload1.confirm_password
                        },
                        failOnStatusCode: false,

                    }).then((res) => {
                        //cy.log(JSON.stringify(res));
                        expect(res.status).to.eq(400);
                        expect(JSON.stringify(res.body.error.invalid_params.token)).to.contains(`"Invalid token"`)
                        cy.log("passwordResetFail");
                    })
                })                
            })
        })
    })

})