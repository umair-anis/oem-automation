'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickTopTenFaults } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickTopTenFaults')
const { clickVehicleList } = require('../../scenario/topTenFaults/clickVehicleList')
const { isVehicleFilter } = require('../../scenario/vehicles/isVehicleFilter')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const buildTestTopTenFaults = async (env = {}, credential = '', topTenFault = {}) => {
  const browsers = await readBrowsers()
  const envName = env.name

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickTopTenFaultsScenario = await clickTopTenFaults()
  const clickVehicleListScenario = await clickVehicleList(topTenFault.dtc)
  const isVehicleFilterScenario = await isVehicleFilter(topTenFault.dtc)
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickTopTenFaultsScenario,
    clickVehicleListScenario,
    isVehicleFilterScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Top 10 Faults Table and its Vehicle Filters`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestTopTenFaults
}
