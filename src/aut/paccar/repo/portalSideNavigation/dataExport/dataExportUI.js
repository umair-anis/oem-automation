'use strict'

let { buildElement } = require('../../../../../core/element/buildElement')

/**
 * The UI elements present on the Data Export page
 * @returns UI Object
 */
let dataExportUI = (() => {

    // Tables
    this.table = buildElement(`table`, `xpath`, `//*[@id="downloads-table"]/md-card/list-table/md-table-container/table`)

    // Dropdowns
    this.dropdownEntity = buildElement(`dropdownEntity`, `css`, `[name="exportEntity"][ng-model="$ctrl.chosenEntity"]`)

    // Buttons
    this.buttonRefresh = buildElement(`buttonRefresh`, `css`, `[ng-click="$ctrl.refresh()"]`)
    this.buttonExport = buildElement(`buttonExport`, `css`, `[ng-click="$ctrl.exportFileData()"]`)
    
    return this
})

module.exports = {
    dataExportUI
}