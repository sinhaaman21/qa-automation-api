/// <reference types = "Cypress" />
const {host, dashboardApiAccessToken} = require('../../support/constant');
const payload = require('../../fixtures/gupshupEnterpriseCallback.json');
import { randomTextFunction }  from '../../support/commonMethods';

describe ('post message to gupshupEnterprise ', ()=>{

    const text = randomTextFunction('_QA_HelloGE');
    it('post message ', ()=>{

        cy.request({
            method : 'POST',
            url : `${host}/whatsapp/gupshup_enterprise/callback`,
            headers : {
                'api_access_token' : dashboardApiAccessToken
            },
            body : 
            {
                "waNumber": payload.waNumber,
                "mobile": payload.mobile,
                "name": payload.name,
                "replyId": payload.replyId,
                "text": text,
                "type": payload.type,
                "timestamp": payload.timestamp
            }

        }).then((res)=>{
            cy.log(JSON.stringify(res))
            expect(res.status).to.eq(204)
            cy.task("dbQuery", {
                "query": `select content from messages where account_id = '27' and content like '%QA_HelloGE';`
            }).then(queryResponse => {
                expect(JSON.stringify(queryResponse)).to.contains(text)
            });
        })

    })

})