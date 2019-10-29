'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { createAddress } = require('../../../../core/action/createAddress')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickBlacklist } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickBlacklist')
const { buildCreateBlacklistRecord } = require('../../scenario/blacklist/buildCreateBlacklistRecord')
const { buildDeleteBlacklistRecord } = require('../../scenario/blacklist/buildDeleteBlacklistRecord')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const { BlacklistBuilder } = require('../../data/blacklist/BlacklistBuilder')

const buildTestAddDeleteBlacklist = async (env = {}, credential = '') => {
  const browsers = await readBrowsers()
  const envName = env.name

  const blacklist = await BlacklistBuilder().setDestination(await createAddress())
    .build()

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickBlacklistScenario = await clickBlacklist()
  const buildCreateBlacklistRecordScenario = await buildCreateBlacklistRecord(blacklist.destination)
  const buildDeleteBlacklistRecordScenario = await buildDeleteBlacklistRecord(blacklist.destination)
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickBlacklistScenario,
    buildCreateBlacklistRecordScenario,
    buildDeleteBlacklistRecordScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Blacklist - Add, then delete Blacklist: ${blacklist.destination}`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestAddDeleteBlacklist
}
