'use strict'

let { actions } = require('../../../../../core/action/actions')
let { usersUI } = require('../../../repo/portalSideNavigation/users/usersUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let enterPasswords = async (newPassword = [], confirmPassword = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await usersUI().fieldNewPassword)
                            .setAction(await actions().enter)
                            .setData(newPassword)
                            .build())

    steps.push(await StepBuilder().setControl(await usersUI().fieldConfirmPassword)
                            .setAction(await actions().enter)
                            .setData(confirmPassword)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Enter Test Passwords: ${newPassword}, ${confirmPassword}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    enterPasswords
}