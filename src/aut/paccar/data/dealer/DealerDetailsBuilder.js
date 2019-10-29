'use strict'

const DealerDetailsBuilder = () => {
  const dealerDetails = {
    physicalAddress: '',
    serviceHours: '',
    contact: '',
    propertyMap: ''
  }

  this.setPhysicalAddress = (value = '') => {
    dealerDetails.physicalAddress = [value]
    return this
  }

  this.setServiceHours = (value = '') => {
    dealerDetails.serviceHours = [value]
    return this
  }

  this.setContact = (value = '') => {
    dealerDetails.contact = [value]
    return this
  }

  this.setPropertyMap = (value = []) => {
    dealerDetails.propertyMap = [value]
    return this
  }

  this.build = () => {
    return Object.freeze(dealerDetails)
  }

  return this
}

module.exports = {
  DealerDetailsBuilder
}
