'use strict'

let { actions } = require('../../../../core/action/actions')
let { mapUI } = require('../../repo/map/mapUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

/**
 * Build a scenario for clicking the fullscreen
 * @returns Scenario
 */
let clickFullscreen = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await mapUI().buttonFullScreen)
                                  .setAction(await actions().click)
                                  .setStaticWait(1000)
                                  .build())

    const scenario = await ScenarioBuilder().setName('Click Fullscreen')
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickFullscreen
}