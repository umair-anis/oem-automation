'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickUsers } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickUsers')
const { enterFilter } = require('../../scenario/users/enterFilter')
const { verifyUserInTable } = require('../../scenario/users/verifyUserInTable')
const { buildAddUser } = require('../../scenario/users/addUserForm/buildAddUser')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const buildTestAddUser = async (env = {}, credential = '', user = {}) => {
  const browsers = await readBrowsers()
  const envName = env.name

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickUsersScenario = await clickUsers()
  const buildAddUserScenario = await buildAddUser(user)
  const enterFilterScenario = await enterFilter(user.email)
  const verifyUserInTableScenario = await verifyUserInTable(user.email)
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickUsersScenario,
    buildAddUserScenario,
    clickUsersScenario,
    enterFilterScenario,
    verifyUserInTableScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Users - ${credential} Adds User`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
    buildTestAddUser
}
