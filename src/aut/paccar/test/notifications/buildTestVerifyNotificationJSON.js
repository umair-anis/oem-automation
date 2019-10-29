'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickNotifications } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickNotifications')
const { buildNotificationLog } = require('../../scenario/notifications/buildNotificationLog')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const buildTestVerifyNotificationJSON = async (env = {}, crednetial = '', notificationCard = {}) => {
  const browsers = await readBrowsers()
  const envName = env.name

  const validLoginScenario = await buildValidLogin(envName, crednetial)
  const clickNotificationsScenario = await clickNotifications()
  const buildNotificationLogScenario = await buildNotificationLog(notificationCard)
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickNotificationsScenario,
    buildNotificationLogScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Notifications - Verify JSON: ${notificationCard.title}`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestVerifyNotificationJSON
}
