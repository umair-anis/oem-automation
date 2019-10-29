'use strict'

let { appendScenarios } = require('../../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')

let { clickUserCheckBox } = require('../clickUserCheckBox')
let { clickTrash } = require('./clickTrash')

/**
 * Build a scenario for Adding a User
 */
let buildDeleteUser = async (user = {}) => {

    // Scenarios
    const clickUserCheckBoxScenario = await clickUserCheckBox(user.email)
    const clickTrashScenario = await clickTrash()

    // Steps:
    // 1. Click the user's checkbox
    // 2. Click the trash button
    const steps = await appendScenarios([ clickUserCheckBoxScenario
                                        , clickTrashScenario ])
                                        
    const scenario = await ScenarioBuilder().setName(`Delete User with email: ${user.email}`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildDeleteUser
}