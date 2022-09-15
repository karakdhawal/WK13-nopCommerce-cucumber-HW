package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utilities.Utility;
import gherkin.lexer.Th;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class LoginPage extends Utility {
    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    public LoginPage (){
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy (xpath = "//div[@class='page-title']/h1")
    WebElement welcomeText;

    @CacheLookup
    @FindBy (xpath = "//input[@id='Email']")
    WebElement emailField;

    @CacheLookup
    @FindBy (xpath = "//input[@id='Password']")
    WebElement passwordField;

    @CacheLookup
    @FindBy (xpath = "//button[@class='button-1 login-button']")
    WebElement loginButton;

    @CacheLookup
    @FindBy (xpath = "//div[@class='message-error validation-summary-errors']")
    WebElement errorMessage;
    @CacheLookup
    @FindBy (className = "ico-logout")
    WebElement logoutLink;

    @CacheLookup
    @FindBy (xpath = "//div[@class='header-links']/ul[1]/li[2]/a[1]")
    WebElement logOutButton;




    public void clickOnLogOutButton () throws InterruptedException {
        Thread.sleep(1000);
        clickOnElement(logOutButton);
    }
    public String getLogOutText () throws InterruptedException {
        Thread.sleep(1000);
        return getTextFromElement(logOutButton);
    }
    public String getErrorMessage() {
        return getTextFromElement(errorMessage);
//        String mes = getTextFromElement(errorMessage);
//        System.out.println(mes);
//        log.info("Getting Error message : " + getErrorMessage().toString());
//        return mes;

    }

    public void clickOnLoginButton (){
        clickOnElement(loginButton);
    }
    public void enterPassword (String password){
        sendTextToElement(passwordField, password);
    }
    public void enterEmailId (String email){
        sendTextToElement(emailField, email);
    }
    public String getWelcomeText (){
        String mes = getTextFromElement(welcomeText);
        log.info("Getting text from : " + welcomeText.toString());
        return mes;
    }
}
