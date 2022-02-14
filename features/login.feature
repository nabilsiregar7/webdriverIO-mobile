Feature: Stockbit Login Scenario

  Scenario Outline: As a user, I cannot login to Stockbit due to invalid credential

    Given I am on the Stockbit login page
    When I input username <username> 
      And I input password <password>
    Then I should see error message 

    Examples:
      | username   | password | 
      | nabil      | 12345678 |
      | siregar    | pass1235 |