'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickVehicles } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickVehicles')
const { searchVehicleTable } = require('../../scenario/vehicles/searchVehicleTable')
const { clickVehicleLink } = require('../../scenario/vehicles/clickVehicleLink')
const { clickDSNLink } = require('../../scenario/vehicles/vehicleDetails/clickDSNLink')
const { scrapeVehicleData } = require('../../scenario/vehicles/vehicleDetails/scrapeVehicleData')
const { clickActionsDropdown } = require('../../scenario/devices/deviceDetails/clickActionsDropdown')
const { compareDeviceVersion } = require('../../scenario/devices/deviceDetails/compareDeviceVersion')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const { VehicleBuilder } = require('../../data/vehicles/VehicleBuilder')
const { DeviceBuilder } = require('../../data/devices/DeviceBuilder')

const buildTestVehicleDevice = async (env = {}, credential = '') => {
  const browsers = await readBrowsers()
  const envName = env.name

  const vehicle = await VehicleBuilder().setVin(`1FUBGEDV5GLHC5813`)
    .build()



  const device = await DeviceBuilder().setDSN(`7568882`)
    .build()

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickVehiclesScenario = await clickVehicles()
  const searchVehicleTableScenario = await searchVehicleTable(vehicle.vin)
  const clickVehicleLinkScenario = await clickVehicleLink(vehicle.vin)
  const scrapeVehicleDataScenario = await scrapeVehicleData()
  const clickDSNLinkScenario = await clickDSNLink()
  const compareDeviceVersionScenario = await compareDeviceVersion()
  // Verify that Device Details are displayed
  const clickActionsDropdownScenario = await clickActionsDropdown()
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickVehiclesScenario,
    searchVehicleTableScenario,
    clickVehicleLinkScenario,
    scrapeVehicleDataScenario,
    clickDSNLinkScenario,
    compareDeviceVersionScenario,
    clickActionsDropdownScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Vehicles - Vehicle: ${vehicle.vin} Vehicle Device: ${device.dsn} Displays`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestVehicleDevice
}
