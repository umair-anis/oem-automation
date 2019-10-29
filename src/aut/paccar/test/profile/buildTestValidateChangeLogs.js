'use strict'

let { log } = require('../../../../core/logging/log')
let { readBrowsers } = require('../../config/reader/readBrowsers')
let { TestBuilder } = require('../../../../core/test/TestBuilder')

let { buildValidLogin } = require('../../scenario/login/buildValidLogin')
let { clickProfile } = require('../../scenario/profile/clickProfile')
let { clickChangeLogs } = require('../../scenario/profile/clickChangeLogs')
let { buildValidateLogs } = require('../../scenario/profile/changeLogs/buildValidateLogs')
let { closeBrowser } = require('../../scenario/browser/closeBrowser')

let buildTestValidateChangeLogs = async (env = {}, account = '') => {

    const browsers = await readBrowsers()
    const envName = env.name

    const validLoginScenario = await buildValidLogin(envName, account)
    const clickProfileScenario = await clickProfile()
    const clickChangeLogsScenario = await clickChangeLogs()
    const buildValidateLogsScenario = await buildValidateLogs()
    const closeBrowserScenario = await closeBrowser()

    const scenarios = [   validLoginScenario
                        , clickProfileScenario
                        , clickChangeLogsScenario
                        , buildValidateLogsScenario
                        , closeBrowserScenario ]

    const test = await TestBuilder().setLog(log)
                              .setName(`Testing Profile - Validate Change Logs`)
                              .setBrowsers(browsers)
                              .setScenarios(scenarios)
                              .setEnvironment(env)
                              .build()

    return Object.freeze(test)
}

module.exports = {
  buildTestValidateChangeLogs
}
