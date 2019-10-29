'use strict'

let { appendScenarios } = require('../../../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')

let { clickRegionsTab } = require('./clickRegionsTab')
let { clickAdd } = require('./clickAdd')
let { enterRegionName } = require('./enterRegionName')
let { clickNext } = require('./clickNext')
let { clickAssignLocations } = require('./clickAssignLocations')
let { clickSaveAssnLocations } = require('./clickSaveAssnLocations')

/**
 * Build a scenario for adding a DOG's Region
 * @returns Scenario
 */
let buildAddRegion = async (region = {}) => {

    // Scenarios
    const clickRegionsTabScenario = await clickRegionsTab()
    const clickAddScenario = await clickAdd()
    const enterRegionNameScenario = await enterRegionName(region.name)
    const clickNextScenario = await clickNext()
    const clickAssignLocationsScenario = await clickAssignLocations(region.location)
    const clickSaveAssnLocationsScenario = await clickSaveAssnLocations()

    var scenarios = [ clickRegionsTabScenario
                    , clickAddScenario
                    , enterRegionNameScenario
                    , clickNextScenario ]

    // If there is a location name to add to the Region on creation then do it,
    // otherwise click save and skip it
    if(region.location.toString().length != 0){
        scenarios.push(clickAssignLocationsScenario)
    }

    scenarios.push(clickSaveAssnLocationsScenario)

    const steps = await appendScenarios(scenarios)

    const scenario = await ScenarioBuilder().setName(`Add a New Region: ${region.name}`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildAddRegion
}