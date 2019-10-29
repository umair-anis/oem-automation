'use strict'

let { actions } = require('../../../../../../core/action/actions')
let { usersUI } = require('../../../../repo/portalSideNavigation/users/usersUI')
let { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../../core/step/StepBuilder')

let clickVehicleGroupOptions = async (groupName = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await usersUI().vehicleGroupsTable)
                            .setAction(await actions().clickTableEnd)
                            .setStaticWait(3000)
                            .setData(groupName)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Vehicle Group: ${groupName} More Options`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickVehicleGroupOptions
}