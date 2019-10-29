'use strict'

const PhoneNumberBuilder = () => {
  const phoneNumber = {
    function: '',
    number: '',
    phoneType: ''
  }

  this.setFunction = (value = '') => {
    phoneNumber.function = value
    return this
  }

  this.setNumber = (value = '') => {
    phoneNumber.number = [value]
    return this
  }

  this.setPhoneType = (value = '') => {
    phoneNumber.phoneType = [value]
    return this
  }

  this.build = () => {
    return Object.freeze(phoneNumber)
  }

  return this
}

module.exports = {
  PhoneNumberBuilder
}
