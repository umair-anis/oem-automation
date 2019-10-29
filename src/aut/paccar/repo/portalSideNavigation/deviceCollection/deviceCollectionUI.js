'use strict'

let { buildElement } = require('../../../../../core/element/buildElement')

/**
 * The UI elements present on the Device Collection Page
 * @returns UI Object
 */
let deviceCollectionUI = (() => {

    // Tables
    this.table = buildElement(`table`, `xpath`, `//*[@id="device-collection-list-container"]/md-card/list-table/md-table-container/table`)
    this.availableDevicesTable = buildElement(`availableDevicesTable`, `xpath`, `//*[@id="main-content"]/ui-view/device-list/div/md-card/list-table/md-table-container/table`)

    // Prompts
    const collectionAdded = `Collection Created`
    const collectionDeleted = `Devices Removed`

    this.promptCollectionAdded = buildElement(`promptCollectionAdded`, `xpath`, `//span[contains(text(), "${collectionAdded}")]`)
    this.promptCollectionDeleted = buildElement(`promptCollectionDeleted`, `xpath`, `//span[contains(text(), "${collectionDeleted}")]`)

    // Filters
    this.tableFilter = buildElement(`tableFilter`, `xpath`, `//*[@id="device-collection-list-container"]/md-card/list-toolbar/md-toolbar`)
    this.availableDevicesFilter = buildElement(`availableDevicesFilter`, `xpath`, `//*[@id="main-content"]/ui-view/device-list/div/md-card/list-toolbar`)

    // Buttons
    this.buttonMoreOptions = buildElement(`table`, `xpath`, `//*[@id="device-collection-list-container"]/md-card/list-toolbar/md-toolbar/div/div/md-menu/button`)
        this.buttonNewCollection = buildElement(`table`, `xpath`, `//div[@class="_md md-open-menu-container md-whiteframe-z2 md-default-theme md-active md-clickable"]//md-menu-content/md-menu-item[1]/button`)
    this.buttonConfirmDelete = buildElement(`buttonConfirmDelete`, `css`, `[ng-click="dialog.hide()"]`)

    // Create New Collection
    this.fieldCollectionName = buildElement(`fieldCollectionName`, `css`, `[name="name"]`)
    this.fieldCollectionDescription = buildElement(`fieldCollectionDescription`, `css`, `[name="description"]`)
    this.buttonSaveNewCollection = buildElement(`buttonSaveNewCollection`, `css`, `[type="submit"]`)

    // Selected-Collection Buttons
    this.buttonMoreCollectionOptions = buildElement(`buttonMoreCollectionOptions`, `xpath`, `//md-card/list-selection-toolbar/md-toolbar/div/md-menu/button`)
        this.buttonCollectionEdit = buildElement(`buttonCollectionEdit`, `xpath`, `//md-menu-content/md-menu-item[1]/button[@ng-click="textButton.click($event, $ctrl, $ctrl.getSelectedRows())"]`)
        this.buttonCollectionDelete = buildElement(`buttonCollectionDelete`, `xpath`, `//md-menu-content/md-menu-item[2]/button[@ng-click="textButton.click($event, $ctrl, $ctrl.getSelectedRows())"]`)
        this.buttonCollectionOTap = buildElement(`buttonCollectionOTap`, `xpath`, `//md-menu-content/md-menu-item[3]/button[@ng-click="textButton.click($event, $ctrl, $ctrl.getSelectedRows())"]`)
        this.buttonCollectionVinDiscovery = buildElement(`buttonCollectionVinDiscovery`, `xpath`, `//md-menu-content/md-menu-item[4]/button[@ng-click="textButton.click($event, $ctrl, $ctrl.getSelectedRows())"]`)
        this.buttonCollectionPMGVersionReq = buildElement(`buttonCollectionPMGVersionReq`, `xpath`, `//md-menu-content/md-menu-item[5]/button[@ng-click="textButton.click($event, $ctrl, $ctrl.getSelectedRows())"]`)
        this.buttonCollectionForceCall = buildElement(`buttonCollectionForceCall`, `xpath`, `//md-menu-content/md-menu-item[6]/button[@ng-click="textButton.click($event, $ctrl, $ctrl.getSelectedRows())"]`)

    // Collection Details
    this.buttonRefresh = buildElement(`buttonRefresh`, `css`, `[ng-click="$ctrl.refresh()"]`)
    this.buttonDownload = buildElement(`buttonDownload`, `css`, `[aria-label="file_download"][aria-hidden="false"]`)

    // Selected-Device Buttons
    this.buttonMoreDeviceOptions = buildElement(`buttonMoreDeviceOptions`, `xpath`, `//list-selection-toolbar/md-toolbar/div/md-menu/button`)
        this.buttonDeviceVinDiscovery = buildElement(`buttonDeviceVinDiscovery`, `xpath`, `//md-menu-content/md-menu-item[1]/button[@ng-click="textButton.click($event, $ctrl, $ctrl.getSelectedRows())"]`)
        this.buttonDevicePMGVersionReq = buildElement(`buttonDevicePMGVersionReq`, `xpath`, `//md-menu-content/md-menu-item[2]/button[@ng-click="textButton.click($event, $ctrl, $ctrl.getSelectedRows())"]`)
        this.buttonDeviceRemove = buildElement(`buttonDeviceRemove`, `xpath`, `//md-menu-content/md-menu-item[3]/button[@ng-click="textButton.click($event, $ctrl, $ctrl.getSelectedRows())"]`)
        this.buttonDeviceForceCall = buildElement(`buttonDeviceForceCall`, `xpath`, `//md-menu-content/md-menu-item[4]/button[@ng-click="textButton.click($event, $ctrl, $ctrl.getSelectedRows())"]`)
        this.buttonDeviceExport = buildElement(`buttonDeviceExport`, `xpath`, `//md-menu-content/md-menu-item[5]/button[@ng-click="textButton.click($event, $ctrl, $ctrl.getSelectedRows())"]`)

    return this
})

module.exports = {
    deviceCollectionUI
}