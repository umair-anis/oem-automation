'use strict'

let { isEmptyOrWhitespace } = require('../../../../core/model/isEmptyOrWhitespace')

let VehicleGroupBuilder = (() => {

    let vehicleGroup = {
        name: '',
        description: '',
    }

    this.setName = (value = '') => {
        vehicleGroup.name = [value]
        return this
    }

    this.setDescription = (value = '') => {
        vehicleGroup.description = [value]
        return this
    }

    this.build = () => {

        if(isEmptyOrWhitespace(vehicleGroup.name.toString())) throw new Error(`VehicleGroupBuilder: Invalid Name`)

        return Object.freeze(vehicleGroup)
    }

    return this
})

module.exports = {
    VehicleGroupBuilder
}