'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickDOGLink } = require('../../scenario/dogs/clickDOGLink')
const { clickDOG } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDOG')
const { buildAddLocation } = require('../../scenario/dogs/dogDetails/locations/buildAddLocation')
const { buildAddRegion } = require('../../scenario/dogs/dogDetails/regions/buildAddRegion')
const { clickDeleteRegion } = require('../../scenario/dogs/dogDetails/regions/form/clickDeleteRegion')
const { alertCannotDeleteRegion } = require('../../scenario/dogs/dogDetails/regions/alertCannotDeleteRegion')
const { buildDeleteLocation } = require('../../scenario/dogs/dogDetails/locations/buildDeleteLocation')
const { buildDeleteRegion } = require('../../scenario/dogs/dogDetails/regions/buildDeleteRegion')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const { DOGBuilder } = require('../../data/dogs/DOGBuilder')
const { DOGLocationBuilder } = require('../../data/dogs/DOGLocationBuilder')
const { DOGRegionBuilder } = require('../../data/dogs/DOGRegionBuilder')

const buildTestDeleteRegionWithLocation = async (env = {}, credential = '') => {
  const browsers = await readBrowsers()
  const envName = env.name

  const group = await DOGBuilder().setName(`Test`)
    .build()

  const location = await DOGLocationBuilder().setName(`PacLease - PacLease of Jacksonville`)
    .build()

  const region = await DOGRegionBuilder().setName(`deleteRegionWithLoc Test`)
    .setLocation(`PacLease - PacLease of Jacksonville`)
    .build()

  // Add Setup information
  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickDOGScenario = await clickDOG()
  const clickDOGLinkScenario = await clickDOGLink(group.name)
  const buildAddLocationScenario = await buildAddLocation(location)
  const buildAddRegionScenario = await buildAddRegion(region)

  // Check if deleting a region with a location throws an error
  const clickDeleteRegionScenario = await clickDeleteRegion(region)
  const alertCannotDeleteRegionScenario = await alertCannotDeleteRegion()

  // Reset Locations and Regions after testing for alerts works
  const buildDeleteLocationScenario = await buildDeleteLocation(location)
  const buildDeleteRegionScenario = await buildDeleteRegion(region)

  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickDOGScenario,
    clickDOGLinkScenario,
    buildAddLocationScenario,
    buildAddRegionScenario,

    clickDeleteRegionScenario,
    alertCannotDeleteRegionScenario,

    buildDeleteLocationScenario,
    buildDeleteRegionScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Dealer Owner Group ${group.name} - Check Deleting a Region with a Location Attached`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestDeleteRegionWithLocation
}
