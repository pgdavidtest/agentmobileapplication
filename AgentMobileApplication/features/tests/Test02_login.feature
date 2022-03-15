@android @iOS @mobile-web
Feature: Login

  @TestCase2
  Scenario Outline: As an user, I can not sign in with invalid credential

    Given I am on the login page
    When I check the state of the loginButton and term toggleButton
    And I accept terms and condition
    And I enter invalid credentials, accept terms and tap Sign In
      | Username | Password      | ErrorMessage                                                                                        |
      |          |               | Server responded with error: The 'username' and 'password' attributes are required in this context. |
      |          | Ameritas@2022 | Server responded with error: The 'username' and 'password' attributes are required in this context. |
      | davidp   |               | Server responded with error: The 'username' and 'password' attributes are required in this context. |
      | davidp   | password      | Server responded with error: Authentication failed                                                  |
      | test     | Ameritas@2022 | Server responded with error: Authentication failed                                                  |
    Then I should be on the login screen


  #@TestCase3
  Scenario Outline: As an user, I can sign in with valid credential

    Given I am on the login page
    When I enter valid credentials, accept terms and tap Sign In
     | Username | Password      |
     | davidp   | Ameritas@2022 |
    Then I should be on the MFA Screen