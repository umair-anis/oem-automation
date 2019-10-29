'use strict'

let { actions } = require('../../../../../core/action/actions')
let { customersUI } = require('../../../repo/portalSideNavigation/customers/customersUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let clickTabManageVehicles = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await customersUI().tabManageVehicles)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName('Click Tab Manage Vehicles')
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickTabManageVehicles
}