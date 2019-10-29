'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickGoogleAnalytics } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickGoogleAnalytics')
const { validateSpanishTranslation } = require('../../scenario/kenmex/validateSpanishTranslation')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const { googleAnalyticsReportUI } = require('../../repo/portalSideNavigation/googleAnalyticsReport/googleAnalyticsReportUI')
const { LanguageBuilder } = require('../../data/language/LanguageBuilder')

const buildTestKenMex_GoogleAnalytics = async (env = {}, credential = '') => {
  const browsers = await readBrowsers()
  const envName = env.name

  const buttonElement = googleAnalyticsReportUI().buttonExport

  const button = await LanguageBuilder().setEnglish(`EXPORT`)
    .setSpanish(`EXPORTAR`)
    .build()

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickGoogleAnalyticsScenario = await clickGoogleAnalytics()

  // Validate Translations
  const validateExport = await validateSpanishTranslation(buttonElement, button)

  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickGoogleAnalyticsScenario,
    validateExport,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Kenmex - Google Analytics Report`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestKenMex_GoogleAnalytics
}
