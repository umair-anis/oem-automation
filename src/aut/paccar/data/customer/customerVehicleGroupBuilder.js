'use strict'

let customerVehicleGroupBuilder = (() => {

    let customerVG = {
        name: '',
    }

    this.setName = (value = '') => {
        customerVG.name = value
        return this
    }

    this.build = () => {
        return Object.freeze(customerVG)
    }

    return this
})

module.exports = {
    customerVehicleGroupBuilder
}