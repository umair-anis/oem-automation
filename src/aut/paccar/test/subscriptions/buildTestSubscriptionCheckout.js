'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickSubscriptions } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickSubscriptions')
const { buildSubscriptionCheckout } = require('../../scenario/subscriptions/buildSubscriptionCheckout')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const buildTestSubscriptionCheckout = async (env = {}, credential = '', checkout = {}) => {
  const browsers = await readBrowsers()
  const envName = env.name

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickSubscriptionsScenario = await clickSubscriptions()
  const buildSubscriptionCheckoutScenario = await buildSubscriptionCheckout(checkout)
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickSubscriptionsScenario,
    buildSubscriptionCheckoutScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing A Subscription Checkout`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestSubscriptionCheckout
}
