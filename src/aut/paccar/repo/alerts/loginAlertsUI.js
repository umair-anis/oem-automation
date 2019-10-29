'use strict'

let { buildElement } = require('../../../../core/element/buildElement')

/**
 * The UI elements present for Login Alerts
 * @returns UI Object
 */
let loginAlertsUI = (() => {

    // Invalid Login Alerts
    this.messageReset = buildElement(`messageReset`, `css`, `[translate=\"login.reset.initiate_title\"]`)
    this.emailRequired = buildElement(`emailRequired`, `css`, `[for=\"$ctrl.form.email.$error\"]`)
    this.wrongPassworderrorMessageAlert = buildElement(`wrongPassworderrorMessageAlert`, `className`, `md-action md-button ng-scope md-warn-theme md-ink-ripple`)

    // Change Password Validation Alerts
    //this.incorrectPwdMsg = await buildElement(`incorrectPwdMsg`, `cssContainingText`, `.error-block','Passwordisincorrect.`)
    //this.invalidPwdMsg = await buildElement(`invalidPwdMsg`, `cssContainingText`, `.error-block','Passwordshouldmeetatleast3oftheserequirements:Containuppercaseletters,lowercaseletters,numbers,orsymbols.`)


    return this
})

module.exports = {
    loginAlertsUI
}