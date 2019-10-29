'use strict'

let { buildElement } = require('../../../../../core/element/buildElement')

/**
 * The UI elements present on the Data Export page
 * @returns UI Object
 */
let dataImportUI = (() => {

    // Tables
    this.table = buildElement(`table`, `xpath`, `//md-table-container/table`);
    this.jobDetailsTable = buildElement(`jobDetailsTable`, `xpath`, `//md-card-content/div/table`);

    // Dropdowns
    this.dropdownJobName = buildElement(`dropdownJobName`, `css`, `[ng-model="$ctrl.jobName"]`);

    // Buttons
    this.buttonRefresh = buildElement(`buttonRefresh`, `css`, `[ng-click="$ctrl.refresh()"]`);
    
    return this
})

module.exports = {
    dataImportUI
}