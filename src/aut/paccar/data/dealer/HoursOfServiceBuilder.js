'use strict'

const HoursOfServiceBuilder = () => {
  const hoursOfService = {
    function: '',
    serviceType: '',
    open: '',
    close: '',
    daysOfWeek: []
  }

  this.setFunction = (value = '') => {
    hoursOfService.function = value
    return this
  }

  this.setServiceType = (value = '') => {
    hoursOfService.serviceType = [value]
    return this
  }

  this.setOpen = (value = '') => {
    hoursOfService.open = [value]
    return this
  }

  this.setClose = (value = '') => {
    hoursOfService.close = [value]
    return this
  }

  this.setDaysOfWeek = (value = []) => {
    hoursOfService.daysOfWeek = value
    return this
  }

  this.build = () => {
    return Object.freeze(hoursOfService)
  }

  return this
}

module.exports = {
  HoursOfServiceBuilder
}
