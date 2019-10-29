'use strict'

let { appendScenarios } = require('../../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')

let { clickTabVehicleGroups } = require('./clickTabVehicleGroups')
let { clickEditGroup } = require('./clickEditGroup')

let buildEditVehicleGroup = async (name = []) => {

    // Scenarios
    const clickTabVehicleGroupsScenario = await clickTabVehicleGroups()
    const clickEditGroupScenario = await clickEditGroup(name)

    const scenarios = [  clickTabVehicleGroupsScenario
                       , clickEditGroupScenario  ]

    let steps = await appendScenarios(scenarios)

    const scenario = await ScenarioBuilder().setName(`Edit Vehicle Group: ${name}`)
                                            .setSteps(steps)
                                            .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildEditVehicleGroup
}