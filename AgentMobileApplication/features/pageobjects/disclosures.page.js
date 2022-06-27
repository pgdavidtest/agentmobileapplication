import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class DisclosuresPage extends Page {
    /**
     * define selectors using getter methods
     */

    get btnBack() {
        return $('~Back');
    }

    get txtScreennTitle() {
        return $('//XCUIElementTypeStaticText[@name="Disclosures"]');
    }

    /**
     * methods to encapsule automation code to interact with the page
     */

    async tapBackButton() {
        await this.btnBack.click();
    }
}

export default new DisclosuresPage();