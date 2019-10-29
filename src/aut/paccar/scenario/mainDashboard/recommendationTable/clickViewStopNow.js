'use strict'

let { actions } = require('../../../../../core/action/actions')
let { mainDashboardUI } = require('../../../repo/mainDashboard/mainDashboardUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let clickViewStopNow = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await mainDashboardUI().buttonViewStopNow)
                            .setAction(await actions().waitUntilPageLoaded)
                            .build())
    steps.push(await StepBuilder().setControl(await mainDashboardUI().buttonViewStopNow)
                            .setAction(await actions().isDisplayed)
                            .build())
    steps.push(await StepBuilder().setControl(await mainDashboardUI().buttonViewStopNow)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click View Stop Now`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickViewStopNow
}