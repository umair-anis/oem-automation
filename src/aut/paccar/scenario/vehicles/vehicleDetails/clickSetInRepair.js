'use strict'

let { actions } = require('../../../../../core/action/actions')
let { vehiclesUI } = require('../../../repo/portalSideNavigation/vehicles/vehiclesUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let clickSetInRepair = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await vehiclesUI().buttonVehicleDetailsOptions)
                            .setAction(await actions().click)
                            .build())

    steps.push(await StepBuilder().setControl(await vehiclesUI().buttonSetInRepair)
                            .setAction(await actions().click)
                            .build())

    steps.push(await StepBuilder().setControl(await vehiclesUI().buttonConfirmButton)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Set in Repair`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickSetInRepair
}