'use strict'

let { actions } = require('../../../../../../core/action/actions')
let { dealerOwnerGroupsUI } = require('../../../../repo/portalSideNavigation/dealerOwnerGroups/dealerOwnerGroupsUI')
let { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../../core/step/StepBuilder')

let alertCannotDeleteRegion = async () => {

    let steps = []
    steps.push(await StepBuilder().setControl(await dealerOwnerGroupsUI().alertCannotDeleteRegion)
                            .setAction(await actions().isDisplayed)
                            .build())

    const scenario = await ScenarioBuilder().setName('Check if Alert "Cannot delete region" is present')
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    alertCannotDeleteRegion
}