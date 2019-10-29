'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickPermissions } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickPermissions')
const { buildEditPermission } = require('../../scenario/permissions/buildEditPermission')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const { PermissionBuilder } = require('../../data/permissions/PermissionBuilder')

const buildTestEditPermission = async (env = {}, credential = '') => {
  const browsers = await readBrowsers()
  const envName = env.name

  const permission = await PermissionBuilder().setName(`Application Create`)
    .setDescription(`Can create applications`)
    .build()

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickPermissionsScenario = await clickPermissions()
  const buildEditPermissionScenario = await buildEditPermission(permission)
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickPermissionsScenario,
    buildEditPermissionScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing OEM - Edit Permission: ${permission.name}`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestEditPermission
}
