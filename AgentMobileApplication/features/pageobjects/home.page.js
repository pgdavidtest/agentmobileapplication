import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class HomePage extends Page {
    /**
     * define selectors using getter methods
     */

     get screenTitle() {
        return $('//XCUIElementTypeStaticText[@name="Cases"]');
    }

    get btnPending() {
        return $$('~Pending');
    }

    get btnIssued() {
        return $$('~Issued');
    }

    get btnnorPlaced() {
        return $$('~Not Placed');
    }

    get btnAll() {
        return $$('~All');
    }

    get btnHome() {
        return $$('~Home');
    }

    get btnSearch() {
        return $$('~Search');
    }

    get btnProfile() {
        return $$('~Profile');
    }

    /**
     * methods to encapsule automation code to interact with the page
     */

    async txtAccept_tap() {
        let ele = await this.screenTitle.g
        await this.txtAccept.waitForExist();
        await this.txtAccept.click();
    }

    async txtDecline_tap() {
        await this.textDecline.touchAction('tap');
    }
}

export default new HomePage();