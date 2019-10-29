'use strict'

let { actions } = require('../../../../../../../core/action/actions')
let { dealerOwnerGroupsUI } = require('../../../../../repo/portalSideNavigation/dealerOwnerGroups/dealerOwnerGroupsUI')
let { ScenarioBuilder } = require('../../../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../../../core/step/StepBuilder')

let clickDeleteRegion = async (region = {}) => {

    let steps = []

    // Wait for the Region's Cards to load - Waiting for the first region to load
    steps.push(await StepBuilder().setControl(await dealerOwnerGroupsUI().formRegionsLoaded)
                            .setAction(await actions().isDisplayed)
                            .build())

    steps.push(await StepBuilder().setControl(await dealerOwnerGroupsUI().formRegions)
                            .setAction(await actions().clickFormEntryButton)
                            .setData([ [region.name, 3] ])
                            .build())

    steps.push(await StepBuilder().setControl(await dealerOwnerGroupsUI().buttonConfirmDeleteRegion)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Delete Region: ${region.name}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickDeleteRegion
}