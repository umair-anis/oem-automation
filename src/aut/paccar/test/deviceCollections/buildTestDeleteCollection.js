'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickDeviceCollection } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDeviceCollection')
const { buildAddCollection } = require('../../scenario/deviceCollection/addCollection/buildAddCollection')
const { buildDeleteCollection } = require('../../scenario/deviceCollection/buildDeleteCollection')
const { validateCollectionNotInTable } = require('../../scenario/deviceCollection/validateCollectionNotInTable')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const buildTestDeleteCollection = async (env = {}, credential = '') => {
  const browsers = await readBrowsers()
  const envName = env.name

  const date = new Date()
  const collectionName = [`CollectionName_${date.getTime()}`]

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickDeviceCollectionScenario = await clickDeviceCollection()

  // Double Check there is a Device Collection to delete
  const buildAddCollectionScenario = await buildAddCollection(collectionName, [``])

  // Delete the new Device Collection
  const buildDeleteCollectionScenario = await buildDeleteCollection(collectionName)
  const validateCollectionNotInTableScenario = await validateCollectionNotInTable(collectionName)
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickDeviceCollectionScenario,
    buildAddCollectionScenario,
    buildDeleteCollectionScenario,
    validateCollectionNotInTableScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Deleting a Device Collectionn: ${collectionName}`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestDeleteCollection
}
