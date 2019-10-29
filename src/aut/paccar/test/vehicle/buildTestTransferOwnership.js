'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickVehicles } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickVehicles')
const { searchVehicleTable } = require('../../scenario/vehicles/searchVehicleTable')
const { clickVehicleLink } = require('../../scenario/vehicles/clickVehicleLink')
const { clickTransferOwnership } = require('../../scenario/vehicles/vehicleDetails/clickTransferOwnership')
const { buildTransferOwnership } = require('../../scenario/vehicles/transferOwnership/buildTransferOwnership')
const { validateCustomer } = require('../../scenario/vehicles/vehicleDetails/validateCustomer')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const buildTestTransferOwnership = async (env = {}, credential = '', vehicle = {}, customer1 = {}, customer2 = {}) => {
  const browsers = await readBrowsers()
  const envName = env.name

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickVehiclesScenario = await clickVehicles()
  const searchVehicleTableScenario = await searchVehicleTable(vehicle.vin)
  const clickVehicleLinkScenario = await clickVehicleLink(vehicle.vin)

  const clickTransferOwnershipScenario = await clickTransferOwnership()
  const transferOwnershipToCustomer1 = await buildTransferOwnership(customer1)
  const validateCustomerCustomer1 = await validateCustomer(customer1)
  const transferOwnershipToCustomer2 = await buildTransferOwnership(customer2)
  const validateCustomerCustomer2 = await validateCustomer(customer2)
  const closeBrowserScenario = await closeBrowser()

  // Transfer Vehicle Ownership to a customer, verify it transferred
  // Transfer Vehicle Ownership back to the original customer (for repeated testing), verify it transferred
  const scenarios = [validLoginScenario,
    clickVehiclesScenario,
    searchVehicleTableScenario,
    clickVehicleLinkScenario,

    clickTransferOwnershipScenario,
    transferOwnershipToCustomer1,
    validateCustomerCustomer1,

    clickTransferOwnershipScenario,
    transferOwnershipToCustomer2,
    validateCustomerCustomer2,

    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Vehicles - Transfer Vehicle: ${vehicle.vin} to Customer: ${customer1} to Customer ${customer2}`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestTransferOwnership
}
