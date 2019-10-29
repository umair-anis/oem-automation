'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickDashboard } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDashboard')
const { clickVehicles } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickVehicles')
const { validateFilter } = require('../../scenario/ota/validateFilter')
const { switchHealthSoftwareSlider } = require('../../scenario/ota/switchHealthSoftwareSlider')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

/**
 * @description @PCT-963 Validate the default chip filters are applied when navigated to vehicles list page in software mode
 *
 */
const buildDefaultSoftwareChipFilters = async (env = {}, credential = '') => {
  const browsers = await readBrowsers()
  const envName = env.name

  // Software chip filters
  const filterOne = [`Not Enabled`]
  const filterTwo = [`Ready To Install`]
  const filterThree = [`Unsuccessful`]
  const filterFour = [`Update Available`]

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickDashboardScenario = await clickDashboard()
  const switchHealthSoftwareSliderScenario = await switchHealthSoftwareSlider()
  const clickVehiclesScenario = await clickVehicles()

  // Validate Vehicles Page is loaded with default software chip filters
  const validateFilterOne = await validateFilter(filterOne)
  const validateFilterTwo = await validateFilter(filterTwo)
  const validateFilterThree = await validateFilter(filterThree)
  const validateFilterFour = await validateFilter(filterFour)

  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickDashboardScenario,
    switchHealthSoftwareSliderScenario,
    clickVehiclesScenario,

    validateFilterOne,
    validateFilterTwo,
    validateFilterThree,
    validateFilterFour,

    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing OTA - Default software chip filters in vehicles list page`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildDefaultSoftwareChipFilters
}
