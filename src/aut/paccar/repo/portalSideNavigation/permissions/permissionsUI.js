'use strict'

let { buildElement } = require('../../../../../core/element/buildElement')

/**
 * The UI elements present for Permissions
 * @returns UI Object
 */
let permissionsUI = (() => {

    // Prompts
    const permissionSaved = `has been saved.`

    this.promptPermissionSaved = buildElement(`promptPermissionSaved`, `xpath`, `//span[contains(text(), "${permissionSaved}")]`)

    // Tables
    this.table = buildElement(`table`, `xpath`, `//*[@id="permission-list-table"]/md-card/list-table/md-table-container/table`)

    // Filters
    this.tableFilter = buildElement(`tableFilter`, `xpath`, `//*[@id="permission-list-table"]/md-card/list-toolbar`)

    // Buttons
    this.buttonAddPermission = buildElement(`buttonAddPermission`, `css`, `[aria-label="add"]`)

    this.buttonSelectedEdit = buildElement(`buttonSelectedEdit`, `css`, `[aria-label="edit"]`)
    this.buttonSelectedDelete = buildElement(`buttonSelectedDelete`, `css`, `[aria-label="delete"]`)
    this.buttonConfirmDelete = buildElement(`buttonConfirmDelete`, `css`, `[ng-click="dialog.hide()"]`)

    // Permission Form - Add, Edit
    this.fieldName = buildElement(`fieldName`, `css`, `[name="name"]`)
    this.fieldDescription = buildElement(`fieldDescription`, `css`, `[name="description"]`)
    this.buttonSavePermission = buildElement(`buttonSavePermission`, `css`, `[ng-click="$ctrl.form.$valid && $ctrl.save()"]`)

    return this
})

module.exports = {
    permissionsUI
}