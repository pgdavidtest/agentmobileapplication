import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SearchPage extends Page {
    /**
     * define selectors using getter methods
     */
    get txtScreennTitle() {
        return $('(//XCUIElementTypeStaticText[@name="Search"])[1]');
    }

    /*  get txtSearchField() {
        return $('//XCUIElementTypeStaticText[@name="Search"])[2]');
    } */

    /* get txtSearchField() {
        return $('//XCUIElementTypeStaticText[@name="Search"])[2]');
    } */

    get txtSearchField() {
        return $('~SearchID');
    }

    get btnClearInput() {
        return $('~Clear input');
    }

    /**
     * methods to encapsule automation code to interact with the page
     */
    async clearField() {
        await this.btnClearInput.click();
    }
    async clickSearchField() {
        await this.txtSearchField.click();
    }
    async searchPolicy(fullname) {
        await this.txtSearchField.setValue(fullname);
        await driver.hideKeyboard('pressKey', 'return');
    }

    async selectSearch(text) {
        let searchField = $$('~Search');
        let size = $$('~Search').length;
        for (var i = 0; i < size; i++) {
            let Elements = searchField[i].getAttribute('elementId');
            if (Elements === '7F000000-0000-0000-5076-010000000000') {
                searchField[i].click();
                searchField[i].setValue(text);
            }
        }
    }
}

export default new SearchPage();
