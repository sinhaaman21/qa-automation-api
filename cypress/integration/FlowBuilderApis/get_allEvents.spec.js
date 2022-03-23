/// <reference types = "Cypress" />
const {hostFlowBuilder, connection_flow_builder} = require('../../support/constant');


describe ('get events ', ()=>{

    it('fetch all events', ()=>{
      
        cy.request({
            method : 'GET',
            url : `${hostFlowBuilder}/event`,
            headers : {
                'x-limechat-access-token' : "a1"
            }

        }).then((res)=>{
            //cy.log(JSON.stringify(res));
            expect(res.status).to.eq(200);
            expect(res.body.success).to.eq(true);
            const id = res.body.result[0].id;
            const userIdentity = res.body.result[0].user_identity;
            cy.task("dbQuery", {
                "query": `select user_identity from builder_event where id = '${id}';`,
                "connection": connection_flow_builder
            }).then(queryResponse => {
                expect(JSON.stringify(queryResponse)).to.contains(userIdentity)
            });
            
        })

    })



})