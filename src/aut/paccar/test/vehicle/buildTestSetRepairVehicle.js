'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickVehicles } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickVehicles')
const { searchVehicleTable } = require('../../scenario/vehicles/searchVehicleTable')
const { clickVehicleLink } = require('../../scenario/vehicles/clickVehicleLink')
const { clickSetInRepair } = require('../../scenario/vehicles/vehicleDetails/clickSetInRepair')
const { clickRemoveInRepair } = require('../../scenario/vehicles/vehicleDetails/clickRemoveInRepair')
const { validateRecommendation } = require('../../scenario/vehicles/vehicleDetails/validateRecommendation')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const { VehicleBuilder } = require('../../data/vehicles/VehicleBuilder')

const buildTestSetRepairVehicle = async (env = {}, credential = '') => {
  const browsers = await readBrowsers()
  const envName = env.name

  const vehicle = await VehicleBuilder().setVin(`1FUJGECVXBSAV8592`)
    .build()

  const inRepair = [`In Repair`]
  const notInRepair = [`No Action`]

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickVehiclesScenario = await clickVehicles()
  const searchVehicleTableScenario = await searchVehicleTable(vehicle.vin)
  const clickVehicleLinkScenario = await clickVehicleLink(vehicle.vin)

  const clickSetInRepairScenario = await clickSetInRepair()
  const validateInRepair = await validateRecommendation(inRepair)

  const clickRemoveInRepairScenario = await clickRemoveInRepair()
  const validateNotInRepair = await validateRecommendation(notInRepair)

  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickVehiclesScenario,
    searchVehicleTableScenario,
    clickVehicleLinkScenario,
    clickSetInRepairScenario,
    validateInRepair,
    clickRemoveInRepairScenario,
    validateNotInRepair,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Vehicles - Set Vehicle In and Out of Repair: ${vehicle.vin}`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestSetRepairVehicle
}
