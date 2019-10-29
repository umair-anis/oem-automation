'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickDealersServiceCenters } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDealersServiceCenters')
const { buildEditDealer } = require('../../scenario/dealerServiceCenter/editDealer/buildEditDealer')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const { DealerBuilder } = require('../../data/dealer/DealerBuilder')
const { HoursOfServiceBuilder } = require('../../data/dealer/HoursOfServiceBuilder')

const buildTestEditDealer_HoursOfService = async (env = {}, credential = '') => {
  const browsers = await readBrowsers()
  const envName = env.name

  const hoursOfServiceSteps = []

  // Add, Edit, then Delete a Hours of Service
  hoursOfServiceSteps.push(await HoursOfServiceBuilder().setFunction(`add`)
    .setServiceType(`My Test Service`)
    .setOpen(`08:00:00.000`)
    .setClose(`12:00:00.000`)
    .setDaysOfWeek([`Monday`, `Wednesday`, `Saturday`])
    .build())
  hoursOfServiceSteps.push(await HoursOfServiceBuilder().setFunction(`edit`)
    .setServiceType(`My Test Service`)
    .setOpen(`09:00:00.000`)
    .setClose(`10:00:00.000`)
    .setDaysOfWeek([`Monday`, `Tuesday`, `Thursday`])
    .build())
  hoursOfServiceSteps.push(await HoursOfServiceBuilder().setFunction(`delete`)
    .setServiceType(`My Test Service`)
    .build())

  const dealer = await DealerBuilder().setName(`AMG Peterbilt of Columbus - East`)
    .setHoursOfServiceSteps(hoursOfServiceSteps)
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
    .setName(`Testing Dealers - Edit Dealer: ${dealer.name} Hours of Service`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestEditDealer_HoursOfService
}
