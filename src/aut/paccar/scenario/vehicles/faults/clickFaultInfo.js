'use strict'

let { actions } = require('../../../../../core/action/actions')
let { vehiclesUI } = require('../../../repo/portalSideNavigation/vehicles/vehiclesUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let { buildElement } = require('../../../../../core/element/buildElement')

let clickFaultInfo = async (code = []) => {

    let steps = []

    // Click the First Fault Log Details Icon
    const detailsButton = buildElement(`detailsButton`, `css`, `[aria-label="More Info"]`)
    steps.push(await StepBuilder().setControl(await detailsButton)
                            .setAction(await actions().isDisplayed)
                            .build())
    steps.push(await StepBuilder().setControl(await detailsButton)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Fault Info`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickFaultInfo
}