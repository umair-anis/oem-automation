'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

/**
 * @description Test A Side Navigation link can be clicked with an account 'account'
 *
 * @param {*} env
 * @param {string} account           Account to login as
 * @param {string} clickSideLink     To click the write Side Navigation Link to the correct table
 */
const buildTestSideLink = async (env = {}, account = '', clickSideLink = {}) => {
  const browsers = await readBrowsers()
  const envName = env.name

  const validLoginScenario = await buildValidLogin(envName, account)
  const clickSideLinkScenario = await clickSideLink()
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickSideLinkScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setBrowsers(browsers)
    .setEnvironment(env)
    .setLog(log)
    .setName(`Testing Side Link - Link can be clicked`)
    .setScenarios(scenarios)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestSideLink
}
