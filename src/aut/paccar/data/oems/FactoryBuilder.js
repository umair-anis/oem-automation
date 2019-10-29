'use strict'

let { isEmptyOrWhitespace } = require('../../../../core/model/isEmptyOrWhitespace')
let { isObjectEmpty } = require('../../../../core/model/isObjectEmpty')

let FactoryBuilder = (() => {

    let factory = {
        city: '',
        code: '',
        latitude: '',
        longitude: ''
    }

    this.setCity = (value = '') => {
        factory.city = [value]
        return this
    }

    this.setCode = (value = '') => {
        factory.code = [value]
        return this
    }

    this.setLatitude = (value = '') => {
        factory.latitude = [value]
        return this
    }
    
    this.setLongitude = (value = '') => {
        factory.longitude = [value]
        return this
    }

    this.build = () => {
        return Object.freeze(factory)
    }

    return this
})

module.exports = {
    FactoryBuilder
}