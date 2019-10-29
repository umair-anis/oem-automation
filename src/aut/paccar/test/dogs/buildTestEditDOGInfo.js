'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickDOGLink } = require('../../scenario/dogs/clickDOGLink')
const { clickDOG } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDOG')
const { buildEditGroupInfo } = require('../../scenario/dogs/dogDetails/groupInfo/buildEditGroupInfo')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const { DOGBuilder } = require('../../data/dogs/DOGBuilder')

const buildTestEditDOGInfo = async (env = {}, credential = '') => {
  const browsers = await readBrowsers()
  const envName = env.name

  const group = await DOGBuilder().setName(`12`)
    .build()

  const newGroup = await DOGBuilder().setName(`12`)
    .setDescription(`my new Description`)
    .build()

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickDOGScenario = await clickDOG()
  const clickDOGLinkScenario = await clickDOGLink(group.name)
  const buildEditGroupInfoScenario = await buildEditGroupInfo(newGroup)
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickDOGScenario,
    clickDOGLinkScenario,
    buildEditGroupInfoScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Dealer Owner Group: ${group.name} - Edit Group Info: ${newGroup.name}, ${newGroup.description}`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestEditDOGInfo
}
