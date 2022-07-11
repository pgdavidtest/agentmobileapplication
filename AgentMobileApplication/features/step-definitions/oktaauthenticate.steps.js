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
    AllureReporter.addSeverity('critical');
    AllureReporter.addFeature('MFA');
    AllureReporter.addDescription(`Agent is on the select MFA screen`);
    await expect(SelectMFAPage.txtMFAScreen).toHaveText(
        'Select a method below to verify your identity.',
    );
});

When(/^I tap on select MFA drop down button$/, async () => {
    AllureReporter.addSeverity('critical');
    AllureReporter.addFeature('MFA');
    AllureReporter.addDescription(
        `Agent is able to tap on the select MFA drop down`,
    );
    await SelectMFAPage.clickMFASelect();
});

Then(/^I should see select MFA code options$/, async () => {
    AllureReporter.addSeverity('critical');
    AllureReporter.addFeature('MFA');
    AllureReporter.addDescription(
        `Agent is able to view MFA ooptions base on their settings`,
    );
    await expect(SelectMFAPage.btnTxtMFA).toBeExisting();
    await expect(SelectMFAPage.btnCallMFA).toBeExisting();
    await expect(SelectMFAPage.btnEmaillMFA).toBeExisting();
});

When(/^I tap cancel on select MFA screen$/, async () => {
    AllureReporter.addSeverity('normal');
    AllureReporter.addFeature('Navigation');
    AllureReporter.addDescription(
        `Agent is able to tap on Cancel to go back to login screen`,
    );
    await SelectMFAPage.btnCancelMFAScreen();
    await expect(LoginPage.AmeritasLogo).toExist();
    await expect(LoginPage.txtPrivacyStatement).toExist();
});

When(/^I select Text MFA factor$/, async () => {
    AllureReporter.addSeverity('critical');
    AllureReporter.addFeature('MFA');
    AllureReporter.addDescription(`Selecting Text MFA option`);
    await SelectMFAPage.clickMFASelect();
    await SelectMFAPage.selectMFAOption(SelectMFAPage.btnTxtMFA);
});

When(/^I select Call MFA factor$/, async () => {
    AllureReporter.addSeverity('critical');
    AllureReporter.addFeature('MFA');
    AllureReporter.addDescription(`Selecting Call MFA option`);
    await SelectMFAPage.clickMFASelect();
    await SelectMFAPage.selectMFAOption(SelectMFAPage.btnCallMFA);
});

When(/^I select Email MFA factor$/, async () => {
    AllureReporter.addSeverity('critical');
    AllureReporter.addFeature('MFA');
    AllureReporter.addDescription(`Selecting Email MFA option`);
    await SelectMFAPage.clickMFASelect();
    await SelectMFAPage.selectMFAOption(SelectMFAPage.btnEmaillMFA);
});

Then(/^I should be taken to the Text MFA verification screen$/, async () => {
    AllureReporter.addSeverity('critical');
    AllureReporter.addFeature('MFA');
    AllureReporter.addDescription(
        `Agent is taken to Text MFA validation screen base on their selection`,
    );
    await expect(VerifyMFAPage.txtVerifyMFAScreen).toHaveText(
        'We texted a verification code to your phone. Enter it below.',
    );
});

Given(/^I retrieve the MFA code$/, async () => {
    AllureReporter.addSeverity('critical');
    AllureReporter.addFeature('MFA');
    AllureReporter.addDescription(
        `Agent is able to retrieve MFA verification code through email`,
    );
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
    AllureReporter.addSeverity('critical');
    AllureReporter.addFeature('MFA');
    AllureReporter.addDescription(
        `Agent is able to enter MFA code and tap Verify`,
    );
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
    AllureReporter.addSeverity('critical');
    AllureReporter.addFeature('MFA');
    AllureReporter.addDescription(
        `Agent without Access to App gets No Access Error Message `,
    );
    expect(VerifyMFAPage.alertNoAccessErrorMsg).toBeExisting();
    await VerifyMFAPage.AlertBtnOk.click();
});

