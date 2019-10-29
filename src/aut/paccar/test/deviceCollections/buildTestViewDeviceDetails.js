'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickDeviceCollection } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDeviceCollection')
const { buildViewDeviceDetails } = require('../../scenario/deviceCollection/buildViewDeviceDetails')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const buildTestViewDeviceDetails = async (env = {}, credential = '') => {
  const browsers = await readBrowsers()
  const envName = env.name

  const collectionName = ['$illy undeliverable MIDs']
  const deviceName = ['6056168']

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickDeviceCollectionScenario = await clickDeviceCollection()
  const buildViewDeviceDetailsScenario = await buildViewDeviceDetails(collectionName, deviceName)
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickDeviceCollectionScenario,
    buildViewDeviceDetailsScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing View Device Details: ${deviceName} in Collection: ${collectionName}`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestViewDeviceDetails
}
