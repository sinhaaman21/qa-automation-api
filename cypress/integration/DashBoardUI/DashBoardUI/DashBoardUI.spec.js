import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps'
const { dashboardStageAppUrl } = require('../../../support/constant')
const { randomTextFunction, randomNumberFunction } = require('../../../support/commonMethods')
const {
    logout,
    add_tag,
    dashboard_settings,
    settings_agents,
    settings_templates,
    login_next,
    login_gotIt,
    account_name,
    switch_account,
    login_userName,
    login_password,
    login_button,
    login_p1header,
    account_options,
    settings_inboxes,
    dashboard_pullBar,
    add_inbox,
    channel_limechat,
    create_inbox_phoneNumber,
    create_inbox_token,
    create_inbox_appName,
    create_inbox_channerName,
    create_inbox_lc,
    select_agent_dropdown,
    select_agent_value,
    create_inbox_addAgent,
    inbox_create_sucess,
    add_agent,
    create_agent_name,
    create_agent_select_inbox_dropdown,
    create_agent_select_inbox_dropdown_value,
    create_agent_email,
    create_agent_addAgent,
    setting_inbox_delete,
    setting_inbox_delete_yes,
    setting_agent_delete,
    setting_agent_delete_yes,
    setting_tags,
    create_tag_name,
    create_tag_desc,
    create_tag_create_button,
    create_tag_cancel_button,
    create_template_content,
    create_template_submit,
    create_template_cancel,
    create_template_addTemp,
    create_template_shortCode,
    create_template_selectInbox_dropdown,
    create_template_selectInbox_dropdown_value
} = require(`../../../support/selectors`)

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

Given('User is at the dashboard login page', () => {
    cy.visit(`${dashboardStageAppUrl}`)
});

When('User enters username as {string} and password as {string}', (username, password) => {
    cy.xpath(login_userName).type(username)
    cy.xpath(login_password).type(password)
});

And('User clicks on login button', () => {
    cy.xpath(login_button).click()
});

And ('User clicks on logout',()=>{
    cy.xpath(account_options).click({ force: true });
    cy.xpath(logout).click();

});

And('User clicks on account options', () => {
    cy.xpath(account_options).click({ force: true })
});

And('User clicks on Switch Account and list of accounts are displayed', () => {
    cy.xpath(switch_account).click({ force: true })
});

And('User selects {string} from the accounts list', (accountName) => {
    cy.xpath(account_name).click({ force: true })
});

And('User clicks on what new popup', () => {
    cy.xpath(login_next).click();
    cy.xpath(login_next).click();
    cy.xpath(login_gotIt).click();
});

And('User clicks on setting -> inboxes', () => {
    cy.xpath(dashboard_pullBar).click();
    cy.xpath(dashboard_settings).click();
    cy.xpath(settings_inboxes).click();
});

And('User clicks on setting -> agents', () => {
    cy.xpath(dashboard_pullBar).click();
    cy.xpath(dashboard_settings).click();
    cy.xpath(settings_agents).click();
});

And('User clicks on setting -> Tags', () => {
    cy.xpath(dashboard_pullBar).click();
    cy.xpath(dashboard_settings).click();
    cy.xpath(setting_tags).click();
});

And('User clicks on setting -> Template',()=>{
    cy.xpath(dashboard_pullBar).click();
    cy.xpath(dashboard_settings).click();
    cy.xpath(settings_templates).click();
})

And('User clicks on Add agents', () => {
    cy.xpath(add_agent).click();
})

And('User clicks on Add inbox', () => {
    cy.xpath(add_inbox).click();
});

And('User clicks on add tag option',()=>{
    cy.xpath(add_tag).click();
});

And ('user is navigated to add tag page and enters the details',()=>{
    cy.xpath(create_tag_name).type(randomTextFunction('QAAutomationTag'));
    cy.xpath(create_tag_desc).type(randomTextFunction('QAAutomationTagDescription'));

});
And('user is navigated to limechat_outbound create inbox page', () => {
    cy.url().should('include', `inboxes/new/limechat_outbound`)
});

And('User add agent details like {string} {string} and clicks on add agent button',
    (agentName, email) => {
        const email1 = randomTextFunction(email);
        cy.xpath(create_agent_name).type(agentName);
        cy.xpath(create_agent_select_inbox_dropdown).click({ force: true });
        cy.xpath(create_agent_select_inbox_dropdown_value).click({ force: true });
        cy.xpath(create_agent_email).type(email1);
        cy.xpath(create_agent_addAgent).click();

    });

Then('user is navigated to agent list page', () => {
    cy.url().should('include', `settings/agents/list`);
});

Then('user is navigated to inbox list page', () => {
    cy.url().should('include', `settings/inboxes/list`);
});

Then('user is navigated to tag list page',()=>{
    cy.url().should('include', `settings/labels/list`);
});

Then('user is navigated to template list page',()=>{
    cy.url().should('include', `settings/template/list`);
});

Then('user clicks create tag button and navigates back to tag list',()=>{
    cy.xpath(create_tag_create_button).click();
    cy.url().should('include', `settings/labels/list`);
});

Then('User add inbox details like {string} {string} {string} and clicks on create button',
    (channelName, token, appName) => {
        const channelName1 = randomTextFunction(channelName);
        const phoneNumebr = randomNumberFunction('91');
        cy.xpath(create_inbox_channerName).type(channelName1);
        cy.xpath(create_inbox_phoneNumber).type(phoneNumebr);
        cy.xpath(create_inbox_token).type(token);
        cy.xpath(create_inbox_appName).type(appName);
        cy.xpath(create_inbox_lc).click();
    });

And('user selects Agent and click on add agent', () => {
    cy.xpath(select_agent_dropdown).click();
    cy.xpath(select_agent_value).click();
    cy.xpath(select_agent_dropdown).click();
    cy.xpath(create_inbox_addAgent).click();
});

And('user click on delete inbox icon and confirm deletion',()=>{
    cy.xpath(setting_inbox_delete).click();
    cy.xpath(setting_inbox_delete_yes).click();

});


And('user click on delete agent icon and confirm deletion',()=>{
    cy.xpath(setting_agent_delete).click();
    cy.xpath(setting_agent_delete_yes).click();
});

Then('user is navigated to final page with message as {string}', (message) => {
    cy.xpath(inbox_create_sucess).should('contain.text', message);
});

Then('user is navigated to select agent page', () => {
    cy.url().should('include', `/agents`);
});

Then(`create Inbox page is displayed`, () => {
    cy.url().should('include', `settings/inboxes/new`);
});

Then('user clicks on LimechatOutbound channel', () => {
    cy.xpath(channel_limechat).click();
})

Then('User is able to successfully login to the dashboard', () => {
    cy.xpath(login_p1header).should('be.visible', { timeout: 10000 });
});

Then('User should remain on dashboard login page with title as {string}', (title) => {
    cy.title().should('eq', title);
});

Then('User is succefully navigated to dashboard login page with title as {string}',(title) => {
    cy.title().should('eq', title);
});

Then('User should navigates to Url with id as {string}', (id) => {
    cy.url().should('include', `accounts/${id}/dashboard`);
});