package com.nopcommerce.demo.pages;

import com.nopcommerce.demo.utilities.Utility;
import cucumber.api.java.zh_cn.假如;
import gherkin.lexer.Th;
import org.apache.commons.exec.OS;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import java.util.List;

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

    @CacheLookup
    @FindBy(xpath = "//dd[@id='product_attribute_input_3']/ul[1]/li/label")
    List<WebElement>hddradioButton;

    @CacheLookup
    @FindBy (xpath = "//dd[@id='product_attribute_input_3']//ul//li/label")
    List<WebElement>OSradioButtons;

    @CacheLookup
    @FindBy (xpath = "//input[@id='product_attribute_5_10']")
    WebElement msOfficeChcekbox;

    //product_attribute_input_5
    @CacheLookup
    @FindBy (xpath = "//dd[@id='product_attribute_input_5']/ul[1]/li/label")
    List<WebElement> softwareSelect;

    @CacheLookup
    @FindBy (xpath = "//button[@id='add-to-cart-button-1']")
    WebElement addToCartButton;

    @CacheLookup
    @FindBy (xpath = "//div[@id='bar-notification']/div[1]/p[1]")
    WebElement addToShoppingcartText;

    public String verifyMesTheProductHasBeenAddedToYourShoppingCart (){
        return getTextFromElement(addToShoppingcartText);
    }

    public void clickOnAddToCartButton (){
        clickOnElement(addToCartButton);
    }

    public void selectSoftware (String Software) throws InterruptedException {
        clickOnElement(msOfficeChcekbox);
        Thread.sleep(1000);
        for (WebElement softwareSel : softwareSelect){
            if (softwareSel.getText().equalsIgnoreCase(Software)){
                Thread.sleep(1000);
                softwareSel.click();
            }
        }
    }

    public void selectOS (String OS) throws InterruptedException {
        for (WebElement osSelect: OSradioButtons){
            if (osSelect.getText().equalsIgnoreCase(OS)){
                Thread.sleep(1000);
                osSelect.click();
            }
        }
    }
    public void selectHDD (String hdd) throws InterruptedException {
        for (WebElement hddselect : hddradioButton){
            if (hddselect.getText().equalsIgnoreCase(hdd)){
                Thread.sleep(1000);
                hddselect.click();
            }
        }
    }
    public void selectRam (String ram){
        selectByVisibleTextFromDropDown(ramDropDown, ram);
    }
    public void selectProcessor (String processor){
        selectByVisibleTextFromDropDown(processorDropDown, processor);
    }

}
