'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickDOGLink } = require('../../scenario/dogs/clickDOGLink')
const { clickDOG } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDOG')
const { buildAddLocation } = require('../../scenario/dogs/dogDetails/locations/buildAddLocation')
const { buildAddRegion } = require('../../scenario/dogs/dogDetails/regions/buildAddRegion')
const { buildDeleteLocation } = require('../../scenario/dogs/dogDetails/locations/buildDeleteLocation')
const { buildDeleteRegion } = require('../../scenario/dogs/dogDetails/regions/buildDeleteRegion')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const { DOGBuilder } = require('../../data/dogs/DOGBuilder')
const { DOGLocationBuilder } = require('../../data/dogs/DOGLocationBuilder')
const { DOGRegionBuilder } = require('../../data/dogs/DOGRegionBuilder')

const buildTestAddDOGRegion = async (env = {}, credential = '') => {
  const browsers = await readBrowsers()
  const envName = env.name

  const group = await DOGBuilder().setName(`11`)
    .build()

  const location = await DOGLocationBuilder().setName(`Location Maska PacLease`)
    .build()

  const region = await DOGRegionBuilder().setName(`addRegion Test`)
    .setLocation(`Location Maska PacLease`)
    .build()

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickDOGScenario = await clickDOG()
  const clickDOGLinkScenario = await clickDOGLink(group.name)
  const buildAddLocationScenario = await buildAddLocation(location)
  const buildAddRegionScenario = await buildAddRegion(region)

  // Reset Locations and Regions after tested Adding works
  const buildDeleteLocationScenario = await buildDeleteLocation(location)
  const buildDeleteRegionScenario = await buildDeleteRegion(region)
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickDOGScenario,
    clickDOGLinkScenario,
    buildAddLocationScenario,
    buildAddRegionScenario,
    buildDeleteLocationScenario,
    buildDeleteRegionScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Dealer Owner Group: ${group.name} - Add a Region ${region.name}`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestAddDOGRegion
}
