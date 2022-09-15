package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utilities.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

public class HomePage extends Utility {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public HomePage (){
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(linkText = "Log in")
    WebElement loginLink;

    @CacheLookup
    @FindBy(linkText = "Register")
    WebElement registerLink;

    @CacheLookup
    @FindBy (xpath = "//ul[@class='top-menu notmobile']/li")
    List<WebElement> topMenuList;

    @CacheLookup
    @FindBy (linkText = "Log in")
    WebElement loginText;

    public String getLoginLinkText (){
        return getTextFromElement(loginLink);
    }

    public void clickOnLoginLink(){
        clickOnElement(loginLink);
        log.info("Clicking on Login Link : "+ loginLink.toString());
    }

    public void clickOnRegisterLink (){
        clickOnElement(registerLink);
        log.info("Clicking on Login Link :" + registerLink.toString());
    }

    public void clickOnMenuTab (String tab){
        for(WebElement menu : topMenuList){
            if(menu.getText().contains(tab)){
                clickOnElement(menu);
                break;
            }
        }
    }


}
