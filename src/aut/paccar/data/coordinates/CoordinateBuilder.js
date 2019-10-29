'use strict'

let { isEmptyOrWhitespace } = require('../../../../core/model/isEmptyOrWhitespace')

let CoordinateBuilder = (() => {

    let coordinate = {
        lat: '',
        lon: ''
    }

    this.setLat = (value = '') => {
        coordinate.lat = value
        return this
    }

    this.setLon = (value = '') => {
        coordinate.lon = value
        return this
    }

    this.build = () => {
        return Object.freeze(coordinate)
    }

    return this
})

module.exports = {
    CoordinateBuilder
}