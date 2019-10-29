'use strict'

const { DealerStateBuilder } = require('../../data/dealer/dealers/DealerStateBuilder')
const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { readDealers } = require('../../data/dealer/dealers/readDealers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')
const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickDealersServiceCenters } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDealersServiceCenters')
const { buildEditDealer } = require('../../scenario/dealerServiceCenter/editDealer/buildEditDealer')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')
const { DealerBuilder } = require('../../data/dealer/DealerBuilder')
const { LocationBuilder } = require('../../data/dealer/LocationBuilder')

const buildTestEditDealer_Location = async (env = {}, credential = '') => {
  const browsers = await readBrowsers()
  const dealerState = await DealerStateBuilder().setLocationCount(1)
    .setServiceHoursCount(1)
    .setCoordinatesCount(1)
    .setPhoneNumberCount(1)
    .setHasStreetAddress2(false)
    .build()

  //const dealers = await readDealers(env, dealerState)
  const envName = env.name

  const locationSteps = []

  // Add, Edit, then Delete a Location
  locationSteps.push(await LocationBuilder().setFunction(`add`)
    .setAddressType(`New Address`)
    .setAddress1(`123 Cherry Lane`)
    .setAddress2(``)
    .setCity(`Prior Lake`)
    .setState(`MN`)
    .setZipCode(`55372`)
    .build())
  locationSteps.push(await LocationBuilder().setFunction(`edit`)
    .setAddressType(`New Address`)
    .setAddress1(`1234 Cherry Lane`)
    .setAddress2(`5678 Apt`)
    .setCity(`Savage`)
    .setState(`MN`)
    .setZipCode(`55378`)
    .build())
  locationSteps.push(await LocationBuilder().setFunction(`delete`)
    .setAddressType(`New Address`)
    .build())

  const dealer = await DealerBuilder().setName(`AMG Peterbilt of Columbus - East`)
    .setLocationSteps(locationSteps)
    .build()

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickDealersServiceCentersScenario = await clickDealersServiceCenters()
  const buildEditDealerScenario = await buildEditDealer(dealer) // make an array
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickDealersServiceCentersScenario,
    buildEditDealerScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Dealers - Edit Dealer: ${dealer.name} Location`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestEditDealer_Location
}
