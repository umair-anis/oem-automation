'use strict'

let { appendScenarios } = require('../../../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')

let { clickVehicleGroupOptions } = require('./clickVehicleGroupOptions')
let { clickDeleteGroup } = require('./clickDeleteGroup')


let deleteVehicleGroup = async () => {

    const name = ['Vehicle Group Name']

    // Scenarios
    const clickVehicleGroupOptionsScenario = await clickVehicleGroupOptions(name)
    const clickDeleteGroupScenario = await clickDeleteGroup()

    // Steps:
    // 1. Click The Vehcile's More Options button
    // 2. Click Delete Group
    const steps = await appendScenarios([ clickVehicleGroupOptionsScenario
                                        , clickDeleteGroupScenario])

    const scenario = await ScenarioBuilder().setName(`Delete a Vehicle Group: ${name}`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    deleteVehicleGroup
}