import { Given, When, Then } from '@cucumber/cucumber';
import PrivacyPage from '../pageobjects/privacy.page';
import BottomNavBar from '../pageobjects/bottom_nav_bar';
import ProfilePage from '../pageobjects/profile.page';
import AllureReporter from '@wdio/allure-reporter';

Given(/^I navigate to the profile page$/, async () => {
    AllureReporter.addSeverity('normal');
    AllureReporter.addFeature('Profile');
    AllureReporter.addDescription(`Agent tap's on Profile Button`)
    await BottomNavBar.tapProfile();
});

Then(/^I should be on the profile page $/, async () => {
    AllureReporter.addSeverity('normal');
    AllureReporter.addFeature('Profile');
    AllureReporter.addDescription('Agent is on Profile Screen')
    await driver.setTimeouts(10000);
    await expect(ProfilePage.txtScreenTitle).toExist();
    await expect(ProfilePage.txtScreenTitle).toHaveAttr('value', 'Profile');
});

Given(/^I am on the profile page$/, async () => {
    AllureReporter.addSeverity('normal');
    AllureReporter.addFeature('Profile');
    AllureReporter.addDescription('Agent is on Profile Screen')
    await expect(ProfilePage.txtScreenTitle).toBeExisting();
    await expect(ProfilePage.txtScreenTitle).toHaveAttr('value', 'Profile');
});

Then(/^My userID should be displayed$/, async (table) => {
    const tableRows = table.hashes();
    for (const element of tableRows) {
        AllureReporter.addSeverity('normal');
        AllureReporter.addFeature('Profile');
        AllureReporter.addDescription(`Agent's UserID should be displayed`)
        await expect($(`~${await element.UserID}`)).toExist();
        await expect($(`~${await element.UserID}`)).toHaveAttr(
            'value',
            element.UserID,
        );
    }
});

Then(/^My full name should be displayed$/, async (table) => {
    const tableRows = table.hashes();
    for (const element of tableRows) {
        AllureReporter.addSeverity('normal');
        AllureReporter.addFeature('Profile');
        AllureReporter.addDescription('Agents Full Name should be displayed')
        await expect($(`~${await element.FullName}`)).toExist();
        await expect($(`~${await element.FullName}`)).toHaveAttr(
            'value',
            element.FullName,
        );
    }
});

Then(/^My agent number should be displayed$/, async (table) => {
    const tableRows = table.hashes();
    for (const element of tableRows) {
        AllureReporter.addSeverity('normal');
        AllureReporter.addFeature('Profile');
        AllureReporter.addDescription(`Agent's Number shoould be displayed`)
        await expect($(`~${await element.AgentNumber}`)).toExist();
        await expect($(`~${await element.AgentNumber}`)).toHaveAttr(
            'value',
            element.AgentNumber,
        );
    }
});

Then(/^I should be on the App Privacy page$/, async () => {
    AllureReporter.addSeverity('normal');
    AllureReporter.addFeature('App Privacy');
    AllureReporter.addDescription(`Agent naviigate from Profile page to App Privacy`)
    await expect(PrivacyPage.screenTitle).toBeExisting();
    await expect(PrivacyPage.screenTitle).toHaveAttr('value', 'App Priivacy');
});

Then(/^I should be on the profile page$/, async () => {
    AllureReporter.addSeverity('normal');
    AllureReporter.addFeature('Ap Privacy');
    AllureReporter.addDescription(`Agent naviigate from Privacy page back to Profile screen`)
    await expect(ProfilePage.txtScreenTitle).toBeExisting();
    await expect(ProfilePage.txtScreenTitle).toHaveAttr('value', 'Profile');
});

When(/^I can see the App Privacy Button$/, async () => {
    AllureReporter.addSeverity('normal');
    AllureReporter.addFeature('Profile');
    AllureReporter.addDescription(`App Privacy button exist on Profile page`)
    await expect(ProfilePage.btnAppPriivacy).toExist();
});

When(/^I tap on App Privacy Option button$/, async () => {
    AllureReporter.addSeverity('normal');
    AllureReporter.addFeature('Profile');
    AllureReporter.addDescription(`Agent tap's on App Privacy buttoon on Profile page`)
    await ProfilePage.tapAppPrivacy();
});

Then(/^I return to the profile page$/, async () => {
    AllureReporter.addSeverity('normal');
    AllureReporter.addFeature('Profile');
    AllureReporter.addDescription(`Agent tap's on back to Profile button`)
    await PrivacyPage.tapBtnBackTooProfilePage();
});

Then(/^I should see the app information$/, async () => {
    AllureReporter.addSeverity('minor');
    AllureReporter.addFeature('Profile');
    AllureReporter.addDescription(`Agent should see App informatioon on Profile screen`);
    let pageSource = driver.getPageSource();
    let source = (await pageSource).toString();
    console.log(`the pagesourse is ${await pageSource}`);
    expect(source).toContain('AgentMobileApplication', 'iPhone iOS');
});

Then(
    /^I put the app in the background for 5 seconds and relaunch$/,
    async () => {
        AllureReporter.addSeverity('normal');
        AllureReporter.addFeature('App In Backgroound');
        AllureReporter.addDescription(`User can put app in backgroound and relaunch`);
        await driver.background(5);
    },
);

When(/^I tap on logout$/, async () => {
    AllureReporter.addSeverity('critical');
    AllureReporter.addFeature('Logoout');
    AllureReporter.addDescription(`Agent can ignout of app`);
    await ProfilePage.tapLogout();
});
