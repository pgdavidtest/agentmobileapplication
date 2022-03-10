/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
module.exports = class Page {
  /**
   * Opens a sub page of the page
   * @param path path of the sub page (e.g. /path/to/page.html)
   */
  async open(path) {
    return await browser.url(`${path}`);
  }

  async wait(seconds) {
    await browser.pause(seconds * 1000);
  }

  async getPageTitle() {
    return await browser.getTitle();
  }

   
};
