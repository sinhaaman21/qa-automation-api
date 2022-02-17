/// <reference types = "Cypress" />
const {host} = require('../../support/constant');
const payload = require('../../fixtures/createAccount');
import {randomTextFunction} from '../../support/commonMethods';

describe ('createAccount ', ()=>{

    it('createAccount on staging ', ()=>{
        const accountName = randomTextFunction('_QAAccountAPI');
        const email = randomTextFunction('QA@gmail.com');
        cy.request({
            method : 'POST',
            url : `${host}/api/v1/accounts.json`,
            headers : {
               // 'api_access_token' : "d9Wqfjd3vfaR78tba9y2T5He"
            },
            body : {
                "email": email, 
                "account_name": accountName, 
                "user_full_name": payload.user_full_name,
                "plan": payload.plan,
                "password" : payload.password
            }

        }).then((res)=>{
            cy.log(JSON.stringify(res));
            expect(res.status).to.eq(200);
            cy.task("dbQuery", {
                "query": `select name from accounts where name = '${accountName}';`
            }).then(queryResponse => {
                expect(JSON.stringify(queryResponse)).to.contains(accountName)
            });
            
        })

    })



})