'use strict'

let { appendScenarios } = require('../../../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')

let { clickRegionsTab } = require('./clickRegionsTab')
let { clickDeleteRegion } = require('./form/clickDeleteRegion')
let { validateDeletedRegion } = require('./validateDeletedRegion')

/**
 * Build a scenario for adding a DOG's Location
 * @returns Scenario
 */
let buildDeleteRegion = async (region = {}) => {

    // Scenarios
    const clickRegionsTabScenario = await clickRegionsTab()
    const clickDeleteRegionScenario = await clickDeleteRegion(region)
    const validateDeletedRegionScenario = await validateDeletedRegion()

    const scenarios = [   clickRegionsTabScenario
                        , clickDeleteRegionScenario
                        , validateDeletedRegionScenario ]

    const steps = await appendScenarios(scenarios)

    const scenario = await ScenarioBuilder().setName(`Delete Region: ${region.name}`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildDeleteRegion
}