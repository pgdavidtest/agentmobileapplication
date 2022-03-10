import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {

    get txtWelcome() {
        return $('~Welcome-ID');
    }

    get txtUsername() {
        return $('~UserName-Text-ID');
    }

    get txtPassword() {
        return $$('~Text-Password-ID');
    }

    get btnLogin() {
        return $('~Sign In');
    }

    get faceID() {
        return $('~Face Id');
    }

    get forgotPassword() {
        return $('~Forgot Password');
    }

    get btnTerms_Condition() {
        return $$('~I accept Ameritas Terms and Conditions');
    }

    get btnDemoMode() {
        return $$('~Demo Mode');
    }

    async txtUsername_setText(username) {
        await this.txtUsername.setValue(username);
    }

    async txtPassword_setText(password) {
        await this.txtPassword.setValue(password);
    }

    async chkbxTerms_tap() {
        await this.chkbxTerms.touchAction('tap');
        //await this.chkbxTerms.click();
    }

    async btnDemoMode_tap(ele) {
        for (let i = 0; i < btnDemoMode.length; i++){
            let element = await (btnDemoMode[i]).getAttribute('elementId')
            if (element === ele) {
                await this.btnDemoMode[i].click()
                break;
            }
        }
    }
}

export default new LoginPage();
