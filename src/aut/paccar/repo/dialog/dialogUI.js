'use strict'

let { buildElement } = require('../../../../core/element/buildElement')
let { buildElements } = require('../../../../core/element/buildElements')

/**
 * The UI elements presentfor Dialog Messages
 * @returns UI Object
 */
let dialogUI = async () => {

    this.dialogBox = await buildElement(`dialogBox`, `xpath`, `//md-dialog`)
    this.buttonSubmitDialog = await buildElement(`buttonSubmitDialog`, `css`, `[ng-click="dialog.hide()"]`)
    this.buttonSaveDialog = await buildElement(`buttonSaveDialog`, `css`, `[ng-click="$ctrl.form.$valid && $ctrl.save()"]`)
    this.buttonCancelDialog = await buildElement(`buttonCancelDialog`, `css`, `[ng-click="dialog.abort()"]`)
    this.buttonCancelCreation = await buildElement(`buttonCancelCreation`, `css`, `[ng-click="$ctrl.cancel()"]`)
    this.nameInputDialog = await buildElement(`nameInputDialog`, `xpath`, `//input[@name = 'name']`)
    //this.deleteDialogButton = element(by.cssContainingText('[ng-click="dialog.hide()"]', 'Delete'));

    return this
}

module.exports = {
    dialogUI
}