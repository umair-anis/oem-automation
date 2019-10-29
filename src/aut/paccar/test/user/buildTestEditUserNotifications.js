'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickUsers } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickUsers')
const { clickUserCheckBox } = require('../../scenario/users/clickUserCheckBox')
const { clickEdit } = require('../../scenario/users/editUser/clickEdit')
const { buildEditNotifications } = require('../../scenario/users/editUser/notifications/buildEditNotifications')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const buildTestEditUserNotifications = async (env = {}, credential = '', user = {}, userNotification = {}) => {
  const browsers = await readBrowsers()
  const envName = env.name

  const emailNotificationsChoice = ['None']
  const customerName = [['Idaho/Illinois']]
  const vehicleGroupName = [['this is a customer']]

  const validLoginScenario = await buildValidLogin(envName, credential)

  // Click a User 'user'
  const clickUsersScenario = await clickUsers()
  const clickUserCheckBoxScenario = await clickUserCheckBox(user.email)
  const clickEditScenario = await clickEdit()
  const buildEditNotificationsScenario = await buildEditNotifications(userNotification)
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickUsersScenario,
    clickUserCheckBoxScenario,
    clickEditScenario,
    buildEditNotificationsScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Users - Edit User Notifications ${user.email}`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestEditUserNotifications
}
