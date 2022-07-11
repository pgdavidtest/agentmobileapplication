@android @iOS @mobile-web
Feature: Proofile

  @TestCase1
  Scenario: As a user, I can navigate to the Profile page
  
    Given I navigate to the profile page
    Then I should be on the profile page 

  @TestCase2
  Scenario: As a user, I want to verify that my UserID is displayed

    Given I am on the profile page
    Then My userID should be displayed
      |   UserID    |
      | autouser    |

  @TestCase3
  Scenario: As a user, I want to verify that my fullname is displayed

    Given I am on the profile page
    Then My full name should be displayed
      |   FullName                |
      |   David PeluolaAutoUser   |
  @TestCase4
  Scenario: As a user, I want to verify that my Agent Number is displayed

    Given I am on the profile page
    Then My agent number should be displayed
      |   AgentNumber   |
      |   AG0MBLAUTO    |

  #@TestCase5
  #Scenario: As a user, I navigate to App Privacy from profile page

    #Given I am on the profile page
    #When I tap on App Privacy Option button
    #Then I should be on the App Privacy page 
    #And I return to the profile page 

  @TestCase5
  Scenario: As a user, I 

    Given I am on the profile page
    Then I can see the App Privacy Button

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