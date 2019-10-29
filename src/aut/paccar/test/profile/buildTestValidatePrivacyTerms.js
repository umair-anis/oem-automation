'use strict'

let { log } = require('../../../../core/logging/log')
let { readBrowsers } = require('../../config/reader/readBrowsers')
let { TestBuilder } = require('../../../../core/test/TestBuilder')

let { buildValidLogin } = require('../../scenario/login/buildValidLogin')
let { clickProfile } = require('../../scenario/profile/clickProfile')
let { clickPrivacyAndTerms } = require('../../scenario/profile/clickPrivacyAndTerms')
let { buildValidatePrivacyTerms } = require('../../scenario/profile/privacyAndTerms/buildValidatePrivacyTerms')
let { closeBrowser } = require('../../scenario/browser/closeBrowser')

let buildTestValidatePrivacyTerms = async (env = {}, account = '') => {

    const browsers = await readBrowsers()
    const envName = env.name

    const validLoginScenario = await buildValidLogin(envName, account)
    const clickProfileScenario = await clickProfile()
    const clickPrivacyAndTermsScenario = await clickPrivacyAndTerms()
    const buildValidatePrivacyTermsScenario = await buildValidatePrivacyTerms()
    const closeBrowserScenario = await closeBrowser()

    const scenarios = [   validLoginScenario
                        , clickProfileScenario
                        , clickPrivacyAndTermsScenario
                        , buildValidatePrivacyTermsScenario
                        , closeBrowserScenario ]

    const test = await TestBuilder().setLog(log)
                              .setName(`Testing Profile - Validate Privacy & Terms`)
                              .setBrowsers(browsers)
                              .setScenarios(scenarios)
                              .setEnvironment(env)
                              .build()

    return Object.freeze(test)
}

module.exports = {
  buildTestValidatePrivacyTerms
}
