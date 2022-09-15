package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utilities.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class RegisterPage extends Utility {
    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    public RegisterPage (){
        PageFactory.initElements(driver, this);
    }
    @CacheLookup
    @FindBy (xpath = "//div[@class='page-title']/h1")
    WebElement registerText;

    @CacheLookup
    @FindBy (xpath = "//div[@class='buttons']/button[1]")
    WebElement registerButton;

    @CacheLookup
    @FindBy (xpath = "//span[@id='FirstName-error']")
    WebElement firstNameError;

    @CacheLookup
    @FindBy (xpath = "//span[@id='LastName-error']")
    WebElement lastNameError;

    @CacheLookup
    @FindBy (xpath = "//span[@id='Email-error']")
    WebElement emailError;

    @CacheLookup
    @FindBy (xpath = "//span[@id='Password-error']")
    WebElement passwordError;

    @CacheLookup
    @FindBy (xpath = "//span[@id='ConfirmPassword-error']")
    WebElement confirmPWError;

    @CacheLookup
    @FindBy (xpath = "//input[@id='gender-female']")
    WebElement femaleRadioButton;

    @CacheLookup
    @FindBy (xpath = "//input[@id='FirstName']")
    WebElement firstName;

    @CacheLookup
    @FindBy (xpath = "//input[@id='LastName']")
    WebElement lastName;

    @CacheLookup
    @FindBy (xpath = "//select[@name='DateOfBirthDay']")
    WebElement selectDay;

    @CacheLookup
    @FindBy (xpath = "//select[@name='DateOfBirthMonth']")
    WebElement selectMonth;

    @CacheLookup
    @FindBy (xpath = "//select[@name='DateOfBirthYear']")
    WebElement selectYear;

    @CacheLookup
    @FindBy (xpath = "//input[@id='Email']")
    WebElement email;

    @CacheLookup
    @FindBy (xpath = "//input[@id='Password']")
    WebElement password;

    @CacheLookup
    @FindBy (xpath = "//input[@id='ConfirmPassword']")
    WebElement confirmPassword;

    @CacheLookup
    @FindBy (xpath = "//div[@class='result']")
    WebElement registrationCompleteText;

    public String registrationCompleteText (){
        return getTextFromElement(registrationCompleteText);
    }
    public void enterConfirmPassword (){
        sendTextToElement(confirmPassword, "123456");
    }
    public void enterPassword (){
        sendTextToElement(password, "123456");
    }
    public void enterEmail (){
        sendTextToElement(email, "lorduk1@gmail.com");
    }

    public void selectYear (){
        selectByValueFromDropDown(selectYear, "1985");
    }
    public void selectMonth (){
        selectByValueFromDropDown(selectMonth, "2");
    }
    public void selectDay (){
        selectByValueFromDropDown(selectDay, "1");
    }
    public void enterLastName (){
        sendTextToElement(lastName, "uk");
    }
    public void enterFirstName (){
        sendTextToElement(firstName, "lord");
    }

    public void clickOnFemaleRadioButton (){
        clickOnElement(femaleRadioButton);
    }

    public String verifyConPasswordError (){
        return getTextFromElement(confirmPWError);
    }

    public String verifyPasswordError (){
        return getTextFromElement(passwordError);
    }

    public String verifyEmailError (){
        return getTextFromElement(emailError);
    }
    public String verifyLastNameError (){
        return getTextFromElement(lastNameError);
    }
    public String verifyFirstNameError (){
        return getTextFromElement(firstNameError);
    }

    public void clickOnregisterButton (){
        clickOnElement(registerButton);
    }


    public String getRegisterText (){
        return getTextFromElement(registerText);
    }

}
