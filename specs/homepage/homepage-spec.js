const HomepagePage = require('../../page_objects/homepage/homepage-page');
const { assert, expect } = require('chai');

describe('Login', () => {
    beforeEach(() => {
        browser.url('./')
    });
    afterEach(() => {
        // Deleting cookies after each session will allow us to have new session before next test starts
        browser.deleteCookies();
    });

    it(' should be able to click on api button, assert button and displayed isOk button ', () => {

        HomepagePage.apiBtn.waitForDisplayed();
        HomepagePage.apiBtn.click();
        HomepagePage.assertBtn.waitForDisplayed();
        HomepagePage.assertBtn.click();
        HomepagePage.isOkBtn.waitForDisplayed();
    });
    it(' should be able to click on plugin directory button and chai js button ', () => {

        HomepagePage.pluginDirectoryBtn.waitForDisplayed();
        HomepagePage.pluginDirectoryBtn.click();
        HomepagePage.chaijsBtn.click();
        HomepagePage.platformSupportedTxt.waitForDisplayed();
    });
    it(' should be able to click on guide ,resourses and transferred to google groups', () => {
        HomepagePage.guideBtn.click();
        HomepagePage.resoursesBtn.waitForDisplayed();
        HomepagePage.resoursesBtn.click();
        HomepagePage.googlegroupBtn.click();
        //Make sure you land on google page
        browser.switchWindow('https://groups.google.com/g/chaijs');
        const googlegroupBtn = browser.getUrl();
        expect(googlegroupBtn).to.equal('https://groups.google.com/g/chaijs');
    })
});