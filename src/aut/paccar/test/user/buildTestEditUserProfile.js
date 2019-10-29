'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')
const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickUsers } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickUsers')
const { clickUserCheckBox } = require('../../scenario/users/clickUserCheckBox')
const { clickEdit } = require('../../scenario/users/editUser/clickEdit')
const { buildEditProfile } = require('../../scenario/users/editUser/profile/buildEditProfile')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')
const { PhoneNumberBuilder } = require('../../data/phone/PhoneNumberBuilder')
const { UserBuilder } = require('../../data/user/UserBuilder')

const buildTestEditUserProfile = async (env = {}, credential = '', user = {}) => {
  const browsers = await readBrowsers()
  const envName = env.name

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickUsersScenario = await clickUsers()
  const clickUserCheckBoxScenario = await clickUserCheckBox(user.email)
  const clickEditScenario = await clickEdit()
  const buildEditProfileScenario = await buildEditProfile(user)
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickUsersScenario,
    clickUserCheckBoxScenario,
    clickEditScenario,
    buildEditProfileScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Users - Edit User Profile ${user.email}`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestEditUserProfile
}
