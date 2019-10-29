'use strict'

let { actions } = require('../../../../../core/action/actions')
let { mainDashboardUI } = require('../../../repo/mainDashboard/mainDashboardUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

/**
 * Build a scenario for clicking In-Repair Filter
 * @returns Scenario
 */
let clickInRepair = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await mainDashboardUI().buttonInRepair)
                                  .setAction(await actions().click)
                                  .build())

    const scenario = await ScenarioBuilder().setName('Click In-Repair Filter')
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickInRepair
}