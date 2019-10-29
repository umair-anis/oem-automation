'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickDeviceCollection } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDeviceCollection')
const { buildEditCollection } = require('../../scenario/deviceCollection/buildEditCollection')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const buildTestEditCollection = async (env = {}, credential = '') => {
  const browsers = await readBrowsers()
  const envName = env.name

  const collectionName = ['aTest']
  const editedName = ['aTest']
  const editedDescription = ['edited description']

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickDeviceCollectionScenario = await clickDeviceCollection()
  const buildEditCollectionScenario = await buildEditCollection(collectionName, editedName, editedDescription)
  const closeBrowserScenario = await closeBrowser()

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Editing a Device Collectionn: ${collectionName} to ${editedName}`)
    .setBrowsers(browsers)
    .setScenarios([validLoginScenario,
      clickDeviceCollectionScenario,
      buildEditCollectionScenario,
      closeBrowserScenario])
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestEditCollection
}
