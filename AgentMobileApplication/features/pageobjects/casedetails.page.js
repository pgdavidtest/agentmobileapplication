import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CaseDetailsPage extends Page {
    /**
     * define selectors using getter methods
     */
    get btnBackToHome() {
        return $('~Cases');
    }

    get btnBackToSearch() {
        return $('(//XCUIElementTypeButton[@name="Search"])[1]');
    }

    get txtAllRequirements() {
        return $('~All Requirements');
    }

    get btnGoDoown() {
        return $$('~Go Down');
    }

    get btnGoUp() {
        return $('~Go Up');
    }

    get btnForward() {
        return $('~Forward');
    }

    get txtUnderWriter() {
        return $('~Underwriter');
    }

    get txtCustomerService() {
        return $('~Customer Service');
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

export default new CaseDetailsPage();
