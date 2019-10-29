'use strict'

const DealerStateBuilder = () => {
  const dealerState = {
    locationCount: 0,
    serviceHoursCount: 0,
    coordinatesCount: 0,
    phoneNumberCount: 0,
    hasStreetAddress2: false,
    totalInstances: 0
  }

  this.setLocationCount = (value = 0) => {
    dealerState.locationCount = value
    return this
  }

  this.setServiceHoursCount = (value = 0) => {
    dealerState.serviceHoursCount = value
    return this
  }

  this.setCoordinatesCount = (value = 0) => {
    dealerState.coordinatesCount = value
    return this
  }

  this.setPhoneNumberCount = (value = 0) => {
    dealerState.phoneNumberCount = value
    return this
  }

  this.setHasStreetAddress2 = (value = false) => {
    dealerState.hasStreetAddress2 = value
    return this
  }

  this.build = () => {
    return Object.freeze(dealerState)
  }

  return this
}

module.exports = {
  DealerStateBuilder
}
