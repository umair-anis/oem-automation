'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickRemoteDiagnostics } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickRemoteDiagnostics')
const { validateSpanishTranslation } = require('../../scenario/kenmex/validateSpanishTranslation')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const { remoteDiagnosticsUI } = require('../../repo/portalSideNavigation/remoteDiagnostics/remoteDiagnosticsUI')
const { LanguageBuilder } = require('../../data/language/LanguageBuilder')

const buildTestKenMex_RemoteDiagnostics = async (env = {}, credential = '') => {
  const browsers = await readBrowsers()
  const envName = env.name

  const buttonElement = remoteDiagnosticsUI().buttonDeactivateReset

  const button = await LanguageBuilder().setEnglish(`RESET`)
    .setSpanish(`RESTABLECER`)
    .build()

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickRemoteDiagnosticsScenario = await clickRemoteDiagnostics()

  // Validate Translations
  const validateButton = await validateSpanishTranslation(buttonElement, button)

  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickRemoteDiagnosticsScenario,
    validateButton,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Kenmex - Remote Diagnostics`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestKenMex_RemoteDiagnostics
}
