/// <reference types = "Cypress" />
const { host } = require('../../support/constant');
const payload = require('../../fixtures/login.json');



describe('login ', () => {

    it('login to stageApp ', () => {

        cy.request({
            method: 'POST',
            url: `${host}/auth/sign_in/`,
            headers: {
                // 'api_access_token' : "d9Wqfjd3vfaR78tba9y2T5He"
            },
            body: {
                "email": payload.email,
                "password": payload.password,
                "sso_auth_token": payload.sso_auth_token
            }

        }).then((res) => {
            cy.log(JSON.stringify(res));
            expect(res.status).to.eq(200);
            expect(res.body.data.uid).to.eq(payload.email);
            const id = res.body.data.id;
            cy.task("dbQuery", {
                "query": `select uid from users where id = ${id};`
            }).then(queryResponse => {
                expect(JSON.stringify(queryResponse)).to.contains(payload.email)
            });
        })

    })

})