/// <reference types = "Cypress" />
const {hostFlowBuilder, connection_flow_builder, flowInstanceID} = require('../../support/constant');
const payload = require('../../fixtures/CB/createEvent.json');
import {randomTextFunction} from '../../support/commonMethods';

describe ('get one Flow instance', ()=>{

    it('fetch one flow instance based on id', ()=>{
      
        cy.request({
            method : 'GET',
            url : `${hostFlowBuilder}/flow_instance/${flowInstanceID}`,
            headers : {
                'x-limechat-access-token' : "a1"
            }

        }).then((res)=>{
            //cy.log(JSON.stringify(res));
            expect(res.status).to.eq(200);
            expect(res.body.success).to.eq(true);
            cy.task("dbQuery", {
                "query": `select last_node from builder_flowinstance where id = ${res.body.result.id};`,
                "connection" : connection_flow_builder
            }).then(queryResponse => {
                expect(JSON.stringify(queryResponse)).to.contains(res.body.result.last_node)
            });
            
        })

    })



})