Feature: Calculator
    As a user of application
    I want to calculate the sum of the two numbers
    So that I can view result of calculation

    Scenario: Sum of the two numbers
        Given I am on the start page
        When I go to the calculate
        When I fill first value "1" and second "2"
        Then I click "Calculate"
        Then I should see "3" result of calculation
