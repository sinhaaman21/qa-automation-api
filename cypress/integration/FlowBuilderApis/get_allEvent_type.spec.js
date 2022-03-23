/// <reference types = "Cypress" />
const { hostFlowBuilder, connection_flow_builder } = require('../../support/constant');

describe('get all event_type ', () => {

    it('fetch all event_type ', () => {

        cy.request({
            method: 'GET',
            url: `${hostFlowBuilder}/event_type`,
            headers: {
                'x-limechat-access-token': "a1"
            }

        }).then((res) => {
            //cy.log(JSON.stringify(res));
            expect(res.status).to.eq(200);
            expect(res.body.success).to.eq(true);
            const id = res.body.result[2].id;
            const name = res.body.result[2].name
            cy.task("dbQuery", {
                "query": `select name from builder_eventtype where id = '${id}';`,
                "connection": connection_flow_builder
            }).then(queryResponse => {
                expect(JSON.stringify(queryResponse)).to.contains(name)
            });

        })

    })



})