package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.HomePage;
import com.nopcommerce.demo.pages.LoginPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;


public class LoginStepdefs {
    @Given("^I am on Home Page$")
    public void iAmOnHomePage() {

    }

    @When("^I click on login link$")
    public void iClickOnLoginLink() {
        new HomePage().clickOnLoginLink();
    }

    @Then("^I should navigate to login page successfully and see \"([^\"]*)\"$")
    public void iShouldNavigateToLoginPageSuccessfullyAndSee(String welcomeText) {
        Assert.assertEquals(welcomeText, new LoginPage().getWelcomeText());
    }

    @And("^I enter email \"([^\"]*)\"$")
    public void iEnterEmail(String email) {
        new LoginPage().enterEmailId(email);
    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String password) {
        new LoginPage().enterPassword(password);
    }

    @And("^I click on login button$")
    public void iClickOnLoginButton() {
        new LoginPage().clickOnLoginButton();
    }

//    @Then("^I should see the error \"([^\"]*)\"$")
//    public void iShouldSeeTheErrorMessage(String message) {
////        String actualMes = new LoginPage().();
////       // System.out.println(actualMes);
////        Assert.assertEquals(errorMessage, actualMes);
//        String errorMessage=new LoginPage().getErrorMessage();
//        Assert.assertEquals(message,errorMessage);
//
//    }

//    @Then("^I should see error \"([^\"]*)\"$")
//    public void iShouldSeeError(String message) {
//        String errorMessage=new LoginPage().getErrorMessage();
//        Assert.assertEquals(message,errorMessage);
//    }

    @Then("^I verify login successfully$")
    public void iVerifyLoginSuccessfully() throws InterruptedException {
        String logOutText = new LoginPage().getLogOutText();
        Assert.assertEquals(logOutText, "Log out");
    }

//    @Then("^I should see the error \"([^\"]*)\"$")
//    public void iShouldSeeTheError(String message){
//        String errorMessage = new LoginPage().getErrorMessage();
//        Assert.assertEquals(message, errorMessage);
//    }

//    @Then("^I should see the error message$")
//    public void iShouldSeeTheErrorMessage() {
//        String errorMessage = new LoginPage().getErrorMessage();
//        Assert.assertEquals(errorMessage, "Login was unsuccessful. Please correct the errors and try again.\nNo customer account found ");
//    }

    @Then("^I verify that LogOut link is display$")
    public void iVerifyThatLogOutLinkIsDisplay() throws InterruptedException {
        String logOutText = new LoginPage().getLogOutText();
        Assert.assertEquals(logOutText, "Log out");
    }



    @Then("^I verify that login link is displayed$")
    public void iVerifyThatLoginLinkIsDisplayed() {
        String loginLink = new HomePage().getLoginLinkText();
        Assert.assertEquals(loginLink, "Log in");
    }

    @And("^I click on logout link$")
    public void iClickOnLogoutLink() throws InterruptedException {
        new LoginPage().clickOnLogOutButton();
    }

    @Then("^I should see the error \"([^\"]*)\"$")
    public void iShouldSeeTheError(String message){
        String errorMessage = new LoginPage().getErrorMessage();
    //    String message = "Login was unsuccessful. Please correct the errors and try again.\\nNo customer account found";
        Assert.assertEquals(errorMessage, "Login was unsuccessful. Please correct the errors and try again.\n" +
                "No customer account found");
    }
}
