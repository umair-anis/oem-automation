'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickManufacturers } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickManufacturers')
const { buildDeleteManufacturer } = require('../../scenario/manufacturers/buildDeleteManufacturer')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const buildTestDeleteManufacturer = async (env = {}, credential = '', name = []) => {
  const browsers = await readBrowsers()
  const envName = env.name

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickManufacturersScenario = await clickManufacturers()
  const buildDeleteManufacturerScenario = await buildDeleteManufacturer(name)
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickManufacturersScenario,
    buildDeleteManufacturerScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Deleting a Manufacturer ${name}`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestDeleteManufacturer
}
