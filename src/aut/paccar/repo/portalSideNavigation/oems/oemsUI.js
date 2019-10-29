'use strict'

let { buildElement } = require('../../../../../core/element/buildElement')


/**
 * The UI elements present for oems page
 * @returns UI Object
 */
let oemsUI = (() => {

    // Tables
    this.table = buildElement(`table`, `xpath`, `//*[@id="main-content"]/ui-view/oem-list/div/md-card/list-table/md-table-container/table`)

    // Filters
    this.tableFilter = buildElement(`tableFilter`, `xpath`, `//*[@id="main-content"]/ui-view/oem-list/div/md-card/list-toolbar`)

    // Buttons
    this.buttonEdit = buildElement(`buttonEdit`, `css`, `[aria-label="edit"]`)

    // Edit OEM
    this.fieldName = buildElement(`fieldName`, `css`, `[name="name"]`)
    this.fieldSubscription = buildElement(`fieldSubscription`, `css`, `[name="subscriptionLength"]`)
    this.fieldWarrenty = buildElement(`fieldName`, `css`, `[name="complimentaryWarrantyLength"]`)
    this.buttonAddFactory = buildElement(`buttonAddFactory`, `css`, `[ng-click="$ctrl.oem.factories.push({editing: true, location: {}})"]`)
    this.buttonDeleteOEM = buildElement(`buttonDeleteOEM`, `css`, `[ng-click="$ctrl.confirmDelete($event)"]`)
    this.buttonConfirmDeleteFactory = buildElement(`buttonConfirmDeleteFactory`, `css`, `[ng-click="dialog.hide()"]`)
    this.buttonSaveOEM = buildElement(`buttonSaveOEM`, `css`, `[class="md-raised md-primary md-button md-default-theme md-ink-ripple"]`)

    // Factories
    this.fieldCity = buildElement(`fieldCity`, `css`, `[name="city"]`)
    this.fieldCode = buildElement(`fieldCode`, `css`, `[name="code"]`)
    this.fieldLatitude = buildElement(`fieldLatitude`, `css`, `[name="lon"]`)
    this.fieldLongitude = buildElement(`fieldLongitude`, `css`, `[name="lat"]`)
    this.buttonDone = buildElement(`buttonDone`, `css`, `[ng-show="factory.editing"][aria-hidden="false"]`)


    return this
})

module.exports = {
    oemsUI
}