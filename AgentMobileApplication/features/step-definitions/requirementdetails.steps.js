import { Given, When, Then } from '@cucumber/cucumber';
import CaseSummaryPage from '../pageobjects/casesummary.page';
import searchPage from '../pageobjects/search.page';
import CaseDetailsPage from '../pageobjects/casedetails.page';
import RequirementsPage from '../pageobjects/requiremennts.page';
import AllureReporter from '@wdio/allure-reporter';

Given(/^I am on the requirement details screen$/, async () => {
    AllureReporter.addSeverity('critical');
    AllureReporter.addFeature('Requirement Details');
    AllureReporter.addDescription(`Agent is on Requirement Details Page`);
    await expect(RequirementsPage.txtScreenTitle).toExist();
});

Then(/^I tap on requirement$/, async (table) => {
    const tableRows = table.hashes();
    for (const element of tableRows) {
        AllureReporter.addSeverity('Critical');
        AllureReporter.addFeature('Requirement Details');
        AllureReporter.addDescription(`Agent tap's on a Requirement to open requirement details `);
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
