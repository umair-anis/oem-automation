'use strict'

let { buildElement } = require('../../../../../core/element/buildElement')

/**
 * The UI elements present on the Devices Page
 * @returns UI Object
 */
let devicesUI = (() => {

    // Tables
    this.table = buildElement(`table`, `xpath`, `//*[@id="main-content"]/ui-view/device-list/div/md-card/list-table/md-table-container/table`)
    this.deviceCollectionsTable = buildElement(`deviceCollectionsTable`, `xpath`, `//*[@id="dialogContent_device-collection-search-dialog"]/list-table/md-table-container/table`)

    this.deviceVersionData = buildElement('deviceVersion', 'xpath',"//tr[td[@title = 'PeopleNet Mobile Gateway Version']]/td[2]" )
    // Prompts
    const vinDiscoverySubmitted = `VIN Discovery request submitted successfully`
    const pmgVersionRequestSubmitted = `PMG version requested`
    const forceCallSubmitted = `Force Call request submitted successfully`
    const collectionSaved = `Collection Saved`

    this.promptVinDiscovery = buildElement(`promptVinDiscovery`, `xpath`, `//span[contains(text(), "${vinDiscoverySubmitted}")]`)
    this.promptPMGVerReq = buildElement(`promptPMGVerReq`, `xpath`, `//span[contains(text(), "${pmgVersionRequestSubmitted}")]`)
    this.promptForceCall = buildElement(`promptForceCall`, `xpath`, `//span[contains(text(), "${forceCallSubmitted}")]`)
    this.promptCollectionSaved = buildElement(`promptCollectionSaved`, `xpath`, `//span[contains(text(), "${collectionSaved}")]`)

    // Filters
    this.tableFilter = buildElement(`tableFilter`, `xpath`, `//*[@id="main-content"]/ui-view/device-list/div/md-card/list-toolbar`)
    this.deviceCollectionsFilter = buildElement(`deviceCollectionsFilter`, `xpath`, `//*[@id="dialogContent_device-collection-search-dialog"]/list-toolbar`)

    // Buttons
    this.buttonRefresh = buildElement(`buttonRefresh`, `css`, `[ng-click="$ctrl.refresh()"]`)
    this.buttonDownload = buildElement(`buttonDownload`, `css`, `[aria-label="file_download"]`)
    this.buttonMoreOptions = buildElement(`buttonMoreOptions`, `xpath`, `//md-toolbar/div/div/md-menu/button`)
        this.buttonAddAllNewCollection = buildElement(`buttonMoreOptions`, `xpath`, `//div[@aria-hidden="false"]//md-menu-content//md-menu-item[1]//button`)
        this.buttonAddAllExistingCollection = buildElement(`buttonMoreOptions`, `xpath`, `//div[@aria-hidden="false"]//md-menu-content//md-menu-item[2]//button`)

    this.buttonSelectedMoreOptions = buildElement(`buttonSelectedMoreOptions`, `xpath`, `//list-selection-toolbar/md-toolbar/div/md-menu/button`)  
        this.buttonAddSelectedToNewCollection = buildElement(`buttonAddSelectedToNewCollection`, `xpath`, `//div[@aria-hidden="false"]//md-menu-content//md-menu-item[1]//button`)
        this.buttonAddSelectedToExisitingCollection = buildElement(`buttonAddSelectedToExisitingCollection`, `xpath`, `//div[@aria-hidden="false"]//md-menu-content//md-menu-item[2]//button`)
        this.buttonVinDiscovery = buildElement(`buttonVinDiscovery`, `xpath`, `//div[@aria-hidden="false"]//md-menu-content//md-menu-item[3]//button`)
        this.buttonPMGVersionReq = buildElement(`buttonPMGVersionReq`, `xpath`, `//div[@aria-hidden="false"]//md-menu-content//md-menu-item[4]//button`)
        this.buttonForceCall = buildElement(`buttonForceCall`, `xpath`, `//div[@aria-hidden="false"]//md-menu-content//md-menu-item[5]//button`)

    this.buttonConfirmAction = buildElement(`buttonConfirmAction`, `css`, `[ng-disabled="dialog.required && !dialog.result"]`), 

    // Create New Device Collection
    this.fieldCollectionName = buildElement(`fieldCollectionName`, `css`, `[name="name"]`)
    this.fieldCollectionDescription = buildElement(`fieldCollectionDescription`, `css`, `[name="description"]`)
    this.buttonSaveNewCollection = buildElement(`buttonSaveNewCollection`, `css`, `[ng-disabled="$ctrl.fileUploadInProgress"]`)

    // Add to Existing Collection
    this.buttonOk = buildElement(`buttonOk`, `css`, `[ng-click="$ctrl.confirm()"]`)

    // Device Details - Actions
    this.dropdownActions = buildElement(`dropdownActions`, `css`, `[aria-label="Open Device Action Menu"]`)
    this.linkVinMoreInfo = buildElement(`linkVinMoreInfo`, `css`, `[ng-if="$ctrl.isVehiclesVisible && $ctrl.device.vin"]`)

    // Device Details - Last Call
    // Device Details - Location
    // Device Details - Reports
    // Device Details - Notes
    this.buttonAddNote = buildElement(`buttonAddNote`, `css`, `[ng-click="$ctrl.openNoteModal()"]`)
    this.fieldNoteTitle = buildElement(`fieldNoteTitle`, `css`, `[name="title"]`)
    this.fieldNoteMessage = buildElement(`fieldNoteMessage`, `css`, `[name="message"]`)
    this.buttonSaveNote = buildElement(`buttonSaveNote`, `css`, `[ng-disabled="$ctrl.disableSaveBtn"]`)


    return this
})

module.exports = {
    devicesUI
}