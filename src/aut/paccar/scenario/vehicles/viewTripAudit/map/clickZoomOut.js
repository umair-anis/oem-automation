'use strict'

let { actions } = require('../../../../../../core/action/actions')
let { vehiclesUI } = require('../../../../repo/portalSideNavigation/vehicles/vehiclesUI')
let { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../../core/step/StepBuilder')

let clickZoomOut = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await vehiclesUI().buttonZoomOut)
                            .setAction(await actions().click)
                            .setStaticWait(500)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Zoom Out`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickZoomOut
}