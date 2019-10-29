'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickDashboard } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDashboard')
const { buildGeneralMapFunctionality } = require('../../scenario/map/buildGeneralMapFunctionality')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const buildTestMapFunctionality = async (env = {}, credential = '') => {
  const browsers = await readBrowsers()
  const envName = env.name

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickDashboardScenario = await clickDashboard()
  const buildGeneralMapFunctionalityScenario = await buildGeneralMapFunctionality()
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickDashboardScenario,
    buildGeneralMapFunctionalityScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Main Dashboard's Map Manipualtors`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestMapFunctionality
}
