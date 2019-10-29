'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickCustomers } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickCustomers')
const { validateSpanishTranslation } = require('../../scenario/kenmex/validateSpanishTranslation')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const { customersUI } = require('../../repo/portalSideNavigation/customers/customersUI')
const { LanguageBuilder } = require('../../data/language/LanguageBuilder')

const buildTestKenMex_Customers = async (env = {}, credential = '') => {
  const browsers = await readBrowsers()
  const envName = env.name

  const headerElement = customersUI().header

  const header = await LanguageBuilder().setEnglish(`Customers`)
    .setSpanish(`Clientes`)
    .build()

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickCustomersScenario = await clickCustomers()

  // Validate Translations
  const validateHeader = await validateSpanishTranslation(headerElement, header)

  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickCustomersScenario,
    validateHeader,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Kenmex - Customers`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestKenMex_Customers
}
