'use strict'

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickDashboard } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDashboard')
const { clickStopNow } = require('../../scenario/mainDashboard/recommendationTable/clickStopNow')
const { clickServiceNow } = require('../../scenario/mainDashboard/recommendationTable/clickServiceNow')
const { clickServiceSoon } = require('../../scenario/mainDashboard/recommendationTable/clickServiceSoon')
const { clickInformational } = require('../../scenario/mainDashboard/recommendationTable/clickInformational')
const { clickNoAction } = require('../../scenario/mainDashboard/recommendationTable/clickNoAction')
const { clickNotCommunicating } = require('../../scenario/mainDashboard/recommendationTable/clickNotCommunicating')
const { clickInRepair } = require('../../scenario/mainDashboard/recommendationTable/clickInRepair')
const { isVehicleFilter } = require('../../scenario/vehicles/isVehicleFilter')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const buildTestVehicleRecommendation = async (env = {}, credential = '') => {
  const browsers = await readBrowsers()
  const envName = env.name

  const sideLinks = [clickStopNow, clickServiceNow, clickServiceSoon, clickInformational, clickNoAction, clickNotCommunicating, clickInRepair]
  const filters = [`Stop Now`, `Service Now`, `Service Soon`, `Informational`, `No Action`, `Not Communicating`, `In Repair`]

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickDashboardScenario = await clickDashboard()
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickDashboardScenario ]

  for(var i = 0; i < sideLinks.length; i++){
      const clickRecommendation = await sideLinks[i]()
      const isVehicleFilterScenario = await isVehicleFilter([filters[i]])

      scenarios.push(clickRecommendation)
      scenarios.push(isVehicleFilterScenario)
      scenarios.push(clickDashboardScenario)
  }

  scenarios.push(closeBrowserScenario)

  const test = await TestBuilder().setBrowsers(browsers)
    .setEnvironment(env)
    .setLog(log)
    .setName(`Testing Recommendation Table Links`)
    .setScenarios(scenarios)
    .build()

  return Object.freeze(test)
}

module.exports = {
    buildTestVehicleRecommendation
}
