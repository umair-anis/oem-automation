'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')
const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickCustomers } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickCustomers')
const { buildAddCustomer } = require('../../scenario/customer/addCustomer/buildAddCustomer')
const { validateCustomerSaved } = require('../../scenario/customer/addCustomer/validateCustomerSaved')
const { buildDeleteCustomer } = require('../../scenario/customer/deleteCustomer/buildDeleteCustomer')
const { searchIsNotCustomer } = require('../../scenario/customer/searchIsNotCustomer')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const buildTestAddDeleteCustomer = async (env = {}, credential = '', customer = {}) => {
  const browsers = await readBrowsers()
  const envName = env.name

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickCustomersScenario = await clickCustomers()
  const buildAddCustomerScenario = await buildAddCustomer(customer)
  const validateCustomerSavedScenario = await validateCustomerSaved(customer.name)
  const buildDeleteCustomerScenario = await buildDeleteCustomer(customer)
  const searchIsNotCustomerScenario = await searchIsNotCustomer(customer.name)
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickCustomersScenario,
    buildAddCustomerScenario,
    validateCustomerSavedScenario,
    clickCustomersScenario,
    buildDeleteCustomerScenario,
    searchIsNotCustomerScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Customer - Add, then Delete a new Customer: ${customer.name}`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestAddDeleteCustomer
}
