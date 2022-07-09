import { Given, When, Then } from '@cucumber/cucumber';
import loginPage from '../pageobjects/login.page';
import HomePage from '../pageobjects/casesummary.page';
const assert = require('assert');
const MailSlurp = require('mailslurp-client').default;
const apiKey =
    '9508cbd7647971867f41674d31b6600948cf88883130438b54aa171f0926f0fb';
const mailslurp = new MailSlurp({ apiKey });
import LoginPage from '../pageobjects/login.page';
import SelectMFAPage from '../pageobjects/selectmfa.page';
import VerifyMFAPage from '../pageobjects/verifymfa.page';
let mycode;

Given(/^I am on the select MFA factor screen$/, async () => {
    await expect(SelectMFAPage.txtMFAScreen).toHaveText(
        'Select a method below to verify your identity.',
    );
});

When(/^I tap on select MFA drop down button$/, async () => {
    await SelectMFAPage.clickMFASelect();
});

Then(/^I should see select MFA code options$/, async () => {
    await expect(SelectMFAPage.btnTxtMFA).toBeExisting();
    await expect(SelectMFAPage.btnCallMFA).toBeExisting();
    await expect(SelectMFAPage.btnEmaillMFA).toBeExisting();
});

When(/^I tap cancel on select MFA screen$/, async () => {
    await SelectMFAPage.btnCancelMFAScreen();
    await expect(LoginPage.AmeritasLogo).toExist();
    await expect(LoginPage.txtPrivacyStatement).toExist();
});

When(/^I select Text MFA factor$/, async () => {
    await SelectMFAPage.clickMFASelect();
    await SelectMFAPage.selectMFAOption(SelectMFAPage.btnTxtMFA);
});

When(/^I select Call MFA factor$/, async () => {
    await SelectMFAPage.clickMFASelect();
    await SelectMFAPage.selectMFAOption(SelectMFAPage.btnCallMFA);
});

When(/^I select Email MFA factor$/, async () => {
    await SelectMFAPage.clickMFASelect();
    await SelectMFAPage.selectMFAOption(SelectMFAPage.btnEmaillMFA);
});

Then(/^I should be taken to the Text MFA verification screen$/, async () => {
    await expect(VerifyMFAPage.txtVerifyMFAScreen).toHaveText(
        'We texted a verification code to your phone. Enter it below.',
    );
});

Given(/^I retrieve the MFA code$/, async () => {
    // fetch the email from mailslurp
    const email = await mailslurp.waitForLatestEmail(
        '9559020e-60c6-42a7-8f85-db6dc9e7ca9d',
        20000,
        true,
    ); //inbox_ID
    let verificationCode = email.body.match(/\d{6}/);
    console.log(`mycode is ${verificationCode}`);
    mycode = verificationCode.toString();
    //await VerifyMFAPage.enterCode(mycode);
    //await VerifyMFAPage.clickVerify();
});

When(/^I enter the MFA code and tap verify$/, async () => {
    await VerifyMFAPage.enterCode(mycode);
    await VerifyMFAPage.clickVerify();
});

/* When(/^I enter login credential$/, async () => {
    //const tableRows = table.hashes();
    //for (const element of tableRows) {
        //await LoginPage.chkbxTerms_tap();
        await LoginPage.txtUsername_setText('davidauto');
        await LoginPage.txtPassword_setText('Password1');
        await driver.hideKeyboard('pressKey', 'return');
        await loginPage.chkbxTerms_tap();
        await LoginPage.clickLogin();
    //}
});  */

/* When(/^I enter valid credentials, accept terms and tap Sign In$/, async (table) => {
    const tableRows = table.hashes();
    for (const element of tableRows) {
        //await LoginPage.chkbxTerms_tap();
        await LoginPage.txtUsername_setText(element.Username);
        await LoginPage.txtPassword_setText(element.Password);
        await driver.hideKeyboard('pressKey', 'return');
        await LoginPage.clickLogin();
    }
}); */

/* Then(/^I should get error message$/, async () => {
    expect(
        $(
            ~`The authorization request failed due to access_denied: User+is+not+assigned+to+the+client+application.`,
        ),
    ).toBeExisting();
    await VerifyMFAPage.AlertBtnOk.click();
}); */

Then(/^I should get no access error message$/, async () => {
    expect(VerifyMFAPage.alertNoAccessErrorMsg).toBeExisting();
    await VerifyMFAPage.AlertBtnOk.click();
});

Given(/^I tap Cancel button on MFA verify screen$/, async () => {
    await VerifyMFAPage.btnCancel.click();
});

Given(/^I am on the MFA verification screen$/, async () => {
    await expect(VerifyMFAPage.txtVerifyMFAScreen).toHaveText(
        'We texted a verification code to your phone. Enter it below.',
    );
});

When(/^I enter wrong MFA code$/, async () => {
    await VerifyMFAPage.enterCode(123);
});

When(/^I tap verify button$/, async () => {
    await VerifyMFAPage.clickVerify();
});

Then(/^I should get wrong code error message$/, async () => {
    expect(VerifyMFAPage.alertWrongCodeErrorMsg).toBeExisting();
    await VerifyMFAPage.AlertBtnOk.click();
});

When(/^I wait 30 seconds and tap on Resend button$/, async () => {
    await browser.pause(30000);
    await VerifyMFAPage.btnResend.click();
    await expect(VerifyMFAPage.alertSentVerificationNewCode).toExist();
    await VerifyMFAPage.AlertBtnOk.click();
});

When(/^I tap on Resend button$/, async () => {
    await VerifyMFAPage.btnResend.click();
});

Then(/^I should get verification timeout error$/, async () => {
    expect(VerifyMFAPage.alertVerificationTimeoutError).toBeExisting();
    await VerifyMFAPage.AlertBtnOk.click();
});

/* When(/^I delay for 5 minutes and tap verification button$/, async () => {
    await browser.pause(200000);
    console.log('waited for 200000 ms');
    await browser.pause(150000);
    await VerifyMFAPage.btnResend.click();
}); */

Then(/^I should get verification expired error$/, async () => {
    await expect(VerifyMFAPage.alertExpiredCodeErrorMsg).toExist();
    await VerifyMFAPage.AlertBtnOk.click();
});

Then(/^I should be taken to the Call MFA verification screen$/, async () => {
    await expect(VerifyMFAPage.txtVerifyMFAScreen).toHaveText(
        'We left a voice message with your verification code on your phone. Enter it below.',
    );
});

Then(/^I should be taken to the Email MFA verification screen$/, async () => {
    await expect(VerifyMFAPage.txtVerifyMFAScreen).toHaveText(
        'We sent a verification code to your email address. Enter it below.',
    );
});

/* Then(/^I should be on the app home screen$/, async () => {
    await driver.setTimeouts(120000)
    await expect(HomePage.screenTitle).toHaveText('Cases');
});  */
