'use strict'

let { appendScenarios } = require('../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')

let { clickVehiclePin } = require('./clickVehiclePin')
let { clickFrameVehicleLink } = require('./clickFrameVehicleLink')

let buildClickVehiclePin = async () => {

    // Scenarios
    const clickVehiclePinScenario = await clickVehiclePin()
    const clickFrameVehicleLinkScenario = await clickFrameVehicleLink()

    // Steps:
    // 1. Click Edit a Manufacturer
    // 2. Click Delete
    const steps = await appendScenarios([ clickVehiclePinScenario
                                        , clickFrameVehicleLinkScenario ])

    const scenario = await ScenarioBuilder().setName(`Click Vehicle Pin`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildClickVehiclePin
}