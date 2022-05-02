Feature: Dashboard Login

    Scenario Outline: Login to dashboard on staging

        Given User is at the dashboard login page
        When User enters username as '<username>' and password as '<password>'
        And User clicks on login button
        Then User is able to successfully login to the dashboard
        Examples:
            | username              | password |
            | admin@limechat.ai     | wavicle123 |
