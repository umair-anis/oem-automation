'use strict'

let { buildElement } = require('../../../../core/element/buildElement')
let { buildElements } = require('../../../../core/element/buildElements')

/**
 * The UI elements present for Customer Ownership History and Ownership Transferring
 * @returns UI Object
 */
let ownershipUI = async () => {

    this.ownershipHistory = 'Ownership History';

    // Ownership History
    this.ownershipHistoryBtn = await buildElement(`ownershipHistoryBtn`, `xpath`, `//md-menu-item[@ng-show="$ctrl.canReadOwnershipHistory"]`)

    // Ownership Transfer UI
    this.newCustomerInformation = await buildElement(`newCustomerInformation`, `name`, `NewCustomerInformation`)
    this.CustomerNameField = await buildElement(`CustomerNameField`, `css`, `[aria-label="CUSTOMERNAME"]`)
    this.saveBtn = await buildElement(`saveBtn`, `css`, `[type="submit"]`)
    this.cancelBtn = await buildElement(`cancelBtn`, `xpath`, `//button[@ng-click='$ctrl.goToVehicleDetails()']`)
    this.confirmTransferBtn = await buildElement(`confirmTransferBtn`, `css`, `[ng-click="dialog.hide()"]`)
    this.cancelTransferBtn = await buildElement(`cancelTransferBtn`, `className`, `md-cancel-button`)
    this.confirmationPopup = await buildElement(`confirmationPopup`, `className`, `md-transition-in`)
    this.searchFilterButton = await buildElement(`searchFilterButton`, `xpath`, `//md-card-content//input`)
    this.chipFilter = await buildElement(`chipFilter`, `name`, `customer`)
    this.chipFilterResults = await buildElements(`chipFilterResults`, `css`, `[md-virtual-repeat="itemin$mdAutocompleteCtrl.matches"]`)
    this.customerInformationCard = await buildElement(`customerInformationCard`, `xpath`, `//md-card-content`)

    return this
}

module.exports = {
    ownershipUI
}