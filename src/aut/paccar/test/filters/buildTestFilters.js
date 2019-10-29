'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')
const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { buildFilterFunctionality } = require('../../scenario/filter/buildFilterFunctionality')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')
const { FilterBuilder } = require('../../data/filters/FilterBuilder')

/**
 * @description This tests the filter functionality on every major Paccar Portal Table. This tests the same two
 *              filters on every major table. The only main parameter is which table to test indicateed by which
 *              side navigation link to click
 *
 * @param {Environment} env
 * @param {Scenario} clickSideLink
 */
const buildTestFilters = async (env = {}, credential = '', clickSideLink = {}) => {
  const browsers = await readBrowsers()
  const envName = env.name

  const filter = await FilterBuilder().setName(`testfilter`)
    .setChipFilters([`API`, `Service`])
    .setFilterType(`None`)
    .build()

  const editedFilter = await FilterBuilder().setName(`newFilterName`)
    .build()

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickSideLinkScenario = await clickSideLink()
  const buildFilterFunctionalityScenario = await buildFilterFunctionality(filter, editedFilter)
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickSideLinkScenario,
    buildFilterFunctionalityScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Filters - Roles Table`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestFilters
}
