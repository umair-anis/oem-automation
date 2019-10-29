'use strict'

let { appendScenarios } = require('../../../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')

let { clickRegionsTab } = require('./clickRegionsTab')
let { clickEditRegion } = require('./form/clickEditRegion')
let { editRegionName } = require('./editRegionName')
let { clickSaveRegion } = require('./form/clickSaveRegion')

/**
 * Build a scenario for adding a DOG's Location
 * @returns Scenario
 */
let buildEditRegion = async (regionName = [], newRegionName = []) => {

    // Scenarios
    const clickRegionsTabScenario = await clickRegionsTab(regionName)
    const clickEditRegionScenario = await clickEditRegion(regionName)
    const editRegionNameScenario = await editRegionName(newRegionName)
    const clickSaveRegionScenario = await clickSaveRegion()

    // Steps:
    // 1. Click Regions Tab
    // 2. Click Region 'regionName' edit button
    // 3. Enter the new Region name
    // 4. Click Save
    const steps = await appendScenarios([ clickRegionsTabScenario
                                        , clickEditRegionScenario
                                        , editRegionNameScenario
                                        , clickSaveRegionScenario ])

    const scenario = await ScenarioBuilder().setName(`Edit a  Region: ${regionName} to ${newRegionName}`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildEditRegion
}