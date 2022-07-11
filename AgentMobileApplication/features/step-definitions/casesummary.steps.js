import { Given, When, Then } from '@cucumber/cucumber';
import LoginPage from '../pageobjects/login.page';
import privacyPage from '../pageobjects/privacy.page';
import SelectMFAPage from '../pageobjects/selectmfa.page';
import DisclosurePage from '../pageobjects/disclosures.page';
import CaseSummaryPage from '../pageobjects/casesummary.page';
import CaseDetailsPage from '../pageobjects/casedetails.page';
import {
    CommonActionsControllerApi,
    ExpiredInboxRecordProjectionFromJSON,
    ExportEntitiesExportTypeEnum,
} from 'mailslurp-client';
import BottomNavBar from '../pageobjects/bottom_nav_bar';
import searchPage from '../pageobjects/search.page';
import bottom_nav_bar from '../pageobjects/bottom_nav_bar';

Given(/^I am on the case summary screen$/, async () => {
    await expect(CaseSummaryPage.screenTitle).toExist();
});

Then(/^I should be on the case summary screen$/, async () => {
    await driver.setTimeouts(120000);
    await expect(CaseSummaryPage.screenTitle).toExist();
    await expect(CaseSummaryPage.screenTitle).toHaveText('Cases');
});

Then(/^I get the total number of cases$/, async () => {
    const selector = '**/XCUIElementTypeButton[`label == "Policy"`]';
    const button = await $$(`-ios class chain:${selector}`);
    const total = button.length;
    console.log(`The number of cases is: ${total}`);
    const mySelector = '**/XCUIElementTypeButton[`label == "Policy"`][1]';
    const mybutton = await $(`-ios class chain:${mySelector}`);
    const myTotal = await mybutton.getAttribute('name');
    console.log(`The name is: ${myTotal}`);
});

When(/^I tap on the Pending filter$/, async () => {
    AllureReporter.addSeverity('critical');
    AllureReporter.addFeature('Case Summary');
    AllureReporter.addDescription(`Agent is able to tap on the Pending filter`);
    await CaseSummaryPage.btnPending.click();
    //let test = await CaseSummaryPage.getCaseCount();
    //console.log(`this are the latest names ${test}`);
});

When(/^I swipe up on the screen$/, async () => {
    AllureReporter.addSeverity('critical');
    AllureReporter.addFeature('Case Summary');
    AllureReporter.addDescription(`Agent is able swipe up to view more cases`);
    await CaseSummaryPage.swipeVertical();
    //let test = await CaseSummaryPage.getCaseCount();
    //console.log(`this are the latest names ${test}`);
});

Then(/^I should see Welcome then my first and lastname$/, async (table) => {
    const tableRows = table.hashes();
    for (const element of tableRows) {
        AllureReporter.addSeverity('critical');
        AllureReporter.addFeature('Case Summary');
        AllureReporter.addDescription(
            `Agent sees their First and last name on getting to the case summary screen`,
        );
        await expect(
            $(`~Welcome ${await element.FirstName} ${await element.LastName}`),
        ).toBeExisting();
    }
});

Then(/^I should see all filters$/, async () => {
    AllureReporter.addSeverity('critical');
    AllureReporter.addFeature('Case Summary');
    AllureReporter.addDescription(
        `Agent sees all filters on case summary screen`,
    );
    await expect(CaseSummaryPage.btnPending).toExist();
    await expect(CaseSummaryPage.btnIssued).toExist();
    await expect(CaseSummaryPage.btnNotPlaced).toExist();
    await expect(CaseSummaryPage.btnAll).toExist();
});

When(/^I tap on the Search button$/, async () => {
    AllureReporter.addSeverity('critical');
    AllureReporter.addFeature('Navigation');
    AllureReporter.addDescription(
        `Agent is able to navigate to the search screen`,
    );
    await BottomNavBar.btnSearch.click();
});

When(/^I am on the search screen$/, async () => {
    AllureReporter.addSeverity('critical');
    AllureReporter.addFeature('Search');
    AllureReporter.addDescription(`Agent is on the Search screen`);
    await expect(searchPage.txtScreenTitle).toExist();
    //await searchPage.clickSearchField();
});

