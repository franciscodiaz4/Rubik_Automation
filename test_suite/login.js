const {faker} = require('@faker-js/faker');


module.exports = {
    '@tags': ['login'], 

    beforeEach: function (browser) {
        browser.page.main_objects();    

    },

    afterEach: function (browser) {
        //browser.updateTestRail(browser);
        //browser.end();
    },

//Scenario: Login to Wallet

    'Login with Seed Phrase': (browser) => {
        browser.testId = "";

        browser.url('https://app-stg.rubiktest.com/auth/login')
        browser.page.main_objects()
        //StagingLogin() is located on the page object file main_objects.js
            .pause(5000)
            .waitForElementVisible('.logo-wordmark', 40000)
            .pause(10000)
            .assert.urlContains("https://app-stg.rubiktest.com/")
            //.assert.compareScreenshot('Login To Wallet', 'Screenshot captured!')
            .percySnapshot('Login')
            .end()
    },


}