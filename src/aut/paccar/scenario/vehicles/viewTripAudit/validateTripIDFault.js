'use strict'

let { actions } = require('../../../../../core/action/actions')
let { vehiclesUI } = require('../../../repo/portalSideNavigation/vehicles/vehiclesUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let validateTripIDFault = async (text = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await vehiclesUI().textTripAuditFault)
                            .setAction(await actions().contains)
                            .setData(text)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Validate Trip ID Fault contains: ${text}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    validateTripIDFault
}