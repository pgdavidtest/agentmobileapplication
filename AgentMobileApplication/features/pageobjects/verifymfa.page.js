import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class VerifyMFAPage extends Page {
    /**
     * define selectors using getter methods
    */
    
     get txtMFAScreen() {
        return $('~Okta-Label');
    }

    get txtCode() {
        return $('~Passcode-Text-ID');
    }

    get btnVerify() {
        return $('~Button-Verify-ID');
    }

    get btnResend() {
        return $('~Button-Resend-ID');
    }

    get btnCancel() {
        return $('~Button-Cancel-ID');
    }

    /**
     * methods to encapsule automation code to interact with the page
     */

    async enterCode(code) {
        await this.txtCode.then((e) => e.setValue(code));
    }

    async clickVerify() {
        await this.btnVerify.click();
    }

    async clickResend() {
        await this.btnResend.click();
    }

    async clickCancel() {
        await this.btnCancel.click();
    }
}

export default new VerifyMFAPage();