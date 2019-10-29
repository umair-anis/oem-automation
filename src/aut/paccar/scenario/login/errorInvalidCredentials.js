'use strict'

let { actions } = require('../../../../core/action/actions')
let { loginAlertsUI } = require('../../repo/alerts/loginAlertsUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

/**
 * Build a scenario for the cancel button
 * @returns Scenario
 */
let errorInvalidCredentials = async () => {

    let steps = []

    // Write an expectation for checking if an Error messeges exist
    steps.push(await StepBuilder().setControl(await loginAlertsUI().wrongPassworderrorMessageAlert)
                            .setAction(await actions().isDisplayed)
                            .build())

    const scenario = await ScenarioBuilder().setName('Expect an Error for Invalid Credentials')
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    errorInvalidCredentials
}