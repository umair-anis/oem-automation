'use strict'

let { actions } = require('../../../../core/action/actions')
let { loginUi } = require('../../repo/login/loginUi')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

/**
 * Build a scenario for the login button
 * @returns Scenario
 */
let clickLogin = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await loginUi().buttonSubmit)
                            .setAction(await actions().click)
                            .build())

    const scenario = await ScenarioBuilder().setName('Click Login')
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickLogin
}