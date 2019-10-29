'use strict'

let { log } = require('../../../../core/logging/log')
let { readBrowsers } = require('../../config/reader/readBrowsers')
let { TestBuilder } = require('../../../../core/test/TestBuilder')

let { buildValidLogin } = require('../../scenario/login/buildValidLogin')
let { clickProfile } = require('../../scenario/profile/clickProfile')
let { clickHelp } = require('../../scenario/profile/clickHelp')
let { validateCurrentBreadcrumb } = require('../../scenario/breadcrumb/validateCurrentBreadcrumb')
let { closeBrowser } = require('../../scenario/browser/closeBrowser')

let buildTestValidateHelp = async (env = {}, account = '') => {

    const browsers = await readBrowsers()
    const envName = env.name

    const validLoginScenario = await buildValidLogin(envName, account)
    const clickProfileScenario = await clickProfile()
    const clickHelpScenario = await clickHelp()
    const validateCurrentBreadcrumbScenario = await validateCurrentBreadcrumb([`Dashboard`, `Help`])
    const closeBrowserScenario = await closeBrowser()

    const scenarios = [   validLoginScenario
                        , clickProfileScenario
                        , clickHelpScenario
                        , validateCurrentBreadcrumbScenario
                        , closeBrowserScenario ]

    const test = await TestBuilder().setLog(log)
                              .setName(`Testing Profile - Validate Help Page Loads`)
                              .setBrowsers(browsers)
                              .setScenarios(scenarios)
                              .setEnvironment(env)
                              .build()

    return Object.freeze(test)
}

module.exports = {
    buildTestValidateHelp
}