/// <reference types = "Cypress" />
const { host, accountsIdQA, dashboardApiAccessToken } = require('../../support/constant');
const payload = require('../../fixtures/createInbox.json');
import { randomTextFunction } from '../../support/commonMethods';



describe('post inbox ', () => {

    it('post inbox ', () => {
        const name = randomTextFunction(" TestAPI");
        cy.request({
            method: 'POST',
            url: `${host}/api/v1/accounts/${accountsIdQA}/inboxes`,
            headers: {
                'api_access_token': dashboardApiAccessToken
            },
            body: {
                "name": name, // Required
                "greeting_enabled": payload.greeting_enabled, // Optional
                "greeting_message": payload.greeting_message, // Optional
                "channel": {
                    "website_url": payload.channel.website_url, // Required,
                    "type": payload.channel.type // Required
                }
            }

        }).then((res) => {
            cy.log(JSON.stringify(res))
            expect(res.status).to.eq(200)
            expect(res.body.status).to.eq(1)
            expect(res.body.name).to.eq(name)
            const id = res.body.id
        }).then((res) => {
            const id = res.body.id
            cy.log(`inbox id created and now deleting ${id} and ${name}`);
            cy.task("dbQuery", { 
                "query": `select name from inboxes where id = ${id}` 
            }).then(queryResponse => {
                expect(JSON.stringify(queryResponse)).to.contains(name)
            });
            // cy.request({
            //     method: 'DELETE',
            // url: `https://stgapp.limechat.ai/api/v1/accounts/27/inboxes/${id}`,
            // headers: {
            //     'api_access_token': dashboardApiAccessToken
            // }
            // }).then((res) => {
            //     cy.log(JSON.stringify(res))
            //     expect(res.status).to.eq(200)
            // })
        })

    })

})