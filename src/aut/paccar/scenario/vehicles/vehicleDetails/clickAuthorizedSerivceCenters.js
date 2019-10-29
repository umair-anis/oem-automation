'use strict'

let { actions } = require('../../../../../core/action/actions')
let { vehiclesUI } = require('../../../repo/portalSideNavigation/vehicles/vehiclesUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let clickAuthorizedSerivceCenters = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await vehiclesUI().buttonVehicleDetailsOptions)
                            .setAction(await actions().click)
                            .build())

    steps.push(await StepBuilder().setControl(await vehiclesUI().buttonAuthorizedServiceCenters)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Authorized Service Centers`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickAuthorizedSerivceCenters
}