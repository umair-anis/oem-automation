'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickVehicles } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickVehicles')
const { clickVehicleMoreOptions } = require('../../scenario/vehicles/clickVehicleMoreOptions')
const { buildValidateHistoryRecord } = require('../../scenario/vehicles/ownershipHistory/buildValidateHistoryRecord')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const buildTestIsOwnershipHistoryRecord = async (env = {}, credential = '', vehicle = {}, ownershipRecord = {}) => {
  const browsers = await readBrowsers()
  const envName = env.name

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickVehiclesScenario = await clickVehicles()
  const clickVehicleMoreOptionsScenario = await clickVehicleMoreOptions(vehicle.vin)
  const buildValidateHistoryRecordScenario = await buildValidateHistoryRecord(ownershipRecord)
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickVehiclesScenario,
    clickVehicleMoreOptionsScenario,
    buildValidateHistoryRecordScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Vehicles - Validate is a Ownership History Record: ${ownershipRecord.customer}, ${ownershipRecord.purchaseDate}, ${ownershipRecord.changedBy}`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestIsOwnershipHistoryRecord
}
