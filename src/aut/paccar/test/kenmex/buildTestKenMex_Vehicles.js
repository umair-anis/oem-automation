'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickVehicles } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickVehicles')
const { validateSpanishTranslation } = require('../../scenario/kenmex/validateSpanishTranslation')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const { vehiclesUI } = require('../../repo/portalSideNavigation/vehicles/vehiclesUI')
const { LanguageBuilder } = require('../../data/language/LanguageBuilder')

const buildTestKenMex_Vehicles = async (env = {}, credential = '') => {
  const browsers = await readBrowsers()
  const envName = env.name

  const headerElement = vehiclesUI().header

  const header = await LanguageBuilder().setEnglish(`Vehicles`)
    .setSpanish(`Vehículos`)
    .build()

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickVehiclesScenario = await clickVehicles()

  // Validate Translations
  const validateHeader = await validateSpanishTranslation(headerElement, header)

  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickVehiclesScenario,
    validateHeader,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Kenmex - Vehicles`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestKenMex_Vehicles
}
