Feature: Log in

Scenario: The user is not loged in the site and introduce incorrect data
    Given An unlogged user
    When I fill the data in the form and press submit
    Then An error message should be shown in the screen

Scenario: The user introduces correct data
    Given An unlogged user
    When I fill the data in the form and press submit
    Then The home window should be shown