/// <reference types = "Cypress" />
const { hostFlowBuilder, connection_flow_builder } = require('../../support/constant');

describe('get all flows ', () => {

    it('fetch all flows ', () => {

        cy.request({
            method: 'GET',
            url: `${hostFlowBuilder}/flow`,
            headers: {
                'x-limechat-access-token': "a1"
            }

        }).then((res) => {
            //cy.log(JSON.stringify(res));
            expect(res.status).to.eq(200);
            expect(res.body.success).to.eq(true);
            const id = res.body.result[0].id;
            const startNodeId = res.body.result[0].start_node_id;
            cy.task("dbQuery", {
                "query": `Select start_node_id from builder_flow WHERE ID = ${id}`,
                "connection": connection_flow_builder
            }).then(queryResponse => {
                expect(JSON.stringify(queryResponse)).to.contains(startNodeId);
                console.log(queryResponse);
            });
        })
    })
})