@android @iOS @mobile-web
Feature: Okta Authentication

  @TestCase1
  Scenario: As a user, I can select MFA factor

    Given I am on the select MFA factor screen
    When I select a MFA factor
    Then I should be taken to the MFA verification screen

  @TestCase2
  Scenario: As a user, I retrieve and enter the  MFA code

    Given I retrieve the MFA code
    When I enter the MFA code and tap verify
    Then I should be on the app home screen


  #@TestCase2
  #Scenario: As a user, I request MFA code

    #Given I open the app
    #When I tap on the privacy policy button
    #And I enter login credential
    #And I select a MFA factor
    #Then I should be taken to the MFA verification screen

  #@TestCase3
  #Scenario: As a user, I retrieve and enter the  MFA code

    #Given I retrieve the MFA code
    #When I enter the MFA code and tap verify
    #Then I should be taken to the MFA verification screen



    