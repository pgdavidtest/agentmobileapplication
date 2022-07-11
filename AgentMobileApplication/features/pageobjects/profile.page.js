import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProfilePage extends Page {
    /**
     * define selectors using getter methods
     */
    get txtScreenTitle() {
        return $('//XCUIElementTypeStaticText[@name="Profile"]');
    }

    get btnAppPriivacy() {
        return $('~PrivacyOptions-Button');
    }

    get btnLogout() {
        return $('~Logout');
    }

    /**
     * methods to encapsule automation code to interact with the page
     */
    async tapAppPrivacy() {
        await this.btnAppPriivacy.click();
    }
    async tapLogout() {
        await this.btnLogout.click();
    }
    async getScreenTitle() {
        let screenTitle = await this.txtScreenTitle.getAttribute('name');
        return screenTitle;
    }
}

export default new ProfilePage();
