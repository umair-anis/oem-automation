'use strict'

let { actions } = require('../../../../../core/action/actions')
let { dealerOwnerGroupsUI } = require('../../../repo/portalSideNavigation/dealerOwnerGroups/dealerOwnerGroupsUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let clickSaveAddDOG = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await dealerOwnerGroupsUI().buttonSaveAddDOG)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName('Click Save Add Dealer Owner Group')
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickSaveAddDOG
}