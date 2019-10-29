'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickManufacturers } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickManufacturers')
const { buildEditManufacturer } = require('../../scenario/manufacturers/buildEditManufacturer')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const buildTestEditManufacturer = async (env = {}, credential = '', name = []) => {
  const browsers = await readBrowsers()
  const envName = env.name

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickManufacturersScenario = await clickManufacturers()
  const buildEditManufacturerScenario = await buildEditManufacturer(name, name)
  const closeBrowserScenario = await closeBrowser()

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Changing a Manufacturer's name to ${name}`)
    .setBrowsers(browsers)
    .setScenarios([validLoginScenario,
      clickManufacturersScenario,
      buildEditManufacturerScenario,
      closeBrowserScenario])
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestEditManufacturer
}
