'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickDealersServiceCenters } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDealersServiceCenters')
const { buildAddCustomer } = require('../../scenario/customer/addCustomer/buildAddCustomer')
const { buildSetPrefferedDealer } = require('../../scenario/dealerServiceCenter/dealerDetails/buildSetPrefferedDealer')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const { DealerBuilder } = require('../../data/dealer/DealerBuilder')

const buildTestCustomerAdminSetsPreferredDealer = async (env = {}, credential = '') => {
  const browsers = await readBrowsers()
  const envName = env.name

  const dealer = await DealerBuilder().setName(`AMG Peterbilt of Columbus, LLC`)
    .build()

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickDealersServiceCentersScenario = await clickDealersServiceCenters()
  const buildSetPrefferedDealerScenario = await buildSetPrefferedDealer(dealer)
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickDealersServiceCentersScenario,
    buildSetPrefferedDealerScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Customer - Customer Admin Sets Dealer: ${dealer.name} as Preferred Dealer`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestCustomerAdminSetsPreferredDealer
}
