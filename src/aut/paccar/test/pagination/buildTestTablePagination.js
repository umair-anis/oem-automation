'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')
const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { buildSpanPages } = require('../../scenario/pagination/buildSpanPages')
const { buildSelectRowsPerPage } = require('../../scenario/pagination/buildSelectRowsPerPage')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const buildTestTablePagination = async (env = {}, credential = '', clickSideLink = {}) => {
  const browsers = await readBrowsers()
  const envName = env.name

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickSideLinkScenario = await clickSideLink()
  const buildSpanPagesScenario = await buildSpanPages()
  const buildSelectRowsPerPageScenario = await buildSelectRowsPerPage([`50`, `25`, `10`])
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickSideLinkScenario,
    buildSpanPagesScenario,
    buildSelectRowsPerPageScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Pagination - Main Table`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestTablePagination
}
