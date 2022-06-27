@android @iOS @mobile-web
Feature: Privacy Policy

  @TestCase1
  Scenario: As a user, I can launch the app

    Given I launch the app for the first time
    When I lock device
    And I unlock device
    Then I should be on the App Privacy Screen

  @TestCase2
  Scenario: As a user, I can toggle the Capture Performance Data button

    Given I am on the App Privacy screen
    When I toggle off the Capture Performance Data button
    And I toggle on the Capture Performance Data button 
    Then The Capture Performance Data button should be on

  @TestCase3
  Scenario: As a user, I can toggle the Anonymize Performance Data button

    Given I am on the App Privacy screen
    When I toggle on the Anonymize Performance Data button
    And I toggle off the Anonymize Performance Data button 
    Then The Anonymize Performance Data button should be off

  @TestCase4
  Scenario: As a user, I can toggle the Crash Reporting button

    Given I am on the App Privacy screen
    When I toggle off the Crash Reporting button
    And I toggle on the Crash Reporting button 
    Then The Crash Reporting button should be on

  @TestCase5
  Scenario: As a user, I can navigate to the login screen from App privacy screen
    
    Given I am on the App Privacy screen
    And I tap on the privacy policy Save button
    Then I should be on the login screen
    #And I close the app