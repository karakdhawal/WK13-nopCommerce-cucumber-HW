package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utilities.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ComputerPage extends Utility {
    private static final Logger log = LogManager.getLogger(LoginPage.class.getName());

    public ComputerPage (){
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy (xpath = "//ul[@class='top-menu notmobile']/li[1]/a[1]")
    WebElement computer;

    @CacheLookup
    @FindBy (xpath = "//div[@class='page-title']/h1[1]")
    WebElement computerText;

    @CacheLookup
    @FindBy (xpath = "//div[@class='item-grid']/div[1]/div[1]/h2[1]/a[1]")
    WebElement desktop;

    public void clickOnDesktop (){
        clickOnElement(desktop);
    }

    public String verifyComputerText (){
        return getTextFromElement(computerText);
    }
    public void computerHeaderMenu (){
        clickOnElement(computer);
    }




}
