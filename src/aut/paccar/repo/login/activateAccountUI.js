'use strict'

let { buildElement } = require('../../../../core/element/buildElement')
let { buildElements } = require('../../../../core/element/buildElements')

/**
 * The UI elements present for activating a portal account
 * @returns UI Object
 */
let activateAccountUI = async () => {

    this.password = await buildElements(`password`, `model`, `ctrl.user.password`)
    this.cnfPassword = await buildElement(`cnfPassword`, `model`, `ctrl.confirmpassword`)
    this.cancelBtn = await buildElement(`cancelBtn`, `buttonText`, `Cancel`)
    this.activateBtn = await buildElement(`activateBtn`, `buttonText`, `ActivateAccount`)

    return this
}

module.exports = {
    activateAccountUI
}