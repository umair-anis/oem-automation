'use strict'

let { actions } = require('../../../../../../core/action/actions')
let { vehiclesUI } = require('../../../../repo/portalSideNavigation/vehicles/vehiclesUI')
let { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../../core/step/StepBuilder')

let clickZoomIn = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await vehiclesUI().buttonZoomIn)
                            .setAction(await actions().click)
                            .setStaticWait(500)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Zoom In`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickZoomIn
}