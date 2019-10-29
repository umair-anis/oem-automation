'use strict'

let { log } = require('../../../../core/logging/log')
let { readBrowsers } = require('../../config/reader/readBrowsers')
let { TestBuilder } = require('../../../../core/test/TestBuilder')

let { buildValidLogin } = require('../../scenario/login/buildValidLogin')
let { clickProfile } = require('../../scenario/profile/clickProfile')
let { clickReleaseNotes } = require('../../scenario/profile/clickReleaseNotes')
let { validateReleaseNotes } = require('../../scenario/profile/releaseNotes/validateReleaseNotes')
let { closeBrowser } = require('../../scenario/browser/closeBrowser')

let buildTestValidateReleaseNotes = async (env = {}, account = '') => {

    const browsers = await readBrowsers()
    const envName = env.name

    const validLoginScenario = await buildValidLogin(envName, account)
    const clickProfileScenario = await clickProfile()
    const clickReleaseNotesScenario = await clickReleaseNotes()
    const validateReleaseNotesScenario = await validateReleaseNotes()
    const closeBrowserScenario = await closeBrowser()

    const scenarios = [   validLoginScenario
                        , clickProfileScenario
                        , clickReleaseNotesScenario
                        , validateReleaseNotesScenario
                        , closeBrowserScenario ]

    const test = await TestBuilder().setLog(log)
                              .setName(`Testing Profile - Validate Release Notes`)
                              .setBrowsers(browsers)
                              .setScenarios(scenarios)
                              .setEnvironment(env)
                              .build()

    return Object.freeze(test)
}

module.exports = {
  buildTestValidateReleaseNotes
}
