'use strict'

let { appendScenarios } = require('../../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')

let { clickTabVehicleGroups } = require('./clickTabVehicleGroups')
let { clickDeleteGroup } = require('./clickDeleteGroup')

let buildDeleteVehicleGroup = async (name = []) => {

    // Scenarios
    const clickTabVehicleGroupsScenario = await clickTabVehicleGroups()
    const clickDeleteGroupScenario = await clickDeleteGroup(name)

    const scenarios = [  clickTabVehicleGroupsScenario
                       , clickDeleteGroupScenario  ]

    let steps = await appendScenarios(scenarios)

    const scenario = await ScenarioBuilder().setName(`Delete Vehicle Group: ${name}`)
                                            .setSteps(steps)
                                            .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildDeleteVehicleGroup
}