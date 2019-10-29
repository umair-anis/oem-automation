'use strict'

let readVehicle = () => {
    const vehicle = require('../vehicle.json')
    return Object.freeze(vehicle)
}

module.exports = {
    readVehicle
}