const login_userName = `//input[@placeholder="Email eg: someone@example.com"]`;
const login_password = `//input[@placeholder="Password"]`;
const login_button = `//button[@name = "Login"]`;
const login_p1header = `//p[contains(text(),'LimeChat Helpdesk?')]`;
const account_options = `//span[text()="A"]`;
const switch_account = `//button[contains(text(),"Switch Account")]`;
const logout = `//a[contains(text(),"Logout")]`;
const account_name = `//div[contains(text(),"QA Automation")]`;
const login_whatsNew_cancel = `//*[@id="app"]/div[1]/div[2]/div/span/span`;
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
const add_template = `//span[contains(text(),"Add Template Message")]`;
const create_template_shortCode= `//input[@placeholder="Please enter a shortcode"]`;
const create_template_selectInbox_dropdown = `//span[contains(text(),"Select an Inbox")]`;
const create_template_selectInbox_dropdown_value = `//span[contains(text(),"TestQA ")]`;
const create_template_content = `//textarea[@placeholder="Please enter a content"]`;
const create_template_submit = `//button[@name="Submit"]`;
const create_template_cancel = `//button[contains(text(),"Cancel")]`; 
const settings_templates_delete = `//*[@id="app"]/div[1]/section/div/div[2]/div/div[1]/div[2]/table/tbody/tr[1]/td[5]/div/div[2]/span`;
const settings_templates_delete_yes = `//span[contains(text(),"Yes, Delete")]`;
const settings_templates_delete_cancel = `//button[contains(text(),"No, Keep")]`;
const tickets_status_dropdown = `//span[@class="selected-option"]`;
const tickets_status_dropdown_open= `//span[text()="open "]`;
const tickets_status_dropdown_resolved = `//span[text()="resolved "]`;
const tickets_status_dropdown_followup= `//span[text()="followup "]`;
const tickets_status_dropdown_waiting= `//span[text()="waiting "]`;
const tickets_status_dropdown_bot= `//span[text()="bot "]`;
const tickets_status_dropdown_closed= `//span[text()="closed "]`;
const tickets_status_dropdown_outbound= `//span[text()="outbound "]`;
const settings_tickets = `//span[text()="Tickets"]`;
const inbox_qa_gupshup_stared = `//span[contains(text(),"STARRED")]`;
const dashboard_inboxes = `//span[contains(text(),"Inboxes")]`;
const inbox_qa_gupshup = `//div[contains(text(),"QA_GE_Automation")]`;
const inbox_qa_gupshup_reply = `//a[contains(text(),"Reply")]`;
const inbox_qa_gupshup_textarea = `//textarea[@placeholder="Shift + enter for new line. Start with '/' to select a Canned Response."]`;
const inbox_qa_gupshup_send = `//span[contains(text(),"Send")]`;
const inbox_qa_gupshup_message = `//p[text()="hi"]`;
const inbox_search=`//div[contains(text(),"Search for messages")]`;
const inbox_search_text=`//input[@placeholder="Type any text to search messages"]`;
const inbox_searched_conversation = `//*[@id="app"]/div[1]/section/section/div[1]/div[1]/div[2]/div/div[2]/div[2]/div/button[1]`;
const inbox_assigned_all = `//span[text()="All"]`;
const inbox_qa_gupshup_notes = `//a[contains(text(),"Private Note")]`;
const inbox_qa_gupshup_template = `//a[contains(text(),"Template")]`;
const inbox_qa_gupshup_notes_textarea = `//textarea[@placeholder="Shift + enter for new line. This will be visible only to Agents."]`;
const inbox_qa_gupshup_notes_save = `//*[@id="app"]/div[1]/section/section/div[2]/div/div[2]/div/div[2]/button`;
const inbox_qa_gupshup_template_select = `//a[contains(text(),"Message from UI Automation test")]`;
const inbox_qa_gupshup_qa4 = `//span[contains(text(),"QA 4")]`;
const inbox_qa_gupshup_addtags = `//button[@type="submit" and @name="Add Tags"]`;
const inbox_qa_gupshup_selectTag = `//*[@id="357"]/div[1]/div/div`;
const inbox_qa_gupshup_selectTag_close = `//*[@id="app"]/div[1]/section/section/div[3]/div/div[3]/div[2]/div/div[1]/div/span/span`;
const inbox_qa_gupshup_contactEdit = `//*[@id="app"]/div[1]/section/section/div[3]/div/div[1]/div/div/div[1]/button/span`;
const inbox_qa_gupshup_contactEdit_email = `//input[@placeholder="Enter the email address of the contact"]`;
const inbox_qa_gupshup_contactEdit_Bio = `//textarea[@placeholder="Enter the bio of the contact"]`;
const inbox_qa_gupshup_contactEdit_submit = `//button[@name="Submit"]`;
const inbox_qa_gupshup_contactEdit_close = `//*[@id="app"]/div[1]/section/section/div[3]/div/div[1]/div/div/div[3]/div/span/span`;
const inbox_qa_gupshup_previousTickets = `//span[contains(text(),"Previous Tickets")]`;
const inbox_qa_gupshup_previousTickets_select = `//*[@id="app"]/div[1]/section/section/div[3]/div/div[2]/div[2]/div/div/div/div/div`;

export default {
    logout,
    inbox_qa_gupshup_previousTickets,
    inbox_qa_gupshup_previousTickets_select,
    inbox_qa_gupshup_contactEdit,
    inbox_qa_gupshup_contactEdit_email,
    inbox_qa_gupshup_contactEdit_Bio,
    inbox_qa_gupshup_contactEdit_submit,
    inbox_qa_gupshup_contactEdit_close,
    inbox_qa_gupshup_addtags,
    inbox_qa_gupshup_selectTag,
    inbox_qa_gupshup_selectTag_close,
    inbox_qa_gupshup_notes,
    inbox_qa_gupshup_qa4,
    inbox_qa_gupshup_template,
    inbox_qa_gupshup_notes_textarea,
    inbox_qa_gupshup_notes_save,
    inbox_qa_gupshup_template_select, 
    inbox_assigned_all,
    inbox_search,
    inbox_search_text,
    inbox_searched_conversation,
    inbox_qa_gupshup_stared,
    dashboard_inboxes,
    inbox_qa_gupshup,
    inbox_qa_gupshup_reply,
    inbox_qa_gupshup_textarea,
    inbox_qa_gupshup_send,
    inbox_qa_gupshup_message,
    settings_tickets,
    tickets_status_dropdown,
    settings_templates_delete,
    settings_templates_delete_yes,
    settings_templates_delete_cancel,
    create_template_content,
    create_template_submit,
    create_template_cancel,
    add_template,
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
    login_whatsNew_cancel,
    login_gotIt,
    dashboard_settings,
    settings_inboxes,
    dashboard_pullBar,
    channel_limechat,
    settings_agents,
};