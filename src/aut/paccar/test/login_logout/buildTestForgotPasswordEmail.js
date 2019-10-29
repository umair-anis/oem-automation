'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildForgotPassword } = require('../../scenario/login/buildForgotPassword')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const buildTestForgotPasswordEmail = async (env = {}, credential = '') => {
  const browsers = await readBrowsers()
  const envName = env.name

  const buildForgotPasswordScenario = await buildForgotPassword(envName, credential)
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [buildForgotPasswordScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Forgot Password with a Valid Email`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestForgotPasswordEmail
}
