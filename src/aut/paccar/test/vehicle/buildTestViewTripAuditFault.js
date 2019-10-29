'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')
const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickVehicles } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickVehicles')
const { clickVehicleMoreOptions } = require('../../scenario/vehicles/clickVehicleMoreOptions')
const { buildSearchTripAudit } = require('../../scenario/vehicles/viewTripAudit/buildSearchTripAudit')
const { buildVaidateTripAuditFault } = require('../../scenario/vehicles/viewTripAudit/buildVaidateTripAuditFault')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const buildTestViewTripAuditFault = async (env = {}, credential = '', vehicle = {}, tripAudit = {}) => {
  const browsers = await readBrowsers()
  const envName = env.name

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickVehiclesScenario = await clickVehicles()
  const clickVehicleMoreOptionsScenario = await clickVehicleMoreOptions(vehicle.vin)
  const buildSearchTripAuditScenario = await buildSearchTripAudit(tripAudit)
  const buildVaidateTripAuditFaultScenario = await buildVaidateTripAuditFault(tripAudit.tripID, tripAudit.faultLog)
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickVehiclesScenario,
    clickVehicleMoreOptionsScenario,
    buildSearchTripAuditScenario,
    buildVaidateTripAuditFaultScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Vehicles - View Vehicle: ${vehicle.vin} Trip Audit ID: ${tripAudit.tripID}`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestViewTripAuditFault
}
