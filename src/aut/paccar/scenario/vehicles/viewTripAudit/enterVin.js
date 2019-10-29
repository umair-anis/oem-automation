'use strict'

let { actions } = require('../../../../../core/action/actions')
let { vehiclesUI } = require('../../../repo/portalSideNavigation/vehicles/vehiclesUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let enterVin = async (vin = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await vehiclesUI().fieldTripVin)
                            .setAction(await actions().click)
                            .setData(vin)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Enter Trip Audit Vin: ${vin}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    enterVin
}