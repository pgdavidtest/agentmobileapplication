@android @iOS @mobile-web
Feature: Login

  @TestCase1
  Scenario Outline: As a user, I can open Terms and Policies from more Icon

    Given I am on the login page
    When I tap on the more icon
    Then I should see the Terms and Policies

  @TestCase2
  Scenario Outline: As a user, I can tap and open App Privacy 

    Given The more option is opened
    When I tap on App Privacy
    And I tap on the back button
    Then I should be on the login screen

  #@TestCase
  #Scenario Outline: As a user, I can tap and open Ameritas Online Privacy Notice

    #Given I am on the login page
    #When I tap on the more icon
    #And I tap on Ameritas Online Privacy Notice
    #And I close the browser
  
  @TestCase3
  Scenario Outline: As a user, I can tap and open Diclosure scree

    Given I am on the login page
    When I tap on the more icon
    And I tap on Disclosures
    And I tap on Disclosures back button
    Then I should be on the login screen

  @TestCase4
  Scenario Outline: As a user, I can tap on Cancel

    Given I am on the login page
    When I tap on the more icon
    And I tap on Cancel
    Then I should be on the login screen

  @TestCase5
  Scenario Outline: As a user, I can not sign in with invalid credential

    Given I am on the login page
    When I check the state of the loginButton
    #And I accept terms and condition
    And I enter invalid credentials, and tap Sign In
      | Username    | Password      | ErrorMessage                                                                                  |
      |             |               | Your submitted information is incorrect. Please try again with a valid username and password. |
      |             | Ameritas@2022 | Your submitted information is incorrect. Please try again with a valid username and password. |
      | davidp      |               | Your submitted information is incorrect. Please try again with a valid username and password. |
      | davidp      | password      | Your submitted information is incorrect. Please try again with a valid username and password. |
      | test        | Ameritas@2022 | Your submitted information is incorrect. Please try again with a valid username and password. |
      | lockeduser  | lockedPass    | Your submitted information is incorrect. Please try again with a valid username and password. |
    Then I should be on the login screen

  #@TestCase6
  #Scenario Outline: As a user, I can not sign in with a suspended user

    #Given I am on the login page
    #When I enter suspended user credentials and tap Sign In
     #| Username        | Password      | ErrorMessage                                                                                  |
     #| suspendeduser   | Password1     | Your submitted information is incorrect. Please try again with a valid username and password. |
    #Then I should get locked user error message

  #@TestCase7
  #Scenario Outline: As a user, I can not sign in when wifi is off
    #Given I am on the login page
    #And I toggle wifi
    #When I enter invalid credentials, and tap Sign In
      #| Username    | Password      | ErrorMessage                                                                                  |
      #|             |               | Your submitted information is incorrect. Please try again with a valid username and password. |
      #Then I should be on the login screen
      #And I toggle wifi


  #@TestCase3
  #Scenario Outline: As a user, I can sign in with valid credential

    #Given I am on the login page
    #When I enter valid credentials without access, accept terms and tap Sign In
    # | Username   | Password      |
    # | davidautono  | Password1     |
    #Then I should be on the MFA Screen


  @TestCase6
  Scenario Outline: As a user, I dont have access to app with user without access

    Given I am on the login page
    When I enter No Access credentials and tap Sign In
     | Username     | Password      | ErrorMessage                                                                                          |
     | autonoaccess | Password1     | You currently don't have access to the Ameritas Agent app. Please contact xxx-xxx-xxxx to gain access.|
    And I select Email MFA factor
    And I retrieve the MFA code
    And I enter the MFA code and tap verify
    Then I should get no access error message

  @TestCase7
  Scenario Outline: As a user, I can sign in with valid credential

    Given I am on the login page
    When I enter valid credentials and tap Sign In
     | Username     | Password      |
     | autouser     | Password1     |
    Then I should be on the select MFA Screen
    And I tap cancel on select MFA screen