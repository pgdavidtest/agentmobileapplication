import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class BottomNavBar extends Page {
    /**
     * define selectors using getter methods
     */
    get btnHome() {
        return $('~Home');
    }

    get btnSearch() {
        return $('~Search');
    }

    get btnProfile() {
        return $('~Profile');
    }

    /**
     * methods to encapsule automation code to interact with the page
     */

    async tapHome() {
        await this.btnHome.waitForExist();
        await this.btnHome.click();
    }

    async tapSearch() {
        await this.btnSearch.waitForExist();
        await this.btnSearch.click()
    }

    async tapProfile() {
        await this.btnProfile.waitForExist();
        await this.btnProfile.click();
    }
}

export default new BottomNavBar()