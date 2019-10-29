'use strict'

let { buildElement } = require('../../../../core/element/buildElement')

/**
 * The UI elements present on the Portal Login page
 * @returns UI Object
 */
let loginUi = (() => {

    // Username/Email/Password Credentials
    this.editPassword = buildElement(`editPassword`, `name`, `password`);
    this.editUser = buildElement(`editUser`, `name`, `email`);
    this.editEmail = buildElement(`editEmail`, `name`, `email`);
    this.labelPassword = buildElement (`labelPassword`, `css`, `[translate=\"login.common.password\"]`);
    this.emailField = buildElement(`emailField`, `xpath`, `//input[@type="email"]`);
    
    // Buttons
    // TODO: buttonSubmit, buttonCancel, and buttonEmail are the same. Same with buttonForgotPassword. Should
    // these stay apart as more separation of concern or merged into the same variable?
    this.buttonSubmit = buildElement(`buttonSubmit`, `css`, `[type="submit"]`);
    this.buttonCancel = buildElement(`buttonCancel`, `css`, `[href="#/login"]`);
    this.buttonForgotPassword = buildElement(`buttonForgotPassword`, `css`, `[href="#/forgotpassword"]`);
    this.buttonChangePassword = buildElement(`buttonChangePassword`, `css`, `[href="#/forgotpassword"]`);
    this.buttonConfirmPassword = buildElement(`buttonConfirmPassword`, `$`, `[ng-model="$ctrl.confirmPassword`);
    this.buttonSendEmail = buildElement(`buttonSendEmail`, `css`, `[type="submit"]`);
    this.buttonEmail = buildElement(`buttonEmail`, `css`, `[type="submit"]`);
    this.buttonReset = buildElement(`buttonReset`, `xpath`, `//button`);

    return this
})

module.exports = {
    loginUi
}