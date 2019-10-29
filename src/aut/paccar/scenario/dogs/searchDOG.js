'use strict'

let { actions } = require('../../../../core/action/actions')
let { dealerOwnerGroupsUI } = require('../../repo/portalSideNavigation/dealerOwnerGroups/dealerOwnerGroupsUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let searchDOG = async (search = []) => {

    let steps = []
    steps.push(await StepBuilder().setControl(await dealerOwnerGroupsUI().tableFilter)
                            .setAction(await actions().enterFilterResult)
                            .setData([search])
                            .build())

    const scenario = await ScenarioBuilder().setName(`Search DOG Table: ${search}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    searchDOG
}