const { Given, When, Then } = require('@wdio/cucumber-framework');

const LoginPage = require('../pageobjects/login.page');

const pages = {
    login: LoginPage
}

Given(/^I am on the Stockbit (\w+) page$/, async (page) => {
    await pages[page].open()
});

When(/^I input username (\w+)$/, async (username) => {
    await LoginPage.inputUsername.setValue(username)
});

When(/^I input password (\w+)$/, async (password) => {
    await LoginPage.inputPassword.setValue(password)
    await LoginPage.btnSubmit.click()
});

Then(/^I should see error message$/, async () => {
    await LoginPage.errMsg.waitForDisplayed();
});

Then(/^I should see popup hint message$/, async () => {
    await LoginPage.errMsg.waitForDisplayed();
});