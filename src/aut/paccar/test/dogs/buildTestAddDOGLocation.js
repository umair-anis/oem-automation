'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickDOGLink } = require('../../scenario/dogs/clickDOGLink')
const { clickDOG } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDOG')
const { buildAddLocation } = require('../../scenario/dogs/dogDetails/locations/buildAddLocation')
const { buildDeleteLocation } = require('../../scenario/dogs/dogDetails/locations/buildDeleteLocation')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const { DOGBuilder } = require('../../data/dogs/DOGBuilder')
const { DOGLocationBuilder } = require('../../data/dogs/DOGLocationBuilder')

const buildTestAddDOGLocation = async (env = {}, credential = '') => {
  const browsers = await readBrowsers()
  const envName = env.name

  const group = await DOGBuilder().setName(`12`)
    .build()

  const location = await DOGLocationBuilder().setName(`PacLease - Location de Camions Excellence`)
    .build()

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickDOGScenario = await clickDOG()
  const clickDOGLinkScenario = await clickDOGLink(group.name)
  const buildAddLocationScenario = await buildAddLocation(location)

  // Reset Locations after tested Adding works
  const buildDeleteLocationScenario = await buildDeleteLocation(location)
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickDOGScenario,
    clickDOGLinkScenario,
    buildAddLocationScenario,
    buildDeleteLocationScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Dealer Owner Group: ${group.name} - Add Location: ${location.name}`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestAddDOGLocation
}
