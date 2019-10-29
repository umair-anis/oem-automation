'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickUsers } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickUsers')
const { buildAddUser } = require('../../scenario/users/addUserForm/buildAddUser')
const { buildDeleteUser } = require('../../scenario/users/deleteUser/buildDeleteUser')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const buildTestDeleteUser = async (env = {}, credential = '', user = {}) => {
  const browsers = await readBrowsers()
  const envName = env.name

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickUsersScenario = await clickUsers()
  const buildAddUserScenario = await buildAddUser(user)
  const buildDeleteUserScenario = await buildDeleteUser(user)
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickUsersScenario,
    buildAddUserScenario,
    clickUsersScenario,
    buildDeleteUserScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Users - Delete User`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestDeleteUser
}
