import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SelectMFAPage extends Page {
    /**
     * define selectors using getter methods
     */

    get txtMFAScreen() {
        return $('~Okta-Label');
    }

    get mfaSelectBtn() {
        return $('~Select-Factor-ID');
    }

    get btnTxtMFA() {
        return $('~sms-Factor');
    }

    get btnCallMFA() {
        return $('~call-Factor');
    }

    get btnEmaillMFA() {
        return $('~email-Factor');
    }

    get btnCancelMFAScreen() {
        return $('~Cancel-Login-ID');
    }

    /**
     * methods to encapsule automation code to interact with the page
     */

    async clickMFASelect() {
        await this.mfaSelectBtn.click();
    }

    async selectMFAOption(mfafactor) {
        await mfafactor.click();
    }
}

export default new SelectMFAPage();
