const {faker} = require('@faker-js/faker');


module.exports = {
    '@tags': ['createCandidate'], 

    beforeEach: function (browser) {
        browser.page.main_objects();    

    },

    afterEach: function (browser) {
        //browser.updateTestRail(browser);
        //browser.end();
    },

    'Login - Successful login': (browser) => {
        browser.testId = "";

        browser.url('https://app-stg.rubiktest.com/auth/login')
        browser.page.main_objects()
            .pause(1000)
            .updateValue("@usernameField", "qa_3@nicasource.com")
            .updateValue("@passwordField", process.env.STAGING_PASSWORD)
            .click("@loginButton")
            .pause(1000)
            .waitForElementVisible('@notification', 40000)
            .expect.element("@notification").text.to.contain("Login Successful, Redirecting...")
            browser.assert.urlContains("https://app-stg.rubiktest.com/admin")
    },

    'Navigate to Candidates Page': (browser) => {
        browser.testId = "";

        browser.page.main_objects()
            .pause(1000)
            .click("@candidatesPage")
            .pause(1000)
            .waitForElementVisible('@pageTitle', 40000)
            .expect.element("@pageTitle").text.to.contain("Candidates")
            browser.assert.urlContains("https://app-stg.rubiktest.com/admin/candidates")
    },

    'Create Candidate Flow': (browser) => {
        browser.testId = "";

        browser.page.main_objects()
            .pause(1000)
            .click("@createNewCandidateButton")
            .pause(1000)
            .updateValue("@candidateNameField", faker.person.fullName())
            .pause(1000)
            .updateValue("@candidateEmailField", faker.internet.email())
            .pause(1000)
            .updateValue("@candidateProfileUrlField", faker.internet.url())
            .pause(1000)
            .click("@jobPositionDrowdown")
            .pause(1000)
            .click("@jobPositionOption2")
            .pause(1000)
            .click("@createCandidateButton")
            .pause(1000)
            //.waitForElementVisible('@notification', 40000)
            //.expect.element("@notification").text.to.contain("Candidate created sucessfully")
            browser.assert.urlContains("https://app-stg.rubiktest.com/admin/candidates")
    },

}