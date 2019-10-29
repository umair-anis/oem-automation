'use strict'

let { log } = require('../../../../core/logging/log')
let { readBrowsers } = require('../../config/reader/readBrowsers')
let { TestBuilder } = require('../../../../core/test/TestBuilder')

let { buildValidLogin } = require('../../scenario/login/buildValidLogin')
let { clickFleetReport } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickFleetReport')
let { buildFleetReport } = require('../../scenario/fleetReport/buildFleetReport')
let { scrollToGraph } = require('../../scenario/fleetReport/scrollToGraph')
let { takeElementScreenshot } = require('../../scenario/screenshot/takeElementScreenshot')
let { closeBrowser } = require('../../scenario/browser/closeBrowser')

let { fleetReportUI } = require('../../repo/portalSideNavigation/fleetReport/fleetReportUI')
let { FleetReportBuilder } = require('../../data/fleetReport/FleetReportBuilder')
let { ScreenshotBuilder } = require('../../data/screenshot/ScreenshotBuilder')

let buildTestFleetReportGraphs = async (env = {}, credential = '') => {

    const browsers = await readBrowsers()
    const envName = env.name

    const fleetReport = await FleetReportBuilder().setEngineFamily(`All`)
                                                  .setEngineModelYear(`All`)
                                                  .setDuration(`Last 90 days`)
                                                  .build()

    const fuelScreenshot = await ScreenshotBuilder().setName(`Fuel Economy Screenshot`)
                                                     .setFileName(`fuelEconomyGraph/png`)
                                                     .setFileType(`png`)
                                                     .setEncodingType(`base64`)
                                                     .setSize(480)
                                                     .setComparingToBaseline(true)
                                                     .setBaselinePath(`src/aut/paccar/screenshots/fleetReport/snapshot_fuel_economy.png`)
                                                     .setSimilarity(0)
                                                     .build()

    const percentScreenshot = await ScreenshotBuilder().setName(`Percent Idle Screenshot`)
                                                        .setFileName(`fuelPercentIdle/png`)
                                                        .setFileType(`png`)
                                                        .setEncodingType(`base64`)
                                                        .setSize(480)
                                                        .setComparingToBaseline(true)
                                                        .setBaselinePath(`src/aut/paccar/screenshots/fleetReport/snapshot_percent_idle.png`)
                                                        .setSimilarity(0)
                                                        .build()

    const validLoginScenario = await buildValidLogin(envName, credential)
    const clickFleetReportScenario = await clickFleetReport()
    const buildFleetReportScenario = await buildFleetReport(fleetReport)

    const scrollToFuel = await scrollToGraph(fleetReportUI().graphFuelEconomy)
    const takeFuelScreenshot = await takeElementScreenshot(fleetReportUI().graphFuelEconomy, fuelScreenshot)
    const scrollToPercent = await scrollToGraph(fleetReportUI().graphPercentIdle)
    const takePercentScreenshot = await takeElementScreenshot(fleetReportUI().graphPercentIdle, percentScreenshot)
    const closeBrowserScenario = await closeBrowser()
    
    const scenarios = [   validLoginScenario
                        , clickFleetReportScenario
                        , buildFleetReportScenario

                        , scrollToFuel
                        , takeFuelScreenshot

                        , scrollToPercent
                        , takePercentScreenshot

                        , closeBrowserScenario ]

    const test = await TestBuilder().setLog(log)
                              .setName(`Testing Screenshot - Fleet Report - Fuel Economy and Percent Idle`)
                              .setBrowsers(browsers)
                              .setScenarios(scenarios)
                              .setEnvironment(env)
                              .build()

    return Object.freeze(test)
}

module.exports = {
    buildTestFleetReportGraphs
}