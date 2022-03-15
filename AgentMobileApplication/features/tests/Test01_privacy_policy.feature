@android @iOS @mobile-web
Feature: Privacy Policy

  @TestCase1
  Scenario: As an user, I can privacy policy page

    Given I open the app
    When I lock device
    And I unlock device
    And I validate the privacy notice page
    And I tap on the privacy policy button
    Then I should be on the login screen
    And I close the app