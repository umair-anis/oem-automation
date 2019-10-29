'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickDataImport } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDataImport')
const { buildViewExecutionDetails } = require('../../scenario/dataImport/buildViewExecutionDetails')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const buildTestViewExecutionDetails = async (env = {}, credential = '', dataImport = {}) => {
  const browsers = await readBrowsers()
  const envName = env.name

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickDataImportScenario = await clickDataImport()
  const buildViewExecutionDetailsScenario = await buildViewExecutionDetails(dataImport)
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickDataImportScenario,
    buildViewExecutionDetailsScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Data Import Details for Job: ${dataImport.jobName}, ID: ${dataImport.executionID}`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestViewExecutionDetails
}
