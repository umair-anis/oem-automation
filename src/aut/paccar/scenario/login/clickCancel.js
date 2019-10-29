'use strict'

let { actions } = require('../../../../core/action/actions')
let { loginUi } = require('../../repo/login/loginUi')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

/**
 * Build a scenario for the cancel button
 * @returns Scenario
 */
let clickCancel = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await loginUi().buttonCancel)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName('Cancel Forgot Password')
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickCancel
}