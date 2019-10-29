'use strict'

let { appendScenarios } = require('../../../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')

let { clickLocationsTab } = require('./clickLocationsTab')
let { verifyLocationInTable } = require('./verifyLocationInTable')
let { clickAddLocation } = require('./clickAddLocation')
let { enterLocation } = require('./enterLocation')
let { clickAdd } = require('./clickAdd')

/**
 * Build a scenario for adding a DOG's Location
 * @returns Scenario
 */
let buildAddLocation = async (location = {}) => {

    // Scenarios
    const clickLocationsTabScenario = await clickLocationsTab()
    const clickAddLocationScenario = await clickAddLocation()
    const enterLocationScenario = await enterLocation(location.name)
    const clickAddScenario = await clickAdd()
    const verifyLocationInTableScenario = await verifyLocationInTable(location.name, true)

    
    const scenarios = [   clickLocationsTabScenario
                        , clickAddLocationScenario
                        , enterLocationScenario
                        , clickAddScenario
                        , verifyLocationInTableScenario]

    const steps = await appendScenarios(scenarios)

    const scenario = await ScenarioBuilder().setName(`Add a New Location ${location.name}, Verify it is in the table`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildAddLocation
}