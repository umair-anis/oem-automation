'use strict'

let { buildElement } = require('../../../../core/element/buildElement')
let { buildElements } = require('../../../../core/element/buildElements')

/**
 * The UI elements present on the Change Password page
 * @returns UI Object
 */
let changePasswordUI = async () => {

    this.existingPassword = await buildElement(`existingPassword`, `model`, `ctrl.user.currentPassword`)
    this.newPassword = await buildElement(`newPassword`, `model`, `ctrl.user.newPassword`)
    this.newPasswordConfirm = await buildElement(`newPasswordConfirm`, `model`, `ctrl.user.newPasswordConfirm`)
    this.cancelBtn = await buildElement(`cancelBtn`, `buttonText`, `Cancel`)
    this.saveBtn = await buildElement(`saveBtn`, `buttonText`, `Save`)

    return this
}

module.exports = {
    changePasswordUI
}