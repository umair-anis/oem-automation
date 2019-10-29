'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickOEMs } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickOEMs')
const { enterOEMFilter } = require('../../scenario/oems/enterOEMFilter')
const { buildEditOEMFactory } = require('../../scenario/oems/buildEditOEMFactory')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const buildTestEditOEMFactory = async (env = {}, credential = '', oem = {}, factory = {}) => {
  const browsers = await readBrowsers()
  const envName = env.name

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickOEMsScenario = await clickOEMs()
  const enterOEMFilterScenario = await enterOEMFilter(oem.name)
  const buildEditOEMFactoryScenario = await buildEditOEMFactory(oem, factory)
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickOEMsScenario,
    enterOEMFilterScenario,
    buildEditOEMFactoryScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing OEM - Add/Edit/Remove an OEM Factory in OEM: ${oem.name}`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestEditOEMFactory
}
