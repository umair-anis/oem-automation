'use strict'

const { log } = require('../../../../core/logging/log')
const { readBrowsers } = require('../../config/reader/readBrowsers')
const { TestBuilder } = require('../../../../core/test/TestBuilder')

const { buildValidLogin } = require('../../scenario/login/buildValidLogin')
const { clickRoles } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickRoles')
const { buildSetDensityHigh } = require('../../scenario/roles/buildSetDensityHigh')
const { validateIsRole } = require('../../scenario/roles/validateIsRole')
const { closeBrowser } = require('../../scenario/browser/closeBrowser')

const buildTestIsRole = async (env = {}, credential = '', role = {}) => {
  const browsers = await readBrowsers()
  const envName = env.name

  const validLoginScenario = await buildValidLogin(envName, credential)
  const clickRolesScenario = await clickRoles()
  const buildSetDensityHighScenario = await buildSetDensityHigh()
  const validateIsRoleScenario = await validateIsRole(role)
  const closeBrowserScenario = await closeBrowser()

  const scenarios = [validLoginScenario,
    clickRolesScenario,
    buildSetDensityHighScenario,
    validateIsRoleScenario,
    closeBrowserScenario]

  const test = await TestBuilder().setLog(log)
    .setName(`Testing Roles - Role is in the Roles Table`)
    .setBrowsers(browsers)
    .setScenarios(scenarios)
    .setEnvironment(env)
    .build()

  return Object.freeze(test)
}

module.exports = {
  buildTestIsRole
}
