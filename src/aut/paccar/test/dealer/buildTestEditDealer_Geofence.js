'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')
const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickDealersServiceCenters } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDealersServiceCenters')
const { buildEditDealer } = require('../../scenario/dealerServiceCenter/editDealer/buildEditDealer')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')
const { DealerBuilder } = require('../../data/dealer/DealerBuilder')
const { GeofenceBuilder } = require('../../data/dealer/GeofenceBuilder')

const buildTestEditDealer_Geofence = async (env = {}, credential = '') => {
  const browsers = await readBrowsers()
  const envName = env.name

  const geofenceSteps = []

  // Add, Edit, then Delete a Geofence Coordinate
  geofenceSteps.push(await GeofenceBuilder().setFunction(`add`)
    .setLatitude(`12`)
    .setLongitude(`-12`)
    .build())
  geofenceSteps.push(await GeofenceBuilder().setFunction(`edit`)
    .setName(`Coordinate 8`)
    .setLatitude(`32`)
    .setLongitude(`-32`)
    .build())
  geofenceSteps.push(await GeofenceBuilder().setFunction(`delete`)
    .setName(`Coordinate 8`)
    .build())

  const dealer = await DealerBuilder().setName(`AMG Peterbilt of Columbus - East`)
    .setGeofenceSteps(geofenceSteps)
    .build()

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickDealersServiceCentersScenario = await clickDealersServiceCenters()
  const buildEditDealerScenario = await buildEditDealer(dealer)
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickDealersServiceCentersScenario,
    buildEditDealerScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Dealers - Edit Dealer: ${dealer.name} Geofences`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestEditDealer_Geofence
}
