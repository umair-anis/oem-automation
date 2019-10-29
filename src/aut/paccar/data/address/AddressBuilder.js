'use strict'

let AddressBuilder = (() => {

    let address = {
        type: '',
        line1: '',
        line2: '',
        city: '',
        state: '',
        zip: ''
    }

    this.setType = (value = '') => {
        address.type = value
        return this
    }

    this.setLine1 = (value = '') => {
        address.line1 = value
        return this
    }

    this.setLine2 = (value = '') => {
        address.line2 = value
        return this
    }

    this.setCity = (value = '') => {
        address.city = value
        return this
    }

    this.setState = (value = '') => {
        address.state = value
        return this
    }

    this.setZip = (value = '') => {
        address.zip = value
        return this
    }

    this.build = () => {
        return Object.freeze(address)
    }

    return this
})

module.exports = {
    AddressBuilder
}