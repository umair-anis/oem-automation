'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { readUrls } = require('../../config/reader/readUrls')
const { openBrowser } = require('../../scenario/browser/openBrowser')
const { enterCredentials } = require('../../scenario/login/enterCredentials')
const { clickLogin } = require('../../scenario/login/clickLogin')
const { validateUserLockout } = require('../../scenario/users/editUser/security/validateUserLockout')
const { clickUsers } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickUsers')
const { clickDashboard } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickDashboard')
const { clickUserCheckBox } = require('../../scenario/users/clickUserCheckBox')
const { clickEdit } = require('../../scenario/users/editUser/clickEdit')
const { buildUnlockUser } = require('../../scenario/users/editUser/security/buildUnlockUser')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const { CredentialBuilder } = require('../../data/credential/CredentialBuilder')

const buildTestLockoutUser = async (env = {}) => {
  const browsers = await readBrowsers()
  const envName = env.name

  const urls = await readUrls(env.name)
  const mainUrl = urls.url

  const lockoutUser = await CredentialBuilder().setUsername(`lockoutuser-automation@test.com`)
    .setPassword(`asdfasdf`)
    .build()

  const openBrowserScenario = await openBrowser([mainUrl])
  const typeWrongCredentials = await enterCredentials([lockoutUser])
  const clickLoginScenario = await clickLogin()
  const validateLockedOut = await validateUserLockout()

  const loginPaccar = await buildValidLogin(envName, 'paccaradmin')
  const clickUsersScenario = await clickUsers()
  const clickUserCheckBoxScenario = await clickUserCheckBox([lockoutUser.username])
  const clickEditScenario = await clickEdit()
  const buildUnlockUserScenario = await buildUnlockUser()

  const loginUnlockedUser = await buildValidLogin(envName, 'lockOutUser')
  const clickDashboardScenario = await clickDashboard()
  const closeBrowserScenario = await closeBrowser()

  // Lockout the LockoutUser
  const scenarios = [openBrowserScenario, typeWrongCredentials]
  for (var i = 1; i <= 54; i++) {
    scenarios.push(clickLoginScenario)
  }
  scenarios.push(validateLockedOut)
  scenarios.push(closeBrowserScenario)

  // Log back in as a Paccar Admin to unlock the user's account
  const unlockScenarios = [loginPaccar,
    clickUsersScenario,
    clickUserCheckBoxScenario,
    clickEditScenario,
    buildUnlockUserScenario,
    closeBrowserScenario,

    // Confirm login as Lockout User is no longer blocked
    loginUnlockedUser,
    clickDashboardScenario]

  for (const unlockScenario of unlockScenarios) {
    scenarios.push(unlockScenario)
  }

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Users - Lockout a User, Unlock it, Verify User can log back in`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestLockoutUser
}
