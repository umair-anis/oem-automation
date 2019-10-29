'use strict'

let { actions } = require('../../../../../../core/action/actions')
let { dealerOwnerGroupsUI } = require('../../../../repo/portalSideNavigation/dealerOwnerGroups/dealerOwnerGroupsUI')
let { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../../core/step/StepBuilder')

let editRegionName = async (regionName = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await dealerOwnerGroupsUI().fieldEditRegionName)
                            .setAction(await actions().enter)
                            .setData(regionName)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Edit Region Name: ${regionName}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    editRegionName
}