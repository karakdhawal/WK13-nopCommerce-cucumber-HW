Feature: Register

  Scenario: Verify user should navigate to register page successfully
    Given I am on Home Page
    When I click on Register link
    Then I verify Register Text

  Scenario: Verify that first name, Last name, email address and confirm password fields are mandatory
    Given I am on Home Page
    When I click on Register link
    And I click on Register Button
    Then I verify the error message

    Scenario: Verify that user should create account successfully
      Given I am on Home Page
      When I click on Register link
      And I select gender female
      And I enter firstname
      And I enter lastname
      And I select day
      And I select month
      And I select year
      And I enter emailf "lorduk@gmail.com"
      And I enter passwordf "123456"
      And I enter confirm password "123456"
      And I click on Register Button
      Then I verify message Your registration completed