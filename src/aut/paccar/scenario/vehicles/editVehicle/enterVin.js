'use strict'

let { actions } = require('../../../../../core/action/actions')
let { vehiclesUI } = require('../../../repo/portalSideNavigation/vehicles/vehiclesUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let enterVin = async (vin = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await vehiclesUI().fieldVin)
                            .setAction(await actions().enter)
                            .setData(vin)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Enter vin: ${vin}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    enterVin
}