'use strict'

let { actions } = require('../../../../../../../core/action/actions')
let { dealerOwnerGroupsUI } = require('../../../../../repo/portalSideNavigation/dealerOwnerGroups/dealerOwnerGroupsUI')
let { ScenarioBuilder } = require('../../../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../../../core/step/StepBuilder')

let clickSaveRegion = async () => {

    let steps = []
    steps.push(await StepBuilder().setControl(await dealerOwnerGroupsUI().buttonSaveRegion)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName('Click Save Region Button')
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickSaveRegion
}