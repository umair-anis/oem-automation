'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickVehicles } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickVehicles')
const { clickVehicleMoreOptions } = require('../../scenario/vehicles/clickVehicleMoreOptions')
const { buildEditVehicle } = require('../../scenario/vehicles/editVehicle/buildEditVehicle')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const buildTestEditVehicle = async (env = {}, credential = '', vehicle = {}) => {
  const browsers = await readBrowsers()
  const envName = env.name

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickVehiclesScenario = await clickVehicles()
  const clickVehicleMoreOptionsScenario = await clickVehicleMoreOptions(vehicle.vin)
  const buildEditVehicleScenario = await buildEditVehicle(vehicle)
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickVehiclesScenario,
    clickVehicleMoreOptionsScenario,
    buildEditVehicleScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Vehicles - Edit Vehicle: ${vehicle.vin}`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
    buildTestEditVehicle
}
