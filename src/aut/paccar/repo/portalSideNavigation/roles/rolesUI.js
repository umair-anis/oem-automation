'use strict'

let { buildElement } = require('../../../../../core/element/buildElement')

/**
 * The UI elements present for Roles
 * @returns UI Object
 */
let rolesUI = (() => {

    // Table
    this.table = buildElement(`table`, `xpath`, `//*[@id="role-list-table"]/md-card/list-table/md-table-container/table`)

    // Cards
    this.listCards = buildElement(`listCards`, `css`, `[card-content="$ctrl.cardContent"]`)

    // Filters
    this.tableFilter = buildElement(`tableFilter`, `xpath`, `//*[@id="role-list-table"]/md-card/list-toolbar`)

    // Display Density Dropdown
    this.buttonMoreOptions = buildElement(`buttonMoreOptions`, `xpath`, `//list-toolbar/md-toolbar/div/div/md-menu/button`)
        this.buttonLowOption = buildElement(`buttonLowOption`, `css`, `[ng-click="$ctrl.onDensityChange('low')"]`)
        this.buttonHighOption = buildElement(`buttonHighOption`, `css`, `[ng-click="$ctrl.onDensityChange('high')"]`)

    // Add Role
    this.buttonAdd = buildElement(`buttonAdd`, `css`, `[aria-label="add"]`)
    this.fieldName = buildElement(`fieldName`, `css`, `[name="name"]`)
    this.fieldDescription = buildElement(`fieldDescription`, `css`, `[name="description"]`)
    this.buttonSave = buildElement(`buttonSave`, `css`, `[ng-click="$ctrl.form.$valid && $ctrl.save()"]`)

    // Delete Role
    this.buttonDelete = buildElement(`buttonDelete`, `css`, `[aria-label="delete"]`)
    this.buttonConfirmDelete = buildElement(`buttonConfirmDelete`, `css`, `[ng-click="dialog.hide()"]`)
    
    return this
})

module.exports = {
    rolesUI
}