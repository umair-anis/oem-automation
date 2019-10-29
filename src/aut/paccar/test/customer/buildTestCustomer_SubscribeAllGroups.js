'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')
const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickCustomers } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickCustomers')
const { clickCustomerLink } = require('../../scenario/customer/clickCustomerLink')
const { buildSubscribeVehicleGroup } = require('../../scenario/customer/vehicleGroups/buildSubscribeVehicleGroup')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const { CustomerBuilder } = require('../../data/customer/CustomerBuilder')

const buildTestCustomer_SubscribeAllGroups = async (env = {}, credential = '') => {
  const browsers = await readBrowsers()
  const envName = env.name

  const customer = await CustomerBuilder().setName(`0000222@test.com`)
    .build()

  const vehicleGroupName = ['All Vehicles']

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickCustomersScenario = await clickCustomers()
  const clickCustomerLinkScenario = await clickCustomerLink(customer.name)

  // Click Vehicle Group Bell
  const buildSubscribeVehicleGroupScenario = await buildSubscribeVehicleGroup(vehicleGroupName)

  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickCustomersScenario,
    clickCustomerLinkScenario,
    buildSubscribeVehicleGroupScenario,
    buildSubscribeVehicleGroupScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Customer - Add, then Delete, a Customer Vehicle Group`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestCustomer_SubscribeAllGroups
}
