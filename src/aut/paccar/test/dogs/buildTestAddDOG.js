'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')
const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickDOG } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDOG')
const { clickAddDOG } = require('../../scenario/dogs/clickAddDOG')
const { buildAddDOG } = require('../../scenario/dogs/addDOGForm/buildAddDOG')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')
const { DOGBuilder } = require('../../data/dogs/DOGBuilder')

const buildTestAddDOG = async (env = {}, credential = '') => {
  const browsers = await readBrowsers()
  const envName = env.name

  const group = await DOGBuilder().setName(`group name`)
    .setDescription(`group description`)
    .build()

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickDOGScenario = await clickDOG()
  const clickAddDOGScenario = await clickAddDOG()
  const buildAddDOGScenario = await buildAddDOG(group)

  // Delete it for repetitive testing
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickDOGScenario,
    clickAddDOGScenario,
    buildAddDOGScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Dealer Owner Group - Add DOG`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestAddDOG
}
