'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { buildLogout } = require('../../scenario/logout/buildLogout')
const { validateSpanishTranslation } = require('../../scenario/kenmex/validateSpanishTranslation')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const { loginUi } = require('../../repo/login/loginUi')
const { LanguageBuilder } = require('../../data/language/LanguageBuilder')

const buildTestKenMex_Login = async (env = {}, credential = '') => {
  const browsers = await readBrowsers()
  const envName = env.name

  const buttonElement = loginUi().buttonSubmit

  const button = await LanguageBuilder().setEnglish(`LOGIN`)
    .setSpanish(`INICIAR SESIÓN`)
    .build()

  const validLoginScenario = await buildValidLogin(envName, credential)
  const buildLogoutScenario = await buildLogout()

  // Validate Translations
  const validateButton = await validateSpanishTranslation(buttonElement, button)

  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    buildLogoutScenario,
    validateButton,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Kenmex - Login`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestKenMex_Login
}
