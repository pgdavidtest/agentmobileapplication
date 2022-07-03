import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CaseSummaryPage extends Page {
    /**
     * define selectors using getter methods
     */

    get screenTitle() {
        return $(`//XCUIElementTypeStaticText[@name="Cases"]`);
    }

    get btnPending() {
        return $('//XCUIElementTypeButton[@name="Pending"]');
    }

    get btnIssued() {
        return $('//XCUIElementTypeButton[@name="Issued"]');
    }

    get btnNotPlaced() {
        return $('~Not placed');
    }

    get btnAll() {
        return $('//XCUIElementTypeButton[@name="All"]');
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

    get btnCases() {
        return $$('**/XCUIElementTypeButton[`label == "Policy"`]');
    }

    /**
     * methods to encapsule automation code to interact with the page
     */

    async txtAccept_tap() {
        let ele = await this.screenTitle.g;
        await this.txtAccept.waitForExist();
        await this.txtAccept.click();
    }

    async txtDecline_tap() {
        await this.textDecline.touchAction('tap');
    }

    async viewPortNumberOfCases() {
        let caseTotal = this.btnCases.length;
        return await caseTotal;
        //await this.te
    }

    async swipeVertical() {
        // Swipe up vertically

        const height = await browser.getWindowSize();
        const screenHeight = height.height;
        console.log(`The screen Height is ${screenHeight}`);
        const anchorPercentage = 50;
        const startPointPercentage = 90;
        const endPointPercentage = 10;
        driver.get;

        const anchor = (screenHeight * anchorPercentage) / 100;
        const startPoint = (screenHeight * startPointPercentage) / 100;
        const endPoint = (screenHeight * endPointPercentage) / 100;

        // Touch on Screen before doing touch action
        await this.screenTitle.click();

        // Press on start point, wait 1s, moveTo endPoint , release
        driver.touchPerform([
            {
                action: 'press',
                options: {
                    x: anchor,
                    y: startPoint,
                },
            },
            {
                action: 'wait',
                options: {
                    ms: 1000,
                },
            },
            {
                action: 'moveTo',
                options: {
                    x: anchor,
                    y: endPoint,
                },
            },
            {
                action: 'wait',
                options: {
                    ms: 1000,
                },
            },
            {
                action: 'release',
                options: {},
            },
        ]);
    }

    async numberOfCases() {
        let found = false;
        let lastCaseName = 'L21005794A - Policy';
        let caseNames = [];
        let selector = '**/XCUIElementTypeButton[`label == "Policy"`]';
        let caseClass = $$(`-ios class chain:${selector}`);
        let count = 0;
        let theCaseName;
        let figure;
        //while (!found) {
        //let totalSize;
        //let caseClassSize = await caseClass.length;
        //totalSize = totalSize +
        for (var i = 0; i < caseClass.length; i++) {
            //theCaseName = await caseClass[i].getAttribute('name');
            if (!caseNames.includes(await caseClass[1].getAttribute('name'))) {
                caseNames.push(await caseClass[1].getAttribute('name'));
                count++;
                figure = count;

                //console.log(`This is the case name ${thecasename}`);
                /*  if (
                    !caseNames.includes(await caseClass[i].getAttribute('name'))
                ) {
                    caseNames.push(await caseClass[i].getAttribute('name'));
                    let theCount = count++;
                    console.log(theCount)
                }  */
            }
        }
        return figure;

        /*  viewLastCaseName = await caseClass[caseClassSize].getAttribute(
                'name',
            );
            if (viewLastCaseName === lastCaseName) {
                found = true;
                break;
            }
            if ((found = false)) {
                await this.swipeVertical();
            } */
        /*       lastCaseName =
                            caseClass[caseClass.length()].getAttribute('name');
                        if (lastCaseName === L21005794A - Policy) {
                            found = true;
                            break;
                        }
                        //return count;
                        }
                        if (!found) {
                        this.swipeVertical();
                        } */
        //}
        //}
        //}
        //}
        //return caseNames;
        /* let caseTotal = this.btnCases.length;
        return await caseTotal;
        //await this.te */
    }

    async getCaseCount() {
        let caseNames = [];
        let selector = '**/XCUIElementTypeButton[`label == "Policy"`]';
        let caseClass = $$(`-ios class chain:${selector}`);
        let thecount = 0;
        let id;
        let found = false;
        let totalCases = 0;
        //let selector = '**/XCUIElementTypeButton[`label == "Policy"`]';
        //let caseClass = $$(`-ios class chain:${selector}`);
        for (var i = 0; i < caseClass.length; i++) {
            id = caseClass[1].getAttribute('name');
            //console.log(`that is ${id}`);
            //caseNames.push(id);
            //totalCases = caseNames.length;
            /* if (
                    !caseNames.includes(await caseClass[i].getAttribute('name'))
                ) {
                    caseNames.push(caseClass[i].getAttribute('name'));
                    totalCases = caseNames.length;
                } */
        }
        return id;
    }
}

export default new CaseSummaryPage();
