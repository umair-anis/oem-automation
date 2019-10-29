'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickVehicles } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickVehicles')
const { buildAddToVehicleGroup } = require('../../scenario/vehicles/addToVehicleGroup/buildAddToVehicleGroup')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const { VehicleBuilder } = require('../../data/vehicles/VehicleBuilder')
const { VehicleGroupBuilder } = require('../../data/vehicles/VehicleGroupBuilder')

const buildTestAddVehicleToGroup = async (env = {}, credential = '') => {
  const browsers = await readBrowsers()
  const envName = env.name

  const vehicle = await VehicleBuilder().setVin(`1HSJKTKR2CJ627056`)
    .build()

  const vehicleGroup = await VehicleGroupBuilder().setName(`UserGroup7315`)
    .build()

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickVehiclesScenario = await clickVehicles()
  const buildAddToVehicleGroupScenario = await buildAddToVehicleGroup(vehicle.vin, vehicleGroup.name)
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickVehiclesScenario,
    buildAddToVehicleGroupScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Vehicles - Add Vehicle: ${vehicle.vin} to Vehicle Group: ${vehicleGroup.name}`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestAddVehicleToGroup
}
