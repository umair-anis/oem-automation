'use strict'

const LocationBuilder = () => {
  const location = {
    function: '',
    addressType: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipCode: ''
  }

  this.setFunction = (value = '') => {
    location.function = value
    return this
  }

  this.setAddressType = (value = '') => {
    location.addressType = [value]
    return this
  }

  this.setAddress1 = (value = '') => {
    location.address1 = [value]
    return this
  }

  this.setAddress2 = (value = '') => {
    location.address2 = [value]
    return this
  }

  this.setCity = (value = '') => {
    location.city = [value]
    return this
  }

  this.setState = (value = '') => {
    location.state = [value]
    return this
  }

  this.setZipCode = (value = '') => {
    location.zipCode = [value]
    return this
  }

  this.build = () => {
    return Object.freeze(location)
  }

  return this
}

module.exports = {
  LocationBuilder
}
