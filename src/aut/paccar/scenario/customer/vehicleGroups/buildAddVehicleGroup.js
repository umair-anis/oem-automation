'use strict'

let { appendScenarios } = require('../../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')

let { clickTabVehicleGroups } = require('./clickTabVehicleGroups')
let { clickAddGroup } = require('./clickAddGroup')
let { enterGroupName } = require('./enterGroupName')
let { clickSaveGroup } = require('./clickSaveGroup')

let buildAddVehicleGroup = async (name = []) => {

    // Scenarios
    const clickTabVehicleGroupsScenario = await clickTabVehicleGroups()
    const clickAddGroupScenario = await clickAddGroup()
    const enterGroupNameScenario = await enterGroupName(name)
    const clickSaveGroupScenario = await clickSaveGroup()

    const scenarios = [  clickTabVehicleGroupsScenario
                       , clickAddGroupScenario
                       , enterGroupNameScenario
                       , clickSaveGroupScenario  ]

    let steps = await appendScenarios(scenarios)

    const scenario = await ScenarioBuilder().setName(`Add a new Vehicle Group: ${name}`)
                                            .setSteps(steps)
                                            .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildAddVehicleGroup
}