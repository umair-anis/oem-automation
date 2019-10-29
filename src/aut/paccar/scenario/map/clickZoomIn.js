'use strict'

let { actions } = require('../../../../core/action/actions')
let { mapUI } = require('../../repo/map/mapUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

/**
 * Build a scenario for clicking zoom in on the map
 * @returns Scenario
 */
let clickZoomIn = async () => {

    let steps = []
    steps.push(await StepBuilder().setControl(await mapUI().buttonZoomIn)
                                  .setAction(await actions().isDisplayed)
                                  .build())
    steps.push(await StepBuilder().setControl(await mapUI().buttonZoomIn)
                                  .setAction(await actions().click)
                                  .build())

    const scenario = await ScenarioBuilder().setName('Click Zoom In')
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickZoomIn
}