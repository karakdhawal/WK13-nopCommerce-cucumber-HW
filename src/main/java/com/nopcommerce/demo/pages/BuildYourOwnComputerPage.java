package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utilities.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class BuildYourOwnComputerPage extends Utility {
    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    public BuildYourOwnComputerPage (){
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy (xpath = "//select[@id='product_attribute_1']")
    WebElement processorDropDown;

    @CacheLookup
    @FindBy(xpath = "//select[@id='product_attribute_2']")
    WebElement ramDropDown;

//    @CacheLookup
//    @FindBy()

    public void selectRam (String ram){
        selectByVisibleTextFromDropDown(ramDropDown, ram);
    }
    public void selectProcessor (String processor){
        selectByVisibleTextFromDropDown(processorDropDown, processor);
    }

}
