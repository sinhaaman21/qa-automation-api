/// <reference types = "Cypress" />
const {hostLimeKit} = require('../../support/constant');
const payload = require('../../fixtures/CB/createEvent.json');
import {randomTextFunction} from '../../support/commonMethods';

describe ('createAccount ', ()=>{

    it('createAccount on staging ', ()=>{
      
        cy.request({
            method : 'GET',
            url : `${hostLimeKit}/campaign_builder/v1/event/18323`,
            headers : {
                'x-limechat-access-token' : "a1"
            }

        }).then((res)=>{
            cy.log(JSON.stringify(res));
            expect(res.status).to.eq(200);
            expect(res.body.success).to.eq(true);
            // cy.task("dbQuery", {
            //     "query": `select name from accounts where name = '${accountName}';`
            // }).then(queryResponse => {
            //     expect(JSON.stringify(queryResponse)).to.contains(accountName)
            // });
            
        })

    })



})