@android @iOS @mobile-web
Feature: Okta Authentication

  @TestCase1
  Scenario Outline: As a user, I can tap on the Select MFA drop down

    Given I am on the login page
    When I enter valid credentials and tap Sign In
     | Username     | Password      |
     | autouser     | Password1     |
    When I tap on select MFA drop down button
    Then I should see select MFA code options

  @TestCase2
  Scenario: As a user, I can select Text MFA factor

    Given I am on the select MFA factor screen
    When I tap on select MFA drop down button
    And I select Text MFA factor
    Then I should be taken to the Text MFA verification screen

  @TestCase3
  Scenario: As a user, when I enter wrong MFA factor I should get an error message

    Given I am on the MFA verification screen
    When I enter wrong MFA code
    And I tap verify button
    Then I should get wrong code error message
    #And I tap cancel button on MFA verify screen

  @TestCase4
  Scenario: As a user, when I tap on Resend too quickly I should get a verification timeout error

    Given I am on the MFA verification screen
    When I wait 30 seconds and tap on Resend button
    And I tap on Resend button
    Then I should get verification timeout error
    And I tap Cancel button on MFA verify screen

    @TestCase5
  Scenario: As a user, I can select Call MFA factor

    Given I am on the login page
    When I enter valid credentials and tap Sign In
     | Username     | Password      |
     | autouser     | Password1     |
    When I tap on select MFA drop down button
    And I select Call MFA factor
    Then I should be taken to the Call MFA verification screen
    And I tap Cancel button on MFA verify screen

  @TestCase6
  Scenario: As a user, I can select Email MFA factor

    Given I am on the login page
    When I enter valid credentials and tap Sign In
     | Username     | Password      |
     | autouser     | Password1     |
    When I tap on select MFA drop down button
    And I select Email MFA factor
    Then I should be taken to the Email MFA verification screen
    And I retrieve the MFA code
    And I enter the MFA code and tap verify
    Then I should be on the case summary screen
    And I get the total number of cases

  #@TestCase5
  #Scenario: As a user, I retrieve and enter the  MFA code with credential without access

    #Given I retrieve the MFA code
    #When I enter the MFA code and tap verify
    #Then I should get error message
    

  #@TestCase6
  #Scenario: As a user, I click on cancel on MFA verify screen

    #Given I tap Cancel button on MFA verify screen
    #Then I should be on the login screen


  #@TestCase4
  #Scenario: As a user, I retrieve and enter the  MFA code

    #Given I retrieve the MFA code
    #When I enter the MFA code for an authorize user and tap verify
    #Then I should be on the app home screen


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



    