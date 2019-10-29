'use strict'

let { actions } = require('../../../../../core/action/actions')
let { mainDashboardUI } = require('../../../repo/mainDashboard/mainDashboardUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

/**
 * Build a scenario for clicking Service Now Filter
 * @returns Scenario
 */
let clickServiceNow = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await mainDashboardUI().buttonServiceNow)
                                  .setAction(await actions().click)
                                  .build())

    const scenario = await ScenarioBuilder().setName('Click Service Now')
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickServiceNow
}