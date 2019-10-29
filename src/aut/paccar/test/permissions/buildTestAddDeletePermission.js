'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickPermissions } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickPermissions')
const { buildAddPermission } = require('../../scenario/permissions/buildAddPermission')
const { buildDeletePermission } = require('../../scenario/permissions/buildDeletePermission')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const { PermissionBuilder } = require('../../data/permissions/PermissionBuilder')

const buildTestAddDeletePermission = async (env = {}, credential = '') => {
  const browsers = await readBrowsers()
  const envName = env.name

  const permission = await PermissionBuilder().setName(`Application Test`)
    .setDescription(`Test Description`)
    .build()

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickPermissionsScenario = await clickPermissions()
  const buildAddPermissionScenario = await buildAddPermission(permission)
  const buildDeletePermissionScenario = await buildDeletePermission(permission)
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickPermissionsScenario,
    buildAddPermissionScenario,
    buildDeletePermissionScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing OEM - Add, then Delete a Permission: ${permission.name}`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestAddDeletePermission
}
