'use strict'

let VehicleDetailsBuilder = (() => {

    let vehicleDetails = {
        recommendation: '',

        address: '',
        city: '',
        time: '',

        customer: '',
        yearMakeModel: '',
        unitNumber: '',
        description: '',
        vin: '',
        dsn: '',
        mileage: '',
        engineModel: '',
        engineSerialNumber: '',
        subscriptionStatus: '',
        subscriptionEnd: '',
        pmgFirmware: '',
        afterTreatmentID: '',

        fuelEconomy: '',
        percentIdle: '',
        engineHours: '',
    }

    this.setRecommendation = (value = '') => {
        vehicleDetails.recommendation = value
        return this
    }

    this.setAddress = (value = '') => {
        vehicleDetails.address = value
        return this
    }

    this.setCity = (value = '') => {
        vehicleDetails.city = value
        return this
    }

    this.setTime = (value = '') => {
        vehicleDetails.time = value
        return this
    }

    this.setCustomer = (value = '') => {
        vehicleDetails.customer = value
        return this
    }

    this.setYearMakeModel = (value = '') => {
        vehicleDetails.yearMakeModel = value
        return this
    }

    this.setUnitNumber = (value = '') => {
        vehicleDetails.unitNumber = value
        return this
    }

    this.setDescription = (value = '') => {
        vehicleDetails.description = value
        return this
    }

    this.setVin = (value = '') => {
        vehicleDetails.vin = value
        return this
    }

    this.setDSN = (value = '') => {
        vehicleDetails.dsn = value
        return this
    }

    this.setMileage = (value = '') => {
        vehicleDetails.mileage = value
        return this
    }

    this.setEngineModel = (value = '') => {
        vehicleDetails.engineModel = value
        return this
    }

    this.setEngineSerialNumber = (value = '') => {
        vehicleDetails.engineSerialNumber = value
        return this
    }

    this.setSubscriptionStatus = (value = '') => {
        vehicleDetails.subscriptionStatus = value
        return this
    }

    this.setSubscriptionEnd = (value = '') => {
        vehicleDetails.subscriptionEnd = value
        return this
    }

    this.setPMGFirmware = (value = '') => {
        vehicleDetails.pmgFirmware = value
        return this
    }

    this.setAfterTreatmentID = (value = '') => {
        vehicleDetails.afterTreatmentID = value
        return this
    }

    this.setFuelEconomy = (value = '') => {
        vehicleDetails.fuelEconomy = value
        return this
    }

    this.setPercentIdle = (value = '') => {
        vehicleDetails.percentIdle = value
        return this
    }

    this.setEngineHours = (value = '') => {
        vehicleDetails.engineHours = value
        return this
    }

    this.build = () => {
        return Object.freeze(vehicleDetails)
    }

    return this
})

module.exports = {
    VehicleDetailsBuilder
}