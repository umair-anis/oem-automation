'use strict'

let { buildElement } = require('../../../../core/element/buildElement')
let { buildElements } = require('../../../../core/element/buildElements')

/**
 * The UI elements present for the Vehicle Batch UI and Vehicle Group UI
 * @returns UI Object
 */
let vehicleGroupUI = async () => {

    // Add Vehicle Batch UI
    this.allAvailableVehicles = await buildElements(`allAvailableVehicles`, `repeater`, `vehicleinctrl.dealerVehicles|filter:filter`)
    this.allCustomerVehicles = await buildElements(`allCustomerVehicles`, `repeater`, `vehicleinctrl.customerVehicles|filter:filter`)
    this.custAddVehicleBtn = await buildElement(`custAddVehicleBtn`, `css`, `[ng-click="ctrl.addToCustomer(vehicle)"]`)
    this.custRemoveVehicleBtn = await buildElement(`custRemoveVehicleBtn`, `css`, `[ng-click="ctrl.removeFromCustomer(vehicle)"]`)
    this.vehicleFilterBar = await buildElement(`vehicleFilterBar`, `model`, `filter`)
    this.doneBtn = await buildElement(`doneBtn`, `linkText`, `Done`)

    // Vechicle Group Table
    this.vehicleGroupTable = await buildElements(`vehicleGroupTable`, `xpath`, `(//tbody)[3]//tr`)

    // Vehicle Group Details
    //this.editVehicleGroupBtn = await buildElement(`editVehicleGroupBtn`, `cssContainingText`, `[type="button"]','edit`)
    this.vehicleGroupMoreOption = await buildElement(`vehicleGroupMoreOption`, `css`, `[aria-label="Openmoremenu"]`)
    this.deleteVgButton = await buildElement(`deleteVgButton`, `css`, `[ng-click="$ctrl.confirmDeleteGroup()"]`)
    //this.groupSaveButton = await buildElement(`groupSaveButton`, `cssContainingText`, `[type="button"]','save`)
    //this.addVehicleToGroupBtn = await buildElement(`addVehicleToGroupBtn`, `cssContainingText`, `[type="button"]','add`)
    this.addVinField = await buildElement(`addVinField`, `model`, `$ctrl.vinsString`)
    //this.confirmAddVehicleButton = await buildElement(`confirmAddVehicleButton`, `cssContainingText`, `[ng-click="$ctrl.add()"]','Add`)

    // VIN List in Vehicle Group
    this.allVehicleRows = await buildElements(`allVehicleRows`, `repeater`, `rowin$ctrl.rows`)
    //this.vehicleMoreOptionsBtn = await buildElement(`vehicleMoreOptionsBtn`, `cssContainingText`, `[type="button"]','more_vert`)
    //this.removeFromGroupBtn = await buildElement(`removeFromGroupBtn`, `cssContainingText`, `[type="button"]','REMOVEFROMGROUP`)
    this.viewVehicleDetailsBtn = await buildElement(`viewVehicleDetailsBtn`, `xpath`, `//button[@ng-show="$ctrl.currentuser.hasPermission(\'ROLE_VEHICLE_READ\')"]`)
    //this.deleteFromGroupButton = await buildElement(`deleteFromGroupButton`, `cssContainingText`, `[type="button"]','Yes`)

    // Add New Vehicle Group Pop-Up
    this.popUpForm = await buildElement(`popUpForm`, `xpath`, `//md-dialog[@role="dialog"]`)
    this.vehicleGroupName = await buildElement(`vehicleGroupName`, `model`, `$ctrl.vehicleGroup.name`)
    this.vehicleGroupDesc = await buildElement(`vehicleGroupDesc`, `model`, `$ctrl.vehicleGroup.description`)
    this.abortButton = await buildElement(`abortButton`, `xpath`, `//button[@ng-click="dialog.abort()"]`)
    this.cancelButton = await buildElement(`cancelButton`, `xpath`, `//button[@aria-label="cancel"]`)
    this.saveButton = await buildElement(`saveButton`, `xpath`, `//button[@aria-label="save"]`)
    this.errorMessage = await buildElement(`errorMessage`, `xpath`, `//ng-message[@when="duplicated"]`)
    this.maxLengthMessage = await buildElement(`maxLengthMessage`, `xpath`, `//ng-message[@when="maxlength"]`)
    this.vinNumberPopUp = await buildElement(`vinNumberPopUp`, `model`, `$ctrl.vinsString`)
    this.addBtn = await buildElement(`addBtn`, `xpath`, `//button[@ng-click="$ctrl.add()"]`)
    this.cancelBtn = await buildElement(`cancelBtn`, `xpath`, `//button[@ng-click="$ctrl.cancel()"]`)
    this.incorrectVin = await buildElement(`incorrectVin`, `xpath`, `//ng-message[@when="incorrectVin"]`)

    // Customer's Vehicle Group UI
    this.allAvailableVehicles = await buildElements(`allAvailableVehicles`, `repeater`, `vehicleinctrl.vehicles|filter:filter`)
    this.allGroupVehicles = await buildElements(`allGroupVehicles`, `repeater`, `vehicleinctrl.groupVehicles|filter:filter`)
    this.vehicleFilterBar = await buildElement(`vehicleFilterBar`, `model`, `filter`)
    this.doneBtn = await buildElement(`doneBtn`, `linkText`, `Done`)
    this.allVehiclesDiv = await buildElement(`allVehiclesDiv`, `css`, `[ng-hide="group.vehiclesLoaded"]`)

    // User's Vehicle Group UI
    //this.vehicleGroupHeading = await buildElements(`vehicleGroupHeading`, `cssContainingText`, `['class="md-title ng-binding ng-scope"'], 'Vehicle Groups'`)
    this.vehicleGroupHeader = await buildElements(`vehicleGroupHeader`, `xpath`, `(//table)[3]//tr[1]/th`)
    this.allVehicleGroupRows = await buildElements(`allVehicleGroupRows`, `repeater`, `rowin$ctrl.rows`)
    this.selectAllCheckbox = await buildElement(`selectAllCheckbox`, `css`, `[aria-label="SelectAll"]`)
    this.textFromSubscribed = await buildElement(`textFromSubscribed`, `xpath`, `//div[6]/div/span[@class=\'ng-binding\']`)

    // Action Bar
    //this.moreOptionsBtn = await buildElements(`moreOptionsBtn`, `cssContainingText`, `[type="button"]','more_vert`).get(0)
    this.addActionBtn = await buildElement(`addActionBtn`, `css`, `[aria-label="add"]`)
    this.editActionBtn = await buildElement(`editActionBtn`, `buttonText`, `edit`)
    this.manageGroupDetail = await buildElement(`manageGroupDetail`, `xpath`, `(//md-menu-item[@ng-show="$ctrl.owner.canManageVehicleGroup()"]/button)[2]`)
    //this.manageGroup = await buildElement(`manageGroup`, `cssContainingText`, `[type="button"]','ManageGroup`)
    //this.deleteGroupBtn = await buildElements(`deleteGroupBtn`, `xpath`, `//button[@ng-click="$ctrl.owner.deleteVehicleGroup($ctrl.vehiclegroup)"]`).last()
    this.subscribeGroupDetail = await buildElement(`subscribeGroupDetail`, `xpath`, `(//button[@ng-click="$ctrl.subscribe()"])[2]`)
    this.unSubscribeGroupDetail = await buildElement(`unSubscribeGroupDetail`, `xpath`, `(//button[@ng-click="$ctrl.unsubscribe()"])[2]`)
    //this.subscribeGroup = await buildElement(`subscribeGroup`, `cssContainingText`, `[type="button"]','Subscribe`)
    this.deleteActionBtn = await buildElement(`deleteActionBtn`, `buttonText`, `delete`)
    //this.deleteDialogBtn = await buildElement(`deleteDialogBtn`, `cssContainingText`, `[ng-click="dialog.hide()"]','Delete`)
    this.searchFilterButton = await buildElement(`searchFilterButton`, `className`, `md-icon-buttonlist-filter-buttonmd-buttonng-scopemd-default-thememd-ink-ripple`)
    this.chipFilter = await buildElements(`chipFilter`, `css`, `[placeholder="FilterResults"][type="search"]`)
    this.chipFilterCloseBtn = await buildElement(`chipFilterCloseBtn`, `css`, `[ng-if="$mdChipsCtrl.isRemovable()"]`)
    this.allChips = await buildElements(`allChips`, `className`, `md-chip-content`)
    this.chipFilterResults = await buildElements(`chipFilterResults`, `css`, `[md-virtual-repeat="itemin$mdAutocompleteCtrl.matches"]`)
    this.clearAllFiltersButton = await buildElement(`clearAllFiltersButton`, `css`, `[ng-click="$ctrl.clearChips()"]`)
    this.rowFromVehicleGroup = await buildElements(`rowFromVehicleGroup`, `xpath`, `(//tbody)[3]//tr/td[1]`)

    // Action Button
    this.actionBarVehGrp = await buildElement(`actionBarVehGrp`, `css`, `[ng-show="$ctrl.listContext.selectedRows.length"]`)

    // Pagination
    //this.userVgPageSizeButton = await buildElements(`userVgPageSizeButton`, `css`, `[ng-model="$pagination.limit"]`).get(2)
    //this.pageTenButton = await buildElements(`pageTenButton`, `repeater`, `optionin$pagination.limitOptions`).get(6)

    this.columns = {
        tableGroupName: {value: 0, name: 'Group Name'},
        tableDescription: {value: 1, name: 'Description'},
        tableOfVehicles: {value: 2, name: '# of Vehicles'},
        tableSubscribed: {value: 3, name: 'Subscribed'},
    };

    // User's Vechicle Group Columns
    this.userVehicleGroupDetailColumns = {
        unitNumber: {value: 1, name: 'Unit Number'},
        recommendation: {value: 2, name: 'Recommendation'},
        year: {value: 3, name: 'Year'},
        make: {value: 4, name: 'Make'},
        model: {value: 5, name: 'Model'},
        vin: {value: 6, name: 'VIN'},
        dsn: {value: 7, name: 'DSN'},
    };

    this.subscribed = {
        no: {name: 'No'},
        yes: {name: 'Yes'}
    };

    return this
}

module.exports = {
    vehicleGroupUI
}