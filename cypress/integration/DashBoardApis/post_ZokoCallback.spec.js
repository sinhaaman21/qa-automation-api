/// <reference types = "Cypress" />
const { host, dashboardApiAccessToken,accountsIdQA } = require('../../support/constant');
const payload = require('../../fixtures/ZokoCallback.json');
import { randomTextFunction }  from '../../support/commonMethods';

describe('post message to gupshup ', () => {
    const text = randomTextFunction('_QA_HelloZOKO');

    it('post message to gupshup inbox', () => {

        cy.request({
            method: 'POST',
            url: `${host}/whatsapp/zoko/callback?app_id=911234567777`,
            headers: {
                'api_access_token': dashboardApiAccessToken
            },
            body:
            {
                "senderName": payload.senderName,
                "deliveryStatus": payload.deliveryStatus,
                "direction": payload.direction,
                "event": payload.event,
                "platformSenderId": payload.platformSenderId,
                "platformTimestamp": payload.platformTimestamp,
                "text": text,
                "type": payload.type,                
                "id": payload.id
            }

        }).then((res) => {
            //cy.log(JSON.stringify(res));
            expect(res.status).to.eq(204);
            // cy.task("dbQuery", {
            //     "query": `select content from messages where account_id = ${accountsIdQA} and content like '%QA_HelloZOKO';`
            // }).then(queryResponse => {
            //     expect(JSON.stringify(queryResponse)).to.contains(text)
            // });           
        })

    })


})