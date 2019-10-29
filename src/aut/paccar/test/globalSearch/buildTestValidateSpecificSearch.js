'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')
const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { buildSpecificSearch } = require('../../scenario/globalSearch/buildSpecificSearch')
const { validateExpectedText } = require('../../scenario/globalSearch/validateExpectedText')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const buildTestValidateSpecificSearch = async (env = {}, credential = '', search = {}) => {
  const browsers = await readBrowsers()
  const envName = env.name

  const validLoginScenario = await buildValidLogin(envName, credential)
  const buildSpecificSearchScenario = await buildSpecificSearch(search)
  const validateExpectedTextScenario = await validateExpectedText(search.expectedText)
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    buildSpecificSearchScenario,
    validateExpectedTextScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Global Search - Validate Specific Search: ${search.text} leads to Expected Text: ${search.expectedText}`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestValidateSpecificSearch
}
