'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickDOG } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDOG')
const { validateSpanishTranslation } = require('../../scenario/kenmex/validateSpanishTranslation')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const { dealerOwnerGroupsUI } = require('../../repo/portalSideNavigation/dealerOwnerGroups/dealerOwnerGroupsUI')
const { LanguageBuilder } = require('../../data/language/LanguageBuilder')

const buildTestKenMex_DOG = async (env = {}, credential = '') => {
  const browsers = await readBrowsers()
  const envName = env.name

  const headerElement = dealerOwnerGroupsUI().header

  const header = await LanguageBuilder().setEnglish(`Dealer Owner Groups`)
    .setSpanish(`Grupos de Propietarios de Concesionarios`)
    .build()

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickDOGScenario = await clickDOG()

  // Validate Translations
  const validateHeader = await validateSpanishTranslation(headerElement, header)

  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickDOGScenario,
    validateHeader,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Kenmex - DOG`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestKenMex_DOG
}
