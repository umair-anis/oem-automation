'use strict'

let { actions } = require('../../../../../../core/action/actions')
let { dealerOwnerGroupsUI } = require('../../../../repo/portalSideNavigation/dealerOwnerGroups/dealerOwnerGroupsUI')
let { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../../core/step/StepBuilder')

let deleteLocation = async (search = []) => {

    let steps = []
    steps.push(await StepBuilder().setControl(await dealerOwnerGroupsUI().locationsTable)
                            .setAction(await actions().isDisplayed)
                            .build())

    steps.push(await StepBuilder().setControl(await dealerOwnerGroupsUI().locationsTable)
                            .setAction(await actions().clickTableEnd)
                            .setData(search)
                            .setStaticWait(3000)
                            .build())

    steps.push(await StepBuilder().setControl(await dealerOwnerGroupsUI().buttonRemove)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Delete Location: ${search}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    deleteLocation
}