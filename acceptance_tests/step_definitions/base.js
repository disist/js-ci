module.exports = function () {
    this.Given(/^I am on the start page$/, function () {

        return this.visit('http://127.0.0.1:3000/#/');
    });

    this.When(/^I go to the calculate$/, function () {

        return this.firstButtonClick();
    });

    this.When(/^I fill first value "(.*)" and second "(.*)"$/, function (first, second) {

        return this.browser.fill('First value', first)
            .fill('Second value', second);
    });

    this.Then(/^I click "(.*)"$/, function (buttonName) {

        return this.pressButton(buttonName);
    });

    this.Then(/^I should see "(.*)" result of calculation$/, function (result) {

        return this.browser.assert.text('#result', result);
    });

};
