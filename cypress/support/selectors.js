const login_userName = `//input[@placeholder="Email eg: someone@example.com"]`;
const login_password = `//input[@placeholder="Password"]`;
const login_button = `//button[@name = "Login"]`;
const login_p1header = `//p[contains(text(),'LimeChat Helpdesk?')]`;
const account_options = `//span[text()="A"]`;
const switch_account = `//button[contains(text(),"Switch Account")]`;
const logout = `//a[contains(text(),"Logout")]`;
const account_name = `//div[contains(text(),"QA Automation")]`;
const login_next = `//span[text()="NEXT"]`;
const login_gotIt = `//span[text()="GOT IT!"]`;
const dashboard_settings = `//span[text()="Settings"]`;
const settings_inboxes = `//div[contains(text(),"Inboxes")]`;
const settings_agents = `//div[contains(text(),'Agents')]`;
const setting_tags = `//div[contains(text(),'Tags')]`;
const settings_templates = `//div[contains(text(),"Templates")]`;
const dashboard_pullBar = `//div[@class="tab-pull-bar"]`;
const add_inbox = `//button[@name="Add Inbox"]`;
const add_agent = `//span[contains(text(),'Add Agent')]`;
const add_tag = `//button[@name = 'Add Tag']`;
const channel_limechat = `//h5[contains(text(),"Limechat Outbound")]//preceding-sibling::div`;
const create_inbox_phoneNumber = `//input[@placeholder= 'Please enter the phone number from which message will be sent.']`;
const create_inbox_channerName=`//input[@placeholder= 'Please enter a channel name']`;
const create_inbox_token=`//input[@placeholder= "Please enter your Limechat Outbound instance Token"]`;
const create_inbox_appName=`//input[@placeholder= 'Please enter your Limechat Outbound App Name']`;
const create_inbox_lc = `//button[@name="Create LC Outbound Channel"]`;
const select_agent_dropdown = `//span[contains(text(),"Pick agents for the inbox")]`;
const select_agent_value = `//span[@class='option-name' and text()='Admin ']`;
const create_inbox_addAgent=`//span[text()='Add agents']`;
const inbox_create_sucess=`//h3[contains(text(),'Your Inbox is ready!')]`;
const create_agent_name= `//input[@placeholder="Please enter a name of the agent"]`;
const create_agent_select_inbox_dropdown = `//div//span[2][contains(text(),'Select Inbox for Agent')]`;
const create_agent_select_inbox_dropdown_value = `//span[contains(text(),'TestQA')]`;
const create_agent_email = `//input[@placeholder='Please enter an email address of the agent']`;
const create_agent_addAgent= `//div[@class="modal-footer"]/button[@name='Add Agent']`;
const setting_inbox_delete = `//*[@id="app"]/div[1]/section/div/div[2]/div/div[1]/div[2]/table/tbody/tr[1]/td[3]/div/div[2]/span`;
const setting_inbox_delete_yes= `//span[contains(text(),'Yes, Delete')]`;
const setting_agent_delete = `//*[@id="app"]/div[1]/section/div/div[2]/div/div[1]/div[2]/table/tbody/tr[3]/td[3]/div/div[2]/span`;
const setting_agent_delete_yes = `//span[contains(text(),'Yes, Delete')]`;
const create_tag_name = `//input[@placeholder="Tag name"]`;
const create_tag_desc =`//textarea[@placeholder="Tag Description"]`;
const create_tag_create_button = `//button[@name="Create"]`;
const create_tag_cancel_button = `//button[contains(text(),"Cancel")]`;
const create_template_addTemp = `//span[contains(text(),"Add Template Message")]`;
const create_template_shortCode= `//input[@placeholder="Please enter a shortcode"]`;
const create_template_selectInbox_dropdown = `//span[contains(text(),"Select an Inbox")]`;
const create_template_selectInbox_dropdown_value = `//span[contains(text(),"TestQA ")]`;
const create_template_content = `//textarea[@placeholder="Please enter a content"]`;
const create_template_submit = `//button[@name="Submit"]`;
const create_template_cancel = `//button[contains(text(),"Cancel")]`; 





export default {
    logout,
    create_template_content,
    create_template_submit,
    create_template_cancel,
    create_template_addTemp,
    create_template_shortCode,
    create_template_selectInbox_dropdown,
    create_template_selectInbox_dropdown_value,
    settings_templates,
    create_tag_name,
    create_tag_desc,
    create_tag_create_button,
    create_tag_cancel_button,
    add_tag,
    setting_tags,
    create_agent_name,
    setting_agent_delete,
    setting_agent_delete_yes,
    setting_inbox_delete,
    setting_inbox_delete_yes,
    create_agent_select_inbox_dropdown,
    create_agent_select_inbox_dropdown_value,
    create_agent_email,
    create_agent_addAgent,
    add_agent,
    inbox_create_sucess,
    select_agent_dropdown,
    create_inbox_addAgent,
    select_agent_value,
    create_inbox_lc,
    create_inbox_token,
    create_inbox_appName,
    create_inbox_channerName,
    create_inbox_phoneNumber,
    add_inbox,
    login_userName,
    login_password,
    login_button,
    login_p1header,
    account_options,
    switch_account,
    account_name,
    login_next,
    login_gotIt,
    dashboard_settings,
    settings_inboxes,
    dashboard_pullBar,
    channel_limechat,
    settings_agents,
    
};