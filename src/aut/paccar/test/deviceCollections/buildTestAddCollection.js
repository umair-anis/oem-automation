'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickDeviceCollection } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDeviceCollection')
const { buildAddCollection } = require('../../scenario/deviceCollection/addCollection/buildAddCollection')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const buildTestAddCollection = async (env = {}, credential = '') => {
  const browsers = await readBrowsers()
  const envName = env.name

  const date = new Date()
  const collectionName = [`aaaaa_${date.getTime()}`]
  const collectionDescription = [`Device Collection Description`]

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickDeviceCollectionScenario = await clickDeviceCollection()
  const buildAddCollectionScenario = await buildAddCollection(collectionName, collectionDescription)
  const closeBrowserScenario = await closeBrowser()

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Adding a Device Collectionn: ${collectionName}`)
    .setBrowsers(browsers)
    .setScenarios([validLoginScenario,
      clickDeviceCollectionScenario,
      buildAddCollectionScenario,
      closeBrowserScenario])
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestAddCollection
}
