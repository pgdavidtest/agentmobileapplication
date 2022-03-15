import { Given, When, Then } from '@cucumber/cucumber';
import LoginPage from '../pageobjects/login.page';
import SelectMFAPage from '../pageobjects/selectmfa.page'
//import PrivacyPage from '../pageobjects/privacy.page';

Given(/^I am on the login page$/, async () => {
    console.log('login screen is opened');
    await expect(LoginPage.txtWelcome).toHaveText('Welcome!');
});

When(/^I check the state of the loginButton and term toggleButton$/, async () => {
    await expect(LoginPage.btnTerms_Condition).toHaveAttribute('value', 'Off');
    await expect(LoginPage.btnLogin).toBeDisabled();
});

When(/^I accept terms and condition$/, async () => {
    await LoginPage.chkbxTerms_tap();
    await expect(LoginPage.btnLogin).toBeEnabled();
});

When(/^I enter invalid credentials, accept terms and tap Sign In$/, async (table) => {
    const tableRows = table.hashes();
    for (const element of tableRows) {
        await LoginPage.txtUsername_setText(element.Username);
        await LoginPage.txtPassword_setText(element.Password);
        await driver.hideKeyboard('pressKey', 'return');
        await LoginPage.clickLogin();
        //await browser.setTimeout({'implicit': 5000})
        //const alertText = await browser.getAlertText();
        //await expect(browser.getAlertText()).toHaveText(element.ErrorMessage)
        //expect(alertText == await element.ErrorMessage);
        expect(`~${await element.ErrorMessage}`).toBeExisting();
        await LoginPage.AlertBtnOk.click();
        //await browser.acceptAlert();
    }
});

When(/^I enter valid credentials, accept terms and tap Sign In$/, async (table) => {
    const tableRows = table.hashes();
    for (const element of tableRows) {
        //await LoginPage.chkbxTerms_tap();
        await LoginPage.txtUsername_setText(element.Username);
        await LoginPage.txtPassword_setText(element.Password);
        await driver.hideKeyboard('pressKey', 'return');
        await LoginPage.clickLogin();
    }
});

Then(/^I should be on the MFA Screen$/, async () => {
   await expect(SelectMFAPage.txtMFAScreen).toHaveText('Select a method below to verify your identity')
});

