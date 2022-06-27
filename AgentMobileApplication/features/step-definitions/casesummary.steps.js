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
    await expect(CaseSummaryPage.btnnorPlaced).toExist();
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
            const locator = `type == "XCUIElementTypeTextField"`;
            const searchField = await $(`-ios predicate string:${locator}`);
            await searchField.setValue(
                element.FirstName + ' ' + element.LastName,
            );
            await driver.hideKeyboard('pressKey', 'return');
            await expect($(`~${await element.PolicyNumber}`)).toExist();
            await expect($(`~${await element.Amount}`)).toExist();
            await expect($(`~${await element.Status}`)).toExist();
            await expect($(`~${await element.Filter}`)).toExist();
            await searchPage.btnClearInput.click();
            await BottomNavBar.btnHome.click();
            await BottomNavBar.btnSearch.click();
            await driver.background(2);
            //await driver.pause(2000);
        }
    },
);

/* When(/^I enter sear text$/, async () => {
    await $('(//XCUIElementTypeStaticText[@name="Search"])[2]').click();
    await $('(//XCUIElementTypeStaticText[@name="Search"])[2]').setValue('Dav');
    await driver.hideKeyboard('pressKey', 'return');
}); */
