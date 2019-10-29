'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickDashboard } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDashboard')
const { buildClickDealerFlag } = require('../../scenario/map/buildClickDealerFlag')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const buildTestClickDealerFlag = async (env = {}, credential = '') => {
  const browsers = await readBrowsers()
  const envName = env.name

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickDashboardScenario = await clickDashboard()
  const buildClickDealerFlagScenario = await buildClickDealerFlag()
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickDashboardScenario,
    buildClickDealerFlagScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Map - Click Dealer Flag`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestClickDealerFlag
}
