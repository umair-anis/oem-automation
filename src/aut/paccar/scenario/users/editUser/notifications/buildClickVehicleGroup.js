'use strict'

let { appendScenarios } = require('../../../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')


let { clickVehicleGroupsTab } = require('./clickVehicleGroupsTab')
let { clickVehcileGroupCheckbox } = require('./clickVehcileGroupCheckbox')

/**
 * Build a scenario for Clicking a Subscribed Customer Checkbox
 * @returns Scenario
 */
let buildClickVehicleGroup = async (vehicleGroup = []) => {

    // Scenarios
    const clickVehicleGroupsTabScenario = await clickVehicleGroupsTab()
    const clickVehcileGroupCheckboxScenario = await clickVehcileGroupCheckbox(vehicleGroup)

    // Steps:
    // 1. Click Subscribed Customers Tab
    // 2. Click The Checkbox associated with customer
    const steps = await appendScenarios([ clickVehicleGroupsTabScenario
                                        , clickVehcileGroupCheckboxScenario ])

    const scenario = await ScenarioBuilder().setName(`Click Subscribed Vehicle Group: ${vehicleGroup}`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildClickVehicleGroup
}