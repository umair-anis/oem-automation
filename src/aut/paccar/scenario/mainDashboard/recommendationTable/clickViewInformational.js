'use strict'

let { actions } = require('../../../../../core/action/actions')
let { mainDashboardUI } = require('../../../repo/mainDashboard/mainDashboardUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let clickViewInformational = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await mainDashboardUI().buttonViewInformational)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click View Informational`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickViewInformational
}