/// <reference types = "Cypress" />
const { hostFlowBuilder, connection_flow_builder } = require('../../support/constant');
const payload = require('../../fixtures/CB/createEvent.json');
const payload_flow = require("../../fixtures/CB/createFlow.json");
import { randomTextFunction } from '../../support/commonMethods';
describe('create event ', () => {

    it('create event on staging ', () => {
        const name = randomTextFunction('QAName');
        const email = randomTextFunction('QA@test.com');
        cy.request({
            method: 'POST',
            url: `${hostFlowBuilder}/event/create`,
            headers: {
                'x-limechat-access-token': "a1"
            },
            body: {
                "event_type": payload.event_type,
                "user_identity": payload.user_identity,
                "phone": payload.phone,
                "ts": payload.ts,
                "data": {
                  "name": name,
                  "email": email,
                  "first_name": payload.data.first_name,
                  "checkout_id": payload.data.checkout_id,
                  "order_id": payload.data.order_id
                }
              }
            
        }).then((res) => {
            //cy.log(JSON.stringify(res));
            expect(res.status).to.eq(201);
            expect(res.body.success).to.eq(true);
            expect(res.body.result.event_type).to.eq(payload.event_type);
            expect(res.body.result.user_identity).to.eq(payload.user_identity);
            expect(res.body.result.data.name).to.eq(name);
            expect(res.body.result.data.email).to.eq(email);
            const id = res.body.result.id
            cy.task("dbQuery", {
                "query": `select user_identity from builder_event where id = '${id}';`, 
                "connection": connection_flow_builder
            }).then(queryResponse => {
                expect(JSON.stringify(queryResponse)).to.contains(payload.user_identity);
            });
            cy.task("dbQuery", {
                "query": `select data -> 'name' as name from builder_event where id = '${id}';`, 
                "connection": connection_flow_builder
            }).then(queryResponse => {
                expect(JSON.stringify(queryResponse)).to.contains(name);
            });
        })
    })

  
})