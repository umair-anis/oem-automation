'use strict'

let { actions } = require('../../../../../../core/action/actions')
let { dealerOwnerGroupsUI } = require('../../../../repo/portalSideNavigation/dealerOwnerGroups/dealerOwnerGroupsUI')
let { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../../core/step/StepBuilder')

let clickAssignLocations = async (location = []) => {

    let steps = []

    // Wait for the Assign Locations table to load
    steps.push(await StepBuilder().setControl(await dealerOwnerGroupsUI().assignLocationsTableLoaded)
                            .setAction(await actions().waitUntilVisible)
                            .build())

    steps.push(await StepBuilder().setControl(await dealerOwnerGroupsUI().assignLocationsTable)
                            .setAction(await actions().clickTableCheckbox)
                            .setData(location)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Search for Assign Locations: ${location}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickAssignLocations
}