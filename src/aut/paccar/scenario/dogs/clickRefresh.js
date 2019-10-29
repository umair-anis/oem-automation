'use strict'

let { actions } = require('../../../../core/action/actions')
let { dealerOwnerGroupsUI } = require('../../repo/portalSideNavigation/dealerOwnerGroups/dealerOwnerGroupsUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let clickRefresh = async () => {

    let steps = []
    steps.push(await StepBuilder().setControl(await dealerOwnerGroupsUI().buttonRefresh)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName('Click Refresh')
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickRefresh
}