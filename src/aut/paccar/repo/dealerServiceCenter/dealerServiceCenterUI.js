'use strict'

const { buildElement } = require('../../../../core/element/buildElement')

const dealerServiceCenterUI = () => {

  // Maps
  this.mapGeofences = buildElement(`mapGeofences`, `xpath`, `//div[@id="dealer-details-map"]`)

  // Tables
  this.table = buildElement(`table`, `xpath`, `//*[@id="dealer-list-table"]/md-card/list-table/md-table-container/table`)

  // Filters
  this.filter = buildElement(`filter`, `xpath`, `//*[@id="dealer-list-table"]/md-card/list-toolbar`)

  // Buttons
  this.buttonSelectedInfo = buildElement(`buttonSelectedInfo`, `css`, `[aria-label="info"]`)
  this.buttonSelectEdit = buildElement(`buttonSelectEdit`, `css`, `[aria-label="edit"]`)

  // Prompts
  this.promptDealerSaved = buildElement(`promptDealerSaved`, `xpath`, `//span[contains(text(), "has been saved.")]`)

  // Dealer Details
  this.checkboxSetPreferredDealer = buildElement(`checkboxSetPreferredDealer`, `css`, `[aria-label="Set as Preferred Dealer"]`)

  // Edit Dealer - Information
  this.fieldName = buildElement(`fieldName`, `css`, `[name="name"]`)
  this.fieldEmail = buildElement(`fieldEmail`, `css`, `[name="email"]`)
  this.fieldID = buildElement(`fieldID`, `css`, `[name="id"]`)
  this.fieldLatitude = buildElement(`fieldLatitude`, `css`, `[name="lat"]`)
  this.fieldLongitude = buildElement(`fieldLongitude`, `css`, `[name="lon"]`)

  // Edit Dealer - Geofences
  this.buttonAddCoordinate = buildElement(`buttonAddCoordinate`, `css`, `[ng-click="$ctrl.addDynamicRecord($ctrl.dealer.geofences.coordinates[0][0], 'editingGeofence')"]`)
  this.fieldGeofenceLatitude = buildElement(`fieldGeofenceLatitude`, `xpath`, `//div[@aria-hidden="false"]//input[@ng-model="coordinates[0]"]`)
  this.fieldGeofenceLongitude = buildElement(`fieldGeofenceLongitude`, `xpath`, `//div[@aria-hidden="false"]//input[@ng-model="coordinates[1]"]`)

  // Edit Dealer - Locations
  this.buttonAddLocation = buildElement(`buttonAddLocation`, `css`, `[ng-click="$ctrl.addDynamicRecord($ctrl.dealer.addresses, 'editingAddress')"]`)
  this.fieldAddressType = buildElement(`fieldAddressType`, `xpath`, `//div[@aria-hidden="false"]//input[@ng-model="address.nickName"]`)
  this.fieldAddress1 = buildElement(`fieldAddress1`, `xpath`, `//div[@aria-hidden="false"]//input[@ng-model="address.streetAddress"]`)
  this.fieldAddress2 = buildElement(`fieldAddress2`, `xpath`, `//div[@aria-hidden="false"]//input[@ng-model="address.streetAddress2"]`)
  this.fieldCity = buildElement(`fieldCity`, `xpath`, `//div[@aria-hidden="false"]//input[@ng-model="address.city"]`)
  this.dropdownState = buildElement(`dropdownState`, `xpath`, `//div[@aria-hidden="false"]//md-select[@ng-model="address.state"]`)
  this.fieldZip = buildElement(`fieldZip`, `xpath`, `//div[@aria-hidden="false"]//input[@ng-model="address.zipcode"]`)

  // Edit Dealer - Phone Numbers
  this.buttonAddPhone = buildElement(`buttonAddPhone`, `css`, `[ng-click="$ctrl.addDynamicRecord($ctrl.dealer.phoneNumbers, 'editingPhone')"]`)
  this.fieldPhone = buildElement(`fieldPhone`, `xpath`, `//div[@aria-hidden="false"]//input[@ng-model="phone.number"]`)

  // Edit Dealer - Hours of Service
  this.buttonAddHoursOfService = buildElement(`buttonAddHoursOfService`, `css`, `[ng-click="$ctrl.addDynamicRecord($ctrl.dealer.hours, 'editingServiceHour')"]`)
  this.fieldServiceType = buildElement(`fieldServiceType`, `xpath`, `//div[@aria-hidden="false"]//input[@ng-model="serviceHour.nickName"]`)
  this.fieldOpen = buildElement(`fieldOpen`, `xpath`, `//div[@aria-hidden="false"]//input[@ng-model="serviceHour.open"]`)
  this.fieldClose = buildElement(`fieldClose`, `xpath`, `//div[@aria-hidden="false"]//input[@ng-model="serviceHour.close"]`)

  // Edit Dealer - Buttons
  this.buttonCancel = buildElement(`buttonCancel`, `xpath`, `//div[@aria-hidden="false"]//button[contains(text(), "Cancel")]`) // The Cancel Button present when editing or adding a Dealer Attribute: Geofence, HoS, Phone, etc.
  this.buttonDone = buildElement(`buttonDone`, `xpath`, `//div[@aria-hidden="false"]//button[contains(text(), "Done")]`) // The Done Button present when editing or adding a Dealer Attribute: Geofence, HoS, Phone, etc.
  this.buttonConfirmButton = buildElement(`buttonConfirmButton`, `css`, `[ng-click="dialog.hide()"]`)

  this.buttonDeleteDealer = buildElement(`buttonDeleteDealer`, `css`, `[ng-click="$ctrl.confirmDeleteDealer($event)"]`)
  this.buttonCancelDealer = buildElement(`buttonCancelDealer`, `xpath`, `//div/a[@href="#/nav/dealer/list/"]`)
  this.buttonSaveDealer = buildElement(`buttonSaveDealer`, `css`, `[type="submit"]`)

  return this
}

module.exports = {
  dealerServiceCenterUI
}