Given(/^I tap Cancel button on MFA verify screen$/, async () => {
    AllureReporter.addSeverity('normal');
    AllureReporter.addFeature('Navigation');
    AllureReporter.addDescription(
        `Agent is able to Navigate from MFA screen to Login screen`,
    );
    await VerifyMFAPage.btnCancel.click();
});

Given(/^I am on the MFA verification screen$/, async () => {
    AllureReporter.addSeverity('normal');
    AllureReporter.addFeature('MFA');
    AllureReporter.addDescription(`Agent is on the MFA screen`);
    await expect(VerifyMFAPage.txtVerifyMFAScreen).toHaveText(
        'We texted a verification code to your phone. Enter it below.',
    );
});

When(/^I enter wrong MFA code$/, async () => {
    AllureReporter.addSeverity('critical');
    AllureReporter.addFeature('MFA');
    AllureReporter.addDescription(
        `Agent With Wrong MFA code is denied access to App`,
    );
    await VerifyMFAPage.enterCode(123);
});

When(/^I tap verify button$/, async () => {
    AllureReporter.addSeverity('critical');
    AllureReporter.addFeature('MFA');
    AllureReporter.addDescription(`Agent taps on MFA verify button`);
    await VerifyMFAPage.clickVerify();
});

Then(/^I should get wrong code error message$/, async () => {
    AllureReporter.addSeverity('critical');
    AllureReporter.addFeature('MFA');
    AllureReporter.addDescription(
        `Agent gets Wrong Code Error Message when they enter wrong MFA code`,
    );
    expect(VerifyMFAPage.alertWrongCodeErrorMsg).toBeExisting();
    await VerifyMFAPage.AlertBtnOk.click();
});

When(/^I wait 30 seconds and tap on Resend button$/, async () => {
    AllureReporter.addSeverity('normal');
    AllureReporter.addFeature('MFA');
    AllureReporter.addDescription(
        `Agent delays for 30 seconds before requesting another MFA code`,
    );
    await browser.pause(30000);
    await VerifyMFAPage.btnResend.click();
    await expect(VerifyMFAPage.alertSentVerificationNewCode).toExist();
    await VerifyMFAPage.AlertBtnOk.click();
});

When(/^I tap on Resend button$/, async () => {
    AllureReporter.addSeverity('normal');
    AllureReporter.addFeature('MFA');
    AllureReporter.addDescription(`Agent taps on resend code after 30 seconds`);
    await VerifyMFAPage.btnResend.click();
});

Then(/^I should get verification timeout error$/, async () => {
    AllureReporter.addSeverity('normal');
    AllureReporter.addFeature('MFA');
    AllureReporter.addDescription(
        `Agent gets verification timeout error for delaying 30 sec or more`,
    );
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
    AllureReporter.addSeverity('critical');
    AllureReporter.addFeature('MFA');
    AllureReporter.addDescription(`Agent gets Verification expired error`);
    await expect(VerifyMFAPage.alertExpiredCodeErrorMsg).toExist();
    await VerifyMFAPage.AlertBtnOk.click();
});

Then(/^I should be taken to the Call MFA verification screen$/, async () => {
    AllureReporter.addSeverity('critical');
    AllureReporter.addFeature('MFA');
    AllureReporter.addDescription(
        `Agent is taken to Call MFA screen base on selection`,
    );
    await expect(VerifyMFAPage.txtVerifyMFAScreen).toHaveText(
        'We left a voice message with your verification code on your phone. Enter it below.',
    );
});

Then(/^I should be taken to the Email MFA verification screen$/, async () => {
    AllureReporter.addSeverity('critical');
    AllureReporter.addFeature('MFA');
    AllureReporter.addDescription(
        `Agent is taken to Email MFA screen base on selection`,
    );
    await expect(VerifyMFAPage.txtVerifyMFAScreen).toHaveText(
        'We sent a verification code to your email address. Enter it below.',
    );
});

/* Then(/^I should be on the app home screen$/, async () => {
    await driver.setTimeouts(120000)
    await expect(HomePage.screenTitle).toHaveText('Cases');
});  */
