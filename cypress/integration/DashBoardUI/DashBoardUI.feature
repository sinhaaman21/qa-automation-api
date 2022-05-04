Feature: Dashboard UI Flows

    Scenario Outline: Login to dashboard on staging

        Given User is at the dashboard login page
        When User enters username as '<username>' and password as '<password>'
        And User clicks on login button
        Then User is able to successfully login to the dashboard
        Examples:
            | username          | password   |
            | admin@limechat.ai | wavicle123 |

    Scenario Outline: Login to dashboard on staging negative

        Given User is at the dashboard login page
        When User enters username as '<username>' and password as '<password>'
        And User clicks on login button
        Then User should remain on dashboard login page with title as '<title>'
        Examples:
            | username            | password   | title    |
            | test123@limechat.ai | wavicle123 | LimeChat |

    Scenario Outline: Login to dashboard on staging and logout

        Given User is at the dashboard login page
        When User enters username as '<username>' and password as '<password>'
        And User clicks on login button
        And User is able to successfully login to the dashboard
        And User clicks on what new popup
        And User clicks on account options
        And User clicks on logout
        Then User is succefully navigated to dashboard login page with title as '<title>'
        Examples:
            | username          | password   | title    |
            | admin@limechat.ai | wavicle123 | LimeChat |    

   Scenario Outline: Login to dashboard on staging and switch account

        Given User is at the dashboard login page
        When User enters username as '<username>' and password as '<password>'
        And User clicks on login button
        And User clicks on what new popup
        And User clicks on account options
        And User clicks on Switch Account and list of accounts are displayed
        And User selects '<accountName>' from the accounts list
        Then User should navigates to Url with id as '<id>'
        Examples:
            | username          | password   | accountName   | id |
            | admin@limechat.ai | wavicle123 | QA Automation | 61 |

    Scenario Outline: Login to dashboard and navigate to inbox list

        Given User is at the dashboard login page
        When User enters username as '<username>' and password as '<password>'
        And User clicks on login button
        And User clicks on what new popup
        And User clicks on account options
        And User clicks on Switch Account and list of accounts are displayed
        And User selects '<accountName>' from the accounts list
        Then User should navigates to Url with id as '<id>'
        And User clicks on setting -> inboxes
        Then user is navigated to inbox list page
        Examples:
            | username          | password   | accountName   | id |
            | admin@limechat.ai | wavicle123 | QA Automation | 61 |

    Scenario Outline: Login to dashboard and delete inbox

        Given User is at the dashboard login page
        When User enters username as '<username>' and password as '<password>'
        And User clicks on login button
        And User clicks on what new popup
        And User clicks on account options
        And User clicks on Switch Account and list of accounts are displayed
        And User selects '<accountName>' from the accounts list
        Then User should navigates to Url with id as '<id>'
        And User clicks on setting -> inboxes
        And user click on delete inbox icon and confirm deletion
        Then user is navigated to inbox list page
        Examples:
            | username          | password   | accountName   | id |
            | admin@limechat.ai | wavicle123 | QA Automation | 61 |
        

    Scenario Outline: Login to dashboard switch account and create inbox

        Given User is at the dashboard login page
        When User enters username as '<username>' and password as '<password>'
        And User clicks on login button
        And User clicks on what new popup
        And User clicks on account options
        And User clicks on Switch Account and list of accounts are displayed
        And User selects '<accountName>' from the accounts list
        Then User should navigates to Url with id as '<id>'
        And User clicks on setting -> inboxes
        And User clicks on Add inbox
        Then create Inbox page is displayed
        Then user clicks on LimechatOutbound channel
        And user is navigated to limechat_outbound create inbox page
        Then User add inbox details like '<channelName>' '<token>' '<appName>' and clicks on create button
        Then user is navigated to select agent page
        And user selects Agent and click on add agent
        Then user is navigated to final page with message as '<message>'
        Examples:
            | username          | password   | accountName   | id | channelName | token  | appName | message              |
            | admin@limechat.ai | wavicle123 | QA Automation | 61 | QAChannel   | testQA | QATest  | Your Inbox is ready! |

    Scenario Outline: Login to dashboard and navigates to agent list

        Given User is at the dashboard login page
        When User enters username as '<username>' and password as '<password>'
        And User clicks on login button
        And User clicks on what new popup
        And User clicks on account options
        And User clicks on Switch Account and list of accounts are displayed
        And User selects '<accountName>' from the accounts list
        Then User should navigates to Url with id as '<id>'
        And User clicks on setting -> agents
        Then user is navigated to agent list page
        Examples:
            | username          | password   | accountName   | id |
            | admin@limechat.ai | wavicle123 | QA Automation | 61 |

    Scenario Outline: Login to dashboard and delete agent

        Given User is at the dashboard login page
        When User enters username as '<username>' and password as '<password>'
        And User clicks on login button
        And User clicks on what new popup
        And User clicks on account options
        And User clicks on Switch Account and list of accounts are displayed
        And User selects '<accountName>' from the accounts list
        Then User should navigates to Url with id as '<id>'
        And User clicks on setting -> agents
        And user click on delete agent icon and confirm deletion
        Then user is navigated to agent list page
        Examples:
            | username          | password   | accountName   | id |
            | admin@limechat.ai | wavicle123 | QA Automation | 61 |        

    Scenario Outline: Login to dashboard switch account and create agent

        Given User is at the dashboard login page
        When User enters username as '<username>' and password as '<password>'
        And User clicks on login button
        And User clicks on what new popup
        And User clicks on account options
        And User clicks on Switch Account and list of accounts are displayed
        And User selects '<accountName>' from the accounts list
        Then User should navigates to Url with id as '<id>'
        And User clicks on setting -> agents
        And User clicks on Add agents
        And User add agent details like '<agentName>' '<email>' and clicks on add agent button
        Then user is navigated to agent list page
        Examples:
            | username          | password   | accountName   | id | agentName         | email       |
            | admin@limechat.ai | wavicle123 | QA Automation | 61 | QAAgentAutomation | @testQA.com |

    Scenario Outline: Login to dashboard and navigates to Tags list

        Given User is at the dashboard login page
        When User enters username as '<username>' and password as '<password>'
        And User clicks on login button
        And User clicks on what new popup
        And User clicks on account options
        And User clicks on Switch Account and list of accounts are displayed
        And User selects '<accountName>' from the accounts list
        Then User should navigates to Url with id as '<id>'
        And User clicks on setting -> Tags
        Then user is navigated to tag list page
        Examples:
            | username          | password   | accountName   | id |
            | admin@limechat.ai | wavicle123 | QA Automation | 61 |

    Scenario Outline: Login to dashboard and add a tag

        Given User is at the dashboard login page
        When User enters username as '<username>' and password as '<password>'
        And User clicks on login button
        And User clicks on what new popup
        And User clicks on account options
        And User clicks on Switch Account and list of accounts are displayed
        And User selects '<accountName>' from the accounts list
        Then User should navigates to Url with id as '<id>'
        And User clicks on setting -> Tags
        And User clicks on add tag option
        And user is navigated to add tag page and enters the details
        Then user clicks create tag button and navigates back to tag list
        Examples:
            | username          | password   | accountName   | id |
            | admin@limechat.ai | wavicle123 | QA Automation | 61 |        


    Scenario Outline: Login to dashboard and navigates to Template list

        Given User is at the dashboard login page
        When User enters username as '<username>' and password as '<password>'
        And User clicks on login button
        And User clicks on what new popup
        And User clicks on account options
        And User clicks on Switch Account and list of accounts are displayed
        And User selects '<accountName>' from the accounts list
        Then User should navigates to Url with id as '<id>'
        And User clicks on setting -> Template
        Then user is navigated to template list page
        Examples:
            | username          | password   | accountName   | id |
            | admin@limechat.ai | wavicle123 | QA Automation | 61 |        