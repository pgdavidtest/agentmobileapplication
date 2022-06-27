import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    get AmeritasLogo() {
        return $('~Ameritas Logo');
    };

    get btnMore() {
        return $('~More');
    };

    get txtPleaseReviewEachStatement() {
        return $('~Please review each section below');
    };

    get txtAppPrivacy() {
        return $('~App Privacy');
    };

    get txtPrivacyNotice() {
        return $('~Ameritas Online Privacy Notice');
    };

    get txtDisclosure() {
        return $('~Disclosures');
    };

    get txtLegalTermOfUse() {
        return $('~Legal/Term of Use');
    };

    get txtCancel() {
        return $('~Cancel');
    };

    get txtUsername() {
        return $('~UserName-Text-ID');
    };

    get txtPassword() {
        return $('~Text-Password-ID');
    };

    get btnLogin() {
        return $('~Button-SignIn-ID');
    };

    get txtPrivacyStatement() {
        return $('~By Signing in, you agree to the Ameritas Online Privacy Notice and Legal/Terms of Use.');
    };

    get faceID() {
        return $('~Face Id');
    };

    get forgotPassword() {
        return $('~Forgot Password');
    };

    get btnTerms_Condition() {
        return $('~Button-Accept-TC-ID');
    };

    get btnDemoMode() {
        return $('~Button-Demo-ID');
    };

    get AlertBtnOk() {
        return $('~OK');
    };

    async tapMore() {
        await this.btnMore.click();
    };

    async validateLogo() {
        await this.AmeritasLogo.isExisting();
    };

    async txtUsername_setText(username) {
        await this.txtUsername.click();
        await this.txtUsername.setValue('\b\b\b\b\b\b\b\b\b\b'); //Used this to clear previous value up to 10 characters
        //await driver.touchPerform({action: 'longPress', options: '\b'})
        await this.txtUsername.setValue(username);
    };

    async txtPassword_setText(password) {
        await this.txtPassword.setValue(password);
    };

    async clickLogin() {
        await this.btnLogin.click();
    };

    async tapAppPrivacy() {
        await this.txtAppPrivacy.click();
    };

    async tapOnlinePrivacyNotice() {
        await this.txtPrivacyNotice.click();
    };

    async tapDisclosure() {
        await this.txtDisclosure.click();
    };

    async tapLegal_TermOfService() {
        await this.txtLegalTermOfUse.click();
    };

    async tapCancel() {
        await this.txtCancel.click();
    };

    async btnDemoMode_tap(ele) {
        for (let i = 0; i < btnDemoMode.length; i++) {
            let element = await btnDemoMode[i].getAttribute('elementId');
            if (element === ele) {
                await this.btnDemoMode[i].click();
                break;
            }
        }
    }
}

export default new LoginPage();
