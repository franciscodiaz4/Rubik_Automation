const {faker} = require('@faker-js/faker');


module.exports = {
    '@tags': ['loginValidations'], 

    beforeEach: function (browser) {
        browser.page.main_objects();    

    },

    afterEach: function (browser) {
        //browser.updateTestRail(browser);
        //browser.end();
    },

    'Login - Blank password': (browser) => {
        browser.testId = "";

        browser.url('https://app-stg.rubiktest.com/auth/login')
        browser.page.main_objects()
            .pause(1000)
            .waitForElementVisible('@usernameField', 40000)
            .updateValue("@usernameField", "qa_3@nicasource.com")
            .click("@loginButton")
            .pause(1000)
            .expect.element("@loginFormError").text.to.contain("The password is missing")
    },

    'Login - Blank username': (browser) => {
        browser.testId = "";

        browser.url('https://app-stg.rubiktest.com/auth/login')
        browser.page.main_objects()
            .pause(1000)
            .updateValue("@usernameField", "")
            .updateValue("@passwordField", "12345")
            .click("@loginButton")
            .pause(1000)
            .expect.element("@loginFormError").text.to.contain("The email is missing")
    },

    'Login - Invalid username': (browser) => {
        browser.testId = "";

        browser.url('https://app-stg.rubiktest.com/auth/login')
        browser.page.main_objects()
            .pause(1000)
            .updateValue("@usernameField", "12345abcd")
            .updateValue("@passwordField", "12345")
            .click("@loginButton")
            .pause(1000)
            .expect.element("@loginFormError").text.to.contain("The email is invalid. Please try again")
    },

    'Login - Incorrect Password': (browser) => {
        browser.testId = "";

        browser.url('https://app-stg.rubiktest.com/auth/login')
        browser.page.main_objects()
            .pause(1000)
            .updateValue("@usernameField", "qa_3@nicasource.com")
            .updateValue("@passwordField", "12345")
            .click("@loginButton")
            .pause(2000)
            .waitForElementVisible('@loginFormError', 40000)
            .expect.element("@loginFormError").text.to.contain("Email or password invalid")
            browser.assert.urlContains("https://app-stg.rubiktest.com/")
    },

    'Login - Incorrect Username': (browser) => {
        browser.testId = "";

        browser.url('https://app-stg.rubiktest.com/auth/login')
        browser.page.main_objects()
            .pause(1000)
            .updateValue("@usernameField", faker.internet.exampleEmail())
            .updateValue("@passwordField", process.env.STAGING_PASSWORD)
            .click("@loginButton")
            .pause(2000)
            .waitForElementVisible('@loginFormError', 40000)
            .expect.element("@loginFormError").text.to.contain("Email or password invalid")
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

}