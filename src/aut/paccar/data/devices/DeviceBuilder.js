'use strict'

let DeviceBuilder = (() => {

    let device = {
        dsn: '',
        action: '',
        confirmation: ''
    }

    this.setDSN = (value = '') => {
        device.dsn = [value]
        return this
    }

    this.setAction = (value = '') => {
        device.action = [value]
        return this
    }

    this.setConfirmation = (value = '') => {
        device.confirmation = [value]
        return this
    }

    this.build = () => {
        return Object.freeze(device)
    }

    return this
})

module.exports = {
    DeviceBuilder
}