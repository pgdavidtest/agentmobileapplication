import { Given, When, Then } from '@cucumber/cucumber';
import CaseSummaryPage from '../pageobjects/casesummary.page';
import searchPage from '../pageobjects/search.page';
import CaseDetailsPage from '../pageobjects/casedetails.page';
import RequirementsPage from '../pageobjects/requiremennts.page';

Given(/^I am on the requirement details screen$/, async () => {
    await expect(CaseSummaryPage.screenTitle).toExist();
});

Then(/^I tap on requirement$/, async (table) => {
    //let forwardCount = $$('~Forward').length;
    //for (var i = 0; i < forwardCount; i++) {
    //    await expect($('~Forward')[i]).toHaveAttr('label', 'Forward');
    //}
    const tableRows = table.hashes();
    for (const element of tableRows) {
        await $(`~${element.SubRequirement}`).click();
        await expect(RequirementsPage.txtScreenTitle).toExist();
        await expect(RequirementsPage.txtRequirementTypeValue).toHaveAttr(
            'value',
            element.ReqTypeValue,
        );
        await expect(RequirementsPage.txtOrderedByValue).toHaveAttr(
            'value',
            element.OrderedByValue,
        );
        await expect(RequirementsPage.txtStatusCodeValue).toHaveAttr(
            'value',
            element.StatusCodeValue,
        );
        await expect(RequirementsPage.txtRequestDateValue).toHaveAttr(
            'value',
            element.RequestedDateValue,
        );
        await expect(RequirementsPage.txtStatusDateValue).toHaveAttr(
            'value',
            element.StatusDateValue,
        );

        await RequirementsPage.btnBackToCase.click();
    }
});
