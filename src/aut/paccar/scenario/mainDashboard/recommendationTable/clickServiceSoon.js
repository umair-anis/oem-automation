'use strict'

let { actions } = require('../../../../../core/action/actions')
let { mainDashboardUI } = require('../../../repo/mainDashboard/mainDashboardUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

/**
 * Build a scenario for clicking Service Soon Filter
 * @returns Scenario
 */
let clickServiceSoon = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await mainDashboardUI().buttonServiceSoon)
                                  .setAction(await actions().click)
                                  .build())

    const scenario = await ScenarioBuilder().setName('Click Service Soon')
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickServiceSoon
}