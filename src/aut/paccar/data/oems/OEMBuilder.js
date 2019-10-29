'use strict'

let { isEmptyOrWhitespace } = require('../../../../core/model/isEmptyOrWhitespace')

let OEMBuilder = (() => {

    let oem = {
        name: '',
        subscription: '',
        warranty: ''
    }

    this.setName = (value = '') => {
        oem.name = [value]
        return this
    }

    this.setSubscription = (value = '') => {
        oem.subscription = [value]
        return this
    }

    this.setWarranty = (value = '') => {
        oem.warranty = [value]
        return this
    }

    this.build = () => {
        return Object.freeze(oem)
    }

    return this
})

module.exports = {
    OEMBuilder
}