import Page from './page';
/**
 * sub page containing specific selectors and methods for a specific page
 */
class RequiirementsPage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnBackToCase() {
        return $('~Bill Snmmmmtestcasebb');
    }

    get txtScreenTitle() {
        return $$('~Requirement');
    }

    get txtRequirementTypeValue() {
        return $('~pendingReqType-Value');
    }

    get txtOrderedByValue() {
        return $('~orderedBy-Value');
    }

    get txtStatusCodeValue() {
        return $('~statusCode-Value');
    }

    get txtRequestDateValue() {
        return $('~RequestDate-Value');
    }

    get txtStatusDateValue() {
        return $('~StatusDate-Value');
    }

    /**
     * methods to encapsule automation code to interact with the page
     */

    async tapBtnBackToHome() {
        await this.btnBackToHome.click();
    }

    async tapBtnBackToSearch() {
        await this.btnBackToSearch.click();
    }

    async tapBtn(botton) {
        await botton.click();
    }
}

export default new RequiirementsPage();
