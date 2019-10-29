'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickDashboard } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDashboard')
const { validateDashboardTitle } = require('../../scenario/ota/validateDashboardTitle')
const { switchHealthSoftwareSlider } = require('../../scenario/ota/switchHealthSoftwareSlider')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

/**
 * @description Validate the Health/Software Slider worksby logging in as OTA Admin, Check the dashboard as Health,
 *              click the slider, then validate the dashboard as Software
 *
 */
const buildTestClickHealthSoftwareSlider = async (env = {}, credential = '') => {
  const browsers = await readBrowsers()
  const envName = env.name

  const titleHealth = [`Health Dashboard`]
  const titleSoftware = [`Software Dashboard`]

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickDashboardScenario = await clickDashboard()
  const validteIsHealthTitle = await validateDashboardTitle(titleHealth)
  const switchHealthSoftwareSliderScenario = await switchHealthSoftwareSlider()
  const validteIsSoftwareTitle = await validateDashboardTitle(titleSoftware)
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickDashboardScenario,
    validteIsHealthTitle,
    switchHealthSoftwareSliderScenario,
    validteIsSoftwareTitle,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing OTA - ${credential} switches Health/Software Slider Functionality`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestClickHealthSoftwareSlider
}
