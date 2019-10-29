'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')
const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickDevices } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDevices')
const { clickDeviceLink } = require('../../scenario/devices/clickDeviceLink')
const { buildClickAction } = require('../../scenario/devices/deviceDetails/buildClickAction')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const buildTestDeviceAction = async (env = {}, credential = '', device = {}) => {
  const browsers = await readBrowsers()
  const envName = env.name

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickDevicesScenario = await clickDevices()
  const clickDeviceLinkScenario = await clickDeviceLink(device.dsn)
  const buildClickActionScenario = await buildClickAction(device)
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickDevicesScenario,
    clickDeviceLinkScenario,
    buildClickActionScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Devices - Device: ${device.dsn} Action: ${device.action}`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .setManualTestIds(['TC-305', 'TC-3272', 'TC-3274'])
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestDeviceAction
}
