import { Given, When, Then } from '@cucumber/cucumber';
import LoginPage from '../pageobjects/login.page';
import privacyPage from '../pageobjects/privacy.page';
import SelectMFAPage from '../pageobjects/selectmfa.page';
import DisclosurePage from '../pageobjects/disclosures.page';
import CaseSummaryPage from '../pageobjects/casesummary.page';
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

When(/^I swipe up on the screen$/, async () => {
    await CaseSummaryPage.swipeVertical();
    //let test = await CaseSummaryPage.getCaseCount();
    //console.log(`this are the latest names ${test}`);
});

Then(/^I should see Welcome then my first and lastname$/, async (table) => {
    const tableRows = table.hashes();
    for (const element of tableRows) {
        await expect(
            $(`~Welcome ${await element.FirstName} ${await element.LastName}`),
        ).toBeExisting();
    }
});

Then(/^I should see all filters$/, async () => {
    await expect(CaseSummaryPage.btnPending).toExist();
    await expect(CaseSummaryPage.btnIssued).toExist();
    await expect(CaseSummaryPage.btnNotPlaced).toExist();
    await expect(CaseSummaryPage.btnAll).toExist();
});

When(/^I tap on the Search button$/, async () => {
    await BottomNavBar.btnSearch.click();
});

When(/^I am on the search screen$/, async () => {
    await expect(searchPage.txtScreennTitle).toExist();
    //await searchPage.clickSearchField();
});

When(
    /^I enter insured fullname, I should see the case summary$/,
    async (table) => {
        let policyCount = 0;
        const tableRows = table.hashes();
        for (const element of tableRows) {
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
            await expect($(`~${await element.PolicyNumber}`)).toExist();
            await expect($(`~${await element.Amount}`)).toExist();
            await expect($(`~${await element.Status}`)).toExist();
            await expect($(`~${await element.Filter}`)).toExist();
            //policyCount++;
            //await searchPage.txtSearchField.click();
            //await searchPage.txtSearchField.clearValue();
            //await searchPage.btnClearInput.waitForEnabled();
            await searchPage.btnClearInput.click();

            //await BottomNavBar.btnHome.click();
            //await BottomNavBar.btnSearch.click();
            //await driver.background(2);
            //await driver.pause(2000);
        }
        //console.log(`The Policy Count is ${policyCount}`);
        //return policyCount;
    },
);

Given(/^I navigate to the case summary screen$/, async () => {
    await bottom_nav_bar.btnProfile.click();
    await bottom_nav_bar.btnHome.click();
    await driver.setTimeouts(120000);
    await expect(CaseSummaryPage.screenTitle).toHaveText('Cases');
});

When(/^I tap on the Issued filter$/, async () => {
    await CaseSummaryPage.btnIssued.click();
    //await searchPage.clickSearchField();
});

Then(/^I should seee the Issued cases$/, async () => {
    expect($$('~Issued').length > 2);
    //await driver.background(2);
});

When(/^I tap on the Not Placed filter$/, async () => {
    await CaseSummaryPage.btnNotPlaced.click();
    //await searchPage.clickSearchField();
});

Then(/^I should seee the Not Placed cases$/, async () => {
    expect($$('~Not Placed').length > 2);
    //await driver.background(2);
});

/* When(/^I enter sear text$/, async () => {
    await $('(//XCUIElementTypeStaticText[@name="Search"])[2]').click();
    await $('(//XCUIElementTypeStaticText[@name="Search"])[2]').setValue('Dav');
    await driver.hideKeyboard('pressKey', 'return');
}); */
