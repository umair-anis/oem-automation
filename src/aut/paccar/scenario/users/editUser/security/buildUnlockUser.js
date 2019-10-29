'use strict'

let { appendScenarios } = require('../../../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')

let { clickSecurityTab } = require('./clickSecurityTab')
let { clickUnlock } = require('./clickUnlock')
let { validateReactivatedUser } = require('./validateReactivatedUser')

let buildUnlockUser = async (user = {}) => {

    // Scenarios
    const clickSecurityTabScenario = await clickSecurityTab()
    const clickUnlockScenario = await clickUnlock()
    const validateReactivatedUserScenario = await validateReactivatedUser()

    const scenarios = [   clickSecurityTabScenario
                        , clickUnlockScenario
                        , validateReactivatedUserScenario ]

    // Steps:
    // 1. Click Add User
    // 2. Fill out all of the form information
    // 3. Click Save
    const steps = await appendScenarios(scenarios)

    const scenario = await ScenarioBuilder().setName(`Unlock a User Account`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildUnlockUser
}