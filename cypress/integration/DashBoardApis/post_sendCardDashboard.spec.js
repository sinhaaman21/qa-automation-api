/// <reference types = "Cypress" />
const { host, accountsIdQA, dashboardApiAccessToken } = require('../../support/constant');
const payload = require('../../fixtures/sendCard.json');

describe('send card', () => {
    it('post send card', () => {
        cy.request({
            method: 'POST',
            url: `${host}/api/v1/accounts/${accountsIdQA}/conversations/10/messages`,
            headers: {
                'api_access_token': dashboardApiAccessToken
            },
            body:
            {
                "content": payload.content,
                "content_type": payload.content_type,
                "content_attributes": {
                    "items": payload.content_attributes.items,
                    "wap_smart_message": payload.content_attributes.wap_smart_message,
                    "buttonType": payload.content_attributes.buttonType,
                    "wap_inter_button_title": payload.content_attributes.wap_inter_button_title
                }
            }
        }).then((res) => {
            cy.log(JSON.stringify(res));
            expect(res.status).to.eq(200);
            expect(res.body.status).to.eq('success');
        })
    })
})