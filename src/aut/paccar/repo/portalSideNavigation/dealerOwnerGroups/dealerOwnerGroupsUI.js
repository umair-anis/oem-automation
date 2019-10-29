'use strict'

let { buildElement } = require('../../../../../core/element/buildElement')

/**
 * The UI elements present on the DOG page
 * @returns UI Object
 */
let dealerOwnerGroupsUI = (() => {

    // Headers
    this.header = buildElement(`header`, `xpath`, `//div[@class="breadcrumb"]//li[2]//span`)

    // Prompts
    const locaitonAdded = `has been added.`
    const locaitonsUpdated = `Locations updated.`
    const locationDeleted = `has been removed`
    const regionDeleted = `Dealer Region  was deleted`

    this.promptLocationAdded = buildElement(`promptLocationAdded`, `xpath`, `//span[contains(text(), "${locaitonAdded}")]`)
    this.promptLocationsUpdated = buildElement(`promptLocationsUpdated`, `xpath`, `//span[contains(text(), "${locaitonsUpdated}")]`)
    this.promptLocationRemoved = buildElement(`promptLocationRemoved`, `xpath`, `//span[contains(text(), "${locationDeleted}")]`)
    this.promptRegionDeleted = buildElement(`promptRegionDeleted`, `xpath`, `//span[contains(text(), "${regionDeleted}")]`)

    // Alerts
    const cannotDeleteRegion = `Unable to delete the region. Please make sure there are no locations and users assigned to it.`
    this.alertCannotDeleteRegion = buildElement(`alertCannotDeleteRegion`, `xpath`, `//span[contains(text(), "${cannotDeleteRegion}")]`)

    // Tables
    this.table = buildElement(`table`, `xpath`, `//*[@id="dealer-owner-group-list-table"]/md-card/list-table/md-table-container/table`)
    this.locationsTable = buildElement(`locationsTable`, `xpath`, `//*[@id="location-list-table"]/list-table/md-table-container/table`)
    this.assignLocationsTable = buildElement(`assignLocationsTable`, `xpath`, `//*[@id="dealer-region-edit-dialog"]/div/md-dialog-content/div/list-table/md-table-container/table`)
    this.assignLocationsTableLoaded = buildElement(`assignLocationsTableLoaded`, `xpath`, `//*[@id="dealer-region-edit-dialog"]/div/md-dialog-content/div/list-table/md-table-container/table//tbody//tr`)

    // Filters
    this.tableFilter = buildElement(`tableFilter`, `xpath`, `//*[@id="dealer-owner-group-list-table"]/md-card/list-toolbar`)

    // Paginations
    this.pagination = buildElement(`pagination`, `xpath`, `//*[@id="dealer-owner-group-list-table"]/md-card/list-pagination/div/md-table-pagination`)

    // Buttons
    this.buttonAddDOG = buildElement(`buttonAddDOG`, `css`, `[aria-label="add"]`)
    this.buttonRefresh = buildElement(`buttonRefresh`, `css`, `[ng-click="$ctrl.refresh()"]`)

    // Edit Group Details - Group Info
    this.tabGroupInfo = buildElement(`tabGroupInfo`, `xpath`, `//md-tab-item[contains(text(),"Group Info")]`)
    this.buttonEditGroupInfo = buildElement(`buttonEditGroupInfo`, `css`, `[aria-label="Edit Group Information"]`)
    this.buttonSave = buildElement(`buttonSave`, `css`, `[aria-label="save"]`)
    
    // Edit Group Details - Locations
    this.tabLocations = buildElement(`tabLocations`, `xpath`, `//md-tab-item[contains(text(),"Locations")]`)
    this.buttonAddLocation = buildElement(`buttonAddLocation`, `css`, `[ng-click="$ctrl.showAddLocationForm()"]`)
    this.buttonAdd = buildElement(`buttonAdd`, `css`, `[type="submit"]`)
    this.buttonRemove = buildElement(`buttonRemove`, `css`, `[ng-click="dialog.hide()"]`)
    this.fieldLocation = buildElement(`fieldLocation`, `css`, `[name="newLocation"]`)
    this.dropdownFirst = buildElement(`dropdownFirst`, `xpath`, `/html/body/md-virtual-repeat-container[2]//li[1]`)

    // Edit Group Details - Regions
    this.tabRegions = buildElement(`tabRegions`, `xpath`, `//md-tab-item[contains(text(),"Regions")]`)
    this.formRegions = buildElement(`formRegions`, `xpath`, `//*[@id="dealer-region-list"]/md-card-content/form`)
    this.formRegionsLoaded = buildElement(`formRegionsLoaded`, `xpath`, `//*[@id="dealer-region-list"]/md-card-content/form//div`)
    this.buttonAddRegion = buildElement(`buttonAddRegion`, `css`, `[ng-click="$ctrl.showAddDialog()"]`)
    this.fieldAddRegionName = buildElement(`fieldAddRegionName`, `css`, `[ng-model="$ctrl.region.name"]`)
    this.fieldEditRegionName = buildElement(`fieldAddRegionName`, `css`, `[name="name"]`)
    this.buttonNext = buildElement(`buttonNext`, `css`, `[aria-label="dealerOwnerGroup.dealerRegionEditDialog.next.label"]`)
    this.buttonSaveAssignLocations = buildElement(`buttonSaveAssignLocations`, `xpath`, `//*[@id="dealer-region-edit-dialog"]/div/md-dialog-actions/button[2]`)
    this.buttonSaveRegion = buildElement(`buttonSaveRegion`, `css`, `[type="submit"]`)
    this.buttonConfirmDeleteRegion = buildElement(`buttonConfirmDeleteRegion`, `css`, `[ng-click="dialog.hide()"]`)

    // Add Dealer Owner Group Form
    this.fieldGroupName = buildElement(`fieldGroupName`, `css`, `[name="name"]`)
    this.fieldGroupDescription = buildElement(`fieldGroupDescription`, `css`, `[name="description"]`)
    this.buttonSaveAddDOG = buildElement(`buttonSaveAddDOG`, `css`, `[type="submit"]`)

    return this
})

module.exports = {
    dealerOwnerGroupsUI
}