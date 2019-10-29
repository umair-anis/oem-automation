'use strict'

let { isEmptyOrWhitespace } = require('../../../../core/model/isEmptyOrWhitespace')

let Top10FaultBuilder = (() => {

    let topTenFault = {
        dtc: '',
        spn: '',
        fmi: '',
        count: ''
    }

    this.setDTC = (value = '') => {
        topTenFault.dtc = [value]
        return this
    }

    this.setSPN = (value = '') => {
        topTenFault.spn = [value]
        return this
    }

    this.setFMI = (value = '') => {
        topTenFault.fmi = [value]
        return this
    }

    this.setCount = (value = '') => {
        topTenFault.count = [value]
        return this
    }

    this.build = () => {

        if(isEmptyOrWhitespace(topTenFault.dtc.toString()) && isEmptyOrWhitespace(topTenFault.spn.toString())) throw new Error(`Top10FaultBuilder: Need to specify a DTC or SPN`)

        return Object.freeze(topTenFault)
    }

    return this
})

module.exports = {
    Top10FaultBuilder
}