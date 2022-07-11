import { Given, When, Then } from '@cucumber/cucumber';
import LoginPage from '../pageobjects/login.page';
import privacyPage from '../pageobjects/privacy.page';
import SelectMFAPage from '../pageobjects/selectmfa.page';
import DisclosurePage from '../pageobjects/disclosures.page';
//import PrivacyPage from '../pageobjects/privacy.page';

Given(/^I am on the login page$/, async () => {
    AllureReporter.addSeverity('normal');
    AllureReporter.addFeature('Login');
    AllureReporter.addDescription(`Agent is on the login screen`);
    console.log('login screen is opened');
    await expect(LoginPage.AmeritasLogo).toExist();
    await expect(LoginPage.txtPrivacyStatement).toExist();
});

When(/^I tap on the more icon$/, async () => {
    AllureReporter.addSeverity('minor');
    AllureReporter.addFeature('Login');
    AllureReporter.addDescription(`Agent is able to tap the more icon froom the login screen`);
    await expect(LoginPage.btnMore).toExist();
    await LoginPage.tapMore();
});

Then(/^I should see the Terms and Policies$/, async () => {
    AllureReporter.addSeverity('minor');
    AllureReporter.addFeature('Login');
    AllureReporter.addDescription(`Agent is able to see the terms and policies from the login screen`);
    await expect(LoginPage.txtAppPrivacy).toExist();
    await expect(LoginPage.txtPrivacyNotice).toExist();
    await expect(LoginPage.txtDisclosure).toExist();
    await expect(LoginPage.txtLegalTermOfUse).toExist();
    await expect(LoginPage.txtCancel).toExist();
});

Given(/^The more option is opened$/, async () => {
    AllureReporter.addSeverity('minor');
    AllureReporter.addFeature('Terms and Policies');
    AllureReporter.addDescription(`Agent is able to see the terms and policies from the login screen`);
    await expect(LoginPage.txtPleaseReviewEachStatement).toExist();
});

When(/^I tap on App Privacy$/, async () => {
    AllureReporter.addSeverity('normal');
    AllureReporter.addFeature('App Privacy');
    AllureReporter.addDescription(`Agent is able to tap to open App Privacy`);
    await LoginPage.tapAppPrivacy();
    await expect(privacyPage.screenTitle).toExist();
});

When(/^I tap on the back button$/, async () => {
    AllureReporter.addSeverity('normal');
    AllureReporter.addFeature('Navigation');
    AllureReporter.addDescription(`Agent is able to navigate from App Privacy to Login screen`);
    await privacyPage.tapBackButton();
});

When(/^I tap on Ameritas Online Privacy Notice$/, async () => {
    AllureReporter.addSeverity('minor');
    AllureReporter.addFeature('Terms and Policies');
    AllureReporter.addDescription(`Agent is able to tap and view the Online Privacy Notice `);
    await LoginPage.tapOnlinePrivacyNotice();
    await expect($('~Ameritas Online Privacy Notice')).toExist();
});

/* When(/^I close the browser$/, async () => {
    driver.terminateApp(
        null,
        'com.ameritas.indiv.mobile.AgentMobileApplication',
    );
}); */

When(/^I tap on Disclosures$/, async () => {
    AllureReporter.addSeverity('minor');
    AllureReporter.addFeature('Terms and Policies');
    AllureReporter.addDescription(`Agent is able to tap and view the App Disclosure`);
    await LoginPage.tapDisclosure();
    await expect(DisclosurePage.txtScreennTitle).toExist();
});

When(/^I tap on Disclosures back button$/, async () => {
    AllureReporter.addSeverity('normal');
    AllureReporter.addFeature('Navigation');
    AllureReporter.addDescription(`Agent is able to navigate from Disclosure to login screen`);
    await DisclosurePage.tapBackButton();
});

When(/^I tap on Cancel$/, async () => {
    AllureReporter.addSeverity('normal');
    AllureReporter.addFeature('Navigation');
    AllureReporter.addDescription(`Agent is able to get back to the Login screen from Terms and Policies`);
    await LoginPage.tapCancel();
});

When(/^I check the state of the loginButton$/, async () => {
    AllureReporter.addSeverity('normal');
    AllureReporter.addFeature('Login');
    AllureReporter.addDescription(`Login button is visible and accessible to cliick `);
    await expect(LoginPage.btnLogin).toHaveAttribute('visible', 'true');
});

//When(/^I accept terms and condition$/, async () => {
//await LoginPage.chkbxTerms_tap();
//await expect(LoginPage.btnLogin).toBeEnabled();
//});

When(/^I enter invalid credentials, and tap Sign In$/, async (table) => {
    const tableRows = table.hashes();
    for (const element of tableRows) {
        AllureReporter.addSeverity('critical');
        AllureReporter.addFeature('Login');
        AllureReporter.addDescription(`Agent is not able to access app with invalid credentials and correct error message is displayed`);
        await LoginPage.txtUsername_setText(await element.Username);
        await LoginPage.txtPassword_setText(await element.Password);
        await driver.hideKeyboard('pressKey', 'return');
        await LoginPage.clickLogin();
        expect($(`~${await element.ErrorMessage}`)).toBeExisting();
        await LoginPage.AlertBtnOk.click();
    }
});

When(/^I enter No Access credentials and tap Sign In$/, async (table) => {
    const tableRows = table.hashes();
    for (const element of tableRows) {
        AllureReporter.addSeverity('critical');
        AllureReporter.addFeature('Login');
        AllureReporter.addDescription(`Agent is not able to access app with invalid credentials and correct error message is displayed`);
        await LoginPage.txtUsername_setText(element.Username);
        await LoginPage.txtPassword_setText(element.Password);
        await driver.hideKeyboard('pressKey', 'return');
        await LoginPage.clickLogin();
    }
});

When(/^I enter suspended user credentials and tap Sign In$/, async (table) => {
    const tableRows = table.hashes();
    for (const element of tableRows) {
        AllureReporter.addSeverity('critical');
        AllureReporter.addFeature('Login');
        AllureReporter.addDescription(`Agent is not able to access app with invalid credentials and correct error message is displayed`);
        await LoginPage.txtUsername_setText(element.Username);
        await LoginPage.txtPassword_setText(element.Password);
        await driver.hideKeyboard('pressKey', 'return');
        await LoginPage.clickLogin();
        expect($(`~${await element.ErrorMessage}`)).toBeExisting();
        await LoginPage.AlertBtnOk.click();
    }
});

When(/^I toggle wifi$/, async (table) => {
    const tableRows = table.hashes();
    for (const element of tableRows) {
        //await LoginPage.chkbxTerms_tap();
        await browser.toggleWiFi();
    }
});

When(/^I enter valid credentials and tap Sign In$/, async (table) => {
    const tableRows = table.hashes();
    for (const element of tableRows) {
        AllureReporter.addSeverity('critical');
        AllureReporter.addFeature('Login');
        AllureReporter.addDescription(`Agent is not able to access app with invalid credentials and correct error message is displayed`);
        await LoginPage.txtUsername_setText(element.Username);
        await LoginPage.txtPassword_setText(element.Password);
        await driver.hideKeyboard('pressKey', 'return');
        await LoginPage.clickLogin();
    }
});

Then(/^I should be on the select MFA Screen$/, async () => {
    AllureReporter.addSeverity('critical');
    AllureReporter.addFeature('MFA');
    AllureReporter.addDescription(`Agent is able to get to the MFA screen`);
    await expect(SelectMFAPage.txtMFAScreen).toHaveText(
        'Select a method below to verify your identity.',
    );
});
