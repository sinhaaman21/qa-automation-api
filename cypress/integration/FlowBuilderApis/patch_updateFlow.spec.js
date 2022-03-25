/// <reference types = "Cypress" />
const { hostFlowBuilder, connection_flow_builder, flowId } = require('../../support/constant');
const payload = require('../../fixtures/CB/patchFlow.json');
import { randomTextFunction } from '../../support/commonMethods';


describe('update flow ', () => {

    it('update flow on staging ', () => {
        const name = randomTextFunction('QAName');
       
        cy.request({
            method: 'PATCH',
            url: `${hostFlowBuilder}/flow/${flowId}`,
            headers: {
                'x-limechat-access-token': "a1"
            },
            body: {
                "name": name,
                "is_active": payload.is_active,
                "trigger_event": payload.trigger_event,
                "filters": payload.filters,
                "dnd_enabled": payload.dnd_enabled,
                "dnd_start_time": payload.dnd_start_time,
                "dnd_duration": payload.dnd_duration,
                "test_mode_enabled": payload.test_mode_enabled,
                "test_mode_numbers": payload.test_mode_numbers
            }

        }).then((res) => {
            //cy.log(JSON.stringify(res));
            expect(res.status).to.eq(200);
            expect(res.body.success).to.eq(true);
            const name = res.body.result.name
            cy.task("dbQuery", {
                "query": `select name from builder_flow where id = ${flowId};`,
                "connection": connection_flow_builder
            }).then(queryResponse => {
                expect(JSON.stringify(queryResponse)).to.contains(name)
            });
        })
    })




})