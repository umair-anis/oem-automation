'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickVehicles } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickVehicles')
const { validateDashboardTitle } = require('../../scenario/ota/validateDashboardTitle')
const { switchHealthSoftwareSlider } = require('../../scenario/ota/switchHealthSoftwareSlider')
const { searchVehicleTable } = require('../../scenario/vehicles/searchVehicleTable')
const { clickVehicleLink } = require('../../scenario/vehicles/clickVehicleLink')
const { validateSoftwareInformation } = require('../../scenario/vehicles/vehicleDetails/validateSoftwareInformation')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const { VehicleBuilder } = require('../../data/vehicles/VehicleBuilder')

const buildTestVehicleSoftware = async (env = {}, credential = '') => {
  const browsers = await readBrowsers()
  const envName = env.name

  const vehicle = await VehicleBuilder().setVin(`1NKZLK0X4GJ104582`)
    .build()

  const titleSoftware = [`Software Dashboard`]
  const softwareInformation = [`Update Available`]

  // Switch to Vehicle Software
  const validLoginScenario = await buildValidLogin(envName, credential)
  const switchHealthSoftwareSliderScenario = await switchHealthSoftwareSlider()
  const validteIsSoftwareTitle = await validateDashboardTitle(titleSoftware)
  const clickVehiclesScenario = await clickVehicles()

  const searchVehicleTableScenario = await searchVehicleTable(vehicle.vin)
  const clickVehicleLinkScenario = await clickVehicleLink(vehicle.vin)
  const validateSoftwareInformationScenario = await validateSoftwareInformation(softwareInformation)
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    switchHealthSoftwareSliderScenario,
    validteIsSoftwareTitle,
    clickVehiclesScenario,

    searchVehicleTableScenario,
    clickVehicleLinkScenario,
    validateSoftwareInformationScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing OTA - Vehicle Software is Up To Date`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestVehicleSoftware
}
