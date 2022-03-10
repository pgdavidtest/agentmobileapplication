import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class PrivacyPage extends Page {
    /**
     * define selectors using getter methods
     */

     get screenTitle() {
        return $('~Privacy Notice');
    }

    get txtAccept() {
        return $('~Accept');
    }

    get Decline() {
        return $('~Decline');
    }

    /**
     * methods to encapsule automation code to interact with the page
     */

    async txtAccept_tap() {
        await this.txtAccept.waitForExist();
        await this.txtAccept.click();
    }

    async txtDecline_tap() {
        await this.textDecline.touchAction('tap');
    }
}

export default new PrivacyPage();