$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("computerpage.feature");
formatter.feature({
  "line": 1,
  "name": "Computer Page Test",
  "description": "",
  "id": "computer-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4422469700,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Verify user should navigate to computer page successfully",
  "description": "",
  "id": "computer-page-test;verify-user-should-navigate-to-computer-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on Computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I verify computer text",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 136442600,
  "status": "passed"
});
formatter.match({
  "location": "computerStepdefs.iClickOnComputerTab()"
});
formatter.result({
  "duration": 640921200,
  "status": "passed"
});
formatter.match({
  "location": "computerStepdefs.iVerifyComputerText()"
});
formatter.result({
  "duration": 42747100,
  "status": "passed"
});
formatter.after({
  "duration": 658492000,
  "status": "passed"
});
formatter.before({
  "duration": 2785093200,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "verify user should navigate to desktop page successfully",
  "description": "",
  "id": "computer-page-test;verify-user-should-navigate-to-desktop-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click on Computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click on Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I verify Desktops text",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 104800,
  "status": "passed"
});
formatter.match({
  "location": "computerStepdefs.iClickOnComputerTab()"
});
formatter.result({
  "duration": 1181027400,
  "status": "passed"
});
formatter.match({
  "location": "computerStepdefs.iClickOnDesktopsLink()"
});
formatter.result({
  "duration": 459508000,
  "status": "passed"
});
formatter.match({
  "location": "computerStepdefs.iVerifyDesktopsText()"
});
formatter.result({
  "duration": 30665900,
  "status": "passed"
});
formatter.after({
  "duration": 635042900,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Verify that user should build you own computer and add them to cart successfully",
  "description": "",
  "id": "computer-page-test;verify-that-user-should-build-you-own-computer-and-add-them-to-cart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I click on Computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I click on Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on product name Build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I select Processor \"\u003cprocessor\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select RAM \"\u003cram\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select HDD \"\u003chdd\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select OS \"\u003cos\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select Software \"\u003csoftware\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on Add to Cart button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I verify message the Product has been added to your shopping cart",
  "keyword": "Then "
});
formatter.examples({
  "line": 26,
  "name": "",
  "description": "",
  "id": "computer-page-test;verify-that-user-should-build-you-own-computer-and-add-them-to-cart-successfully;",
  "rows": [
    {
      "cells": [
        "processor",
        "ram",
        "hdd",
        "os",
        "software"
      ],
      "line": 27,
      "id": "computer-page-test;verify-that-user-should-build-you-own-computer-and-add-them-to-cart-successfully;;1"
    },
    {
      "cells": [
        "2.2 GHz Intel Pentium Dual-Core E2200",
        "2 GB",
        "320 GB",
        "Vista Home [+$50.00]",
        "Microsoft Office [+$50.00]"
      ],
      "line": 28,
      "id": "computer-page-test;verify-that-user-should-build-you-own-computer-and-add-them-to-cart-successfully;;2"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "4GB [+$20.00]",
        "400 GB [+$100.00]",
        "Vista Premium [+$60.00]",
        "Acrobat Reader [+$10.00]"
      ],
      "line": 29,
      "id": "computer-page-test;verify-that-user-should-build-you-own-computer-and-add-them-to-cart-successfully;;3"
    },
    {
      "cells": [
        "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
        "8GB [+$60.00]",
        "320 GB",
        "Vista Home [+$50.00]",
        "Total Commander [+$5.00]"
      ],
      "line": 30,
      "id": "computer-page-test;verify-that-user-should-build-you-own-computer-and-add-them-to-cart-successfully;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2645636900,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Verify that user should build you own computer and add them to cart successfully",
  "description": "",
  "id": "computer-page-test;verify-that-user-should-build-you-own-computer-and-add-them-to-cart-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I click on Computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I click on Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on product name Build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I select Processor \"2.2 GHz Intel Pentium Dual-Core E2200\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select RAM \"2 GB\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select HDD \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select OS \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select Software \"Microsoft Office [+$50.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on Add to Cart button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I verify message the Product has been added to your shopping cart",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 16900,
  "status": "passed"
});
formatter.match({
  "location": "computerStepdefs.iClickOnComputerTab()"
});
formatter.result({
  "duration": 617003900,
  "status": "passed"
});
formatter.match({
  "location": "computerStepdefs.iClickOnDesktopsLink()"
});
formatter.result({
  "duration": 475242300,
  "status": "passed"
});
formatter.match({
  "location": "computerStepdefs.iClickOnProductNameBuildYourOwnComputer()"
});
formatter.result({
  "duration": 843914200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.2 GHz Intel Pentium Dual-Core E2200",
      "offset": 20
    }
  ],
  "location": "computerStepdefs.iSelectProcessor(String)"
});
formatter.result({
  "duration": 100105600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 GB",
      "offset": 14
    }
  ],
  "location": "computerStepdefs.iSelectRAM(String)"
});
formatter.result({
  "duration": 82217100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 14
    }
  ],
  "location": "computerStepdefs.iSelectHDD(String)"
});
formatter.result({
  "duration": 1088339300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 13
    }
  ],
  "location": "computerStepdefs.iSelectOS(String)"
});
formatter.result({
  "duration": 24131300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Microsoft Office [+$50.00]",
      "offset": 19
    }
  ],
  "location": "computerStepdefs.iSelectSoftware(String)"
});
formatter.result({
  "duration": 2178966000,
  "status": "passed"
});
formatter.match({
  "location": "computerStepdefs.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 69594400,
  "status": "passed"
});
formatter.match({
  "location": "computerStepdefs.iVerifyMessageTheProductHasBeenAddedToYourShoppingCart()"
});
formatter.result({
  "duration": 288868000,
  "status": "passed"
});
formatter.after({
  "duration": 660561200,
  "status": "passed"
});
formatter.before({
  "duration": 1996899800,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Verify that user should build you own computer and add them to cart successfully",
  "description": "",
  "id": "computer-page-test;verify-that-user-should-build-you-own-computer-and-add-them-to-cart-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I click on Computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I click on Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on product name Build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I select Processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select RAM \"4GB [+$20.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select HDD \"400 GB [+$100.00]\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select OS \"Vista Premium [+$60.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select Software \"Acrobat Reader [+$10.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on Add to Cart button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I verify message the Product has been added to your shopping cart",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 35800,
  "status": "passed"
});
formatter.match({
  "location": "computerStepdefs.iClickOnComputerTab()"
});
formatter.result({
  "duration": 513455400,
  "status": "passed"
});
formatter.match({
  "location": "computerStepdefs.iClickOnDesktopsLink()"
});
formatter.result({
  "duration": 486239500,
  "status": "passed"
});
formatter.match({
  "location": "computerStepdefs.iClickOnProductNameBuildYourOwnComputer()"
});
formatter.result({
  "duration": 801836000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 20
    }
  ],
  "location": "computerStepdefs.iSelectProcessor(String)"
});
formatter.result({
  "duration": 63350400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4GB [+$20.00]",
      "offset": 14
    }
  ],
  "location": "computerStepdefs.iSelectRAM(String)"
});
formatter.result({
  "duration": 80459300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "400 GB [+$100.00]",
      "offset": 14
    }
  ],
  "location": "computerStepdefs.iSelectHDD(String)"
});
formatter.result({
  "duration": 1088696200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Premium [+$60.00]",
      "offset": 13
    }
  ],
  "location": "computerStepdefs.iSelectOS(String)"
});
formatter.result({
  "duration": 28539100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Acrobat Reader [+$10.00]",
      "offset": 19
    }
  ],
  "location": "computerStepdefs.iSelectSoftware(String)"
});
formatter.result({
  "duration": 2185551900,
  "status": "passed"
});
formatter.match({
  "location": "computerStepdefs.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 73770600,
  "status": "passed"
});
formatter.match({
  "location": "computerStepdefs.iVerifyMessageTheProductHasBeenAddedToYourShoppingCart()"
});
formatter.result({
  "duration": 283102000,
  "status": "passed"
});
formatter.after({
  "duration": 678892700,
  "status": "passed"
});
formatter.before({
  "duration": 2130685100,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Verify that user should build you own computer and add them to cart successfully",
  "description": "",
  "id": "computer-page-test;verify-that-user-should-build-you-own-computer-and-add-them-to-cart-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I click on Computer tab",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I click on Desktops link",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on product name Build your own computer",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I select Processor \"2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select RAM \"8GB [+$60.00]\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select HDD \"320 GB\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select OS \"Vista Home [+$50.00]\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I select Software \"Total Commander [+$5.00]\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I click on Add to Cart button",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I verify message the Product has been added to your shopping cart",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 36800,
  "status": "passed"
});
formatter.match({
  "location": "computerStepdefs.iClickOnComputerTab()"
});
formatter.result({
  "duration": 601930300,
  "status": "passed"
});
formatter.match({
  "location": "computerStepdefs.iClickOnDesktopsLink()"
});
formatter.result({
  "duration": 482015300,
  "status": "passed"
});
formatter.match({
  "location": "computerStepdefs.iClickOnProductNameBuildYourOwnComputer()"
});
formatter.result({
  "duration": 811976200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2.5 GHz Intel Pentium Dual-Core E2200 [+$15.00]",
      "offset": 20
    }
  ],
  "location": "computerStepdefs.iSelectProcessor(String)"
});
formatter.result({
  "duration": 65518400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "8GB [+$60.00]",
      "offset": 14
    }
  ],
  "location": "computerStepdefs.iSelectRAM(String)"
});
formatter.result({
  "duration": 81735900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "320 GB",
      "offset": 14
    }
  ],
  "location": "computerStepdefs.iSelectHDD(String)"
});
formatter.result({
  "duration": 1085661200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vista Home [+$50.00]",
      "offset": 13
    }
  ],
  "location": "computerStepdefs.iSelectOS(String)"
});
formatter.result({
  "duration": 29442600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Total Commander [+$5.00]",
      "offset": 19
    }
  ],
  "location": "computerStepdefs.iSelectSoftware(String)"
});
formatter.result({
  "duration": 2172303900,
  "status": "passed"
});
formatter.match({
  "location": "computerStepdefs.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 65854500,
  "status": "passed"
});
formatter.match({
  "location": "computerStepdefs.iVerifyMessageTheProductHasBeenAddedToYourShoppingCart()"
});
formatter.result({
  "duration": 286011500,
  "status": "passed"
});
formatter.after({
  "duration": 669572800,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Test",
  "description": "As user I want to login into nop commerce website",
  "id": "login-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2662957600,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should navigate to login page Successfully",
  "description": "",
  "id": "login-test;user-should-navigate-to-login-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I should navigate to login page successfully and see \"Welcome, Please Sign In!\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 42100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 496879300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Welcome, Please Sign In!",
      "offset": 54
    }
  ],
  "location": "LoginStepdefs.iShouldNavigateToLoginPageSuccessfullyAndSee(String)"
});
formatter.result({
  "duration": 36662700,
  "status": "passed"
});
formatter.after({
  "duration": 667653800,
  "status": "passed"
});
formatter.before({
  "duration": 2106532900,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Verify the error message with invalid credentials",
  "description": "",
  "id": "login-test;verify-the-error-message-with-invalid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter email \"lordukg1@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter password \"1234563\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the error \"Login was unsuccessful. Please correct the errors and try again. No customer account found\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 29100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 560679600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lordukg1@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginStepdefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 93605800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234563",
      "offset": 18
    }
  ],
  "location": "LoginStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 97532100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 423009900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again. No customer account found",
      "offset": 24
    }
  ],
  "location": "LoginStepdefs.iShouldSeeTheError(String)"
});
formatter.result({
  "duration": 42518200,
  "status": "passed"
});
formatter.after({
  "duration": 627209800,
  "status": "passed"
});
formatter.before({
  "duration": 2077200500,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify that User should login with valid credentials",
  "description": "",
  "id": "login-test;verify-that-user-should-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "I enter email \"lorduk@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I enter password \"123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I verify that LogOut link is display",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 27100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 550699300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lorduk@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginStepdefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 85569900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "LoginStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 77006600,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 698699500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iVerifyThatLogOutLinkIsDisplay()"
});
formatter.result({
  "duration": 1038121900,
  "status": "passed"
});
formatter.after({
  "duration": 641006100,
  "status": "passed"
});
formatter.before({
  "duration": 2140713000,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Verify that User should logout successfully",
  "description": "",
  "id": "login-test;verify-that-user-should-logout-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I click on login link",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "I enter email \"lorduk@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I enter password \"123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "I click on logout link",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "I verify that login link is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 57700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1149685300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lorduk@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginStepdefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 67586700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 18
    }
  ],
  "location": "LoginStepdefs.iEnterPassword(String)"
});
formatter.result({
  "duration": 67234100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 633086400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnLogoutLink()"
});
formatter.result({
  "duration": 1654027700,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iVerifyThatLoginLinkIsDisplayed()"
});
formatter.result({
  "duration": 29779600,
  "status": "passed"
});
formatter.after({
  "duration": 646179100,
  "status": "passed"
});
formatter.uri("register.feature");
formatter.feature({
  "line": 1,
  "name": "Register",
  "description": "",
  "id": "register",
  "keyword": "Feature"
});
formatter.before({
  "duration": 2046789900,
  "status": "passed"
});
formatter.scenario({
  "line": 3,
  "name": "Verify user should navigate to register page successfully",
  "description": "",
  "id": "register;verify-user-should-navigate-to-register-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 4,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I click on Register link",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "I verify Register Text",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 26700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepdefs.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 529279700,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepdefs.iVerifyRegisterText()"
});
formatter.result({
  "duration": 1039950900,
  "status": "passed"
});
formatter.after({
  "duration": 599054800,
  "status": "passed"
});
formatter.before({
  "duration": 2020949300,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "Verify that first name, Last name, email address and confirm password fields are mandatory",
  "description": "",
  "id": "register;verify-that-first-name,-last-name,-email-address-and-confirm-password-fields-are-mandatory",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "I click on Register link",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I click on Register Button",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I verify the error message",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 28200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepdefs.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 548998800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepdefs.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 71131800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepdefs.iVerifyTheErrorMessage()"
});
formatter.result({
  "duration": 145309500,
  "status": "passed"
});
formatter.after({
  "duration": 629041500,
  "status": "passed"
});
formatter.before({
  "duration": 2236305200,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Verify that user should create account successfully",
  "description": "",
  "id": "register;verify-that-user-should-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I am on Home Page",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I click on Register link",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I select gender female",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter firstname",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter lastname",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I select day",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select month",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select year",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter emailf \"lorduk@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter passwordf \"123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter confirm password \"123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I click on Register Button",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I verify message Your registration completed",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 25900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepdefs.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 598267400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepdefs.iSelectGenderFemale()"
});
formatter.result({
  "duration": 69409600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepdefs.iEnterFirstname()"
});
formatter.result({
  "duration": 76951000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepdefs.iEnterLastname()"
});
formatter.result({
  "duration": 89035500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepdefs.iSelectDay()"
});
formatter.result({
  "duration": 79623000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepdefs.iSelectMonth()"
});
formatter.result({
  "duration": 77536000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepdefs.iSelectYear()"
});
formatter.result({
  "duration": 74299400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lorduk@gmail.com",
      "offset": 16
    }
  ],
  "location": "RegisterStepdefs.iEnterEmailf(String)"
});
formatter.result({
  "duration": 80826400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 19
    }
  ],
  "location": "RegisterStepdefs.iEnterPasswordf(String)"
});
formatter.result({
  "duration": 79634400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 26
    }
  ],
  "location": "RegisterStepdefs.iEnterConfirmPassword(String)"
});
formatter.result({
  "duration": 85696400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepdefs.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 409806800,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepdefs.iVerifyMessageYourRegistrationCompleted()"
});
formatter.result({
  "duration": 20020950000,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027result\u0027]\"}\n  (Session info: chrome\u003d105.0.5195.102)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DHAWALHP\u0027, ip: \u0027192.168.0.48\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [9bafdef51e153cbc094f2e9852fe00f6, findElement {using\u003dxpath, value\u003d//div[@class\u003d\u0027result\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 105.0.5195.102, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: C:\\Users\\dhawa\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:54794}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:54794/devtoo..., se:cdpVersion: 105.0.5195.102, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 9bafdef51e153cbc094f2e9852fe00f6\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat com.nopcommerce.demo.utilities.Utility.getTextFromElement(Utility.java:61)\r\n\tat com.nopcommerce.demo.pages.RegisterPage.registrationCompleteText(RegisterPage.java:86)\r\n\tat com.nopcommerce.demo.steps.RegisterStepdefs.iVerifyMessageYourRegistrationCompleted(RegisterStepdefs.java:90)\r\n\tat ✽.Then I verify message Your registration completed(register.feature:27)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 757915300,
  "status": "passed"
});
});