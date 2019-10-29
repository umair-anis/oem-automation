'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')
const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickCustomers } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickCustomers')
const { clickCustomerLink } = require('../../scenario/customer/clickCustomerLink')
const { clickTabSoftware } = require('../../scenario/customer/software/clickTabSoftware')
const { switchSoftwareSlider } = require('../../scenario/customer/software/switchSoftwareSlider')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const buildTestCustomer_Software = async (env = {}, credential = '', customer = {}) => {
  const browsers = await readBrowsers()
  const envName = env.name

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickCustomersScenario = await clickCustomers()
  const clickCustomerLinkScenario = await clickCustomerLink(customer.name)
  const clickTabSoftwareScenario = await clickTabSoftware()
  const switchSoftwareSliderScenario = await switchSoftwareSlider()
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickCustomersScenario,
    clickCustomerLinkScenario,
    clickTabSoftwareScenario,
    switchSoftwareSliderScenario,
    switchSoftwareSliderScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Customer - Set Active, then Inactive, Software OTA Updates`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
    buildTestCustomer_Software
}
