'use strict'

let { appendScenarios } = require('../../../../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../../../../core/scenario/ScenarioBuilder')

let { clickAddVehicle } = require('./clickAddVehicle')
let { enterVIN } = require('./enterVIN')
let { clickAdd } = require('./clickAdd')


let addVehicleGroup = async () => {

    const vin = ['0123456789']

    // Scenarios
    const clickAddVehicleScenario = await clickAddVehicle()
    const enterVINScenario = await enterVIN(vin)
    const clickAddScenario = await clickAdd()

    // Steps:
    // 1. Click Add Vehicle
    // 2. Enter a valid VIN
    // 3. Click Add
    const steps = await appendScenarios([ clickAddVehicleScenario
                                        , enterVINScenario
                                        , clickAddScenario ])

    const scenario = await ScenarioBuilder().setName(`Add a Vehicle with VI: ${vin}`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    addVehicleGroup
}