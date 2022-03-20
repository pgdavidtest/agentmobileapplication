@android @iOS @mobile-web
Feature: Okta Authentication

  @TestCase2
  Scenario: As a user, I request MFA code

    Given I open the app 
    When I tap on the privacy policy button 
    And I enter login credential
    And I select a MFA factor
    Then I should be taken to the MFA verification screen

  @TestCase3
  Scenario: As a user, I retrieve and enter the  MFA code

    Given I retrieve the MFA code
  