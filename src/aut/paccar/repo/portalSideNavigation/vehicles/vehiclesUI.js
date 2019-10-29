'use strict'

let { buildElement } = require('../../../../../core/element/buildElement')

/**
 * The UI elements present for the Vehicle's UI, Vehicle Details UI
 * @returns UI Object
 */
let vehiclesUI = (() => {

    // Headers
    this.header = buildElement(`header`, `xpath`, `//div[@class="breadcrumb"]//li[2]//span`)

    // Tables
    this.table = buildElement(`table`, `xpath`, `//*[@id="vehicle-list-table"]/md-card/list-table/md-table-container/table`)
    this.addToVehicleGroupTable = buildElement(`addToVehicleGroupTable`, `xpath`, `//*[@id="dialogContent_add-to-vehicle-group-dialog"]/div/list-table/md-table-container/table`)
    this.faultLogTable = buildElement(`faultLogTable`, `xpath`, `//*[@id="main-content"]/ui-view/vehicle-details/div[2]/standard-card/div/md-card/md-card-content/ng-transclude/list-table/md-table-container/table`)
    this.tripEventsTable = buildElement(`tripEventsTable`, `xpath`, `//table[@id="eventsTable"]`)

    // Prompts
    const vehicleAddedToGroup = `The vehicles were successfully added to the selected vehicle group(s).`
    
    this.promptVehicleAddedToGroup = buildElement(`promptVehicleAddedToGroup`, `xpath`, `//span[contains(text(), "${vehicleAddedToGroup}")]`)

    // Buttons
    this.buttonConfirmButton = buildElement(`buttonConfirmButton`, `css`, `[ng-click="dialog.hide()"]`)

    // Filters
    this.tableFilter = buildElement(`tableFilter`, `xpath`, `//*[@id="vehicle-list-table"]/md-card/list-toolbar`)
    this.addToVehicleGroupFilter = buildElement(`addToVehicleGroupFilter`, `xpath`, `//md-dialog-content//list-toolbar`)
    this.faultLogFilter = buildElement(`faultLogFilter`, `xpath`, `//md-card-content/ng-transclude/list-toolbar`)

    // Forms
    this.editVehicleForm = buildElement(`editVehicleForm`, `css`, `[name="$ctrl.form"]`)

    // Vehicle - Add to Vehicle Groups
    this.buttonSelectedMoreOptions = buildElement(`buttonSelectedMoreOptions`, `xpath`, `//*[@id="vehicle-list-table"]/md-card/list-selection-toolbar/md-toolbar/div/md-menu/button`)
        this.buttonCreateVehicleGroup = buildElement(`buttonCreateVehicleGroup`, `xpath`, `//md-menu-item[position()=1]/button[@ng-click="textButton.click($event, $ctrl, $ctrl.getSelectedRows())"]`)
        this.buttonAddToVehicleGroup = buildElement(`buttonAddToVehicleGroup`, `xpath`, `//md-menu-item[position()=2]/button[@ng-click="textButton.click($event, $ctrl, $ctrl.getSelectedRows())"]`)

    // Create Vehicle Group Information
    this.fieldGroupName = buildElement(`fieldGroupName`, `css`, `[name="name"]`)
    this.fieldGroupDescription = buildElement(`fieldGroupName`, `css`, `[name="description"]`)
    this.buttonSaveVehicleGroup = buildElement(`fieldGroupName`, `css`, `[aria-label="save"]`)

    // Vehicle 'More Options'
    // Note: aria-hidden="false" is present so the only visible option is clicked
    this.buttonEditVehicle = buildElement(`buttonEditVehicle`, `xpath`, `//div[@aria-hidden="false"]//md-menu-item[@aria-hidden="false"]/button[contains(text(), "Edit Vehicle")]`)
    this.buttonTripAudit = buildElement(`buttonTripAudit`, `xpath`, `//div[@aria-hidden="false"]//md-menu-item[@aria-hidden="false"]/button[contains(text(), "View Trip Audit")]`)
    this.buttonVehicleGroup = buildElement(`buttonVehicleGroup`, `xpath`, `//div[@aria-hidden="false"]//md-menu-item[@aria-hidden="false"]/button[contains(text(), "Add to Vehicle Group")]`)
    this.buttonOwnershipHistory = buildElement(`buttonOwnershipHistory`, `xpath`, `//div[@aria-hidden="false"]//md-menu-item[@aria-hidden="false"]/button[contains(text(), "Ownership History")]`)

    // Vehicle Details - Vehicle Information
    this.pmgFirmwareData = buildElement('pmgFirmwareData', 'xpath', "//div[@ng-if = '$ctrl.device && $ctrl.canViewDevice']/div")
    this.buttonDetailsEditVehicle = buildElement(`buttonDetailsEditVehicle`, `css`, `[ng-if="$ctrl.canWriteVehicles"]`)
    this.linkLastLocation = buildElement(`linkLastLocation`, `css`, `[ng-click="$ctrl.showSimpleMapPopup($event)"]`)
    this.linkCustomer = buildElement(`linkCustomer`, `css`, `[ui-sref="nav.customer.details({key:$ctrl.customer.key})"]`)
    this.linkDSN = buildElement(`linkDSN`, `css`, `[ui-sref="nav.device.details({key:$ctrl.vehicle.deviceInfo.dsn})"]`)
    this.buttonVehicleDetailsOptions = buildElement(`buttonVehicleDetailsOptions`, `xpath`, `//*[@id="main-content"]/ui-view/vehicle-details/standard-card/div/md-card/md-card-content/ng-transclude/md-toolbar/div/md-menu/button`)
        this.buttonClearActiveFaults = buildElement(`buttonClearActiveFaults`, `css`, `[ng-click="$ctrl.clearActiveFaults(event)"]`)
        this.buttonViewDealer = buildElement(`buttonViewDealer`, `css`, `//md-menu-item/a[contains(text(), "View Dealer")]`)
        this.buttonViewTripAudit = buildElement(`buttonViewTripAudit`, `xpath`, `//md-menu-content[@width="2"]//md-menu-item[2]//a`)
        this.buttonRemoveInRepair = buildElement(`buttonRemoveInRepair`, `xpath`, `//md-menu-content[@width="2"]//md-menu-item[4]//button`)
        this.buttonSetInRepair = buildElement(`buttonSetInRepair`, `xpath`, `//md-menu-content[@width="2"]//md-menu-item[3]//button`)
        this.buttonManageVehicleGroups = buildElement(`buttonManageVehicleGroups`, `xpath`, `[ng-click="$ctrl.manageVehicleGroups()"]`)
        this.buttonRunDiagnostics = buildElement(`buttonRunDiagnostics`, `css`, `[ng-click="$ctrl.vehicle.diagnostics()"]`)
        this.buttonAdjustSubscriptionDates = buildElement(`buttonAdjustSubscriptionDates`, `xpath`, `//md-menu-item/a[contains(text(), "Adjust Subscription Dates")]`)
        this.buttonTransferOwnership = buildElement(`buttonTransferOwnership`, `xpath`, `//md-menu-content[@width="2"]//md-menu-item[9]//a`)
        this.buttonAuthorizedServiceCenters = buildElement(`buttonAuthorizedServiceCenters`, `xpath`, `//md-menu-item/a[contains(text(), "Authorized Service Centers")]`)

    // Edit Vehicle
    this.fieldVin = buildElement(`fieldVin`, `css`, `[ng-model="$ctrl.vehicle.vin"]`)
    this.fieldYear = buildElement(`fieldYear`, `css`, `[ng-model="$ctrl.vehicle.chassisInfo.chassisModelYear"]`)
    this.fieldMake = buildElement(`fieldMake`, `css`, `[ng-model="$ctrl.vehicle.chassisInfo.make"]`)
    this.fieldModel = buildElement(`fieldModel`, `css`, `[ng-model="$ctrl.vehicle.chassisDetailInfo.model"]`)
    this.fieldDSN = buildElement(`fieldDSN`, `css`, `[ng-model="$ctrl.vehicle.deviceInfo.deviceKey"]`)
    this.fieldUnitNumber = buildElement(`fieldUnitNumber`, `css`, `[ng-model="$ctrl.vehicle.basicInfo.unitNumber"]`)
    this.fieldDescription = buildElement(`fieldDescription`, `css`, `[ng-model="$ctrl.vehicle.basicInfo.description"]`)
    this.fieldSubscriptionStart = buildElement(`fieldSubscriptionStart`, `xpath`, `//md-input-container[position()=5]//md-datepicker/div/input`)
    this.fieldSubscriptionEnd = buildElement(`fieldSubscriptionEnd`, `xpath`, `//md-input-container[position()=6]//md-datepicker/div/input`)
    this.fieldLicenseStatus = buildElement(`fieldLicenseStatus`, `xpath`, `//md-input-container[position()=7]//input`)
    this.dropdownOTAStatus = buildElement(`dropdownOTAStatus`, `css`, `[role="listbox"]`)
    this.fieldPrimaryDealer = buildElement(`fieldPrimaryDealer`, `xpath`, `//md-input-container[position()=9]//input`)
    this.buttonSaveVehicle = buildElement(`buttonSaveVehicle`, `css`, `[type="submit"]`)

    // Ownership History
    this.fieldHistorySearch = buildElement(`fieldHistorySearch`, `css`, `[ng-model="$ctrl.searchText"]`)
    this.textMostRecentCustomer = buildElement(`fieldHistorySearch`, `xpath`, `//div[@ng-repeat="record in $ctrl.vehicle.basicInfo.ownershipRecords | filter : $ctrl.searchText"]/div/span`)
    this.textMostRecentPurchaseDate = buildElement(`fieldHistorySearch`, `xpath`, `//div[@ng-repeat="record in $ctrl.vehicle.basicInfo.ownershipRecords | filter : $ctrl.searchText"]/div/div`)
    this.textMostRecentChange = buildElement(`fieldHistorySearch`, `xpath`, `//div[@ng-repeat="record in $ctrl.vehicle.basicInfo.ownershipRecords | filter : $ctrl.searchText"]/div/div[@layout="column"]/span`)

    // Transfer Owneship
    this.fieldCustomerName = buildElement(`fieldCustomerName`, `css`, `[aria-label="CUSTOMER NAME"]`)
    this.buttonSaveCustomer = buildElement(`buttonSaveCustomer`, `css`, `[type="submit"]`)

    // Trip Audits
    this.fieldTripVin = buildElement(`fieldTripVin`, `css`, `[name="vin"]`)
    this.fieldStartDate = buildElement(`fieldStartDate`, `css`, `[aria-label="M/d/yyyy"]`)
    this.dropdownHour = buildElement(`dropdownHour`, `css`, `[ng-model="$ctrl.hour"]`)
    this.dropdownMinute = buildElement(`dropdownMinute`, `css`, `[ng-model="$ctrl.minute"]`)
    this.dropdownEventType = buildElement(`dropdownEventType`, `css`, `[ng-model="$ctrl.eventType"]`)
    this.buttonSearchTripAudits = buildElement(`buttonSearchTripAudits`, `css`, `[type="submit"]`)
    this.buttonIncludedEventTypes = buildElement(`buttonIncludedEventTypes`, `css`, `[ng-click="$ctrl.form.$valid && $ctrl.showEventTypes($event)"]`)
    this.textTripAuditFault = buildElement(`textTripAuditFault`, `xpath`, `//div[@ng-model="dialogCtrl.tripAuditJSON"]//pre`)

    // Trip Audits - Map
    this.buttonCloseMap = buildElement(`buttonCloseMap`, `css`, `[ng-click="$ctrl.closeMap()"]`)
    this.buttonZoomIn = buildElement(`buttonZoomIn`, `css`, `[ng-click="$ctrl.zoomIn()"]`)
    this.buttonZoomOut = buildElement(`buttonZoomOut`, `css`, `[ng-click="$ctrl.zoomOut()"]`)

    // Vehicle Fault Logs
    this.tabDetails = buildElement(`tabDetails`, `xpath`, `//md-tab-item[contains(text(), "Details")]`)
    this.tabSnapshotData = buildElement(`tabSnapshotData`, `xpath`, `//md-tab-item[contains(text(), "Snapshot Data")]`)
    this.tabAuthorizedDealers = buildElement(`tabAuthorizedDealers`, `xpath`, `//md-tab-item[contains(text(), "Authorized Dealers")]`)
    this.tabEmail = buildElement(`tabEmail`, `xpath`, `//md-tab-item[contains(text(), "Email")]`)

    // Screenshot Data
    this.graph = buildElement(`graph`, `css`, `[class="fault-snapshot-graph__svg"]`)
    this.buttonCloseGraph = buildElement(`buttonCloseGraph`, `xpath`, `//*[local-name()='g' and @class="fault-snapshot-graph__closebtn"]`)

    return this
})

module.exports = {
    vehiclesUI
}