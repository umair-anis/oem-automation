'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickGoogleAnalytics } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickGoogleAnalytics')
const { buildGoogleReport } = require('../../scenario/googleAnalyticsReport/buildGoogleReport')
const { clickDataExport } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDataExport')
const { validateFormErrors } = require('../../scenario/googleAnalyticsReport/validateFormErrors')
const { getDataExportFileFormat } = require('../../scenario/dataExport/getDataExportFileFormat')
const { verifyFileInExports } = require('../../scenario/dataExport/verifyFileInExports')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

let buildTestGoogleReport = async (env = {}, credential = '', report = {}) => {

  const browsers = await readBrowsers()
  const envName = env.name

  const garFormErrors = [`End Date cannot be before valid Start Date.`, `Start Date should be after May 02 2018.`, `Start Date is required.`]

  const fileName = await getDataExportFileFormat(`google analytics`)

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickGoogleAnalyticsScenario = await clickGoogleAnalytics()
  const buildGoogleReportScenario = await buildGoogleReport(report)
  const validateFormErrorsScenario = await validateFormErrors(garFormErrors)
  const clickDataExportScenario = await clickDataExport()
  const verifyFileInExportsScenario = await verifyFileInExports(fileName)
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [ validLoginScenario,
                        clickGoogleAnalyticsScenario,
                        buildGoogleReportScenario,
                        validateFormErrorsScenario,
                        clickDataExportScenario,
                        verifyFileInExportsScenario,
                        closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Google Analytics Report Functionality`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestGoogleReport
}
