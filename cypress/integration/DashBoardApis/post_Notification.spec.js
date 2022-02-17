/// <reference types = "Cypress" />
const { host, accountsIdQA, dashboardApiAccessToken } = require('../../support/constant');
const payload = require('../../fixtures/createNotification.json');

describe('Post Notification', () => {
    it('posting notification', () => {
        cy.request({
            method: 'POST',
            url: `${host}/api/v1/accounts/${accountsIdQA}/store_notifications/create_notification_limekit`,
            headers: {
                'api_access_token' : dashboardApiAccessToken
            },
            body:
            {
                "first_name": payload.first_name,
                "email": payload.email,
                "phone": payload.phone,
                "template_id": payload.template_id, // template id of template you want to send from dashboard
                "label": payload.label, //any label from dashboard
                "status": payload.status,
                "additional_attributes": {
                    "test": payload.additional_attributes.test
                },
                "contact_additional_attributes": {
                    "test": payload.contact_additional_attributes.test
                },
                "template_attributes": payload.template_attributes //comma separated array of parameters for each input box in template
            }
        }).then((res)=>{
            cy.log(JSON.stringify(res));
            expect(res.status).to.eq(200);
            expect(res.body.status).to.eq('success');
        })
    })
})