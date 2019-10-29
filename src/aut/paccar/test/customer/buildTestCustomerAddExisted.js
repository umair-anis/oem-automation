'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickCustomers } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickCustomers')
const { buildAddCustomer } = require('../../scenario/customer/addCustomer/buildAddCustomer')
const { buildAddCustomerExisted } = require('../../scenario/customer/addCustomer/buildAddCustomerExisted')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const { CustomerBuilder } = require('../../data/customer/CustomerBuilder')
const { createAddress } = require('../../../../core/action/createAddress')

const buildTestCustomerAddExisted = async (env = {}) => {
  const browsers = await readBrowsers()
  const envName = env.name

  const customer = await CustomerBuilder().setName(`test existing customer`)
    .setEmail(await createAddress())
    .setAddress1(`123 Lane St`)
    .setAddress2(``)
    .setCity(`New York`)
    .setState(`NY`)
    .setZipCode(`55555`)
    .setCountry(`United States`)
    .setPhone(`1234567890`)
    .setFax(`1234567890`)
    .setJoinDealerNetwork(false)
    .build()

  const validLoginScenario = await buildValidLogin(envName)
  const clickCustomersScenario = await clickCustomers()
  const buildAddCustomerExistedScenario = await buildAddCustomerExisted(customer)
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickCustomersScenario,
    buildAddCustomerExistedScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Customer - Add Existed Customer`)
    .setManualTestIds(['TC-2712'])
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestCustomerAddExisted
}
