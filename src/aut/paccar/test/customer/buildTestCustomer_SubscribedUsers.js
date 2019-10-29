'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')
const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickCustomers } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickCustomers')
const { clickCustomerLink } = require('../../scenario/customer/clickCustomerLink')
const { buildClickSubscribedUser } = require('../../scenario/customer/subscribedUsers/buildClickSubscribedUser')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const buildTestCustomer_SubscribedUsers = async (env = {}, credential = '', customer = {}, userName = []) => {
  const browsers = await readBrowsers()
  const envName = env.name

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickCustomersScenario = await clickCustomers()
  const clickCustomerLinkScenario = await clickCustomerLink(customer.name)

  // Subscribe, then Unsubscribe for repeated testing
  const subscribeScenario = await buildClickSubscribedUser(userName)
  const unsubscribeScenario = await buildClickSubscribedUser(userName)

  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickCustomersScenario,
    clickCustomerLinkScenario,
    subscribeScenario,
    unsubscribeScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Customer - Subscribe, then Unsubscribe, to a Subscribed User`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestCustomer_SubscribedUsers
}
