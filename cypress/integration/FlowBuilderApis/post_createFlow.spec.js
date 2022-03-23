/// <reference types = "Cypress" />
const { hostFlowBuilder, connection_flow_builder } = require('../../support/constant');
const payload = require('../../fixtures/CB/createFlow.json');
import { randomTextFunction } from '../../support/commonMethods';
const { uuid } = require('uuidv4');


describe('create flow ', () => {

    it('create flow on staging ', () => {
        const name = randomTextFunction('QAName');
        const desc = randomTextFunction('QA_Desc');
        const startNodeId = uuid();
        const nextNode = uuid();
        cy.request({
            method: 'POST',
            url: `${hostFlowBuilder}/flow/create`,
            headers: {
                'x-limechat-access-token': "a1"
            },
            body: {
                "name": name,
                "desc": desc,
                "trigger_event": payload.trigger_event,
                "filters": payload.filters,
                "dnd_enabled": payload.dnd_enabled,
                "dnd_start_time": payload.dnd_start_time,
                "dnd_duration": payload.dnd_duration,
                "test_mode_enabled": payload.test_mode_enabled,
                "test_mode_numbers": payload.test_mode_numbers,
                "start_node_id": startNodeId,
                "flow_graph": {
                    [startNodeId]: {
                        "type": "time_delay",
                        "delay": "00 00:01:45",
                        "nextNode": nextNode
                    },
                    [nextNode]: {
                        "type": "whatsapp_message",
                        "template_id": 1,
                        "template_substitutions": [
                            {
                                "type": "data_field",
                                "field_name": "first_name"
                            }
                        ]
                    }
                }
            }
        }).then((res) => {
            //cy.log(JSON.stringify(res));
            expect(res.status).to.eq(201);
            expect(res.body.success).to.eq(true);
            cy.task("dbQuery", {
                "query": `select start_node_id from builder_flow where name = '${name}';`,
                "connection": connection_flow_builder
            }).then(queryResponse => {
                expect(JSON.stringify(queryResponse)).to.contains(startNodeId)
            });
        })
    })

    it('negative - check flow on staging with cycle in flow ', () => {
        const name = randomTextFunction('QAName');
        const desc = randomTextFunction('QA_Desc');
        const startNodeId = uuid();

        cy.request({
            method: 'POST',
            url: `${hostFlowBuilder}/flow/create`,
            failOnStatusCode: false,
            headers: {
                'x-limechat-access-token': "a1"
            },
            body: {
                "name": name,
                "desc": desc,
                "trigger_event": payload.trigger_event,
                "filters": payload.filters,
                "dnd_enabled": payload.dnd_enabled,
                "dnd_start_time": payload.dnd_start_time,
                "dnd_duration": payload.dnd_duration,
                "test_mode_enabled": payload.test_mode_enabled,
                "test_mode_numbers": payload.test_mode_numbers,
                "start_node_id": startNodeId,
                "flow_graph": {
                    [startNodeId]: {
                        "type": "time_delay",
                        "delay": "00 00:01:45",
                        "nextNode": startNodeId
                    }
                }
            }
        }).then((res) => {
            //cy.log(JSON.stringify(res));
            expect(res.status).to.eq(400);
            expect(res.body.success).to.eq(false);
            expect(JSON.stringify(res.body.errors.flow_graph)).to.contains(`"${startNodeId}: cycle in graph"`)

        })
    })
})