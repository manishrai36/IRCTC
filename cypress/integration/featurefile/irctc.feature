Feature: IRCTC Automation

    Scenario: HomePage
        Given visit IRCTC HomePage
        When Login to IRCTC
        And Choose From
        And Choose To
        And Select the Date
        And Submit the Details
        Then Verify Ticket is Available 