'use strict'

let { actions } = require('../../../../../../../core/action/actions')
let { dealerOwnerGroupsUI } = require('../../../../../repo/portalSideNavigation/dealerOwnerGroups/dealerOwnerGroupsUI')
let { ScenarioBuilder } = require('../../../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../../../core/step/StepBuilder')

let clickEditRegion = async (regionName = []) => {

    let steps = []

    // Wait for the first Region to be displayed
    steps.push(await StepBuilder().setControl(await dealerOwnerGroupsUI().formRegionsLoaded)
                            .setAction(await actions().isDisplayed)
                            .build())

    steps.push(await StepBuilder().setControl(await dealerOwnerGroupsUI().formRegions)
                            .setAction(await actions().clickFormEntryButton)
                            .setData([ [regionName, 1] ])
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Edit Region: ${regionName}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickEditRegion
}