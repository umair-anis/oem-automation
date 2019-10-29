'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickOTASubscriptions } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickOTASubscriptions')
const { searchOTASubscriptionTable } = require('../../scenario/ota/searchOTASubscriptionTable')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const buildTestOTASubscriptionIsActive = async (env = {}, credential = '', vehicle = {}) => {
  const browsers = await readBrowsers()
  const envName = env.name

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickOTASubscriptionsScenario = await clickOTASubscriptions()
  const searchOTASubscriptionTableScenario = await searchOTASubscriptionTable(vehicle.vin)
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickOTASubscriptionsScenario,
    searchOTASubscriptionTableScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing OTA - Active OTA Subscription is in OTA Subscriptions Table`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestOTASubscriptionIsActive
}
