'use strict'

const DealerBuilder = () => {
  const dealer = {
    name: '',
    code: '',
    email: '',
    id: '',
    latitude: '',
    longitude: '',
    coordinates: [],
    locations: [],
    phoneNumbers: [],
    hoursOfService: [],
    geofenceSteps: [],
    locationSteps: [],
    phoneNumberSteps: [],
    hoursOfServiceSteps: []
  }

  this.setName = (value = '') => {
    dealer.name = [value]
    return this
  }

  this.setCode = (value = '') => {
    dealer.code = [value]
    return this
  }

  this.setEmail = (value = '') => {
    dealer.email = [value]
    return this
  }

  this.setID = (value = '') => {
    dealer.id = [value]
    return this
  }

  this.setLatitude = (value = '') => {
    dealer.latitude = [value]
    return this
  }

  this.setLongitude = (value = '') => {
    dealer.longitude = [value]
    return this
  }

  this.setCoorinates = (value = []) => {
    dealer.coordinates = value
    return this
  }

  this.setLocations = (value = []) => {
    dealer.locations = value
    return this
  }

  this.setPhoneNumbers = (value = []) => {
    dealer.phoneNumbers = value
    return this
  }

  this.setHoursOfService = (value = []) => {
    dealer.hoursOfService = value
    return this
  }

  this.setGeofenceSteps = (value = []) => {
    dealer.geofenceSteps = value
    return this
  }

  this.setLocationSteps = (value = []) => {
    dealer.locationSteps = value
    return this
  }

  this.setPhoneNumberSteps = (value = []) => {
    dealer.phoneNumberSteps = value
    return this
  }

  this.setHoursOfServiceSteps = (value = []) => {
    dealer.hoursOfServiceSteps = value
    return this
  }

  this.build = () => {
    return Object.freeze(dealer)
  }

  return this
}

module.exports = {
  DealerBuilder
}
