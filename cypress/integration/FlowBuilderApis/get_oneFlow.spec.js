/// <reference types = "Cypress" />
const {hostFlowBuilder, connection_flow_builder} = require('../../support/constant');


describe ('get one flow ', ()=>{

    it('fetch one flow based on id', ()=>{
      
        cy.request({
            method : 'GET',
            url : `${hostFlowBuilder}/flow/23`,
            headers : {
                'x-limechat-access-token' : "a1"
            }

        }).then((res)=>{
            //cy.log(JSON.stringify(res));
            expect(res.status).to.eq(200);
            expect(res.body.success).to.eq(true);
            const id = res.body.result.id;
            const startNodeId = res.body.result.start_node_id;
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