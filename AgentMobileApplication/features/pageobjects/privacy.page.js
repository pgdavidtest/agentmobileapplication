import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class PrivacyPage extends Page {
    /**
     * define selectors using getter methods
     */
    get pushNotificationAllert() {
        return $$('~“Agent” Would Like to Send You Notifications');
    }
    get declinePushNotification() {
        return $('~Don’t Allow');
    }
    get allowPushNotification() {
        return $('~Allow');
    }
    get btnBack() {
        return $('//XCUIElementTypeStaticText[@name="Back"]');
    }

    get screenTitle() {
        return $('~App Privacy');
    }

    get btnSave() {
        return $('~Button-Accept-PN-ID');
    }

    get btnCapturePerformanceData() {
        return $('~CapturePerformanceDataOption');
    }

    get btnAnonymizePersonalData() {
        return $('~AnonymizePersonalDataOption');
    }

    get btnCrashReporting() {
        return $('~CrashReportingOption');
    }

    get btnBackToProofilePage() {
        return $('(//XCUIElementTypeStaticText[@name="Profile"])[1]');
    }

    /**
     * methods to encapsule automation code to interact with the page
     */

    async tapSaveButton() {
        await this.btnSave.waitForExist();
        await this.btnSave.click();
    }

    async tapBackButton() {
        await this.btnBack.click();
    }

    async tapCapturePerformanceDataToggle() {
        await this.btnCapturePerformanceData.click();
    }

    async tapAnonymizePersonalDataToggle() {
        await this.btnAnonymizePersonalData.click();
    }

    async tapCrashReporting() {
        await this.btnCrashReporting.click();
    }

    async tapBtnBackTooProfilePage() {
        await this.btnBackToProofilePage.click();
    }
}

export default new PrivacyPage();
