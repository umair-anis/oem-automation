'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickDeviceCollection } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDeviceCollection')
const { clickCollectionOTap } = require('../../scenario/deviceCollection/clickCollectionOTap')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const buildTestCollectionOTap = async (env = {}, credential = '') => {
  const browsers = await readBrowsers()
  const envName = env.name

  const collectionName = [`00000test`]

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickDeviceCollectionScenario = await clickDeviceCollection()
  const clickCollectionOTapScenario = await clickCollectionOTap(collectionName)
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickDeviceCollectionScenario,
    clickCollectionOTapScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Device Collectionn - Click Device Collection: ${collectionName} OTap`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestCollectionOTap
}
