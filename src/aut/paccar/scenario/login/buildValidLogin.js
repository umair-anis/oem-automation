'use strict'

let { buildCredentialToAdd } = require('../../data/credential/buildCredentialToAdd')
let { readUrls } = require('../../config/reader/readUrls')
let { appendScenarios } = require('../../../../core/scenario/appendScenarios')
let { openBrowser } = require('../browser/openBrowser')
let { enterCredentials } = require('./enterCredentials')
let { clickLogin } = require('./clickLogin')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')

/**
 * Build a scenario for opening a browser and logging in
 * @param {string} env 
 * @returns Scenario
 */
let buildValidLogin = async (env = '', type = '') => {

    const credentials = await buildCredentialToAdd(env, type)
    const urls = await readUrls(env)
    const mainUrl = urls.url

    // Scenarios
    const openBrowserScenario = await openBrowser([ mainUrl ])
    const enterCredentialsScenario = await enterCredentials(credentials)
    const clickLoginScenario = await clickLogin()

    // Steps:
    // 1. Open the browser
    // 2. Enter a username and password
    // 3. Click the login button
    // 4. Wait a certain amount of time
    const steps = await appendScenarios([ openBrowserScenario
                                        , enterCredentialsScenario
                                        , clickLoginScenario ])

    const scenario = await ScenarioBuilder().setName('Open Browser, Login with Valid Credentials, Timer Wait to load portal')
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildValidLogin
}