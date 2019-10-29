'use strict'

let { actions } = require('../../../../../../core/action/actions')
let { dealerOwnerGroupsUI } = require('../../../../repo/portalSideNavigation/dealerOwnerGroups/dealerOwnerGroupsUI')
let { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../../core/step/StepBuilder')

let clickLocationsTab = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await dealerOwnerGroupsUI().tabLocations)
                            .setAction(await actions().waitUntilVisible)
                            .setStaticWait(1000)    // Page Load Blocking button
                            .build())

    steps.push(await StepBuilder().setControl(await dealerOwnerGroupsUI().tabLocations)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName('Click Edit Locations Tab')
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickLocationsTab
}