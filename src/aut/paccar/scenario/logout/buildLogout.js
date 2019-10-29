'use strict'

let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { appendScenarios } = require('../../../../core/scenario/appendScenarios')

let { clickProfile } = require('../profile/clickProfile')
let { clickLogout } = require('../profile/clickLogout')

/**
 * Build a scenario for clickLogout and clickProfile
 * @returns Scenario
 */
let buildLogout = async () => {

    let steps = []

    const clickProfileScenario = await clickProfile()
    const clickLogoutScenario = await clickLogout()

    // Steps:
    // 1. Click the Profile icon in the top-right
    // 2. Click Logout
    // 3. Wait for login screen
    steps = await appendScenarios([ clickProfileScenario
                                    , clickLogoutScenario])

    const scenario = ScenarioBuilder().setName('Logout of the Portal')
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    buildLogout
}