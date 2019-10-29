'use strict'

let { actions } = require('../../../../../../core/action/actions')
let { dealerOwnerGroupsUI } = require('../../../../repo/portalSideNavigation/dealerOwnerGroups/dealerOwnerGroupsUI')
let { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../../core/step/StepBuilder')

let enterRegionName = async (regionName = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await dealerOwnerGroupsUI().fieldAddRegionName)
                            .setAction(await actions().enter)
                            .setData(regionName)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Enter Region Name: ${regionName}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    enterRegionName
}