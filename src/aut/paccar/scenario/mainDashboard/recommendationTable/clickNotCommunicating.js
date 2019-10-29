'use strict'

let { actions } = require('../../../../../core/action/actions')
let { mainDashboardUI } = require('../../../repo/mainDashboard/mainDashboardUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

/**
 * Build a scenario for clicking Not Communicating Filter
 * @returns Scenario
 */
let clickNotCommunicating = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await mainDashboardUI().buttonNotCommunicating)
                                  .setAction(await actions().click)
                                  .build())

    const scenario = await ScenarioBuilder().setName('Click Not Communicating')
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickNotCommunicating
}