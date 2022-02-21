/// <reference types = "Cypress" />
const {hostLimeKit} = require('../../support/constant');
const payload = require('../../fixtures/CB/createEvent.json');
import {randomTextFunction} from '../../support/commonMethods';

describe ('createAccount ', ()=>{

    it('createAccount on staging ', ()=>{
       // const accountName = randomTextFunction('_QAAccountAPI');
        //const email = randomTextFunction('QA@gmail.com');
        cy.request({
            method : 'POST',
            url : `${hostLimeKit}/campaign_builder/v1/event/create`,
            headers : {
                'x-limechat-access-token' : "a1"
            },
            body : {
                "event_type": payload.event_type,
                "data": {
                    "phone": payload.data.phone,
                    "user_identity": payload.data.user_identity,
                    "name": payload.data.name,
                    "email": payload.data.email,
                    "first_name": payload.data.first_name,
                    "checkout_id": payload.data.checkout_id,
                    "order_id": payload.data.order_id,
                    "ts": payload.data.ts,
                    "order": payload.data.order
                }
            }

        }).then((res)=>{
            cy.log(JSON.stringify(res));
            expect(res.status).to.eq(201);
            expect(res.body.success).to.eq(true);
            // cy.task("dbQuery", {
            //     "query": `select name from accounts where name = '${accountName}';`
            // }).then(queryResponse => {
            //     expect(JSON.stringify(queryResponse)).to.contains(accountName)
            // });
            
        })

    })



})