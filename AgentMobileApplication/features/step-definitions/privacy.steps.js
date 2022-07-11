import { Given, When, Then } from '@cucumber/cucumber';
import LoginPage from '../pageobjects/login.page';
import PrivacyPage from '../pageobjects/privacy.page';
import AllureReporter from '@wdio/allure-reporter';

Given(/^I launch the app for the first time$/, async () => {
    AllureReporter.addSeverity('critical');
    AllureReporter.addFeature('App Launch');
    AllureReporter.addDescription(`App is Launched`);
    await console.log('Mobile app is open');
    expect(PrivacyPage.screenTitle).toHaveText('App Privacy');
});

When(/^the push notification allert pops up$/, async () => {
    AllureReporter.addSeverity('normal');
    AllureReporter.addFeature('Push Nootification');
    AllureReporter.addDescription(`Agent is notify on Push Notification options`);
    await expect(PrivacyPage.pushNotificationAllert).toBeExisting()
});

When(/^I accept push notification$/, async () => {
    AllureReporter.addSeverity('normal');
    AllureReporter.addFeature('Push Nootification');
    AllureReporter.addDescription(`Agent accepts Push Notification Option`);
    await PrivacyPage.allowPushNotification.click();
});



When(/^I lock device$/, async () => {
    AllureReporter.addSeverity('minor');
    AllureReporter.addFeature('Device');
    AllureReporter.addDescription(`Agent lock's device`);
    await driver.lock();
});

When(/^I unlock device$/, async () => {
    AllureReporter.addSeverity('minor');
    AllureReporter.addFeature('Device');
    AllureReporter.addDescription(`Agent un-lock's device`);
    await driver.unlock();
});

Then(/^I should be on the App Privacy Screen$/, async () => {
    AllureReporter.addSeverity('normal');
    AllureReporter.addFeature('App Privacy');
    AllureReporter.addDescription(`Agent is still able to view app after lock and unlock`);
    expect(PrivacyPage.screenTitle).toHaveText('App Privacy');
});

Given(/^I am on the App Privacy screen$/, async () => {
    AllureReporter.addSeverity('normal');
    AllureReporter.addFeature('App Privacy');
    AllureReporter.addDescription(`Agent is on App Privacy screen`);
    expect(PrivacyPage.screenTitle).toHaveText('App Privacy');
});

When(/^I toggle off the Capture Performance Data button$/, async () => {
    AllureReporter.addSeverity('normal');
    AllureReporter.addFeature('App Privacy');
    AllureReporter.addDescription(`Agent is able to toggle off Capture Performance Data`);
    await expect(PrivacyPage.btnCapturePerformanceData).toHaveAttr(
        'value',
        '1',
    );
    await PrivacyPage.btnCapturePerformanceData.click();
});

When(/^I toggle on the Capture Performance Data button$/, async () => {
    AllureReporter.addSeverity('normal');
    AllureReporter.addFeature('App Privacy');
    AllureReporter.addDescription(`Agent is able to toggle on Capture Performance Data`);
    await expect(PrivacyPage.btnCapturePerformanceData).toHaveAttr(
        'value',
        '0',
    );
    await PrivacyPage.btnCapturePerformanceData.click();
});

Then(/^The Capture Performance Data button should be on$/, async () => {
    AllureReporter.addSeverity('normal');
    AllureReporter.addFeature('App Privacy');
    AllureReporter.addDescription(`Capture Performance Data is on`);
    await expect(PrivacyPage.btnCapturePerformanceData).toHaveAttr(
        'value',
        '1',
    );
});

When(/^I toggle on the Anonymize Performance Data button$/, async () => {
    AllureReporter.addSeverity('normal');
    AllureReporter.addFeature('App Privacy');
    AllureReporter.addDescription(`Agent is able to toggle on Anonymize Performance Data`);
    await expect(PrivacyPage.btnAnonymizePersonalData).toHaveAttr('value', '0');
    await PrivacyPage.btnAnonymizePersonalData.click();
});

When(/^I toggle off the Anonymize Performance Data button$/, async () => {
    AllureReporter.addSeverity('normal');
    AllureReporter.addFeature('App Privacy');
    AllureReporter.addDescription(`Agent is able to toggle off Anonymize Performance Data`);
    await expect(PrivacyPage.btnAnonymizePersonalData).toHaveAttr('value', '1');
    await PrivacyPage.btnAnonymizePersonalData.click();
});

Then(/^The Anonymize Performance Data button should be off$/, async () => {
    AllureReporter.addSeverity('normal');
    AllureReporter.addFeature('App Privacy');
    AllureReporter.addDescription(`Anonymize Performance Data is off`);
    await expect(PrivacyPage.btnAnonymizePersonalData).toHaveAttr('value', '0');
});

When(/^I toggle off the Crash Reporting button$/, async () => {
    AllureReporter.addSeverity('normal');
    AllureReporter.addFeature('App Privacy');
    AllureReporter.addDescription(`Agent is able to toggle off Crash Reporting`);
    await expect(PrivacyPage.btnCrashReporting).toHaveAttr('value', '1');
    await PrivacyPage.btnCrashReporting.click();
});

When(/^I toggle on the Crash Reporting button$/, async () => {
    AllureReporter.addSeverity('normal');
    AllureReporter.addFeature('App Privacy');
    AllureReporter.addDescription(`Agent is able to toggle on Crash Reporting`);
    await expect(PrivacyPage.btnCrashReporting).toHaveAttr('value', '0');
    await PrivacyPage.btnCrashReporting.click();
});

Then(/^The Crash Reporting button should be on$/, async () => {
    AllureReporter.addSeverity('normal');
    AllureReporter.addFeature('App Privacy');
    AllureReporter.addDescription(`Crash Reporting should be oon`);
    await expect(PrivacyPage.btnCrashReporting).toHaveAttr('value', '1');
});

When(/^I tap on the privacy policy Save button$/, async () => {
    AllureReporter.addSeverity('normal');
    AllureReporter.addFeature('App Privacy');
    AllureReporter.addDescription(`Agent is able to save App Privacy setting`);
    await PrivacyPage.tapSaveButton();
});

Then(/^I should be on the login screen$/, async () => {
    AllureReporter.addSeverity('normal');
    AllureReporter.addFeature('Login');
    AllureReporter.addDescription(`Agent is able to get to the login screen`);
    await expect(LoginPage.AmeritasLogo.isExisting());
});

/* Then(/^I close the app$/, async () => {
    await driver.closeApp();
}); */
