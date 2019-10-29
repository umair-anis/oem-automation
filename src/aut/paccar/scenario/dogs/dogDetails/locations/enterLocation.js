'use strict'

let { actions } = require('../../../../../../core/action/actions')
let { dealerOwnerGroupsUI } = require('../../../../repo/portalSideNavigation/dealerOwnerGroups/dealerOwnerGroupsUI')
let { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../../core/step/StepBuilder')

let enterLocation = async (location = []) => {

    let steps = []
    steps.push(await StepBuilder().setControl(await dealerOwnerGroupsUI().fieldLocation)
                            .setAction(await actions().enter)
                            .setData(location)
                            .build())

    // Click the first dropdown option because we already know the location name passed in 'location' and will be the
    // first in the dropdown
    steps.push(await StepBuilder().setControl(await dealerOwnerGroupsUI().dropdownFirst)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Enter ${location} as a new location`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    enterLocation
}