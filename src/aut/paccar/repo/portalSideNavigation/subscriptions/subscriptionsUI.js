'use strict'

let { buildElement } = require('../../../../../core/element/buildElement')
    
/**
 * The UI elements present for Suscriptions and Subscribers
 * @returns UI Object
 */
let subscriptionsUI = (() => {

    // Tables
    this.table = buildElement(`table`, `xpath`, `//*[@id="subscription-list-table"]/md-card/list-table/md-table-container/table`)
    this.shoppingCartTable = buildElement(`shoppingCartTable`, `xpath`, `//*[@id="shopping-cart-list"]/md-table-container/table`)

    // Pagination
    this.pagination = buildElement(`pagination`, `xpath`, `//*[@id="subscription-list-table"]/md-card/list-pagination/div/md-table-pagination`)

    // Buttons
    this.buttonAddToCart = buildElement(`buttonAddToCart`, `css`, `[ng-hide="iconButton.hideOnMultiSelect && $ctrl.listContext.selectedRows.length > 1"]`)
    this.buttonViewCart = buildElement(`buttonViewCart`, `css`, `[aria-label="View Cart"]`)

    // Text
    this.textShoppingCartCount = buildElement(`textShoppingCartCount`, `css`, `[id="$viewCartNumber"]`)
    this.textDashboardBanner = buildElement(`textDashboardBanner`, `css`, `[class="license-banner-card"]`)
    this.textCallServiceBanner = buildElement(`textCallServiceBanner`, `css`, `[class="text-messageng-bindingng-scope"]`)

    // Shopping Cart
    this.textVehiclesCount = buildElement(`textShoppingCartCount`, `xpath`, `//md-card-content//span[@class="ng-binding"]`)
    this.textYearCount = buildElement(`textYearCount`, `xpath`, `//md-card-content//h4[@class="ng-binding"]`)
    this.textQuantityCount = buildElement(`textQuantityCount`, `xpath`, `//md-card-content//h4[@class="ng-binding"][2]`)
    this.dropdownSubscriptionDuration = buildElement(`dropdownSubscriptionDuration`, `css`, `[ng-model="$ctrl.initValue"]`)
    this.buttonDeleteCartDuration = buildElement(`buttonDeleteCartDuration`, `css`, `[ng-click="$ctrl.goToRoute()"]`)
    this.buttonShowList = buildElement(`buttonShowList`, `css`, `[ng-click="$ctrl.showList()"]`)
    this.buttonCheckout = buildElement(`buttonCheckout`, `css`, `[ng-click="$ctrl.checkout($ctrl.shoppingCart, $ctrl.output)"]`)

    // Confirm Contact Information
    this.fieldFirstName = buildElement(`fieldFirstName`, `css`, `[name="firstName"]`)
    this.fieldLastName = buildElement(`fieldLastName`, `css`, `[name="lastName"]`)
    this.fieldEmail = buildElement(`fieldEmail`, `css`, `[name="email"]`)
    this.fieldPhone = buildElement(`fieldPhone`, `css`, `[name="phone"]`)
    this.fieldExtension = buildElement(`fieldExtension`, `css`, `[name="extension"]`)
    this.buttonSaveAndContinue = buildElement(`buttonSaveAndContinue`, `css`, `[ng-click="$ctrl.form.$valid && $ctrl.save()"]`)

    // Order Summary
    this.buttonSubmitOrder = buildElement(`buttonSubmitOrder`, `css`, `[ng-click="$ctrl.submitOrder()"]`)

    /*

    // Confirm Contact Information for Subscribers UI
    this.UCPHeader2 = buildElement(`UCPHeader2`, `xpath`, `//*[@id="subscription-contact-confirmation-table"]/md-card/md-toolbar/div/h2`)
    this.UCPinstruction = buildElement(`UCPinstruction`, `xpath`, `//*[@id="subscription-contact-confirmation-table"]/md-card/md-card-content/div/span`)
    this.saveAndContBtn = buildElement(`saveAndContBtn`, `xpath`, `//button[@ng-click='$ctrl.form.$valid&&$ctrl.save()']`)
    this.UCPCancelBtn = buildElement(`UCPCancelBtn`, `xpath`, `//button[@ng-click='$ctrl.cancel()']`)
    this.UCPFirstName = buildElement(`UCPFirstName`, `xpath`, `//*[@id="contact-edit-form"]/div/md-card/md-card-content/ng-transclude/form/div[1]/md-input-container[1]`)
    this.UCPfirstNameField = buildElement(`UCPfirstNameField`, `name`, `firstName`)
    this.UCPLastName = buildElement(`UCPLastName`, `xpath`, `//*[@id="contact-edit-form"]/div/md-card/md-card-content/ng-transclude/form/div[1]/md-input-container[2]`)
    this.UCPLastNameField = buildElement(`UCPLastNameField`, `name`, `lastName`)
    this.UCPEmailAddr = buildElement(`UCPEmailAddr`, `xpath`, `//*[@id="contact-edit-form"]/div/md-card/md-card-content/ng-transclude/form/div[2]/md-input-container`)
    this.UCPemailAddrField = buildElement(`UCPemailAddrField`, `name`, `email`)
    this.UCPPhone = buildElement(`UCPPhone`, `xpath`, `//*[@id="contact-edit-form"]/div/md-card/md-card-content/ng-transclude/form/div[3]/md-input-container[1]`)
    this.UCPPhoneField = buildElement(`UCPPhoneField`, `name`, `phone`)
    this.UCPExtension = buildElement(`UCPExtension`, `xpath`, `//*[@id="contact-edit-form"]/div/md-card/md-card-content/ng-transclude/form/div[3]/md-input-container[2]`)
    this.UCPExtensionField = buildElement(`UCPExtensionField`, `name`, `extension`)
    this.UCPrequiredFieldMessage = buildElement(`UCPrequiredFieldMessage`, `css`, `[class="md-input-message-animationng-bindingng-scope"]`)
        
    // Order Summary for subscriber UI
    this.submitBtn = buildElement(`submitBtn`, `xpath`, `//*[@id="order-summary-table"]//button`)
    this.OSPHeader2 = buildElement(`OSPHeader2`, `xpath`, `//*[@id="order-summary-table"]//h2`)
    this.OSPHeader3 = buildElement(`OSPHeader3`, `xpath`, `//*[@id="order-summary-table"]//div[1]/h3`)
    this.OSPCustomerName = buildElement(`OSPCustomerName`, `xpath`, `//*[@id="order-summary-table"]//div[2]/div/div/div[1]/h4`)
    this.OSPContactName = buildElement(`OSPContactName`, `xpath`, `//*[@id="order-summary-table"]//div[2]/div/div/div[2]/h4`)
    this.OSPEmail = buildElement(`OSPEmail`, `xpath`, `//*[@id="order-summary-table"]//div[2]/div/div/div[3]/h4`)
    this.OSPPhone = buildElement(`OSPPhone`, `xpath`, `//*[@id="order-summary-table"]//div[2]/div/div/div[4]/h4[1]`)
    this.OSPExtension = buildElement(`OSPExtension`, `xpath`, `//*[@id="order-summary-table"]//div[2]/div/div/div[4]/h4[2]`)
    this.OSPHeader3SubsRenew = buildElement(`OSPHeader3SubsRenew`, `xpath`, `//*[@id="order-summary-table"]//div[3]/h3`)
    this.OSPNumberOfVehicles = buildElement(`OSPNumberOfVehicles`, `xpath`, `//*[@id="order-summary-table"]//div[4]/div[1]/div/span`)
    this.OSPVehicleText = buildElement(`OSPVehicleText`, `xpath`, `//*[@id="order-summary-table"]//div[4]/div[1]/div/h4[1]`)
    this.OSPSubsRenewalsText = buildElement(`OSPSubsRenewalsText`, `xpath`, `//*[@id="order-summary-table"]//div[4]/div[1]/div/h4[2]`)
    this.OSPSubsTime = buildElement(`OSPSubsTime`, `xpath`, `//*[@id="order-summary-table"]//div[4]/div[2]/div/div`)
    this.OSPSubsTimeText = buildElement(`OSPSubsTimeText`, `xpath`, `//*[@id="order-summary-table"]//div[4]/div[2]/div/div/h4[1]`)
    this.OSPQtyVehicles = buildElement(`OSPQtyVehicles`, `xpath`, `//*[@id="order-summary-table"]//div[4]/div[2]/div/div/h4[3]`)
    this.shoppingCartBreadcrumb = buildElement(`shoppingCartBreadcrumb`, `xpath`, `//*[@id="main-content"]/ui-view/subscription-order-summary/breadcrumb/div/ol/li[3]/span/a`)
    this.OSPExtensionNull = buildElement(`OSPExtensionNull`, `xpath`, `//*[@id="order-summary-table"]//div[2]/div/div/div[4]`)

    this.columns = {
        tableVinColumn: {value: 2, name: 'VIN'},
    }; */

    return this
})
   
module.exports = {
    subscriptionsUI
}