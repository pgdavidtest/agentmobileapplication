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
    Given the push notification allert pops up
    And I accept push notification
    And I tap on the privacy policy Save button
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
  Scenario: As a user, I can scroll to see more cases

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

  #@TestCase12
  #Scenario Outline: As a user, I want to see and verify each case in the Pending bucket

    #Given I am on the case summary screen
    #When I tap on the Search button
    #And I am on the search screen
    #And I enter insured fullname, I should see the case summary
     #| FirstName    |  LastName          | PolicyNumber    | Amount         |         Status                  |   Filter      |
     #| Alexandra    |   White            |   I_0004089A              | $275,000.00    | Pending UW                      |   Pending     |
     #| Annette      |   Smiley           |   I_0004088A    | $75,000.00     | Application Complete            |   Pending     |
     #| Bill         |   Snmmmmtestcasebb |   I_0003918A    | $300,000.00    | Issued and Paid                 |   Pending     |
     #| Jerry        |   Arnold           |   T_0012364A    | $125,000.00    | Pending UW                      |   Pending     |
     #| John         |   Livingston       |   T_0012270A    | $125,000.00    | Pending UW                      |   Pending     |
     #| Matthew      |   Elfrink          |   I_0004091A    | $100,000.00    | Application Complete            |   Pending     |
     #| Matthew      |   Neuropathy       |   U_0004657A    | $150,000.00    | Pending UW                      |   Pending     |
     #| Oliver       |   Trolley          |   T_0012691A    | $500,000.00    | Pending UW                      |   Pending     |
     #| Riley        |   Stockhoff        |   U_0004672A    | $750,000.00    | Application Complete            |   Pending     |
     #| Tina         |   Wyatt            |   T_0012329A    | $150,000.00    | Pending UW                      |   Pending     |
     #| Jane         |   Doe              |   L_1004560A    | $100,000.00    | Issued and Paid                 |   Issued      |
     #| Judge        |   Judy             |   U_0003894A    | $500,000.00    | Pending UW                      |   Issued      |
     #| Mobile       |   Application      |   I_0004651A    | $10,000,000.00 | Issued Pending Delivery Unpaid  |   Issued      |
     #| Amy          |   Fowler           |   U_0004146A    | $250,000.00    | Pending UW                      |   Not Placed  |
     #| Marie        |   Antoinette       |   T_0012045A    | $300,000.00    | Pending UW                      |   Not Placed  |
     #| Willow       |   Danan            |   U_0004148A    | $250,000.00    | Pending UW                      |   Not Placed  |
     #| Willow       |   Lucy             |   U_0004142A    | $250,000.00    | Pending UW                      |   Not Placed  |




  #@TestCase13
  #Scenario Outline: As a user, I want to view cases in the Issued bucket

    #Given I navigate to the case summary screen
    #When I tap on the Issued filter
    #Then I should seee the Issued cases

     
  #@TestCase15
  #Scenario Outline: As a user, I want to view cases in the Not Placed bucket

    #Given I am on the case summary screen
    #When I tap on the Not Placed filter
    #Then I should see the Not Placed cases

  #@TestCase17
  #Scenario Outline: As a user, I want to view cases in the All bucket

    #Given I am on the case summary screen
    #When I tap on the All filter
    #Then I should see the All cases

  @TestCase11
  Scenario Outline: As a user, I want to navigate to case details page and back

    Given I am on the case summary screen
    When I tap on the Issued filter
    And I tap on the Pending filter
    And I tap on a case
      | CaseAssesibilityID  |
      | I_0004089A-Policy   |  
    And I tap on the case details back button
    #Then I should be on the case summary screen

  #@TestCase12
  #Scenario Outline: As a user, I want to validate the case details

    #Given I am on the case summary screen
    #When I tap on the Search button
    #And I am on the search screen 
    #Then I enter inssured name, click oon the case then I should see the case details
     #| FullName                | PolicyType                     | PolicyNumber    | Amount         |         Status                  |   Filter      |  Commission  |      Requirement1      |      Requirement2     |     Requirement3      |     Requirement4      |     Underwriter       |    CustomerService    |    
     #| Alexandra White         | Value Plus Index UL            |   I_0004089A    | $275,000.00    | Pending UW                      |   Pending     |    100%      |  PENDING MISSING DATA  |   RECEIVED            |   REVIEWED            |                       |   Keith Beckman       |   Debi Noonan         |
     #| Annette Smiley          | Ameritas Growth Index UL       |   I_0004088A    | $75,000.00     | Application Complete            |   Pending     |    100%      |  RECEIVED              |   REVIEWED            |                       |                       |                       |   Tina Schanie        |
     #| Bill Snmmmmtestcasebb   | Ameritas Growth Index UL       |   I_0003918A    | $300,000.00    | Issued and Paid                 |   Pending     |     50%      |  CANCELLED             |   REVIEWED            |                       |                       |   Gary Strine         |   Sarah Boggs         |
     #| Jerry Arnold            | Value Plus Term 20             |   T_0012364A    | $125,000.00    | Pending UW                      |   Pending     |    100%      |  ORDERED               |   REQUIRED            |   REVIEWED            |                       |   Keith Beckman       |   Debi Noonan         |
     #| John Livingston         | Value Plus Term 15             |   T_0012270A    | $125,000.00    | Pending UW                      |   Pending     |    100%      |  ORDERED               |   REQUIRED            |   REVIEWED            |                       |   Keith Beckman       |   Cheryl Barth        |
     #| Matthew Elfrink         | Ameritas Growth Index UL       |   I_0004091A    | $100,000.00    | Application Complete            |   Pending     |    100%      |  RECEIVED              |   REVIEWED            |                       |                       |                       |   Kira Filipovich     |
     #| Matthew Neuropathy      | Ameritas Value Plus UL         |   U_0004657A    | $150,000.00    | Pending UW                      |   Pending     |    100%      |  PENDING MISSING DATA  |   RECEIVED            |   REVIEWED            |                       |   Keith Beckman       |   Tina Schanie        |
     #| Oliver Trolley          | Value Plus Term 10             |   T_0012691A    | $500,000.00    | Pending UW                      |   Pending     |    100%      |  ORDERED               |   REVIEWED            |                       |                       |   Keith Beckman       |   QA Model CSR        |
     #| Riley Stockhoff         | Ameritas Value Plus UL         |   U_0004672A    | $750,000.00    | Application Complete            |   Pending     |    100%      |  RECEIVED              |   REVIEWED            |                       |                       |                       |   Tina Schanie        |
     #| Tina Wyatt              | Value Plus Term 15             |   T_0012329A    | $150,000.00    | Pending UW                      |   Pending     |    100%      |  ORDERED               |   RECEIVED            |   REQUIRED            |    REVIEWED           |    Keith Beckman      |   Debi Noonan         |
     #| Jane Doe                | Ameritas Value Plus Whole Life |   L_1004560A    | $100,000.00    | Issued and Paid                 |   Issued      |    100%      |                        |                       |                       |                       |                       |                       |
     #| Judge Judy              | Ameritas Value Plus UL         |   U_0003894A    | $500,000.00    | Pending UW                      |   Issued      |    100%      |  ORDERED               |                       |                       |                       |    Keith Beckman      |   Tina Schanie        |
     #| Mobile Application      | Ameritas Growth Index UL       |   I_0004651A    | $10,000,000.00 | Issued Pending Delivery Unpaid  |   Issued      |    100%      |  ORDERED               |   RECEIVED            |                       |                       |    Keith Beckman      |   Jessica Vanhook     |
     #| Amy Fowler              | Ameritas Value Plus UL         |   U_0004146A    | $250,000.00    | Pending UW                      |   Not Placed  |    100%      |  RECEIVED              |   REQUIRED            |    REVIEWED           |                       |                       |   Debi Noonan         |
     #| Marie Antoinette        | Value Plus Term 30             |   T_0012045A    | $300,000.00    | Pending UW                      |   Not Placed  |    25%       |  ORDERED               |   RECEIVED            |    REVIEWED           |                       |    Carol Schueler     |   Sarah Boggs         |
     #| Willow Danan            | Ameritas Value Plus UL         |   U_0004148A    | $250,000.00    | Pending UW                      |   Not Placed  |    100%      |  RECEIVED              |   REVIEWED            |                       |                       |                       |   Tina Schanie        |
     #| Willow Lucy             | Ameritas Value Plus UL         |   U_0004142A    | $250,000.00    | Pending UW                      |   Not Placed  |    100%      |  RECEIVED              |   REQUIRED            |    REVIEWED           |                       |                       |   Debi Noonan         |


  #@TestCase12
  #Scenario Outline: As a user, I want to view and verify requrements and requirement details

    #Given I navigate to the case summary screen
    #When I tap on a case
      #| CaseAssesibilityID  |
      #|  I_0003918A-Policy  | 
    #And I tap on requirements
      #|   Requirement       |   Sub-Requirement       |
      #|  CANCELLED-Button   |   MVR-Button            |
      #|  REVIEWED-Button    |   Authorization-Button  |
    #Then I tap on requirement
      #| SubRequirement                  |     ReqTypeValue          |     OrderedByValue      |   StatusCodeValue   |   RequestedDateValue  |   StatusDateValue   |              
      #| Authorization-Button            | Authorization             | Ordered by Agent        |   Reviewed          |   05/24/2022          |   05/20/2022        |
      #| Blood Profile-Button            | Blood Profile             | Ordered by Home Office  |   Reviewed          |   05/24/2022          |   05/25/2022        |
      #| EIR-Button                      | EIR                       | Ordered by Home Office  |   Reviewed          |   06/06/2022          |   06/07/2022        |
      #| New Business Application-Button | New Business Application  | Ordered by Agent        |   Reviewed          |   06/01/2022          |   05/25/2022        |
      #| Paramedical Exam-Button         | Paramedical Exam          | Ordered by Home Office  |   Reviewed          |   06/04/2022          |   06/02/2022        | 




### Profile Page testing starts here
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
  

  