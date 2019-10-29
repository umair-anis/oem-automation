'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickDevices } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDevices')
const { buildAddAllToNewCollection } = require('../../scenario/devices/addAllToCollection/buildAddAllToNewCollection')

const { clickDeviceCollection } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDeviceCollection')
const { buildDeleteCollection } = require('../../scenario/deviceCollection/buildDeleteCollection')

const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const buildTestAddAllNewCollection = async (env = {}, credential = '') => {
  const browsers = await readBrowsers()
  const envName = env.name

  const date = new Date()
  const filter = ['OEM']
  const collectionName = [`AddAll Name_${date.getTime()}`]
  const collectionDescription = ['AddAll Description']

  // Add All to a new Collection
  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickDevicesScenario = await clickDevices()
  const buildAddAllToNewCollectionScenario = await buildAddAllToNewCollection(filter, collectionName, collectionDescription)

  // Delete the new Collection for repeated testing
  const clickDeviceCollectionScenario = await clickDeviceCollection()
  const buildDeleteCollectionScenario = await buildDeleteCollection(collectionName)

  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickDevicesScenario,
    buildAddAllToNewCollectionScenario,
    clickDeviceCollectionScenario,
    buildDeleteCollectionScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Add All to a New Collection: ${collectionName}`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestAddAllNewCollection
}
