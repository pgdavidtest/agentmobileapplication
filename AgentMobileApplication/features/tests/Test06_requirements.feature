@android @iOS @mobile-web
Feature: Requirements

  @TestCase1
  Scenario Outline: As a user, I want to view and verify requrements and requirement details

    Given I navigate to the case summary screen
    When I tap on a case
      | CaseAssesibilityID  |
      |  I_0003918A-Policy  | 
    And I tap on requirements
      |   Requirement       |   Sub-Requirement       |
      |  CANCELLED-Button   |   MVR-Button            |
      |  REVIEWED-Button    |   Authorization-Button  |
    Then I tap on requirement
      | SubRequirement                  |     ReqTypeValue          |     OrderedByValue      |   StatusCodeValue   |   RequestedDateValue  |   StatusDateValue   |              
      | Authorization-Button            | Authorization             | Ordered by Agent        |   Reviewed          |   05/24/2022          |   05/20/2022        |
      | Blood Profile-Button            | Blood Profile             | Ordered by Home Office  |   Reviewed          |   05/24/2022          |   05/25/2022        |
      | EIR-Button                      | EIR                       | Ordered by Home Office  |   Reviewed          |   06/06/2022          |   06/07/2022        |
      | New Business Application-Button | New Business Application  | Ordered by Agent        |   Reviewed          |   06/01/2022          |   05/25/2022        |
      | Paramedical Exam-Button         | Paramedical Exam          | Ordered by Home Office  |   Reviewed          |   06/04/2022          |   06/02/2022        |    