'use strict'

let BlacklistBuilder = (() => {

    let address = {
        destination: '',
        reason: ''
    }

    this.setDestination = (value = '') => {
        address.destination = [value]
        return this
    }

    this.setReason = (value = '') => {
        address.reason = [value]
        return this
    }

    this.build = () => {
        return Object.freeze(address)
    }

    return this
})

module.exports = {
    BlacklistBuilder
}