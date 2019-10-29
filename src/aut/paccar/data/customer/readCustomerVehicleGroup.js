'use strict'

let { buildData } = require('../../config/strategy/buildData')
let { customerVehicleGroupBuilder } = require('./customerVehicleGroupBuilder')

let readCustomerVehicleGroup = async (env = {}, isRandom = false ) => {

    let customersVG = []
    const content = await buildData(env.name, readDev, readQa, readStaging, readProd)

    for (const customerVG of content.customersVG) {
        if(isRandom || customerVG.name === 'RandomVehicleGroupName' ){
            customerVG.name = customerVG.name + Math.floor(Date.now() / 1000)
        }


        customersVG.push(await customerVehicleGroupBuilder().setName(customerVG.name)
                                          .build())

    }

    return Object.freeze(customersVG)
}

let readDev = () => {
    return Object.freeze(require('./devCustomerVehicleGroup.json'))
}

let readQa = () => {
    return Object.freeze(require('./qaCustomerVehicleGroup.json'))
}

let readStaging = () => {
    return Object.freeze(require('./stagingCustomerVehicleGroup.json'))
}

let readProd = () => {
    return Object.freeze(require('./prodCustomers.json'))
}

module.exports = {
    readCustomerVehicleGroup
}