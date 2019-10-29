'use strict'

let { appendScenarios } = require('../../../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')

let { clickAddVehicleGroup } = require('./clickAddVehicleGroup')
let { enterGroupName } = require('./enterGroupName')
let { enterGroupDescription } = require('./enterGroupDescription')
let { clickSaveVechicleGroup } = require('./clickSaveVechicleGroup')


let addVehicleGroup = async () => {

    let statusActive = true
    let emailNotVerified = false

    const name = ['Vehicle Group Name']
    const description = ['Vehicle Group Description']

    // Scenarios
    const clickAddVehicleGroupScenario = await clickAddVehicleGroup()
    const enterGroupNameScenario = await enterGroupName(name)
    const enterGroupDescriptionScenario = await enterGroupDescription(description)
    const clickSaveVechicleGroupScenario = await clickSaveVechicleGroup()

    // Steps:
    // 1. Click Add Vehicle Group
    // 2. Enter Group Name/Description
    // 3. Click Save
    const steps = await appendScenarios([ clickAddVehicleGroupScenario
                                        , enterGroupNameScenario
                                        , enterGroupDescriptionScenario
                                        , clickSaveVechicleGroupScenario ])

    const scenario = await ScenarioBuilder().setName(`Add a Vehicle Grou: ${name}`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    addVehicleGroup
}