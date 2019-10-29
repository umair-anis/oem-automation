'use strict'

let { actions } = require('../../../../../../../core/action/actions')
let { dealerOwnerGroupsUI } = require('../../../../../repo/portalSideNavigation/dealerOwnerGroups/dealerOwnerGroupsUI')
let { ScenarioBuilder } = require('../../../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../../../core/step/StepBuilder')

let clickViewLocRegion = async (regionName = []) => {

    let steps = []

    // Wait for the first region in the cards to load
    steps.push(await StepBuilder().setControl(await dealerOwnerGroupsUI().formRegionsLoaded)
                            .setAction(await actions().isDisplayed)
                            .build())

    steps.push(await StepBuilder().setControl(await dealerOwnerGroupsUI().formRegions)
                            .setAction(await actions().clickFormEntryButton)
                            .setData([ [regionName, 2] ])
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click View Locations in Region: ${regionName}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickViewLocRegion
}