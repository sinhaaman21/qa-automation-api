/// <reference types = "Cypress" />
const {hostFlowBuilder, connection_flow_builder} = require('../../support/constant');
const payload = require('../../fixtures/CB/createEvent.json');
import {randomTextFunction} from '../../support/commonMethods';

describe ('get one event_type ', ()=>{

    it('get event_type based on name ', ()=>{
      
        cy.request({
            method : 'GET',
            url : `${hostFlowBuilder}/event_type/xyz1`,
            headers : {
                'x-limechat-access-token' : "a1"
            }

        }).then((res)=>{
            cy.log(JSON.stringify(res));
            expect(res.status).to.eq(200);
            expect(res.body.success).to.eq(true);
            const id = res.body.result.id;
            const name = res.body.result.name
            cy.task("dbQuery", {
                "query": `select name from builder_eventtype where id = '${id}';`,
                "connection": connection_flow_builder
            }).then(queryResponse => {
                expect(JSON.stringify(queryResponse)).to.contains(name)
            });            
        })
    })



})