package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.HomePage;
import com.nopcommerce.demo.pages.RegisterPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class RegisterStepdefs {
    @When("^I click on Register link$")
    public void iClickOnRegisterLink() {

        new HomePage().clickOnRegisterLink();

    }

    @Then("^I verify Register Text$")
    public void iVerifyRegisterText() throws InterruptedException {
        Thread.sleep(1000);
        String registerText = new RegisterPage().getRegisterText();
        String actual = "Register";
        Assert.assertEquals(registerText, actual );
    }

    @And("^I click on Register Button$")
    public void iClickOnRegisterButton() {
        new RegisterPage().clickOnregisterButton();
    }

    @Then("^I verify the error message$")
    public void iVerifyTheErrorMessage() {
        String firstNameError = new RegisterPage().verifyFirstNameError();
        Assert.assertEquals(firstNameError, "First name is required.");
        String lastNameError = new RegisterPage().verifyLastNameError();
        Assert.assertEquals(lastNameError, "Last name is required.");
        String emailError = new RegisterPage().verifyEmailError();
        Assert.assertEquals(emailError, "Email is required.");
        String passwordError = new RegisterPage().verifyPasswordError();
        Assert.assertEquals(passwordError, "Password is required.");
        String confirmPassError = new RegisterPage().verifyConPasswordError();
        Assert.assertEquals(confirmPassError, "Password is required.");

    }

    @And("^I select gender female$")
    public void iSelectGenderFemale() {
        new RegisterPage().clickOnFemaleRadioButton();
    }

    @And("^I enter firstname$")
    public void iEnterFirstname() {
        new RegisterPage().enterFirstName();
    }

    @And("^I enter lastname$")
    public void iEnterLastname() {
        new RegisterPage().enterLastName();
    }

    @And("^I select day$")
    public void iSelectDay() {
        new RegisterPage().selectDay();
    }

    @And("^I select month$")
    public void iSelectMonth() {
        new RegisterPage().selectMonth();
    }

    @And("^I select year$")
    public void iSelectYear() {
        new RegisterPage().selectYear();
    }

    @And("^I enter emailf \"([^\"]*)\"$")
    public void iEnterEmailf(String email){
        new RegisterPage().enterEmail();
    }

    @And("^I enter passwordf \"([^\"]*)\"$")
    public void iEnterPasswordf(String password){
        new RegisterPage().enterPassword();
    }


    @Then("^I verify message Your registration completed$")
    public void iVerifyMessageYourRegistrationCompleted() {
        String registrationComplete = new RegisterPage().registrationCompleteText();
    }

    @And("^I enter confirm password \"([^\"]*)\"$")
    public void iEnterConfirmPassword(String confirmPassword) {
        new RegisterPage().enterConfirmPassword();
    }
}
