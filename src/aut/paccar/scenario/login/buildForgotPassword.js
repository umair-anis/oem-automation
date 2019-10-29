'use strict'

let { readUrls } = require('../../config/reader/readUrls')

let { createAddress } = require('../../../../core/action/createAddress')

let { appendScenarios } = require('../../../../core/scenario/appendScenarios')
let { openBrowser } = require('../browser/openBrowser')
let { clickForgotPassword } = require('./clickForgotPassword')
let { enterRecoveryEmail } = require('./enterRecoveryEmail')
let { clickSendEmail } = require('./clickSendEmail')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')

/**
 * Build a scenario for opening a browser and logging in
 * @param {string} env 
 * @returns Scenario
 */
let buildForgotPassword = async (env = '') => {

    const urls = await readUrls(env)
    const mainUrl = urls.url

    const email = [await createAddress()]

    // Scenarios
    const openBrowserScenario = await openBrowser([ mainUrl ])
    const clickForgotPasswordScenario = await clickForgotPassword()
    const enterRecoveryEmailScenario = await enterRecoveryEmail(email)
    const clickSendEmailScenario = await clickSendEmail()

    // Steps:
    // 1. Open the browser
    // 2. Go to Forgot Password Page
    // 3. Enter a recover email
    // 4. Send the email a recover password prompt
    const steps = await appendScenarios([ openBrowserScenario
                                        , clickForgotPasswordScenario
                                        , enterRecoveryEmailScenario
                                        , clickSendEmailScenario ])

    const scenario = await ScenarioBuilder().setName('Go to Forgot Password Page, Enter and submit a recovery email')
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildForgotPassword
}