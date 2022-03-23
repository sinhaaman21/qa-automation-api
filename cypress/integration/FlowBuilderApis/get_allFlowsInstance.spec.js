/// <reference types = "Cypress" />
const {hostFlowBuilder, connection_flow_builder} = require('../../support/constant');

describe ('get all Flow instance ', ()=>{

    it('fetch all flow instance ', ()=>{      
        cy.request({
            method : 'GET',
            url : `${hostFlowBuilder}/flow_instance`,
            headers : {
                'x-limechat-access-token' : "a1"
            }

        }).then((res)=>{
            //cy.log(JSON.stringify(res));
            expect(res.status).to.eq(200);
            expect(res.body.success).to.eq(true);
            for (let i = 0; i < res.body.result.length; i++) {
                // cy.log(res.body.payload[i].name );
                // !!!need to fix the duplicate database connection warning 
                cy.task("dbQuery", {
                    "query": `select last_node from builder_flowinstance where id = ${res.body.result[i].id};`,
                    "connection" : connection_flow_builder
                }).then(queryResponse => {
                    expect(JSON.stringify(queryResponse)).to.contains(res.body.result[i].last_node)
                });
            }
            
        })

    })



})