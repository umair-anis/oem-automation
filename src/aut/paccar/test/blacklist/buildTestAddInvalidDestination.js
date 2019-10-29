'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickBlacklist } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickBlacklist')
const { validateCreateBlacklistError } = require('../../scenario/blacklist/validateCreateBlacklistError')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const { BlacklistBuilder } = require('../../data/blacklist/BlacklistBuilder')

const buildTestAddInvalidDestination = async (env = {}, credential = '') => {
  const browsers = await readBrowsers()
  const envName = env.name

  const blacklist = await BlacklistBuilder().setDestination(``)
    .build()

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickBlacklistScenario = await clickBlacklist()
  const validateCreateBlacklistErrorScenario = await validateCreateBlacklistError()
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickBlacklistScenario,
    validateCreateBlacklistErrorScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Blacklist - Add Empty Blacklist`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
    buildTestAddInvalidDestination
}
