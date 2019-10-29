'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickUsers } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickUsers')
const { clickUserCheckBox } = require('../../scenario/users/clickUserCheckBox')
const { clickEdit } = require('../../scenario/users/editUser/clickEdit')
const { buildAddTag } = require('../../scenario/users/editUser/tags/buildAddTag')
const { buildEditTag } = require('../../scenario/users/editUser/tags/buildEditTag')
const { buildDeleteTag } = require('../../scenario/users/editUser/tags/buildDeleteTag')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const buildTestEditUserTags = async (env = {}, credential = '', user = {}, newTag = {}, editedTag = {}) => {
  const browsers = await readBrowsers()
  const envName = env.name

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickUsersScenario = await clickUsers()
  const clickUserCheckBoxScenario = await clickUserCheckBox(user.email)
  const clickEditScenario = await clickEdit()

  // Add, Edit, Delete the tag
  const buildAddTagScenario = await buildAddTag(newTag)
  const buildEditTagScenario = await buildEditTag(newTag, editedTag)
  const buildDeleteTagScenario = await buildDeleteTag(editedTag)
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickUsersScenario,
    clickUserCheckBoxScenario,
    clickEditScenario,
    buildAddTagScenario,
    buildEditTagScenario,
    buildDeleteTagScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Users - Add, Edit, Delete User ${user.email} Tags`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestEditUserTags
}
