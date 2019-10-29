'use strict'

let { actions } = require('../../../../../../core/action/actions')
let { dealerOwnerGroupsUI } = require('../../../../repo/portalSideNavigation/dealerOwnerGroups/dealerOwnerGroupsUI')
let { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../../core/step/StepBuilder')

let clickRegionsTab = async () => {

    let steps = []
    steps.push(await StepBuilder().setControl(await dealerOwnerGroupsUI().tabRegions)
                            .setAction(await actions().waitUntilVisible)
                            .build())

    steps.push(await StepBuilder().setControl(await dealerOwnerGroupsUI().tabRegions)
                            .setAction(await actions().click)
                            .setStaticWait(1000)     // Tab Regions loading buffer
                            .build())

    const scenario = await ScenarioBuilder().setName('Click Edit Regions Tab')
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickRegionsTab
}