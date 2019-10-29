'use strict'

let { buildElement } = require('../../../../../core/element/buildElement')

/**
 * The UI elements present for Remote Diagnostics
 * @returns UI Object
 */
let remoteDiagnosticsUI = (() => {

    // Prompts
    const deactivateSucceeded = `Deactivation succeeded`
    const reactivateSucceeded = `Reactivation succeeded`
    const cannotProcessVins = `One or more VINs could not be processed. Please check the formatting of the remaining VINs and try ENTER VIN(s) again.`

    this.promptDeactivateSuccess = buildElement(`promptDeactivateSuccess`, `xpath`, `//span[contains(text(), "${deactivateSucceeded}")]`)
    this.promptReactivateSuccess = buildElement(`promptReactivateSuccess`, `xpath`, `//span[contains(text(), "${reactivateSucceeded}")]`)
    this.promptCannotProcessVins = buildElement(`promptCannotProcessVins`, `xpath`, `//md-dialog-content//p[contains(text(), "${cannotProcessVins}")]`)

    // Alerts
    const error50Vins = `Enter up to 50 VINs.`

    this.alert50Vins = buildElement(`alert50Vins`, `xpath`, `//span[contains(text(), "${error50Vins}")]`)

    // Tabs
    this.tabDeactivate = buildElement(`tabDeactivate`, `xpath`, `//md-tab-item[1]`)
    this.tabReactivate = buildElement(`tabReactivate`, `xpath`, `//md-tab-item[2]`)

    // Inputs
    this.fieldDeactivateVins = buildElement(`fieldDeactivateVins`, `css`, `[name="vinsToDeactivate"]`)
    this.fieldReactivateVins = buildElement(`fieldReactivateVins`, `css`, `[name="vinsToReactivate"]`)

    // Buttons
    this.buttonDeactivateReset = buildElement(`buttonDeactivateReset`, `css`, `[ng-click="$ctrl.resetDeactivateForm()"]`)
    this.buttonReactivateReset = buildElement(`buttonReactivateReset`, `css`, `[ng-click="$ctrl.resetReactivateForm()"]`)
    this.buttonDeactivate = buildElement(`buttonDeactivate`, `css`, `[ng-disabled="!$ctrl.vinsToDeactivate"]`)
    this.buttonReactivate = buildElement(`buttonReactivate`, `css`, `[ng-disabled="!$ctrl.vinsToReactivate"]`)

    this.buttonConfirmActivation = buildElement(`buttonConfirmActivation`, `css`, `[ng-click="dialog.hide()"]`)

    // Dropdowns
    this.dropdownRemovalCategory = buildElement(`dropdownRemovalCategory`, `css`, `[ng-model="$ctrl.vinsRemovalCategory"]`)

    // Tables
    this.buttonExport = buildElement(`buttonExport`, `css`, `[aria-label="file_download"]`)
    this.table = buildElement(`table`, `xpath`, `//*[@id="remote-diagnostics-deactivate-table"]/md-card/list-table/md-table-container/table`)


    return this
})

module.exports = {
    remoteDiagnosticsUI
}