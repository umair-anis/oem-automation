'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickDevices } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDevices')
const { buildAddDeviceToNewCollection } = require('../../scenario/devices/features/buildAddDeviceToNewCollection')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const buildTestAddSelectedNewCollection = async (env = {}, credential = '') => {
  const browsers = await readBrowsers()
  const envName = env.name

  const date = new Date()

  const deviceName = ['33']
  const collectionName = [`Collection Name_${date.getTime()}`]
  const collectionDescription = [`Description`]

  // Add All to a new Collection
  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickDevicesScenario = await clickDevices()
  const bbuildAddDeviceToNewCollectionScenario = await buildAddDeviceToNewCollection(deviceName, collectionName, collectionDescription)
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickDevicesScenario,
    bbuildAddDeviceToNewCollectionScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Devices - Device: ${deviceName} Force Call`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestAddSelectedNewCollection
}
