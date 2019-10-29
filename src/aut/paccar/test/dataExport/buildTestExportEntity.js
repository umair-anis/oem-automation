'use strict'

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickDataExport } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDataExport')
const { buildExportEntity } = require('../../scenario/dataExport/buildExportEntity')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')
const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const buildTestExportEntity = async (env = {}, credential = '') => {
  const browsers = await readBrowsers()
  const envName = env.name

  const entity = ['Users']

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickDataExportScenario = await clickDataExport()
  const buildExportEntityScenario = await buildExportEntity(entity)
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickDataExportScenario,
    buildExportEntityScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setBrowsers(browsers)
    .setEnvironment(env)
    .setLog(log)
    .setName(`Testing Exporting a Data Export Entity`)
    .setScenarios(scenarios)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestExportEntity
}
