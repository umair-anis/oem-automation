'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { buildInvalidLogin } = require('../../scenario/login/buildInvalidLogin')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const buildTestInvalidLogin = async (env = {}, credential = '') => {
  const browsers = await readBrowsers()
  const envName = env.name

  const buildInvalidLoginScenario = await buildInvalidLogin(envName, credential)
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [buildInvalidLoginScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Login with Invalid Credentials as ${credential}`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestInvalidLogin
}
