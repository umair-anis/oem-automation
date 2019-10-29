'use strict'

let { isEmptyOrWhitespace } = require('../../../../core/model/isEmptyOrWhitespace')

let PhoneNumberBuilder = (() => {

    let phone = {
        type: '',
        number: '',
        extension: ''
    }

    this.setType = (value = '') => {
        phone.type = [value]
        return this
    }

    this.setNumber = (value = '') => {
        phone.number = [value]
        return this
    }

    this.setExtension = (value = '') => {
        phone.extension = [value]
        return this
    }

    this.build = () => {

        if(isEmptyOrWhitespace(phone.number.toString())) throw new Error(`PhoneNumberBuilder: Invalid Phone`)

        return Object.freeze(phone)
    }

    return this
})

module.exports = {
    PhoneNumberBuilder
}