'use strict'

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickDashboard } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDashboard')
const { clickViewStopNow } = require('../../scenario/mainDashboard/recommendationTable/clickViewStopNow')
const { clickViewServiceNow } = require('../../scenario/mainDashboard/recommendationTable/clickViewServiceNow')
const { clickViewServiceSoon } = require('../../scenario/mainDashboard/recommendationTable/clickViewServiceSoon')
const { clickViewInformational } = require('../../scenario/mainDashboard/recommendationTable/clickViewInformational')
const { clickViewNoAction } = require('../../scenario/mainDashboard/recommendationTable/clickViewNoAction')
const { clickViewNotCommunicating } = require('../../scenario/mainDashboard/recommendationTable/clickViewNotCommunicating')
const { clickViewInRepair } = require('../../scenario/mainDashboard/recommendationTable/clickViewInRepair')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const buildTestViewRecommendations = async (env = {}, credential = '') => {
  const browsers = await readBrowsers()
  const envName = env.name

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickDashboardScenario = await clickDashboard()
  const clickViewStopNowScenario = await clickViewStopNow()
  const clickViewServiceNowScenario = await clickViewServiceNow()
  const clickViewServiceSoonScenario = await clickViewServiceSoon()
  const clickViewInformationalScenario = await clickViewInformational()
  const clickViewNoActionScenario = await clickViewNoAction()
  const clickViewNotCommunicatingScenario = await clickViewNotCommunicating()
  const clickViewInRepairScenario = await clickViewInRepair()
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickDashboardScenario,
    clickViewStopNowScenario,
    clickViewServiceNowScenario,
    clickViewServiceSoonScenario,
    clickViewInformationalScenario,
    clickViewNoActionScenario,
    clickViewNotCommunicatingScenario,
    clickViewInRepairScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setBrowsers(browsers)
    .setEnvironment(env)
    .setLog(log)
    .setName(`Testing Recommendation Table View Buttons`)
    .setScenarios(scenarios)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestViewRecommendations
}
