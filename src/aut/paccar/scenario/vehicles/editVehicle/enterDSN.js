'use strict'

let { actions } = require('../../../../../core/action/actions')
let { vehiclesUI } = require('../../../repo/portalSideNavigation/vehicles/vehiclesUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let enterDSN = async (dsn = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await vehiclesUI().fieldDSN)
                            .setAction(await actions().enter)
                            .setData(dsn)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Enter DSN: ${dsn}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    enterDSN
}