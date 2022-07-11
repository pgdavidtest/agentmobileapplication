@android @iOS @mobile-web
Feature: Case Summary

  @TestCase1
  Scenario Outline: As a user, I want to see Welcome with my first and last name displayed

    Given I am on the case summary screen
    Then I should see Welcome then my first and lastname
     | FirstName     | LastName    |
     | Paul          | Lawless     |

  @TestCase2
  Scenario: As a user, I can scroll to see more cases

    Given I am on the case summary screen
    When I swipe up on the screen

  @TestCase3
  Scenario Outline: As a user, I want to see all filters displayed

    Given I am on the case summary screen
    Then I should see all filters

  @TestCase4
  Scenario Outline: As a user, I want to see Welcome with my first and last name displayed

    Given I am on the case summary screen
    When I enter valid credentials and tap Sign In
     | Username     | Password      |
     | autouser     | Password1     |
    When I tap on select MFA drop down button
    Then I should see select MFA code options

  @TestCase5
  Scenario Outline: As a user, I want to see and verify each case in the Pending bucket

    Given I am on the case summary screen
    When I tap on the Search button
    And I am on the search screen
    And I enter insured fullname, I should see the case summary
     | FirstName    |  LastName          | PolicyNumber    | Amount         |         Status                  |   Filter      |
     | Alexandra    |   White            |   I_0004089A    | $275,000.00    | Pending UW                      |   Pending     |
     | Annette      |   Smiley           |   I_0004088A    | $75,000.00     | Application Complete            |   Pending     |
     | Bill         |   Snmmmmtestcasebb |   I_0003918A    | $300,000.00    | Issued and Paid                 |   Pending     |
     | Jerry        |   Arnold           |   T_0012364A    | $125,000.00    | Pending UW                      |   Pending     |
     | John         |   Livingston       |   T_0012270A    | $125,000.00    | Pending UW                      |   Pending     |
     | Matthew      |   Elfrink          |   I_0004091A    | $100,000.00    | Application Complete            |   Pending     |
     | Matthew      |   Neuropathy       |   U_0004657A    | $150,000.00    | Pending UW                      |   Pending     |
     | Oliver       |   Trolley          |   T_0012691A    | $500,000.00    | Pending UW                      |   Pending     |
     | Riley        |   Stockhoff        |   U_0004672A    | $750,000.00    | Application Complete            |   Pending     |
     | Tina         |   Wyatt            |   T_0012329A    | $150,000.00    | Pending UW                      |   Pending     |
     | Jane         |   Doe              |   L_1004560A    | $100,000.00    | Issued and Paid                 |   Issued      |
     | Judge        |   Judy             |   U_0003894A    | $500,000.00    | Pending UW                      |   Issued      |
     | Mobile       |   Application      |   I_0004651A    | $10,000,000.00 | Issued Pending Delivery Unpaid  |   Issued      |
     | Amy          |   Fowler           |   U_0004146A    | $250,000.00    | Pending UW                      |   Not Placed  |
     | Marie        |   Antoinette       |   T_0012045A    | $300,000.00    | Pending UW                      |   Not Placed  |
     | Willow       |   Danan            |   U_0004148A    | $250,000.00    | Pending UW                      |   Not Placed  |
     | Willow       |   Lucy             |   U_0004142A    | $250,000.00    | Pending UW                      |   Not Placed  |

  @TestCase6
  Scenario Outline: As a user, I want to view cases in the Issued bucket

    Given I navigate to the case summary screen
    When I tap on the Issued filter
    Then I should seee the Issued cases

  @TestCase7
  Scenario Outline: As a user, I want to view cases in the Not Placed bucket

    Given I am on the case summary screen
    When I tap on the Not Placed filter
    Then I should see the Not Placed cases

  @TestCase8
  Scenario Outline: As a user, I want to view cases in the All bucket

    Given I am on the case summary screen
    When I tap on the All filter
    Then I should see the All cases

  @TestCase9
  Scenario Outline: As a user, I want to navigate to case details page and back

    Given I am on the case summary screen
    When I tap on the Issued filter
    And I tap on the Pending filter
    And I tap on a case
      | CaseAssesibilityID  |
      | I_0004089A-Policy   |  
    And I tap on the case details back button