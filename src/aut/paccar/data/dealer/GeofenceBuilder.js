'use strict'

const GeofenceBuilder = () => {
  const geofence = {
    function: '',
    name: '',
    latitude: '',
    longitude: ''
  }

  this.setFunction = (value = '') => {
    geofence.function = value
    return this
  }

  this.setName = (value = '') => {
    geofence.name = [value]
    return this
  }

  this.setLatitude = (value = '') => {
    geofence.latitude = [value]
    return this
  }

  this.setLongitude = (value = '') => {
    geofence.longitude = [value]
    return this
  }

  this.build = () => {
    return Object.freeze(geofence)
  }

  return this
}

module.exports = {
  GeofenceBuilder
}
