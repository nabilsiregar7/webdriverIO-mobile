const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername() {
        return $('#username');
    }

    get inputPassword() {
        return $('#password');
    }

    get btnSubmit() {
        return $('#loginbutton');
    }

    get errMsg() {
        return $('div.sysmsg-content');
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    // async username (username) {
    //     await this.inputUsername.setValue(username);
    // }

    // async password (password) {
    //     await this.inputPassword.setValue(password);
    // }

    // async isErrorMsgDisplayed () {
    //     await this.errMsg.waitForDisplayed();
    // }

    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('login');
    }
}

module.exports = new LoginPage();