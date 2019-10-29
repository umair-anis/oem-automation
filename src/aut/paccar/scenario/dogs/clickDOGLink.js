'use strict'

let { actions } = require('../../../../core/action/actions')
let { dealerOwnerGroupsUI } = require('../../repo/portalSideNavigation/dealerOwnerGroups/dealerOwnerGroupsUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let clickDOGLink = async (name = []) => {

    let steps = []
    steps.push(await StepBuilder().setControl(await dealerOwnerGroupsUI().table)
                            .setAction(await actions().enterFilterResultCustomSelect)
                            .setData([ name ])
                            .build())

    steps.push(await StepBuilder().setControl(await dealerOwnerGroupsUI().table)
                            .setAction(await actions().clickTableLink)
                            .setData(name)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click DOG Table Link: ${name}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickDOGLink
}