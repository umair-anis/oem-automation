'use strict'

let { actions } = require('../../../../../../core/action/actions')
let { dealerOwnerGroupsUI } = require('../../../../repo/portalSideNavigation/dealerOwnerGroups/dealerOwnerGroupsUI')
let { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../../core/step/StepBuilder')

let verifyLocationInTable = async (location = [], isInTable = true) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await dealerOwnerGroupsUI().locationsTable)
                                        .setAction(await actions().isDisplayed)
                                        .build())

    // If isInTable is true, verify the location is in the table
    // Otherwise, verify it is not in the table
    if(isInTable){
        steps.push(await StepBuilder().setControl(await dealerOwnerGroupsUI().locationsTable)
                                        .setAction(await actions().searchInTable)
                                        .setData(location)
                                        .setStaticWait(3000)
                                        .build())
    } else {
        steps.push(await StepBuilder().setControl(await dealerOwnerGroupsUI().locationsTable)
                                        .setAction(await actions().searchNotInTable)
                                        .setData(location)
                                        .setStaticWait(3000)
                                        .build())
    }

    const scenario = await ScenarioBuilder().setName(`Verify Location: ${location} is in table: ${isInTable}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    verifyLocationInTable
}