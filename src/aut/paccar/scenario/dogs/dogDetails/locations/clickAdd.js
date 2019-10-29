'use strict'

let { actions } = require('../../../../../../core/action/actions')
let { dealerOwnerGroupsUI } = require('../../../../repo/portalSideNavigation/dealerOwnerGroups/dealerOwnerGroupsUI')
let { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../../core/step/StepBuilder')

let clickAdd = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await dealerOwnerGroupsUI().buttonAdd)
                            .setAction(await actions().click)
                            .build())

    steps.push(await StepBuilder().setControl(await dealerOwnerGroupsUI().promptLocationAdded)
                            .setAction(await actions().isDisplayed)
                            .build())

    const scenario = await ScenarioBuilder().setName('Click Add, Validate Prompt Displays')
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickAdd
}