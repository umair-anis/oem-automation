'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')
const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickRemoteDiagnostics } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickRemoteDiagnostics')
const { buildReactivateVins } = require('../../scenario/remoteDiagnostics/buildReactivateVins')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const buildTestReactivateVins = async (env = {}, credential = '', activation = {}) => {
  const browsers = await readBrowsers()
  const envName = env.name

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickRemoteDiagnosticsScenario = await clickRemoteDiagnostics()
  const buildReactivateVinsScenario = await buildReactivateVins(activation.vins)
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickRemoteDiagnosticsScenario,
    buildReactivateVinsScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Remote Diagnostics - Reactivating Vins`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestReactivateVins
}
