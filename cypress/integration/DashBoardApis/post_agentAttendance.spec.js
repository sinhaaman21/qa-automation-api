/// <reference types = "Cypress" />
const { host, accountsIdQA, dashboardApiAccessToken } = require('../../support/constant');
const payload = require('../../fixtures/agentAttendance.json');


describe('Attendance ', () => {

    it('Agent Attendance ', () => {

        cy.request({
            method: 'POST',
            url: `${host}/api/v1/accounts/2/integrations/attendance/attendance_metrics`,
            headers: {
                'api_access_token': dashboardApiAccessToken
            },
            body: {
                "account_id": payload.account_id,
                "start_date": payload.start_date,
                "end_date": payload.end_date,
                "in_csv": payload.in_csv
            }

        }).then((res) => {
            cy.log(JSON.stringify(res))
            expect(res.status).to.eq(200)
            expect(res.body[0].id).to.eq(7)
            expect(res.body[0].name).to.eq("Vikas Johari")
        })

    })



})