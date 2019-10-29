'use strict'

let { appendScenarios } = require('../../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')

let { clickTabVehicleGroups } = require('./clickTabVehicleGroups')
let { clickSubscribeGroup } = require('./clickSubscribeGroup')

let buildSubscribeVehicleGroup = async (name = []) => {

    // Scenarios
    const clickTabVehicleGroupsScenario = await clickTabVehicleGroups()
    const clickSubscribeGroupScenario = await clickSubscribeGroup(name)

    const scenarios = [  clickTabVehicleGroupsScenario
                       , clickSubscribeGroupScenario  ]

    let steps = await appendScenarios(scenarios)

    const scenario = await ScenarioBuilder().setName(`Subscribe Vehicle Group: ${name}`)
                                            .setSteps(steps)
                                            .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildSubscribeVehicleGroup
}