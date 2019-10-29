'use strict'

let { log } = require('../../../../core/logging/log')
let { readBrowsers } = require('../../config/reader/readBrowsers')
let { TestBuilder } = require('../../../../core/test/TestBuilder')

let { buildValidLogin } = require('../../scenario/login/buildValidLogin')
let { clickVehicles } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickVehicles')
let { searchVehicleTable } = require('../../scenario/vehicles/searchVehicleTable')
let { clickVehicleLink } = require('../../scenario/vehicles/clickVehicleLink')
let { clickFaultInfo } = require('../../scenario/vehicles/faults/clickFaultInfo')
let { buildOpenSnapshotData } = require('../../scenario/vehicles/faults/buildOpenSnapshotData')
let { scrollToGraph } = require('../../scenario/vehicles/faults/scrollToGraph')
let { takeElementScreenshot } = require('../../scenario/screenshot/takeElementScreenshot')
let { clickCloseGraph } = require('../../scenario/vehicles/faults/clickCloseGraph')
let { closeBrowser } = require('../../scenario/browser/closeBrowser')

let { vehiclesUI } = require('../../repo/portalSideNavigation/vehicles/vehiclesUI')
let { VehicleBuilder } = require('../../data/vehicles/VehicleBuilder')
let { SnapshotBuilder } = require('../../data/vehicles/SnapshotBuilder')
let { ScreenshotBuilder } = require('../../data/screenshot/ScreenshotBuilder')

let buildTestVehicleFaultGraph = async (env = {}, credential = '') => {

    const browsers = await readBrowsers()
    const envName = env.name

    const vehicle = await VehicleBuilder().setVin(`TTJJ1939Simulator`)
                                          .build()

    const snapshot = await SnapshotBuilder().setDropdown(`Temperature - Aftertreatment`)
                                            .setGraph(`Catalyst Intake Gas Temperature`)
                                            .build()

    const faultGraphScreenshot = await ScreenshotBuilder().setName(`Catalyst Intake Gas Temperature Screenshot`)
                                                          .setFileName(`faultGraph/png`)
                                                          .setFileType(`png`)
                                                          .setEncodingType(`base64`)
                                                          .setSize(480)
                                                          .setComparingToBaseline(true)
                                                          .setBaselinePath(`src/aut/paccar/screenshots/faultGraphs/snapshot_catalyst_intake_gas_temperature.png`)
                                                          .setSimilarity(0)
                                                          .build()

    const validLoginScenario = await buildValidLogin(envName, credential)
    const clickVehiclesScenario = await clickVehicles()
    const searchVehicleTableScenario = await searchVehicleTable(vehicle.vin)
    const clickVehicleLinkScenario = await clickVehicleLink(vehicle.vin)
    const clickFaultInfoScenario = await clickFaultInfo()

    const buildOpenSnapshotDataScenario = await buildOpenSnapshotData(snapshot)
    const scrollToGraphScenario = await scrollToGraph(snapshot.graph)
    const takeElementScreenshotScenario = await takeElementScreenshot(vehiclesUI().graph, faultGraphScreenshot)

    const clickCloseGraphScenario = await clickCloseGraph()
    const closeBrowserScenario = await closeBrowser()
    
    const scenarios = [   validLoginScenario
                        , clickVehiclesScenario
                        , searchVehicleTableScenario
                        , clickVehicleLinkScenario
                        , clickFaultInfoScenario
                        , buildOpenSnapshotDataScenario
                        , scrollToGraphScenario

                        , takeElementScreenshotScenario

                        , clickCloseGraphScenario
                        , closeBrowserScenario ]

    const test = await TestBuilder().setLog(log)
                              .setName(`Testing Screenshot of Vehicle Faul Snapshot Graphs/Data`)
                              .setBrowsers(browsers)
                              .setScenarios(scenarios)
                              .setEnvironment(env)
                              .build()

    return Object.freeze(test)
}

module.exports = {
    buildTestVehicleFaultGraph
}