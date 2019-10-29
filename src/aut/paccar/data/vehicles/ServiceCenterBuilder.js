'use strict'

let ServiceCenterBuilder = (() => {

    let serviceCenter = {
        authorizedDealer: '',
        hoursOfOperation: '',
        phoneNumber: '',
        distance: ''
    }

    this.setAuthorizedDealer = (value = '') => {
        serviceCenter.authorizedDealer = [value]
        return this
    }

    this.setHoursOfOperation = (value = '') => {
        serviceCenter.hoursOfOperation = [value]
        return this
    }

    this.setPhoneNumber = (value = '') => {
        serviceCenter.phoneNumber = [value]
        return this
    }

    this.setDistance = (value = '') => {
        serviceCenter.distance = [value]
        return this
    }

    this.build = () => {
        return Object.freeze(serviceCenter)
    }

    return this
})

module.exports = {
    ServiceCenterBuilder
}