'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickRoles } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickRoles')
const { buildSetDensityHigh } = require('../../scenario/roles/buildSetDensityHigh')
const { buildSetDensityLow } = require('../../scenario/roles/buildSetDensityLow')
const { validateTableDisplayed } = require('../../scenario/roles/validateTableDisplayed')
const { validateListCardsDisplayed } = require('../../scenario/roles/validateListCardsDisplayed')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const buildTestDensityDisplays = async (env = {}, credential = '') => {
  const browsers = await readBrowsers()
  const envName = env.name

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickRolesScenario = await clickRoles()

  // Validate Low Density Lists Cards
  const buildSetDensityLowScenario = await buildSetDensityLow()
  const validateListCardsDisplayedScenario = await validateListCardsDisplayed()

  // Validate High Density shows a Table
  const buildSetDensityHighScenario = await buildSetDensityHigh()
  const validateTableDisplayedScenario = await validateTableDisplayed()

  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickRolesScenario,
    buildSetDensityLowScenario,
    validateListCardsDisplayedScenario,
    buildSetDensityHighScenario,
    validateTableDisplayedScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Roles - High Density displays a table, Low density displayed a list of cards`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestDensityDisplays
}
