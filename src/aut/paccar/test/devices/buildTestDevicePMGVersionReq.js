'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickDevices } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDevices')
const { buildDevicePMGVersionReq } = require('../../scenario/devices/features/buildDevicePMGVersionReq')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const buildTestDevicePMGVersionReq = async (env = {}, credential = '') => {
  const browsers = await readBrowsers()
  const envName = env.name

  const dsn = [`7578370`]

  // Add All to a new Collection
  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickDevicesScenario = await clickDevices()
  const buildDevicePMGVersionReqScenario = await buildDevicePMGVersionReq(dsn)
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickDevicesScenario,
    buildDevicePMGVersionReqScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Devices - Device: ${dsn} PMG Version Request`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestDevicePMGVersionReq
}
