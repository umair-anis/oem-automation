'use strict'

let readManufacturers = () => {
    const manufacturers = require('../manufacturers.json')
    return Object.freeze(manufacturers)
}

module.exports = {
    readManufacturers
}