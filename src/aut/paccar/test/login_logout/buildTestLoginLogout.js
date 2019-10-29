'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { buildLogout } = require('../../scenario/logout/buildLogout')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const buildTestLoginLogout = async (env = {}, credential = '') => {
  const browsers = await readBrowsers()
  const envName = env.name

  const validLoginScenario = await buildValidLogin(envName, credential)
  const logoutScenario = await buildLogout()
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    logoutScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Login/Logout with Valid Credential as ${credential}`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestLoginLogout
}
