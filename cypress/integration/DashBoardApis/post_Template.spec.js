
/// <reference types = "Cypress" />
const {host, accountsIdQA, dashboardApiAccessToken} = require('../../support/constant');
const payload = require('../../fixtures/createTemplate.json');
import { randomTextFunction }  from '../../support/commonMethods';


describe ('Create Template ', ()=>{

    it('Create Template ', ()=>{
        const shortCode = randomTextFunction('_QAAutomationShortCode')
        cy.request({
            method : 'POST',
            url : `${host}/api/v1/accounts/${accountsIdQA}/templates`,
            headers : {
                'api_access_token' : dashboardApiAccessToken
            },
            body : 
            {
                "short_code": shortCode,
                "content": payload.content,
                "inbox_id": payload.inbox_id,
                "template_attributes": payload.template_attributes
            }

        }).then((res)=>{
            cy.log(JSON.stringify(res));
            expect(res.status).to.eq(200);
            expect(res.body.account_id).to.eq(accountsIdQA)
            expect(res.body.inbox_id).to.eq(parseInt(payload.inbox_id))
            const id = res.body.id
            //console.log(id)
            cy.log(`id = ${id} and shortCode = ${shortCode}`);
            cy.task("dbQuery",{
                "query" : `select short_code from templates where id = ${id};`
            }).then(queryResponse => {
                expect(JSON.stringify(queryResponse)).to.contains(shortCode)
            });
        })
    })
})