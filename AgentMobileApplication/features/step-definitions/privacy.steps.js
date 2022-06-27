import { Given, When, Then } from '@cucumber/cucumber';
import LoginPage from '../pageobjects/login.page';
import PrivacyPage from '../pageobjects/privacy.page';

Given(/^I launch the app for the first time$/, async () => {
    await console.log('Mobile app is open');
    expect(PrivacyPage.screenTitle).toHaveText('App Privacy');
});

When(/^I lock device$/, async () => {
    await driver.lock();
});

When(/^I unlock device$/, async () => {
    await driver.unlock();
});

Then(/^I should be on the App Privacy Screen$/, async () => {
    expect(PrivacyPage.screenTitle).toHaveText('App Privacy');
});

Given(/^I am on the App Privacy screen$/, async () => {
    expect(PrivacyPage.screenTitle).toHaveText('App Privacy');
});

When(/^I toggle off the Capture Performance Data button$/, async () => {
    await expect(PrivacyPage.btnCapturePerformanceData).toHaveAttr(
        'value',
        '1',
    );
    await PrivacyPage.btnCapturePerformanceData.click();
});

When(/^I toggle on the Capture Performance Data button$/, async () => {
    await expect(PrivacyPage.btnCapturePerformanceData).toHaveAttr(
        'value',
        '0',
    );
    await PrivacyPage.btnCapturePerformanceData.click();
});

Then(/^The Capture Performance Data button should be on$/, async () => {
    await expect(PrivacyPage.btnCapturePerformanceData).toHaveAttr(
        'value',
        '1',
    );
});

When(/^I toggle on the Anonymize Performance Data button$/, async () => {
    await expect(PrivacyPage.btnAnonymizePersonalData).toHaveAttr('value', '0');
    await PrivacyPage.btnAnonymizePersonalData.click();
});

When(/^I toggle off the Anonymize Performance Data button$/, async () => {
    await expect(PrivacyPage.btnAnonymizePersonalData).toHaveAttr('value', '1');
    await PrivacyPage.btnAnonymizePersonalData.click();
});

Then(/^The Anonymize Performance Data button should be off$/, async () => {
    await expect(PrivacyPage.btnAnonymizePersonalData).toHaveAttr('value', '0');
});

When(/^I toggle off the Crash Reporting button$/, async () => {
    await expect(PrivacyPage.btnCrashReporting).toHaveAttr('value', '1');
    await PrivacyPage.btnCrashReporting.click();
});

When(/^I toggle on the Crash Reporting button$/, async () => {
    await expect(PrivacyPage.btnCrashReporting).toHaveAttr('value', '0');
    await PrivacyPage.btnCrashReporting.click();
});

Then(/^The Crash Reporting button should be on$/, async () => {
    await expect(PrivacyPage.btnCrashReporting).toHaveAttr('value', '1');
});

When(/^I tap on the privacy policy Save button$/, async () => {
    await PrivacyPage.tapSaveButton();
});

Then(/^I should be on the login screen$/, async () => {
    await expect(LoginPage.AmeritasLogo.isExisting());
});

/* Then(/^I close the app$/, async () => {
    await driver.closeApp();
}); */
