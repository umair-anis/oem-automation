'use strict'

let { buildElement } = require('../../../../../core/element/buildElement')

/**
 * The UI elements present for manufacturers
 * @returns UI Object
 */
let manufacturersUI = (() => {

    // Alerts
    const cannotDeleteManufacturer = `Error deleting manufacturer`

    this.alertDeleteManufacturer = buildElement(`alertDeleteManufacturer`, `xpath`, `//span[contains(text(), "${cannotDeleteManufacturer}")]`)

    // Tables
    this.table = buildElement(`table`, `xpath`, `//*[@id="main-content"]/ui-view/manufacturer-list/div/md-card/list-table/md-table-container/table`)

    // Filters
    this.tableFilter = buildElement(`tableFilter`, `xpath`, `//*[@id="main-content"]/ui-view/manufacturer-list/div/md-card/list-toolbar/md-toolbar`)

    // Buttons
    this.buttonEdit = buildElement(`buttonEdit`, `css`, `[aria-label="edit"]`)

    // Edit Manufacturers
    this.fieldName = buildElement(`fieldName`, `css`, `[name="name"]`)
    this.buttonDelete = buildElement(`buttonDelete`, `css`, `[ng-click="$ctrl.confirmDelete($event)"]`)
    this.buttonConfirmDelete = buildElement(`buttonConfirmDelete`, `css`, `[ng-click="dialog.hide()"]`)
    this.buttonSave = buildElement(`buttonSave`, `css`, `[class="md-raised md-primary md-button md-default-theme md-ink-ripple"]`)

    return this
})

module.exports = {
    manufacturersUI
}