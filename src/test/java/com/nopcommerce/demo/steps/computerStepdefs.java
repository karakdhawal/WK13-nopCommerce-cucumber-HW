package com.nopcommerce.demo.steps;

import com.nopcommerce.demo.pages.BuildYourOwnComputerPage;
import com.nopcommerce.demo.pages.ComputerPage;
import com.nopcommerce.demo.pages.DesktopsPage;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class computerStepdefs {
    @When("^I click on Computer tab$")
    public void iClickOnComputerTab() {
        new ComputerPage().computerHeaderMenu();
    }

    @Then("^I verify computer text$")
    public void iVerifyComputerText() {
        String computerText = new ComputerPage().verifyComputerText();
        Assert.assertEquals(computerText, "Computers");
    }

    @And("^I click on Desktops link$")
    public void iClickOnDesktopsLink() {
        new ComputerPage().clickOnDesktop();
    }

    @Then("^I verify Desktops text$")
    public void iVerifyDesktopsText() {
        String desktopText = new DesktopsPage().verifyDesktopText();
    }

    @And("^I click on product name Build your own computer$")
    public void iClickOnProductNameBuildYourOwnComputer() {
        new DesktopsPage().clickonBuildYourOwnComputer();
    }

    @And("^I select Processor \"([^\"]*)\"$")
    public void iSelectProcessor(String processor){
        new BuildYourOwnComputerPage().selectProcessor(processor);

    }

    @And("^I select RAM \"([^\"]*)\"$")
    public void iSelectRAM(String ram){
        new BuildYourOwnComputerPage().selectRam(ram);
    }

    @And("^I select HDD \"([^\"]*)\"$")
    public void iSelectHDD(String HDD) throws InterruptedException {
        new BuildYourOwnComputerPage().selectHDD(HDD);
    }

    @And("^I select OS \"([^\"]*)\"$")
    public void iSelectOS(String os) throws InterruptedException {
        new BuildYourOwnComputerPage().selectOS(os);
    }

    @And("^I select Software \"([^\"]*)\"$")
    public void iSelectSoftware(String software) throws InterruptedException {
        new BuildYourOwnComputerPage().selectSoftware(software);
    }

    @And("^I click on Add to Cart button$")
    public void iClickOnAddToCartButton() {
        new BuildYourOwnComputerPage().clickOnAddToCartButton();
    }

    @Then("^I verify message the Product has been added to your shopping cart$")
    public void iVerifyMessageTheProductHasBeenAddedToYourShoppingCart() {
        String actualMes = new BuildYourOwnComputerPage().verifyMesTheProductHasBeenAddedToYourShoppingCart();
        Assert.assertEquals(actualMes, "The product has been added to your shopping cart");
    }
}