When(
    /^I enter insured fullname, I should see the case summary$/,
    async (table) => {
        let policyCount = 0;
        const tableRows = table.hashes();
        for (const element of tableRows) {
            AllureReporter.addSeverity('critical');
            AllureReporter.addFeature('Search');
            AllureReporter.addFeature('Case Summary');
            AllureReporter.addDescription(
                `Agent is able to search, view and verify case summary`,
            );
            /*  await searchPage.searchPolicy(
                `${element.FirstName} ${element.LastName}`,
            ); */
            await $('(//XCUIElementTypeStaticText[@name="Search"])[2]').click();
            //await $('#7F000000-0000-0000-5076-010000000000').click();
            /*await $(
                '(//XCUIElementTypeStaticText[@name="Search"])[2]',
            ).setValue(`${element.FirstName} ${element.LastName}`); */
            //await searchField.click();
            //const locator = `type == "XCUIElementTypeTextField"`;1

            //const locator = `name == "SearchID"`;
            //const searchField = await $(`-ios predicate string:${locator}`);2
            //await searchPage.txtSearchField.click();
            await searchPage.txtSearchField.setValue(
                element.FirstName + ' ' + element.LastName,
            );
            await driver.hideKeyboard('pressKey', 'return');
            /* if ((await element.PolicyNumber) === '') {
                console.log('unavailable');
            } else {
                await expect($(`~${await element.PolicyNumber}`)).toExist();
            } */
            await expect($(`~${await element.PolicyNumber}`)).toExist();
            await expect($(`~${await element.Amount}`)).toExist();
            await expect($(`~${await element.Status}`)).toExist();
            await expect($(`~${await element.Filter}`)).toExist();
            policyCount++;
            //await searchPage.txtSearchField.click();
            //await searchPage.txtSearchField.clearValue();
            //await searchPage.btnClearInput.waitForEnabled();
            await searchPage.btnClearInput.click();

            //await BottomNavBar.btnHome.click();
            //await BottomNavBar.btnSearch.click();
            //await driver.background(2);
            //await driver.pause(2000);
        }
        console.log(`The Policy Count is ${policyCount}`);
        return policyCount;
    },
);

Given(/^I navigate to the case summary screen$/, async () => {
    AllureReporter.addSeverity('critical');
    AllureReporter.addFeature('Case Summary');
    AllureReporter.addFeature('Navigation');
    AllureReporter.addDescription(
        `Agent is able to navigate to Case Summary and view Case Summary`,
    );
    await bottom_nav_bar.btnProfile.click();
    await bottom_nav_bar.btnHome.click();
    await driver.setTimeouts(120000);
    await expect(CaseSummaryPage.screenTitle).toHaveText('Cases');
});

When(/^I tap on the Issued filter$/, async () => {
    AllureReporter.addSeverity('critical');
    AllureReporter.addFeature('Case Summary');
    AllureReporter.addFeature('Filter');
    AllureReporter.addDescription(`Agent is able to tap on the Issued Filter`);
    await CaseSummaryPage.btnIssued.click();
    //await searchPage.clickSearchField();
});

Then(/^I should seee the Issued cases$/, async () => {
    AllureReporter.addSeverity('critical');
    AllureReporter.addFeature('Case Summary');
    AllureReporter.addFeature('Filter');
    AllureReporter.addDescription(
        `Agent is able view Case Summary base on the Issued Filter`,
    );
    expect($$('~Issued').length > 2);
    //await driver.background(2);
});

When(/^I tap on the Not Placed filter$/, async () => {
    AllureReporter.addSeverity('critical');
    AllureReporter.addFeature('Case Summary');
    AllureReporter.addFeature('Filter');
    AllureReporter.addDescription(
        `Agent is able to tap on the Not Placed Filter`,
    );
    await CaseSummaryPage.btnNotPlaced.click();
    //await searchPage.clickSearchField();
});

Then(/^I should see the Not Placed cases$/, async () => {
    AllureReporter.addSeverity('critical');
    AllureReporter.addFeature('Case Summary');
    AllureReporter.addFeature('Filter');
    AllureReporter.addDescription(
        `Agent is able view Case Summary base on the Not Placed Filter`,
    );
    expect($$('~Not Placed').length > 2);
    //await driver.background(2);
});

When(/^I tap on the All filter$/, async () => {
    AllureReporter.addSeverity('critical');
    AllureReporter.addFeature('Case Summary');
    AllureReporter.addFeature('Filter');
    AllureReporter.addDescription(`Agent is able to tap on the All Filter`);
    await CaseSummaryPage.btnAll.click();
    //await searchPage.clickSearchField();
});

Then(/^I should see the All cases$/, async () => {
    AllureReporter.addSeverity('critical');
    AllureReporter.addFeature('Case Summary');
    AllureReporter.addFeature('Filter');
    AllureReporter.addDescription(
        `Agent is able view Case Summary base on the All Filter`,
    );
    expect(($$('~Pending').length = 7));
    expect(($$('~Issued').length = 4));
    expect(($$('~Not Placed').length = 2));
    //await driver.background(2);
});

When(/^I tap on a case$/, async (table) => {
    const tableRows = table.hashes();
    for (const element of tableRows) {
        AllureReporter.addSeverity('critical');
        AllureReporter.addFeature('Case Summary');
        AllureReporter.addDescription(`Agent is able to tap on a case`);
        await $(`~${element.CaseAssesibilityID}`).click();
    }
});

/* When(/^I enter sear text$/, async () => {
    await $('(//XCUIElementTypeStaticText[@name="Search"])[2]').click();
    await $('(//XCUIElementTypeStaticText[@name="Search"])[2]').setValue('Dav');
    await driver.hideKeyboard('pressKey', 'return');
}); */
