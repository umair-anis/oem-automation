'use strict'

let { actions } = require('../../../../../../core/action/actions')
let { usersUI } = require('../../../../repo/portalSideNavigation/users/usersUI')
let { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../../core/step/StepBuilder')

let clickVehcileGroupCheckbox = async (vehcileGroup = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await usersUI().subscribedVehicleGroupsTable)
                            .setAction(await actions().waitUntilVisible)
                            .build())
    steps.push(await StepBuilder().setControl(await usersUI().subscribedVehicleGroupsTable)
                            .setAction(await actions().clickTableCheckbox)
                            .setData(vehcileGroup)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Subscribed Vehcile Group: ${vehcileGroup} checkbox`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickVehcileGroupCheckbox
}