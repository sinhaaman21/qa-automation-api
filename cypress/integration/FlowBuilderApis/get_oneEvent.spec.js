/// <reference types = "Cypress" />
const {hostFlowBuilder, connection_flow_builder} = require('../../support/constant');

describe ('get one event ', ()=>{

    it('get event based on id ', ()=>{
      
        cy.request({
            method : 'GET',
            url : `${hostFlowBuilder}/event/1`,
            headers : {
                'x-limechat-access-token' : "a1"
            }

        }).then((res)=>{
            cy.log(JSON.stringify(res));
            expect(res.status).to.eq(200);
            expect(res.body.success).to.eq(true);
            const id = res.body.result.id;
            const name = res.body.result.data.name;
            cy.task("dbQuery", {
                "query": `select data -> 'name' as name from builder_event where id = '${id}';`,
                "connection": connection_flow_builder
            }).then(queryResponse => {
                expect(JSON.stringify(queryResponse)).to.contains(name)
            });
            
        })

    })



})