/// <reference types = "Cypress" />
const {host, dashboardApiAccessToken} = require('../../support/constant');
const payload = require('../../fixtures/ACLCallback.json');
import { randomTextFunction }  from '../../support/commonMethods';

describe ('post message to gupshup ', ()=>{
    const text = randomTextFunction('_QA_HelloACL');

    it('post message to gupshup inbox', ()=>{

        cy.request({
            method : 'POST',
            url : `${host}/whatsapp/acl/callback`,
            headers : {
                'api_access_token' : dashboardApiAccessToken
            },
            body : 
            {
                "message": {
                    "from": payload.message.from,
                    "id": payload.message.id,
                    "text":{
                        "body" : text
                    },
                    "to": payload.message.to,
                    "type": payload.message.type,
                    "timestamp": payload.message.timestamp
                }
            }

        }).then((res)=>{
            cy.log(JSON.stringify(res));
            expect(res.status).to.eq(200);
            expect(res.body.status).to.eq("success");
            cy.task("dbQuery", {
                "query": `select content from messages where account_id = '27' and content like '%QA_HelloACL';`
            }).then(queryResponse => {
                expect(JSON.stringify(queryResponse)).to.contains(text)
            });
            
        })

    })


})