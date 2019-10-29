'use strict'

let { buildElement } = require('../../../../../core/element/buildElement')

/**
 * The UI elements present on the customer pages
 * @returns UI Object
 */

let customersUI = (() => {

    // Headers
    this.header = buildElement(`header`, `xpath`, `//div[@class="breadcrumb"]//li[2]//span`)

    // Tables
    this.table = buildElement(`table`, `xpath`, `//*[@id="customer-list-table"]/md-card/list-table/md-table-container/table`)

    // Filters
    this.tableFilter = buildElement(`tableFilter`, `xpath`, `//*[@id="customer-list-table"]/md-card/list-toolbar`)

    // Prompts
    const duplicateCustomer = `Warning: Customer name is similar to an existing customer`
    const vehicleGroupDeleted = `Vehicle group removed successfully.`

    this.promptDuplicateCustomerWarning = buildElement(`promptDuplicateCustomerWarning`, `xpath`, `//ng-message[contains(text(), "${duplicateCustomer}")]`)
    this.promptCustomerSaved = buildElement(`promptCustomerSaved`, `xpath`, `//span[contains(text(), "has been saved.")]`)
    this.promptVehicleGroupDeleted = buildElement(`promptCustomerSaved`, `xpath`, `//span[contains(text(), "${vehicleGroupDeleted}")]`)

    // Add Customer
    this.buttonAddCustomer = buildElement(`buttonAddCustomer`, `css`, `[aria-label="add"]`)
    this.fieldName = buildElement(`fieldName`, `css`, `[name="name"]`);
    this.fieldEmail = buildElement(`fieldEmail`, `css`, `[name="email"]`);
    this.fieldAddress1 = buildElement(`fieldAddress1`, `css`, `[name="address.line1"]`);
    this.fieldAddress2 = buildElement(`fieldAddress2`, `css`, `[name="address.line2"]`);
    this.fieldCity = buildElement(`fieldCity`, `css`, `[name="city"]`);
    this.dropdownState = buildElement(`dropdownState`, `css`, `[ng-model="$ctrl.customer.addresses[0].state"]`);
    this.fieldZipCode = buildElement(`fieldZipCode`, `css`, `[name="zip"]`);
    this.dropdownCountry = buildElement(`dropdownCountry`, `css`, `[ng-model="$ctrl.customer.addresses[0].countryCode"]`);
    this.fieldPhone = buildElement(`fieldPhone`, `css`, `[name="phone"]`);
    this.fieldFax = buildElement(`fieldFax`, `css`, `[name="fax"]`);
    this.checkboxDealerNetwork = buildElement(`checkboxDealerNetwork`, `css`, `[aria-label="Join the Peterbilt and Kenworth Dealer Network"]`);

    this.buttonSaveCustomer = buildElement(`buttonSaveCustomer`, `css`, `[type="submit"]`);
    this.buttonConfirmSaveCustomer = buildElement(`buttonConfirmSaveCustomer`, `css`, `[aria-label="save"]`);

    // Delete Customer
    this.buttonSelectedDelete = buildElement(`buttonSelectedDelete`, `css`, `[aria-label="delete"]`)
    this.buttonConfirmDelete = buildElement(`buttonConfirmDelete`, `css`, `[ng-click="dialog.hide()"]`)

    // Customer Details
    this.tabContactInfo = buildElement(`tabContactInfo`, `xpath`, `//md-tab-item[1]`)
    this.tabManageVehicles = buildElement(`tabManageVehicles`, `xpath`, `//md-tab-item[2]`)
    this.tabVehicleGroups = buildElement(`tabVehicleGroups`, `xpath`, `//md-tab-item[3]`)
    this.tabSubscribedUsers = buildElement(`tabSubscribedUsers`, `xpath`, `//md-tab-item[4]`)
    this.tabSoftware = buildElement(`tabSoftware`, `xpath`, `//md-tab-item[5]`)

    // Customer Details - Contact Info
    // The Edit button is the only UI because the edit Customer uses the same UI as the addCustomer UI
    this.buttonSelectedEdit = buildElement(`buttonSelectedEdit`, `css`, `[aria-label="edit"]`)

    // Customer Details - Manage Vehicles
    this.dropdownVehicleList = buildElement(`dropdownVehicleList`, `css`, `[ng-model="$ctrl.vehicleListType"]`)
    this.dropdownFilterBy = buildElement(`dropdownFilterBy`, `css`, `[ng-model="$ctrl.sortByType"]`)
    this.fieldSearchManageVehicles = buildElement(`fieldSearchManageVehicles`, `xpath`, `//md-input-container[3]//input[@placeholder="Search"]`)

    // Customer Details - Vehicle Groups
    this.buttonAddGroup = buildElement(`buttonAddGroup`, `css`, `[ng-click="$ctrl.addingGroup = true"]`)
    this.fieldGroupName = buildElement(`fieldGroupName`, `css`, `[name="groupName"]`)
    this.buttonSaveVehicleGroup = buildElement(`buttonSaveVehicleGroup`, `css`, `[type="submit"]`)

    // Customer Details - Subscribed Users
    this.dropdownFilterUsersBy = buildElement(`dropdownFilterBy`, `css`, `[ng-change="$ctrl.refreshUsers()"][ng-model="$ctrl.sortByType"]`)
    this.fieldSearchSubscribedUsers = buildElement(`fieldSearchSubscribedUsers`, `xpath`, `//md-input-container[2]//input[@placeholder="Search"]`)

    // Customer Details - Software
    this.sliderCustomerSoftware = buildElement(`sliderCustomerSoftware`, `css`, `[ng-change="$ctrl.customerOptInOrOut()"]`)



    return this
})

module.exports = {
    customersUI
}