'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')
const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickFleetReport } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickFleetReport')
const { buildFleetReport } = require('../../scenario/fleetReport/buildFleetReport')
const { validReportFormErrors } = require('../../scenario/fleetReport/validReportFormErrors')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const buildTestRunFleetReport = async (env = {}, credential = '', fleetReport = {}) => {
  const browsers = await readBrowsers()
  const envName = env.name

  const reportFormErrors = [`Start Date is required.`, `End Date is required.`, `End Date cannot be before valid Start Date.`]

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickFleetReportScenario = await clickFleetReport()
  const buildFleetReportScenario = await buildFleetReport(fleetReport)
  const validReportFormErrorsScenario = await validReportFormErrors(reportFormErrors)
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickFleetReportScenario,
    buildFleetReportScenario,
    validReportFormErrorsScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Fleet Report - Run Report`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestRunFleetReport
}
