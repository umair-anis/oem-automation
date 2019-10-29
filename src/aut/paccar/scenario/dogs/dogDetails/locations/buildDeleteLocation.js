'use strict'

let { appendScenarios } = require('../../../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')

let { clickLocationsTab } = require('./clickLocationsTab')
let { deleteLocation } = require('./deleteLocation')
let { validateLocationRemoved } = require('./validateLocationRemoved')

/**
 * Build a scenario for adding a DOG's Location
 * @returns Scenario
 */
let buildDeleteLocation = async (location = {}) => {

    // Scenarios
    const clickLocationsTabScenario = await clickLocationsTab()
    const deleteLocationScenario = await deleteLocation(location.name)
    const validateLocationRemovedScenario = await validateLocationRemoved()

    const scenarios = [   clickLocationsTabScenario
                        , deleteLocationScenario
                        , validateLocationRemovedScenario]
                        
    const steps = await appendScenarios(scenarios)

    const scenario = await ScenarioBuilder().setName(`Delete Location ${location.name}`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildDeleteLocation
}