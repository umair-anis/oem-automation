'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickVehicles } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickVehicles')
const { searchVehicleTable } = require('../../scenario/vehicles/searchVehicleTable')
const { clickVehicleLink } = require('../../scenario/vehicles/clickVehicleLink')
const { clickAuthorizedSerivceCenters } = require('../../scenario/vehicles/vehicleDetails/clickAuthorizedSerivceCenters')
const { validateIsAuthorizedServiceCenter } = require('../../scenario/vehicles/vehicleDetails/validateIsAuthorizedServiceCenter')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const buildTestIsAuthorizedServiceCenter = async (env = {}, credential = '', vehicle = {}, serviceCenter = {}) => {
  const browsers = await readBrowsers()
  const envName = env.name

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickVehiclesScenario = await clickVehicles()
  const searchVehicleTableScenario = await searchVehicleTable(vehicle.vin)
  const clickVehicleLinkScenario = await clickVehicleLink(vehicle.vin)

  const clickAuthorizedSerivceCentersScenario = await clickAuthorizedSerivceCenters()
  const validateIsAuthorizedServiceCenterScenario = await validateIsAuthorizedServiceCenter(serviceCenter)
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickVehiclesScenario,
    searchVehicleTableScenario,
    clickVehicleLinkScenario,
    clickAuthorizedSerivceCentersScenario,
    validateIsAuthorizedServiceCenterScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Vehicles - Validate is a Authorized Service Center: ${serviceCenter.authorizedDealer} `)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestIsAuthorizedServiceCenter
}
