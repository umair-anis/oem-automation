'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickDevices } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDevices')
const { buildAddAllToExistingCollection } = require('../../scenario/devices/addAllToCollection/buildAddAllToExistingCollection')

const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const buildTestAddAllExistingCollection = async (env = {}, credential = '') => {
  const browsers = await readBrowsers()
  const envName = env.name

  const filter = ['OEM']
  const collectionName = ['00000test']

  // Scenarios
  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickDevicesScenario = await clickDevices()
  const buildAddAllToExistingCollectionScenario = await buildAddAllToExistingCollection(filter, collectionName)
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickDevicesScenario,
    buildAddAllToExistingCollectionScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Add All to a Existing Collection: ${collectionName}`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestAddAllExistingCollection
}
