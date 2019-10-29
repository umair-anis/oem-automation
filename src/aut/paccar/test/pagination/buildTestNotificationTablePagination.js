'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')
const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { buildSpanPages } = require('../../scenario/pagination/buildSpanPages')
const { buildSelectNotificationsPerPage } = require('../../scenario/pagination/buildSelectNotificationsPerPage')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const buildTestNotificationTablePagination = async (env = {}, credential = '', clickSideLink = {}) => {
  const browsers = await readBrowsers()
  const envName = env.name

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickCustomersScenario = await clickSideLink()
  const buildSpanPagesScenario = await buildSpanPages()
  const buildSelectNotificationsPerPageScenario = await buildSelectNotificationsPerPage([`50`, `25`, `10`])
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickCustomersScenario,
    buildSpanPagesScenario,
    buildSelectNotificationsPerPageScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Pagination - Notification Table`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestNotificationTablePagination
}
