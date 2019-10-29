'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickSubscriptions } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickSubscriptions')
const { buildValidateSubscriptionFilters } = require('../../scenario/subscriptions/buildValidateSubscriptionFilters')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const buildTestValidSubscriptionFilters = async (env = {}, credential = '') => {
  const browsers = await readBrowsers()
  const envName = env.name

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickSubscriptionsScenario = await clickSubscriptions()
  const buildValidateSubscriptionFiltersScenario = await buildValidateSubscriptionFilters()
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickSubscriptionsScenario,
    buildValidateSubscriptionFiltersScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Subscriptions - Validate Table Filters`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestValidSubscriptionFilters
}
