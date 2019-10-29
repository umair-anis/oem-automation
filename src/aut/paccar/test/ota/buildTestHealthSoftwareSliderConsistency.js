'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickDashboard } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDashboard')
const { clickVehicles } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickVehicles')
const { validateDashboardTitle } = require('../../scenario/ota/validateDashboardTitle')
const { switchHealthSoftwareSlider } = require('../../scenario/ota/switchHealthSoftwareSlider')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

/**
 * @description Validate the Health/Software Slider worksby logging in as OTA Admin, Check the dashboard as Health,
 *              click the slider, then validate the dashboard as Software
 *
 */
const buildTestHealthSoftwareSliderConsistency = async (env = {}, credential = '') => {
  const browsers = await readBrowsers()
  const envName = env.name

  const titleHealth = [`Health Dashboard`]
  const titleSoftware = [`Software Dashboard`]

  const titleVehicleSoftware = [`Vehicles - Software`]
  const titleVehicleHealth = [`Vehicles - Health`]

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickDashboardScenario = await clickDashboard()

  // Validate Dashboard Page is Health, then to Software
  const validateDashboardIsHealth = await validateDashboardTitle(titleHealth)
  const switchHealthSoftwareSliderScenario = await switchHealthSoftwareSlider()
  const validateDashboardIsSoftware = await validateDashboardTitle(titleSoftware)

  // Validate Vehicles Page is consistent with Software as on the Dashboard, then back to Health
  const clickVehiclesScenario = await clickVehicles()
  const validateVehicleIsSoftware = await validateDashboardTitle(titleVehicleSoftware)
  const validateVehicleIsHealth = await validateDashboardTitle(titleVehicleHealth)
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickDashboardScenario,
    validateDashboardIsHealth,
    switchHealthSoftwareSliderScenario,
    validateDashboardIsSoftware,

    clickVehiclesScenario,
    validateVehicleIsSoftware,
    switchHealthSoftwareSliderScenario,
    validateVehicleIsHealth,

    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing OTA - ${credential} switches Health/Software Slider and is Consistent Across Pages`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestHealthSoftwareSliderConsistency
}
