'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { buildGeneralSearch } = require('../../scenario/globalSearch/buildGeneralSearch')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const { SearchBuilder } = require('../../data/globalSearch/SearchBuilder')

const buildTestValidateGeneralSearch = async (env = {}, credential = '') => {
  const browsers = await readBrowsers()
  const envName = env.name

  const search = await SearchBuilder().setText(`my specific general search`)
    .setSearchResults([`Recommended Version`,
      `2 Dealer Owner Group(s) found`,
      `9 Dealer(s) found`,
      `Installed Version`,
      `1 User(s) found`,
      `3 Vehicle(s) found`])
    .build()

  const validLoginScenario = await buildValidLogin(envName, credential)
  const buildGeneralSearchScenario = await buildGeneralSearch(search)
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    buildGeneralSearchScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Global Search - Validate General Search: ${search.text} Leads to a matching Results List`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestValidateGeneralSearch
}
