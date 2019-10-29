'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickDealersServiceCenters } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDealersServiceCenters')
const { buildEditDealer } = require('../../scenario/dealerServiceCenter/editDealer/buildEditDealer')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const { DealerBuilder } = require('../../data/dealer/DealerBuilder')
const { PhoneNumberBuilder } = require('../../data/dealer/PhoneNumberBuilder')

const buildTestEditDealer_Phone = async (env = {}, credential = '') => {
  const browsers = await readBrowsers()
  const envName = env.name

  const phoneNumberSteps = []

  // Add, Edit, then Delete a Phone Number
  phoneNumberSteps.push(await PhoneNumberBuilder().setFunction(`add`)
    .setNumber(`(123) 456-7890`)
    .setPhoneType(`Fax`)
    .build())
  phoneNumberSteps.push(await PhoneNumberBuilder().setFunction(`edit`)
    .setNumber(`(123) 456-7890`)
    .setPhoneType(`Fax`)
    .build())
  phoneNumberSteps.push(await PhoneNumberBuilder().setFunction(`delete`)
    .setPhoneType(`Fax`)
    .build())

  const dealer = await DealerBuilder().setName(`AMG Peterbilt of Columbus - East`)
    .setPhoneNumberSteps(phoneNumberSteps)
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
    .setName(`Testing Dealers - Edit Dealer: ${dealer.name} Phone Number`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestEditDealer_Phone
}
