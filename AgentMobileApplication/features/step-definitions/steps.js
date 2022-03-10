import { Given, When, Then } from '@cucumber/cucumber';
import LandingPage from '../pageobjects/landing.page';
import LoginPage from '../pageobjects/login.page';
import PrivacyPage from '../pageobjects/privacy.page';

Given(/^I open the app$/, async () => {
    await console.log('Mobile app is open');
});

When(/^I lock device$/, async () => {
    await driver.lock();
});

When(/^I unlock device$/, async () => {
    await driver.unlock();
});

When(/^I validate the privacy notice page$/, async () => {
    expect(PrivacyPage.screenTitle).toHaveText('Privacy Notice')
});

When(
    /^I tap on the privacy policy button$/,
    async () => {
        await PrivacyPage.txtAccept_tap();
    },
);

Then(/^I should be on the login screen$/, async () => {
   expect(LoginPage.txtWelcome).toHaveText('Welcome!')
});

Then(/^I close the app$/, async () => {
    await driver.closeApp();
 });
