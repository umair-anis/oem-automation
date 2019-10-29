'use strict'

let { appendScenarios } = require('../../../../../../core/scenario/appendScenarios')
let { clickSecurityTab } = require('./clickSecurityTab')
let { enterChangeEmail } = require('./enterChangeEmail')
let { clickChangeEmail } = require('./clickChangeEmail')
let { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')

/**
 * Build a scenario for Changing an Email for security
 */
let changeEmail = async (email = []) => {

    // Scenarios
    const clickSecurityTabScenario = await clickSecurityTab()
    const enterChangeEmailScenario = await enterChangeEmail(email)
    const clickChangeEmailScenario = await clickChangeEmail()

    // Steps:
    // 1. Click Security Tab
    // 2. Enter a new Email to use
    // 3. Click Save
    const steps = await appendScenarios([ clickSecurityTabScenario
                                        , enterChangeEmailScenario
                                        , clickChangeEmailScenario ])

    const scenario = await ScenarioBuilder().setName(`Change Email to a New Email: ${email}`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    changeEmail
}