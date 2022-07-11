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
import CaseDetailsPage from '../pageobjects/casedetails.page';

When(/^I tap on the case details back button$/, async () => {
    AllureReporter.addSeverity('normal');
    AllureReporter.addFeature('Navigation');
    AllureReporter.addDescription(
        `Agent is able to navigate from case details to case summary`,
    );
    await expect(CaseDetailsPage.btnBackToHome).toExist();
    await CaseDetailsPage.tapBtnBackToHome();
    await expect(CaseSummaryPage.screenTitle).toExist();
});

Then(
    /^I enter inssured name, click on the case then I should see the case details$/,
    async (table) => {
        const tableRows = table.hashes();
        for (const element of tableRows) {
            AllureReporter.addSeverity('critical');
            AllureReporter.addFeature('Case Details');
            AllureReporter.addDescription(
                `Agent is able to tap on a case to view and verify its details`,
            );
            await $('(//XCUIElementTypeStaticText[@name="Search"])[2]').click();
            await searchPage.txtSearchField.setValue(element.FullName);
            await driver.hideKeyboard('pressKey', 'return');
            await $(`~${element.FullName}`).click();
            //const locator = `label == "element.fullName"`;
            //const fullName = await $(`-ios predicate string:${locator}`);
            await expect($(`~${element.FullName}`)).toHaveAttr(
                'name',
                element.FullName,
            );
            /* await expect(
                fullName.('name', element.FullName),
            ).toExist(); */
            await expect($(`~${element.PolicyType}`)).toExist();
            await expect($(`~${await element.PolicyNumber}`)).toExist();
            await expect($(`~${await element.Amount}`)).toExist();
            await expect($(`~${await element.Status}`)).toExist();
            await expect($(`~${await element.Filter}`)).toExist();
            await expect($(`~${await element.Commission}`)).toExist();
            if ((await element.Requirement1) === '') {
                console.log('unavailable');
            } else {
                await expect(
                    $(`~${await element.Requirement1}-Button`),
                ).toExist();
            }
            if ((await element.Requirement2) === '') {
                console.log('unavailable');
            } else {
                await expect(
                    $(`~${await element.Requirement2}-Button`),
                ).toExist();
            }
            if ((await element.Requirement3) === '') {
                console.log('unavailable');
            } else {
                await expect(
                    $(`~${await element.Requirement3}-Button`),
                ).toExist();
            }
            if ((await element.Requirement4) === '') {
                console.log('unavailable');
            } else {
                await expect(
                    $(`~${await element.Requirement4}-Button`),
                ).toExist();
            }
            if ((await element.Underwriter) === '') {
                console.log('unavailable');
            } else {
                await expect($('~Underwriter-Value')).toHaveAttr(
                    'value',
                    element.Underwriter,
                );
            }
            if ((await element.CustomerService) === '') {
                console.log('unavailable');
            } else {
                await expect($('~Customer Service-Value')).toHaveAttr(
                    'value',
                    element.CustomerService,
                );
            }
            await CaseDetailsPage.tapBtnBackToSearch();
            await searchPage.btnClearInput.click();
        }
    },
);

When(/^I tap on requirements$/, async (table) => {
    AllureReporter.addSeverity('critical');
    AllureReporter.addFeature('Requirement');
    AllureReporter.addDescription(
        `Agent is able to tap on a requirement to view its sub requirements`,
    );
    /* let downCount = $$('//XCUIElementTypeImage[@name="Go Down"]').length
    let upCount = $$('//XCUIElementTypeImage[@name="Go Up"]').length
    for (var i = 0; i < downCount; i++){
        await expect($('(//XCUIElementTypeImage[@name="Go Down"])[i]')).toHaveAttr(
            'label',
            'Go Down',
        ); 
    
    }*/
    await expect($('(//XCUIElementTypeImage[@name="Go Down"])[1]')).toHaveAttr(
        'label',
        'Go Down',
    );
    await expect($('(//XCUIElementTypeImage[@name="Go Down"])[2]')).toHaveAttr(
        'label',
        'Go Down',
    );
    const tableRows = table.hashes();
    for (const element of tableRows) {
        await $(`~${element.Requirement}`).click();
    }
    /* for (var i = 0; i < upCount; i++) {
        await expect(
            $('(//XCUIElementTypeImage[@name="Go Up"])[i]'),
        ).toHaveAttr('label', 'Go Up');
    } */
    await expect($('(//XCUIElementTypeImage[@name="Go Up"])[1]')).toHaveAttr(
        'label',
        'Go Up',
    );
    await expect($('(//XCUIElementTypeImage[@name="Go Up"])[1]')).toHaveAttr(
        'label',
        'Go Up',
    );
});
