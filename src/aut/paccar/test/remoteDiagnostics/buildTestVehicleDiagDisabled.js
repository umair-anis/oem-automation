'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickRemoteDiagnostics } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickRemoteDiagnostics')
const { buildDeactivateVins } = require('../../scenario/remoteDiagnostics/buildDeactivateVins')
const { clickRemoteDiagLink } = require('../../scenario/remoteDiagnostics/clickRemoteDiagLink')
const { validateRecommendation } = require('../../scenario/vehicles/vehicleDetails/validateRecommendation')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const { ActivationBuilder } = require('../../data/remoteDiagnostics/ActivationBuilder')

const buildTestVehicleDiagDisabled = async (env = {}, credential = '') => {
  const browsers = await readBrowsers()
  const envName = env.name

  const activation = await ActivationBuilder().setVins([`1FUJGLDR49LAL0801`])
    .setRemovalCategory(`Customer Requested`)
    .build()

  const recommendation = `Remote Diagnostics Disabled`

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickRemoteDiagnosticsScenario = await clickRemoteDiagnostics()
  const buildDeactivateVinsScenario = await buildDeactivateVins(activation.vins, activation.removalCategory)
  const clickRemoteDiagLinkScenario = await clickRemoteDiagLink(activation.vins[0])
  const validateRecommendationScenario = await validateRecommendation(recommendation)
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickRemoteDiagnosticsScenario,
    buildDeactivateVinsScenario,
    clickRemoteDiagLinkScenario,
    validateRecommendationScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Remote Diagnostics - Deactivating a single Vin, Validate its recommendation status: ${recommendation}`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestVehicleDiagDisabled
}
