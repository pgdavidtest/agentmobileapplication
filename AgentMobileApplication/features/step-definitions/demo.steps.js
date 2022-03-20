/* import { Given, When, Then } from '@cucumber/cucumber';
import loginPage from '../pageobjects/login.page';
const assert = require("assert");
const MailSlurp = require("mailslurp-client").default;
const apiKey = "9508cbd7647971867f41674d31b6600948cf88883130438b54aa171f0926f0fb";
const mailslurp = new MailSlurp({ apiKey });
import LoginPage from '../pageobjects/login.page';
import SelectMFAPage from '../pageobjects/selectmfa.page';
import VerifyMFAPage from '../pageobjects/verifymfa.page';
//let code;

Given(/^I am on the select MFA factor screen$/, async () => {
    await expect(SelectMFAPage.txtMFAScreen).toHaveText('Select a method below to verify your identity')
});

When(/^I select a MFA factor$/, async () => {
    await SelectMFAPage.clickMFASelect()
    await SelectMFAPage.selectMFAOption(SelectMFAPage.btnEmaillMFA)
});

Then(/^I should be taken to the MFA verification screen$/, async () => {
    await expect(VerifyMFAPage.txtMFAScreen).toHaveText('Verify Your Identity.')
});
 
Given(/^I retrieve the MFA code$/, async () => {
    const email = await mailslurp.waitForLatestEmail('9559020e-60c6-42a7-8f85-db6dc9e7ca9d', 20000, true); //inbox_ID
    let verificationCode = (email.body.match(/\d{6}/))
    console.log(`mycode is ${verificationCode}`)
    let mycode = verificationCode.toString();
    await VerifyMFAPage.enterCode(mycode);
    await VerifyMFAPage.clickVerify();
});


When(/^I enter login credential$/, async () => {
        await LoginPage.txtUsername_setText('davidauto');
        await LoginPage.txtPassword_setText('Password1');
        await driver.hideKeyboard('pressKey', 'return');
        await loginPage.chkbxTerms_tap();
        await LoginPage.clickLogin();
    
});

Then(/^I should be on the app home screen$/, async () => {
    await expect(VerifyMFAPage.txtMFAScreen).toHaveText('Select a method below to verify your identity')
});  */