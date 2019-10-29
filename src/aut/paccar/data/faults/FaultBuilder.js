'use strict'

let { isEmptyOrWhitespace } = require('../../../../core/model/isEmptyOrWhitespace')

let FaultBuilder = (() => {

    let fault = {
        messageType: '',
        recommendation: '',
        status: '',
        description: '',
        localTime: ''
    }

    this.setMessageType = (value = '') => {
        fault.messageType = [value]
        return this
    }

    this.setRecommendation = (value = '') => {
        fault.recommendation = [value]
        return this
    }

    this.setStatus = (value = '') => {
        fault.status = [value]
        return this
    }

    this.setDescription = (value = '') => {
        fault.description = [value]
        return this
    }

    this.setLocalTime = (value = '') => {
        fault.localTime = [value]
        return this
    }

    this.build = () => {

        if(isEmptyOrWhitespace(fault.localTime.toString())) throw new Error(`FaultBuilder: Invalid Local Time`)

        return Object.freeze(fault)
    }

    return this
})

module.exports = {
    FaultBuilder
}