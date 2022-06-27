@android @iOS @mobile-web
Feature: Okta Authentication

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
  
  #@TestCase1
  #Scenario Outline: As a user, I dont have access to app with user without access

    #Given I tap on the privacy policy Save button
    #And I am on the login page
    #When I enter No Access credentials and tap Sign In
     #| Username     | Password      | ErrorMessage                                                                                          |
     #| autonoaccess | Password1     | You currently don't have access to the Ameritas Agent app. Please contact xxx-xxx-xxxx to gain access.|
    #And I select Email MFA factor
    #And I retrieve the MFA code
    #And I enter the MFA code and tap verify
    #Then I should get no access error message
    #And I tap Cancel button on MFA verify screen

  #@TestCase2
  #Scenario Outline: As a user, I can sign in with valid credential

    #Given I am on the login page
    #When I enter valid credentials and tap Sign In
   #  | Username     | Password      |
   #  | davidauto   | Password2     |
   # Then I should be on the select MFA Screen

  #@TestCase3
  #Scenario Outline: As a user, I can tap on the Select MFA drop down
    #Given I am on the select MFA factor screen
    #When I tap on select MFA drop down button
    #Then I should see select MFA code options

  #@TestCase4
  #Scenario: As a user, I can select Text MFA factor

    #Given I am on the select MFA factor screen
    #When I tap on select MFA drop down button
    #And I select Text MFA factor
    #Then I should be taken to the Text MFA verification screen

  #@TestCase5
  #Scenario: As a user, when I enter wrong MFA factor I should get an error message

    #Given I am on the MFA verification screen
    #When I enter wrong MFA code
    #And I tap verify button
    #Then I should get wrong code error message
    #And I tap Cancel button on MFA verify screen

  #@TestCase6
  #Scenario: As a user, when I tap on Resend too quickly I should get a verification timeout error

    #Given I am on the MFA verification screen
    #When I wait 30 seconds and tap on Resend button
    #And I tap on Resend button
    #Then I should get verification timeout error
    #And I tap Cancel button on MFA verify screen



  #@TestCase7
  #Scenario: As a user, When I delay 5 minutes before verify MFA code I get expired error message

  #  Given I am on the MFA verification screen
  #  When I delay for 5 minutes and tap verification button
  #  Then I should get verification expired error

  #@TestCase7
  #Scenario: As a user, I can select Call MFA factor

    #Given I am on the login page
    #When I enter valid credentials and tap Sign In
     #| Username     | Password      |
     #| davidauto    | Password2     |
    #When I tap on select MFA drop down button
    #And I select Call MFA factor
    #Then I should be taken to the Call MFA verification screen
    #And I tap Cancel button on MFA verify screen

  @TestCase8
  Scenario: As a user, I can select Email MFA factor

    Given I tap on the privacy policy Save button
    And I am on the login page
    When I enter valid credentials and tap Sign In
     | Username     | Password      |
     | autouser     |  Password1    |
    When I tap on select MFA drop down button
    And I select Email MFA factor
    Then I should be taken to the Email MFA verification screen
    And I retrieve the MFA code
    And I enter the MFA code and tap verify
    Then I should be on the case summary screen
    #And I get the total number of cases

  #@TestCase9
  #Scenario: As a user, I can scrooll to see more cases

  #Given I am on the case summary screen
  #And I tap on the Search button
  #And I enter sear text

  @TestCase9
  Scenario: As a user, I can scrooll to see more cases

  Given I am on the case summary screen
  When I swipe up on the screen
  #Then I should see more cases

  @TestCase10
  Scenario Outline: As a user, I want to see Welcome with my first and last name displayed

    Given I am on the case summary screen
    Then I should see Welcome then my first and lastname
     | FirstName     | LastName        |
     | David         | PeluolaAutoUser |

  @TestCase11
  Scenario Outline: As a user, I want to see all filters displayed

    Given I am on the case summary screen
    Then I should see all filters

  @TestCase10
  Scenario Outline: As a user, I want to see and verify each case in the Pending bucket

    Given I am on the case summary screen
    When I tap on the Search button
    And I am on the search screen
    And I enter insured fullname, I should see the case summary
     | FirstName    |  LastName          | PolicyNumber    | Amount      |         Status        |   Filter    |
     | Alexandra    |   White            |   I_0004089A    | $275,000.00 | Pending UW            |   Pending   |
     | Annette      |   Smiley           |   I_0004088A    | $75,000.00  | Application Complete  |   Pending   |
     #| Bill         |   Snmmmmtestcasebb |   I_0003918A    | $300,000.00 | Issued and Paid       |   Pending   |
     #| Jerry        |   Arnold           |   T_0012364A    | $125,000.00 | Pending UW            |   Pending   |
     #| John         |   Livingston       |   T_0012270A    | $125,000.00 | Pending UW            |   Pending   |
     #| Matthew      |   Elfrink          |   I_0004091A    | $100,000.00 | Application Complete  |   Pending   |
     #| Matthew      |   Neuropathy       |   U_0004657A    | $150,000.00 | Pending UW            |   Pending   |
     #| Oliver       |   Trolley          |   T_0012691A    | $500,000.00 | Pending UW            |   Pending   |
     #| Riley        |   Stockhoff        |   U_0004672A    | $750,000.00 | Application Complete  |   Pending   |
     #| Tina         |   Wyatt            |   T_0012329A    | $150,000.00 | Pending UW            |   Pending   |
    

  