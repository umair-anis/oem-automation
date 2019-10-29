'use strict'

let { appendScenarios } = require('../../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')

let { clickVehicleCheckBox } = require('../clickVehicleCheckBox')
let { clickSelectedMoreOptions } = require('../clickSelectedMoreOptions')
let { clickAddToVehicleGroup } = require('./clickAddToVehicleGroup')
let { clickVehicleGroupCheckBox } = require('./clickVehicleGroupCheckBox')
let { clickSaveGroup } = require('../createVehicleGroup/clickSaveGroup')
let { validateAddedToGroup } = require('./validateAddedToGroup')

let buildAddToVehicleGroup = async (vin = [], vehicleGroupName = []) => {

    let steps = []

    const clickVehicleCheckBoxScenario = await clickVehicleCheckBox(vin)
    const clickSelectedMoreOptionsScenario = await clickSelectedMoreOptions()
    const clickAddToVehicleGroupScenario = await clickAddToVehicleGroup()
    const clickVehicleGroupCheckBoxScenario = await clickVehicleGroupCheckBox(vehicleGroupName)
    const clickSaveGroupScenario = await clickSaveGroup()
    const validateAddedToGroupScenario = await validateAddedToGroup()

    const scenarios = [   clickVehicleCheckBoxScenario
                        , clickSelectedMoreOptionsScenario
                        , clickAddToVehicleGroupScenario
                        , clickVehicleGroupCheckBoxScenario
                        , clickSaveGroupScenario 
                        , validateAddedToGroupScenario ]

    // Steps:
    // 1. Click a Vehicle to start the group
    // 2. Go to Create Vehicle Group
    // 3. Enter Group Information
    // 4. Click Save
    steps = await appendScenarios(scenarios)

    const scenario = await ScenarioBuilder().setName(`Add Vehicle: ${vin} to Vehicle Group: ${vehicleGroupName}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    buildAddToVehicleGroup
}