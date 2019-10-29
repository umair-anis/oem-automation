'use strict'

let { readUrls } = require('../../config/reader/readUrls')

let { appendScenarios } = require('../../../../core/scenario/appendScenarios')
let { openBrowser } = require('../browser/openBrowser')
let { clickLogin } = require('./clickLogin')
let { errorInvalidCredentials } = require('./errorInvalidCredentials')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')

/**
 * Build a scenario for opening a browser and logging in without credentials
 * @param {string} env 
 * @returns Scenario
 */
let buildInvalidLogin = async (env = '') => {

    const urls = await readUrls(env)
    const mainUrl = urls.url

    // Scenarios
    const openBrowserScenario = await openBrowser([ mainUrl ])
    const clickLoginScenario = await clickLogin()
    const errorInvalidCredentialsScenario = await errorInvalidCredentials()

    // Steps:
    // 1. Open the browser
    // 2. Click the login button
    // 3. Expect an error because no username or password was entered
    const steps = await appendScenarios([ openBrowserScenario
                                        , clickLoginScenario
                                        , errorInvalidCredentialsScenario ])

    const scenario = await ScenarioBuilder().setName('Open Browser and Login with Invalid Credentials')
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildInvalidLogin
}