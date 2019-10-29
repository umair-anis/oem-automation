'use strict'

let { actions } = require('../../../../../core/action/actions')
let { vehiclesUI } = require('../../../repo/portalSideNavigation/vehicles/vehiclesUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let selectOTAStatus = async (status = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await vehiclesUI().dropdownOTAStatus)
                            .setAction(await actions().select)
                            .setData(status)
                            .build())

    const scenario = await ScenarioBuilder().setName(`select OTA Status: ${status}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    selectOTAStatus
}