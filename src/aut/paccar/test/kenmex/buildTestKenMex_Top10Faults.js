'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickTopTenFaults } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickTopTenFaults')
const { validateSpanishTranslation } = require('../../scenario/kenmex/validateSpanishTranslation')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const { topTenFaultsUI } = require('../../repo/portalSideNavigation/topTenFaults/topTenFaultsUI')
const { LanguageBuilder } = require('../../data/language/LanguageBuilder')

const buildTestKenMex_Top10Faults = async (env = {}, credential = '') => {
  const browsers = await readBrowsers()
  const envName = env.name

  const headerElement = topTenFaultsUI().header

  const header = await LanguageBuilder().setEnglish(`Top 10 Faults`)
    .setSpanish(`Fallas recurrentes`)
    .build()

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickTopTenFaultsScenario = await clickTopTenFaults()

  // Validate Translations
  const validateHeader = await validateSpanishTranslation(headerElement, header)

  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickTopTenFaultsScenario,
    validateHeader,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Kenmex - Top 10 Faults`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestKenMex_Top10Faults
}
