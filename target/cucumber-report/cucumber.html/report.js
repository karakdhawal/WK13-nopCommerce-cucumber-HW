$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("computerpage.feature");
formatter.feature({
  "line": 1,
  "name": "Computer Page Test",
  "description": "",
  "id": "computer-page-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 5000705300,
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
  "duration": 104601800,
  "status": "passed"
});
formatter.match({
  "location": "computerStepdefs.iClickOnComputerTab()"
});
formatter.result({
  "duration": 1216307200,
  "status": "passed"
});
formatter.match({
  "location": "computerStepdefs.iVerifyComputerText()"
});
formatter.result({
  "duration": 49746100,
  "status": "passed"
});
formatter.after({
  "duration": 91600,
  "status": "passed"
});
formatter.before({
  "duration": 2805763000,
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
  "duration": 27100,
  "status": "passed"
});
formatter.match({
  "location": "computerStepdefs.iClickOnComputerTab()"
});
formatter.result({
  "duration": 1477818600,
  "status": "passed"
});
formatter.match({
  "location": "computerStepdefs.iClickOnDesktopsLink()"
});
formatter.result({
  "duration": 593552800,
  "status": "passed"
});
formatter.match({
  "location": "computerStepdefs.iVerifyDesktopsText()"
});
formatter.result({
  "duration": 60306200,
  "status": "passed"
});
formatter.after({
  "duration": 32900,
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
  "duration": 2127723900,
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
  "duration": 37300,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 667643600,
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
  "duration": 50970600,
  "status": "passed"
});
formatter.after({
  "duration": 39300,
  "status": "passed"
});
formatter.before({
  "duration": 3053528400,
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
  "name": "I enter email \"lorduk1@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter password \"123456\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on login button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I should see the error \"Login was unsuccessful. Please correct the errors and try again.\\nNo customer account found\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginStepdefs.iAmOnHomePage()"
});
formatter.result({
  "duration": 88000,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 626967900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "lorduk1@gmail.com",
      "offset": 15
    }
  ],
  "location": "LoginStepdefs.iEnterEmail(String)"
});
formatter.result({
  "duration": 130797200,
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
  "duration": 125217500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 747223400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login was unsuccessful. Please correct the errors and try again.\\nNo customer account found",
      "offset": 24
    }
  ],
  "location": "LoginStepdefs.iShouldSeeTheError(String)"
});
formatter.result({
  "duration": 20085374900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027message-error validation-summary-errors\u0027]\"}\n  (Session info: chrome\u003d105.0.5195.102)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DHAWALHP\u0027, ip: \u0027192.168.0.48\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [f984ebb9d78bf8b3a7400351db4c5247, findElement {using\u003dxpath, value\u003d//div[@class\u003d\u0027message-error validation-summary-errors\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 105.0.5195.102, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: C:\\Users\\dhawa\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50377}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:50377/devtoo..., se:cdpVersion: 105.0.5195.102, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: f984ebb9d78bf8b3a7400351db4c5247\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat com.nopcommerce.demo.utilities.Utility.getTextFromElement(Utility.java:61)\r\n\tat com.nopcommerce.demo.pages.LoginPage.getErrorMessage(LoginPage.java:59)\r\n\tat com.nopcommerce.demo.steps.LoginStepdefs.iShouldSeeTheError(LoginStepdefs.java:99)\r\n\tat ✽.Then I should see the error \"Login was unsuccessful. Please correct the errors and try again.\\nNo customer account found\"(login.feature:15)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 220865000,
  "status": "passed"
});
formatter.before({
  "duration": 1858894900,
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
  "duration": 15400,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 533758100,
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
  "duration": 77045000,
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
  "duration": 80089900,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 959428200,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iVerifyThatLogOutLinkIsDisplay()"
});
formatter.result({
  "duration": 1044080300,
  "status": "passed"
});
formatter.after({
  "duration": 19100,
  "status": "passed"
});
formatter.before({
  "duration": 2410164600,
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
  "duration": 51500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnLoginLink()"
});
formatter.result({
  "duration": 1249035800,
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
  "duration": 150674000,
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
  "duration": 143826500,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnLoginButton()"
});
formatter.result({
  "duration": 861737800,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iClickOnLogoutLink()"
});
formatter.result({
  "duration": 1735820100,
  "status": "passed"
});
formatter.match({
  "location": "LoginStepdefs.iVerifyThatLoginLinkIsDisplayed()"
});
formatter.result({
  "duration": 48181800,
  "status": "passed"
});
formatter.after({
  "duration": 21800,
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
  "duration": 2639714700,
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
  "duration": 42200,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepdefs.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 703288100,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepdefs.iVerifyRegisterText()"
});
formatter.result({
  "duration": 1073375600,
  "status": "passed"
});
formatter.after({
  "duration": 31700,
  "status": "passed"
});
formatter.before({
  "duration": 3072132000,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "User should create account successfully",
  "description": "",
  "id": "register;user-should-create-account-successfully",
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
  "duration": 34900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepdefs.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 917103600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepdefs.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 194250000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepdefs.iVerifyTheErrorMessage()"
});
formatter.result({
  "duration": 315947300,
  "status": "passed"
});
formatter.after({
  "duration": 31700,
  "status": "passed"
});
formatter.before({
  "duration": 4002392000,
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
  "duration": 49400,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepdefs.iClickOnRegisterLink()"
});
formatter.result({
  "duration": 1454263000,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepdefs.iSelectGenderFemale()"
});
formatter.result({
  "duration": 306346300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepdefs.iEnterFirstname()"
});
formatter.result({
  "duration": 335460900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepdefs.iEnterLastname()"
});
formatter.result({
  "duration": 273642600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepdefs.iSelectDay()"
});
formatter.result({
  "duration": 246782300,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepdefs.iSelectMonth()"
});
formatter.result({
  "duration": 263058500,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepdefs.iSelectYear()"
});
formatter.result({
  "duration": 226969900,
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
  "duration": 379297100,
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
  "duration": 442217400,
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
  "duration": 333373900,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepdefs.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 746057600,
  "status": "passed"
});
formatter.match({
  "location": "RegisterStepdefs.iVerifyMessageYourRegistrationCompleted()"
});
formatter.result({
  "duration": 20039911800,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//div[@class\u003d\u0027result\u0027]\"}\n  (Session info: chrome\u003d105.0.5195.102)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027DHAWALHP\u0027, ip: \u0027192.168.0.48\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [e549d91d0ec10a0aa508bd67834982bb, findElement {using\u003dxpath, value\u003d//div[@class\u003d\u0027result\u0027]}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 105.0.5195.102, chrome: {chromedriverVersion: 105.0.5195.52 (412c95e51883..., userDataDir: C:\\Users\\dhawa\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:50578}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:50578/devtoo..., se:cdpVersion: 105.0.5195.102, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: e549d91d0ec10a0aa508bd67834982bb\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat com.nopcommerce.demo.utilities.Utility.getTextFromElement(Utility.java:61)\r\n\tat com.nopcommerce.demo.pages.RegisterPage.registrationCompleteText(RegisterPage.java:86)\r\n\tat com.nopcommerce.demo.steps.RegisterStepdefs.iVerifyMessageYourRegistrationCompleted(RegisterStepdefs.java:90)\r\n\tat ✽.Then I verify message Your registration completed(register.feature:27)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 147121000,
  "status": "passed"
});
});