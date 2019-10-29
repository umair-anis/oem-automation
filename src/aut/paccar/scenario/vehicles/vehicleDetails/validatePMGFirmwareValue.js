'use strict'

let { actions } = require('../../../../../core/action/actions')
let { vehiclesUI } = require('../../../repo/portalSideNavigation/vehicles/vehiclesUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let { buildElement } = require('../../../../../core/element/buildElement')

let validatePMGFirmwareValue = async (firmwareVersion = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await vehiclesUI().pmgFirmwareData)
        .setAction(await actions().wait)
        .build())

    steps.push(await StepBuilder().setControl(await vehiclesUI().pmgFirmwareData)
        .setAction(await actions().contains)
        .setData([firmwareVersion])
        .build())

    const scenario = await ScenarioBuilder().setName(`Validate firmware Version: ${firmwareVersion}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    validatePMGFirmwareValue
}