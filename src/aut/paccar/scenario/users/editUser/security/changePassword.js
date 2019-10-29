'use strict'

let { appendScenarios } = require('../../../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../../../core/scenario/ScenarioBuilder')

let { enterCurrentPassword } = require('./enterCurrentPassword')
let { enterPasswords } = require('../../addUserForm/enterPasswords')
let { clickChangePassword } = require('./clickChangePassword')

/**
 * Build a scenario for Changing an Email for security
 */
let changePassword = async () => {

    const currentPassword = ['Password']
    const newPassword = ['Password1']
    const confirmPassword = ['Password2']

    // Scenarios
    const enterCurrentPasswordScenario = await enterCurrentPassword(currentPassword)
    const enterPasswordsScenario = await enterPasswords(newPassword, confirmPassword)
    const clickChangePasswordScenario = await clickChangePassword()

    // Steps:
    // 1. Click Security Tab
    // 2. Enter a new Email to use
    // 3. Click Save
    const steps = await appendScenarios([ enterCurrentPasswordScenario
                                        , enterPasswordsScenario
                                        , clickChangePasswordScenario ])

    const scenario = await ScenarioBuilder().setName(`Change Password: ${currentPassword} to ${newPassword}`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    changePassword
}