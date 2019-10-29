'use strict'

let { actions } = require('../../../../../../core/action/actions')
let { dealerOwnerGroupsUI } = require('../../../../repo/portalSideNavigation/dealerOwnerGroups/dealerOwnerGroupsUI')
let { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../../core/step/StepBuilder')

let validateLocationRemoved = async () => {

    let steps = []
    steps.push(await StepBuilder().setControl(await dealerOwnerGroupsUI().promptLocationRemoved)
                            .setAction(await actions().isDisplayed)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Validate a Location has been removed`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    validateLocationRemoved
}