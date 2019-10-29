'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickUsers } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickUsers')
const { buildInvalidUser } = require('../../scenario/users/addUserForm/buildInvalidUser')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const buildTestInvalidUser = async (env = {}, credential = '', user = {}) => {
  const browsers = await readBrowsers()
  const envName = env.name

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickUsersScenario = await clickUsers()
  const buildInvalidUserScenario = await buildInvalidUser(user)
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickUsersScenario,
    buildInvalidUserScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Users - ${credential} Add User with Invalid Password`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestInvalidUser
}
