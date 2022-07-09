@android @iOS @mobile-web
Feature: Okta Authentication

  @TestCase1
  Scenario: As a user, I can navigate to the Profile page
  
    Given I tap on the profile icon
    Then I should be on the profile page 

  @TestCase2
  Scenario: As a user, I want to verify that my UserID is displayed

    Given I am on the profile page
    Then my userID should be displayed

  @TestCase3
  Scenario: As a user, I want to verify that my fullname is displayed

    Given I am on the profile page
    Then my full name should be displayed

  @TestCase4
  Scenario: As a user, I want to verify that my Agent Number is displayed

    Given I am on the profile page
    Then my agent number should be displayed

  @TestCase5
  Scenario: As a user, I navigate to App Privacy from profile page

    Given I am on the profile page
    When I tap on App Privacy
    Then I should be on the App Privacy page 
    And I return to the profile page 

  @TestCase6
  Scenario: As a user, app information on the profile page

    Given I am on the profile page
    Then I should see the app information

  @TestCase7
  Scenario: As a user, I can put the app in the background and relaunch

    Given I am on the profile page
    Then I put the app in the background for 5 seconds and relaunch   

  @TestCase8
  Scenario: As a user, I can logout from the app

    Given I am on the profile page
    When I tap on logout
    Then I should be on the login screen   