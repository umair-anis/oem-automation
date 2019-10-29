'use strict'

let { actions } = require('../../../../core/action/actions')
let { loginUi } = require('../../repo/login/loginUi')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

/**
 * Build a scenario for entering a recover email
 * @returns Scenario
 */
let enterRecoveryEmail = async (recEmails = []) => {

    let steps = []

    steps.push(StepBuilder().setControl(await loginUi().editEmail)
                            .setAction(await actions().enter)
                            .setData(recEmails)
                            .build())

    const scenario = await ScenarioBuilder().setName('Enter Recovery Email Credentials')
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    enterRecoveryEmail
}