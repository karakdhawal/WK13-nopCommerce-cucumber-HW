package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utilities.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class DesktopsPage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public DesktopsPage (){
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy (xpath = "//div[@class='page-title']/h1[1]")
    WebElement desktopText;

    @CacheLookup
    @FindBy (xpath = "//div[@class='products-wrapper']/div[1]/div[1]/div[1]/div[1]/div[2]/h2[1]/a[1]")
    WebElement buildYourOwnComputer;

    public void clickonBuildYourOwnComputer (){
        clickOnElement(buildYourOwnComputer);
    }

    public String verifyDesktopText (){
        return getTextFromElement(desktopText);
    }

}
