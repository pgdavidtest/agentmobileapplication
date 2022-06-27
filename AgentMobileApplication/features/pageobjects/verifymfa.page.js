import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class VerifyMFAPage extends Page {
    /**
     * define selectors using getter methods
     */

    get txtVerifyMFAScreen() {
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

    get alertNoAccessErrorMsg() {
        return $(
            `~You currently don't have access to the Ameritas Agent app. Please contact xxx-xxx-xxxx to gain access.`,
        );
    }

    get AlertBtnOk() {
        return $('~OK');
    }

    get alertExpiredCodeErrorMsg() {
        return $(
            `~This authentication code has expired. Please request a new authentication code to proceed.`,
        );
    }

    get alertWrongCodeErrorMsg() {
        return $(
            `~Your authentication code doesn't match our records. Please try again.`,
        );
    }

    get alertVerificationTimeoutError() {
        return $(
            `~Verification timeout error. Please wait 30 seconds before trying again.`,
        );
    }

    get alertSentVerificationNewCode() {
        return $(
            `~We have sent a new code to your mobile device. Please use that code to try again.`,
        );
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
