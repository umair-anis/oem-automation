'use strict'

let TripAuditBuilder = (() => {

    let tripAudit = {
        vin: '',
        date: '',
        hour: '',
        minute: '',
        eventType: '',

        tripID: '',
        faultLog: ''
    }

    this.setVin = (value = '') => {
        tripAudit.vin = [value]
        return this
    }

    this.setDate = (value = '') => {
        tripAudit.date = [value]
        return this
    }

    this.setHour = (value = '') => {
        tripAudit.hour = [value]
        return this
    }

    this.setMinute = (value = '') => {
        tripAudit.minute = [value]
        return this
    }

    this.setEventType = (value = '') => {
        tripAudit.eventType = [value]
        return this
    }

    this.setTripID = (value = '') => {
        tripAudit.tripID = [value]
        return this
    }

    this.setFaultLog = (value = '') => {
        tripAudit.faultLog = [value]
        return this
    }

    this.build = () => {

        // Convert single digits to file format: MM, DD
        // Ex: 7 converts to 07
        if(tripAudit.hour.toString().length == 1)
            tripAudit.hour = ["0" + tripAudit.hour.toString()]

        if(tripAudit.minute.toString().length == 1)
            tripAudit.minute = ["0" + tripAudit.minute.toString()]

        return Object.freeze(tripAudit)
    }

    return this
})

module.exports = {
    TripAuditBuilder
}