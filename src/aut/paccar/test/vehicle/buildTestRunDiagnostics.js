'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickVehicles } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickVehicles')
const { searchVehicleTable } = require('../../scenario/vehicles/searchVehicleTable')
const { clickVehicleLink } = require('../../scenario/vehicles/clickVehicleLink')
const { clickRunDiagnostics } = require('../../scenario/vehicles/vehicleDetails/clickRunDiagnostics')
const { validateDiagnostics } = require('../../scenario/vehicles/vehicleDetails/validateDiagnostics')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const { VehicleBuilder } = require('../../data/vehicles/VehicleBuilder')

const buildTestRunDiagnostics = async (env = {}, credential = '') => {
  const browsers = await readBrowsers()
  const envName = env.name

  const vehicle = await VehicleBuilder().setVin(`1NKZLK0X4GJ104582`)
    .build()

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickVehiclesScenario = await clickVehicles()
  const searchVehicleTableScenario = await searchVehicleTable(vehicle.vin)
  const clickVehicleLinkScenario = await clickVehicleLink(vehicle.vin)

  const clickRunDiagnosticsScenario = await clickRunDiagnostics()
  const validateDiagnosticsScenario = await validateDiagnostics()

  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickVehiclesScenario,
    searchVehicleTableScenario,
    clickVehicleLinkScenario,
    clickRunDiagnosticsScenario,
    validateDiagnosticsScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Vehicles - Run Diagnostics on Vehicle: ${vehicle.vin}`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestRunDiagnostics
}
