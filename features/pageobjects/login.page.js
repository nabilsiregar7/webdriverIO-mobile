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

    open() {
        return super.open('login');
    }
}

module.exports = new LoginPage();
