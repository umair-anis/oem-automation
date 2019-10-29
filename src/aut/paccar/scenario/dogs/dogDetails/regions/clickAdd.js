'use strict'

let { actions } = require('../../../../../../core/action/actions')
let { dealerOwnerGroupsUI } = require('../../../../repo/portalSideNavigation/dealerOwnerGroups/dealerOwnerGroupsUI')
let { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../../core/step/StepBuilder')

let clickAdd = async () => {

    let steps = []
    steps.push(await StepBuilder().setControl(await dealerOwnerGroupsUI().buttonAddRegion)
                            .setAction(await actions().waitUntilVisible)
                            .build())

    steps.push(await StepBuilder().setControl(await dealerOwnerGroupsUI().buttonAddRegion)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName('Click Add Region Button')
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickAdd
}