'use strict'

let { appendScenarios } = require('../../../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')

let { clickVehicleGroupOptions } = require('./clickVehicleGroupOptions')
let { clickManageGroup } = require('./clickManageGroup')


let manageVehicleGroup = async () => {

    const name = ['Vehicle Group Name']

    // Scenarios
    const clickVehicleGroupOptionsScenario = await clickVehicleGroupOptions(name)
    const clickManageGroupScenario = await clickManageGroup()

    // Steps:
    // 1. Click The Vehcile's More Options button
    // 2. Click Delete Group
    const steps = await appendScenarios([ clickVehicleGroupOptionsScenario
                                        , clickManageGroupScenario])

    const scenario = await ScenarioBuilder().setName(`Manage a Vehicle Group: ${name}`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    manageVehicleGroup
}