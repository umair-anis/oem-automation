'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { buildClickAllSideNavigationLinks } = require('../../scenario/portalSideNavigation/buildClickAllSideNavigationLinks')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const buildTestSideNavLinks = async (env = {}) => {
  const browsers = await readBrowsers()
  const envName = env.name

  const validLoginScenario = await buildValidLogin(envName, `peoplenetadmin`)
  const buildClickAllSideNavigationLinksScenario = await buildClickAllSideNavigationLinks()
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    buildClickAllSideNavigationLinksScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing All Side Navigation Links`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestSideNavLinks
}
