'use strict'

let { actions } = require('../../../../../../../core/action/actions')
let { usersUI } = require('../../../../../repo/portalSideNavigation/users/usersUI')
let { ScenarioBuilder } = require('../../../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../../../core/step/StepBuilder')

let clickVehicleRefresh = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await usersUI().buttonRefresh)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Vehicle Table Refresh`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickVehicleRefresh
}