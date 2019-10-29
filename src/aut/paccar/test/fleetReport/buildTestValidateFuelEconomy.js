'use strict'

let { log } = require('../../../../core/logging/log')
let { readBrowsers } = require('../../config/reader/readBrowsers')
let { TestBuilder } = require('../../../../core/test/TestBuilder')

let { buildValidLogin } = require('../../scenario/login/buildValidLogin')
let { clickFleetReport } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickFleetReport')
let { buildFleetReport } = require('../../scenario/fleetReport/buildFleetReport')
let { validateFuelEconomyTables } = require('../../scenario/fleetReport/validateFuelEconomyTables')
let { selectSortBy } = require('../../scenario/fleetReport/selectSortBy')
let { closeBrowser } = require('../../scenario/browser/closeBrowser')

let buildTestValidateFuelEconomy = async (env = {}, credential = '', fleetReport = {}) => {

    const browsers = await readBrowsers()
    const envName = env.name

    const validLoginScenario = await buildValidLogin(envName, credential)
    const clickFleetReportScenario = await clickFleetReport()
    const buildFleetReportScenario = await buildFleetReport(fleetReport)
    const selectSortByScenario = await selectSortBy([`Fuel Economy`])
    const validateFuelEconomyTablesScenario = await validateFuelEconomyTables(fleetReport.top5, fleetReport.bottom5)
    const closeBrowserScenario = await closeBrowser()

    const scenarios = [   validLoginScenario
                        , clickFleetReportScenario
                        , buildFleetReportScenario
                        , selectSortByScenario
                        , validateFuelEconomyTablesScenario
                        , closeBrowserScenario ]

    const test = await TestBuilder().setLog(log)
                              .setName(`Testing Fleet Report - Validate Top 5 and Bottom 5 Fuel Econom have the correct VINs`)
                              .setBrowsers(browsers)
                              .setScenarios(scenarios)
                              .setEnvironment(env)
                              .build()

    return Object.freeze(test)
}

module.exports = {
    buildTestValidateFuelEconomy
}