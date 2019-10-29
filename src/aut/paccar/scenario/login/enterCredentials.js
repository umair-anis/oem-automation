'use strict'

let { actions } = require('../../../../core/action/actions')
let { loginUi } = require('../../repo/login/loginUi')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

/**
 * Build a scenario for logging in a list of credentials
 * @param {List of models containing {username, password}} credentials 
 * @returns Scenario
 */
let enterCredentials = async (credentials = []) => {

    let steps = []
    let userNames = []
    let passwords = []

    await credentials.forEach(credential => {
        userNames.push(credential.username)
        passwords.push(credential.password)
    })

    steps.push(await StepBuilder().setControl(await loginUi().editUser)
                            .setAction(await actions().enter)
                            .setData(userNames)
                            .build())

    steps.push(await StepBuilder().setControl(await loginUi().editPassword)
                            .setAction(await actions().enter)
                            .setData(passwords)
                            .build())

    const scenario = await ScenarioBuilder().setName('Enter Login Credentials')
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    enterCredentials
}