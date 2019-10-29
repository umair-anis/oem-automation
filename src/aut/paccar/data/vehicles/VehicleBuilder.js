'use strict'

let { isEmptyOrWhitespace } = require('../../../../core/model/isEmptyOrWhitespace')

let VehicleBuilder = (() => {

    let vehicle = {
        vin: '',
        year: '',
        make: '',
        model: '',
        dsn: '',
        unitNumber: '',
        description: '',
        subscriptionStart: '',
        subscriptionEnd: '',
        licenseStatus: '',
        otaSubscriptionStatus: '',
        primaryDealer: '',
    }

    this.setVin = (value = '') => {
        vehicle.vin = [value]
        return this
    }

    this.setYear = (value = '') => {
        vehicle.year = [value]
        return this
    }

    this.setMake = (value = '') => {
        vehicle.make = [value]
        return this
    }

    this.setModel = (value = '') => {
        vehicle.model = [value]
        return this
    }

    this.setDSN = (value = '') => {
        vehicle.dsn = [value]
        return this
    }

    this.setUnitNumber = (value = '') => {
        vehicle.unitNumber = [value]
        return this
    }

    this.setDescription = (value = '') => {
        vehicle.description = [value]
        return this
    }

    this.setSubscriptionStart = (value = '') => {
        vehicle.subscriptionStart = [value]
        return this
    }

    this.setSubscriptionEnd = (value = '') => {
        vehicle.subscriptionEnd = [value]
        return this
    }

    this.setLicneseStatus = (value = '') => {
        vehicle.licenseStatus = [value]
        return this
    }

    this.setOTASubscriptionStatus = (value = '') => {
        vehicle.otaSubscriptionStatus = [value]
        return this
    }

    this.setPrimaryDealer = (value = '') => {
        vehicle.primaryDealer = [value]
        return this
    }

    this.build = () => {

        if(isEmptyOrWhitespace(vehicle.vin.toString())) throw new Error(`VehicleBuilder: Invalid Vin`)

        return Object.freeze(vehicle)
    }

    return this
})

module.exports = {
    VehicleBuilder
}