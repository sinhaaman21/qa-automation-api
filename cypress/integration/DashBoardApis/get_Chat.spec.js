/// <reference types = "Cypress" />
const {host, accountsIdQA, dashboardApiAccessToken, conversationsId} = require('../../support/constant');

describe ('get chat', ()=>{

    it('get chat data', ()=>{

        cy.request({
            method : 'GET',
            url : `${host}/api/v1/accounts/${accountsIdQA}/conversations/${conversationsId}`,
            headers : {
                'api_access_token' : dashboardApiAccessToken
            }
        }).then((res)=>{
            //cy.log(JSON.stringify(res))
            expect(res.status).to.eq(200)
            expect(res.body.meta.sender.name).to.eq("amansinha")
            const messageId = res.body.messages[0].id;
            const messageContent = res.body.messages[0].content
            cy.log(`${messageId} and ${messageContent}`);
            cy.task("dbQuery", {
                "query": `select content from messages where id = ${messageId};`
            }).then(queryResponse => {
                expect(JSON.stringify(queryResponse)).to.contains(messageContent)
            });
        })


    })


})