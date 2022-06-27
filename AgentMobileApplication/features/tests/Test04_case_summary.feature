@android @iOS @mobile-web
Feature: Case Summary Screen

  @TestCase1
  Scenario Outline: As a user, I want to see Welcome with my first and last name displayed

    Given I am on the case summary screen
    Then I should see Welcome then my first and lastname
     | FirstName     | LastName    |
     | Paul          | Lawless     |

  @TestCase2
  Scenario Outline: As a user, I want to see all filters displayed

    Given I am on the case summary screen
    Then I should see all filters

@TestCase2
  Scenario Outline: As a user, I want to see Welcome with my first and last name displayed

    Given I am on the case summary screen
    When I enter valid credentials and tap Sign In
     | Username     | Password      |
     | autouser     | Password1     |
    When I tap on select MFA drop down button
    Then I should see select MFA code options