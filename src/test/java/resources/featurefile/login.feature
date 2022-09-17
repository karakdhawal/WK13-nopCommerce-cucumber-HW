Feature: Login Test
  As user I want to login into nop commerce website

  Scenario: User should navigate to login page Successfully
    Given I am on Home Page
    When  I click on login link
    Then I should navigate to login page successfully and see "Welcome, Please Sign In!"

  Scenario: Verify the error message with invalid credentials
    Given I am on Home Page
    When I click on login link
    And I enter email "lordukg1@gmail.com"
    And I enter password "1234563"
    And I click on login button
    Then I should see the error "Login was unsuccessful. Please correct the errors and try again. No customer account found"

  Scenario: Verify that User should login with valid credentials
    Given I am on Home Page
    When I click on login link
    And I enter email "lorduk@gmail.com"
    And I enter password "123456"
    And I click on login button
    Then I verify that LogOut link is display

  Scenario: Verify that User should logout successfully
    Given I am on Home Page
    When I click on login link
    And I enter email "lorduk@gmail.com"
    And I enter password "123456"
    And I click on login button
    And I click on logout link
    Then I verify that login link is displayed







