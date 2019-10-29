'use strict'

let { actions } = require('../../../../../../core/action/actions')
let { dealerOwnerGroupsUI } = require('../../../../repo/portalSideNavigation/dealerOwnerGroups/dealerOwnerGroupsUI')
let { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../../core/step/StepBuilder')

let verifyLocationNotInRegionsTable = async (locationName = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await dealerOwnerGroupsUI().assignLocationsTable)
                            .setAction(await actions().searchNotInTable)
                            .setData(locationName)
                            .setStaticWait(2000)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Verify Location: ${locationName} is not in Region's Assign Location Table`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    verifyLocationNotInRegionsTable
}