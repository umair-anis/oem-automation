'use strict'

let { actions } = require('../../../../../core/action/actions')
let { vehiclesUI } = require('../../../repo/portalSideNavigation/vehicles/vehiclesUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let selectTripEventType = async (type = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await vehiclesUI().dropdownEventType)
                            .setAction(await actions().select)
                            .setData(type)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Select Event Type: ${type}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    selectTripEventType
}