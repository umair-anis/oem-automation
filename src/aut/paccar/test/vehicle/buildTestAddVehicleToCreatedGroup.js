'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickVehicles } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickVehicles')
const { buildCreateVehicleGroup } = require('../../scenario/vehicles/createVehicleGroup/buildCreateVehicleGroup')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const { VehicleBuilder } = require('../../data/vehicles/VehicleBuilder')
const { VehicleGroupBuilder } = require('../../data/vehicles/VehicleGroupBuilder')

const buildTestAddVehicleToCreatedGroup = async (env = {}, credential = '') => {
  const browsers = await readBrowsers()
  const envName = env.name

  const vehicle = await VehicleBuilder().setVin(`1HSMKTAN8JH538933`)
    .build()

  const date = new Date()
  const vehicleGroup = await VehicleGroupBuilder().setName(`VG Name_${date.getTime()}`)
    .setDescription(`VG Description`)
    .build()

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickVehiclesScenario = await clickVehicles()
  const buildCreateVehicleGroupScenario = await buildCreateVehicleGroup(vehicle.vin, vehicleGroup)
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickVehiclesScenario,
    buildCreateVehicleGroupScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Vehicles - Add Vehicle: ${vehicle.vin} to a Created Vehicle Group: ${vehicleGroup.name}`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestAddVehicleToCreatedGroup
}
