'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')
const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickVehicles } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickVehicles')
const { searchVehicleTable } = require('../../scenario/vehicles/searchVehicleTable')
const { clickVehicleLink } = require('../../scenario/vehicles/clickVehicleLink')
const { clickFaultInfo } = require('../../scenario/vehicles/faults/clickFaultInfo')
const { buildOpenSnapshotData } = require('../../scenario/vehicles/faults/buildOpenSnapshotData')
const { clickCloseGraph } = require('../../scenario/vehicles/faults/clickCloseGraph')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')
const { VehicleBuilder } = require('../../data/vehicles/VehicleBuilder')
const { SnapshotBuilder } = require('../../data/vehicles/SnapshotBuilder')

const buildTestVehicleFault_SnapshotData = async (env = {}) => {
  const browsers = await readBrowsers()
  const envName = env.name

  const vehicle = await VehicleBuilder().setVin(`TTJJ1939Simulator`)
    .build()

  const snapshot = await SnapshotBuilder().setDropdown(`Temperature - Aftertreatment`)
    .setGraph(`Catalyst Intake Gas Temperature`)
    .build()

  const validLoginScenario = await buildValidLogin(envName, 'otaTestAdmin')
  const clickVehiclesScenario = await clickVehicles()
  const searchVehicleTableScenario = await searchVehicleTable(vehicle.vin)
  const clickVehicleLinkScenario = await clickVehicleLink(vehicle.vin)
  const clickFaultInfoScenario = await clickFaultInfo()

  const buildOpenSnapshotDataScenario = await buildOpenSnapshotData(snapshot)
  const clickCloseGraphScenario = await clickCloseGraph()

  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickVehiclesScenario,
    searchVehicleTableScenario,
    clickVehicleLinkScenario,
    clickFaultInfoScenario,
    buildOpenSnapshotDataScenario,
    clickCloseGraphScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Vehicles - Vehicle: ${vehicle.vin} Fault Log Snapshot Data`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestVehicleFault_SnapshotData
}
