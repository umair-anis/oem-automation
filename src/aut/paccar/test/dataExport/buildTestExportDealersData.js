'use strict'

const { getDataExportFileFormat } = require('../../scenario/dataExport/getDataExportFileFormat')
const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickDealersServiceCenters } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDealersServiceCenters')
const { buildClickExportData } = require('../../scenario/dataExport/buildClickExportData')
const { clickDataExport } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDataExport')
const { verifyFileInExports } = require('../../scenario/dataExport/verifyFileInExports')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')
const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const buildTestExportDealersData = async (env = {}, credential = '') => {
  const browsers = await readBrowsers()
  const envName = env.name

  const file = await getDataExportFileFormat(`dealers`)

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickDealersServiceCentersScenario = await clickDealersServiceCenters()
  const buildClickExportDataScenario = await buildClickExportData()
  const clickDataExportScenario = await clickDataExport()
  const verifyFileInExportsScenario = await verifyFileInExports(file)
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickDealersServiceCentersScenario,
    buildClickExportDataScenario,
    clickDataExportScenario,
    verifyFileInExportsScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setBrowsers(browsers)
    .setEnvironment(env)
    .setLog(log)
    .setName(`Testing Data Export - Dealers Export Data to Data Export Page`)
    .setScenarios(scenarios)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestExportDealersData
}
