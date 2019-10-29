'use strict'

let FaultBuilder = (() => {

    let fault = {
        time: '',
        dsn: '',
        vin: '',
    }

    this.setTime = (value = '') => {
        fault.time = value
        return this
    }

    this.setDSN = (value = '') => {
        fault.dsn = value
        return this
    }

    this.setVin = (value = '') => {
        fault.vin = value
        return this
    }

    this.build = () => {
        return Object.freeze(fault)
    }

    return this
})

module.exports = {
    FaultBuilder
}