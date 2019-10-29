'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')
const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickDevices } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDevices')
const { buildDeviceVinDiscovery } = require('../../scenario/devices/features/buildDeviceVinDiscovery')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const buildTestDeviceVinDiscovery = async (env = {}, credential = '') => {
  const browsers = await readBrowsers()
  const envName = env.name

  const deviceName = ['33']

  // Add All to a new Collection
  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickDevicesScenario = await clickDevices()
  const buildDeviceVinDiscoveryScenario = await buildDeviceVinDiscovery(deviceName)
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickDevicesScenario,
    buildDeviceVinDiscoveryScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Devices - Device, ${deviceName} Vin Discovery`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .setManualTestIds(['TC-195'])
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestDeviceVinDiscovery
}
