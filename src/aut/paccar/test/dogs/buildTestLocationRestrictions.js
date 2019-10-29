'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickDOGLink } = require('../../scenario/dogs/clickDOGLink')
const { clickDOG } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDOG')
const { buildAddLocation } = require('../../scenario/dogs/dogDetails/locations/buildAddLocation')
const { buildAddRegion } = require('../../scenario/dogs/dogDetails/regions/buildAddRegion')
const { clickViewLocRegion } = require('../../scenario/dogs/dogDetails/regions/form/clickViewLocRegion')
const { verifyLocationNotInRegionsTable } = require('../../scenario/dogs/dogDetails/regions/verifyLocationNotInRegionsTable')
const { clickSaveAssnLocations } = require('../../scenario/dogs/dogDetails/regions/clickSaveAssnLocations')
const { buildDeleteLocation } = require('../../scenario/dogs/dogDetails/locations/buildDeleteLocation')
const { buildDeleteRegion } = require('../../scenario/dogs/dogDetails/regions/buildDeleteRegion')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const { DOGBuilder } = require('../../data/dogs/DOGBuilder')
const { DOGLocationBuilder } = require('../../data/dogs/DOGLocationBuilder')
const { DOGRegionBuilder } = require('../../data/dogs/DOGRegionBuilder')

const buildTestLocationRestrictions = async (env = {}, credential = '') => {
  const browsers = await readBrowsers()
  const envName = env.name

  const group = await DOGBuilder().setName(`DealerOwnerTestGroup`)
    .build()

  const location = await DOGLocationBuilder().setName(`PacLease - Peterbilt PacLease of Atlanta`)
    .build()

  const region1 = await DOGRegionBuilder().setName(`Region 1`)
    .setLocation(`PacLease - Peterbilt PacLease of Atlanta`)
    .build()

  const region2 = await DOGRegionBuilder().setName(`Region 2`)
    .build()

  // Add Setup information
  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickDOGScenario = await clickDOG()
  const clickDOGLinkScenario = await clickDOGLink(group.name)
  const buildAddLocationScenario = await buildAddLocation(location)
  const buildAddRegion1Scenario = await buildAddRegion(region1)
  const buildAddRegion2Scenario = await buildAddRegion(region2)

  // Check 'locationName' cannot be found in another region's location options
  const clickViewLocRegionScenario = await clickViewLocRegion(region2.name)
  const verifyLocationNotInRegionsTableScenario = await verifyLocationNotInRegionsTable(location.name)
  const clickSaveAssnLocationsScenario = await clickSaveAssnLocations()

  // Reset Locations and Regions after tested Adding works
  const buildDeleteLocationScenario = await buildDeleteLocation(location)
  const buildDeleteRegion1Scenario = await buildDeleteRegion(region1)
  const buildDeleteRegion2Scenario = await buildDeleteRegion(region2)

  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickDOGScenario,
    clickDOGLinkScenario,
    buildAddLocationScenario,
    buildAddRegion1Scenario,
    buildAddRegion2Scenario,

    clickViewLocRegionScenario,
    verifyLocationNotInRegionsTableScenario,
    clickSaveAssnLocationsScenario,

    buildDeleteLocationScenario,
    buildDeleteRegion1Scenario,
    buildDeleteRegion2Scenario,

    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Dealer Owner Group ${group.name} - Check Location Restrictrions. One Location can only be in one Region`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestLocationRestrictions
}
