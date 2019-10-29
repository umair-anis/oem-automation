'use strict'

let { actions } = require('../../../../../core/action/actions')
let { dealerOwnerGroupsUI } = require('../../../repo/portalSideNavigation/dealerOwnerGroups/dealerOwnerGroupsUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let enterGroupDescription = async (description = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await dealerOwnerGroupsUI().fieldGroupDescription)
                            .setAction(await actions().enter)
                            .setData(description)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Enter Group Description ${description}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    enterGroupDescription
}