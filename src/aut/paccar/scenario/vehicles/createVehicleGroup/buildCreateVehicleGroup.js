'use strict'

let { appendScenarios } = require('../../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')

let { clickVehicleCheckBox } = require('../clickVehicleCheckBox')
let { clickSelectedMoreOptions } = require('../clickSelectedMoreOptions')
let { clickCreateVehicleGroup } = require('./clickCreateVehicleGroup')
let { enterGroupName } = require('./enterGroupName')
let { enterGroupDescription } = require('./enterGroupDescription')
let { clickSaveGroup } = require('./clickSaveGroup')

let buildCreateVehicleGroup = async (vin = [], vehicleGroup = {}) => {

    let steps = []

    const clickVehicleCheckBoxScenario = await clickVehicleCheckBox(vin)
    const clickSelectedMoreOptionsScenario = await clickSelectedMoreOptions()
    const clickCreateVehicleGroupScenario = await clickCreateVehicleGroup()
    const enterGroupNameScenario = await enterGroupName(vehicleGroup.name)
    const enterGroupDescriptionScenario = await enterGroupDescription(vehicleGroup.description)
    const clickSaveGroupScenario = await clickSaveGroup()

    const scenarios = [   clickVehicleCheckBoxScenario
                        , clickSelectedMoreOptionsScenario
                        , clickCreateVehicleGroupScenario
                        , enterGroupNameScenario
                        , enterGroupDescriptionScenario
                        , clickSaveGroupScenario]

    // Steps:
    // 1. Click a Vehicle to start the group
    // 2. Go to Create Vehicle Group
    // 3. Enter Group Information
    // 4. Click Save
    steps = await appendScenarios(scenarios)

    const scenario = await ScenarioBuilder().setName(`Create a Vehicle Group with Vehicle Name: ${vin} as Group Name: ${vehicleGroup.name}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    buildCreateVehicleGroup
}