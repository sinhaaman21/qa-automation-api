/// <reference types = "Cypress" />
const {host, dashboardApiAccessToken} = require('../../support/constant');
const payload = require('../../fixtures/gupshupCallback.json');
import { randomTextFunction }  from '../../support/commonMethods';

describe ('post message to gupshup ', ()=>{
    const text = randomTextFunction('_QA_HelloG');

    it('post message to gupshup inbox', ()=>{

        cy.request({
            method : 'POST',
            url : `${host}/whatsapp/gupshup/callback`,
            headers : {
                'api_access_token' : dashboardApiAccessToken
            },
            body : 
            {
                "app": payload.app,
                "timestamp": payload.timestamp,
                "version": payload.version,
                "type": payload.type,
                "payload":{
                    "id": payload.payload.id,
                    "source": payload.payload.source,
                    "type": payload.payload.type,
                    "payload":{
                        "text": text
                    },
                    "sender":{
                        "phone": payload.payload.sender.phone,
                        "name": payload.payload.sender.name,
                        "country_code": payload.payload.sender.country_code,
                        "dial_code": payload.payload.sender.dial_code
                    }
                }
            }

        }).then((res)=>{
            cy.log(JSON.stringify(res))
            expect(res.status).to.eq(204)
            cy.task("dbQuery", {
                "query": `select content from messages where account_id = '27' and content like '%QA_HelloG';`
            }).then(queryResponse => {
                expect(JSON.stringify(queryResponse)).to.contains(text)
            });
        })

    })


})