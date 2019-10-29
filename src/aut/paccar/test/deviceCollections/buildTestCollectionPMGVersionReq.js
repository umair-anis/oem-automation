'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickDeviceCollection } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDeviceCollection')
const { clickCollectionPMGReq } = require('../../scenario/deviceCollection/clickCollectionPMGReq')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const buildTestCollectionPMGVersionReq = async (env = {}, credential = '') => {
  const browsers = await readBrowsers()
  const envName = env.name

  const collectionName = [`00000test`]

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickDeviceCollectionScenario = await clickDeviceCollection()
  const clickCollectionPMGReqScenario = await clickCollectionPMGReq(collectionName)
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickDeviceCollectionScenario,
    clickCollectionPMGReqScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Device Collectionn - Click Device Collection: ${collectionName} PMG Version Request`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestCollectionPMGVersionReq
}
