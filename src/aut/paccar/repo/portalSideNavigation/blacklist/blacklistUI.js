'use strict'

let { buildElement } = require('../../../../../core/element/buildElement')

/**
 * The UI elements present on the blacklist page
 * @returns UI Object
 */
let blacklistUI = (() => {

    // Prompts
    const addedSuccessfully = `Successfully added Destination to Blacklist`
    const addedError = `Error adding Destination to Blacklist`

    this.promptAddedSuccessfully = buildElement(`promptAddedSuccessfully`, `xpath`, `//span[contains(text(), "${addedSuccessfully}")]`)
    this.promptAddedError = buildElement(`promptAddedError`, `xpath`, `//span[contains(text(), "${addedError}")]`)

    // Buttons
    this.buttonAddBlacklist = buildElement(`buttonAddBlacklist`, `css`, `[ng-click="iconButton.click($event, $ctrl)"]`)
    this.buttonOpenMenu = buildElement(`buttonOpenMenu`, `css`, `[aria-owns="menu_container_296"]`)
    this.buttonTrash = buildElement(`buttonAddBlacklist`, `css`, `[aria-label="delete"]`)

    this.buttonCancel = buildElement(`buttonCancel`, `css`, `[ng-click="$ctrl.cancel()"]`)
    this.buttonAddBlacklistSave = buildElement(`buttonAddBlacklistSave`, `css`, `[class="md-raised md-primary md-button md-ink-ripple"]`)
    this.buttonConfigureSave = buildElement(`buttonConfigureSave`, `css`, `[ng-click="$ctrl.save()"]`)

    // Fields
    this.fieldDestination = buildElement(`fieldDestination`, `css`, `[ng-model="$ctrl.blacklistItem.destination"]`)

    // Table
    this.tableTitle = buildElement(`tableTitle`, `css`, `[ng-if="$ctrl.toolbarOptions.translateTitle"]`)
    this.table = buildElement(`table`, `xpath`, `//*[@id="blacklist-table"]/md-card/list-table/md-table-container/table`)

    return this
})

module.exports = {
    blacklistUI
}