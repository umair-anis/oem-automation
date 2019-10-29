'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickDealersServiceCenters } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDealersServiceCenters')
const { validateSpanishTranslation } = require('../../scenario/kenmex/validateSpanishTranslation')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const { mainDashboardUI } = require('../../repo/mainDashboard/mainDashboardUI')
const { LanguageBuilder } = require('../../data/language/LanguageBuilder')

const buildTestKenMex_Dealers = async (env = {}, credential = '') => {
  const browsers = await readBrowsers()
  const envName = env.name

  const headerElement = mainDashboardUI().title

  const header = await LanguageBuilder().setEnglish(`Dealers`)
    .setSpanish(`Concesionarios`)
    .build()

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickDealersServiceCentersScenario = await clickDealersServiceCenters()

  // Validate Translations
  const validateHeader = await validateSpanishTranslation(headerElement, header)

  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickDealersServiceCentersScenario,
    validateHeader,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Kenmex - Dealers`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestKenMex_Dealers
}
