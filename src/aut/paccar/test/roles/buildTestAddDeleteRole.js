'use strict'

let { log } = require('../../../../core/logging/log')
let { readBrowsers } = require('../../config/reader/readBrowsers')
let { TestBuilder } = require('../../../../core/test/TestBuilder')

let { buildValidLogin } = require('../../scenario/login/buildValidLogin')
let { clickRoles } = require('../../scenario/portalSideNavigation/sideNavigationLinks/clickRoles')
let { buildAddRole } = require('../../scenario/roles/addRole/buildAddRole')
let { validateIsRole } = require('../../scenario/roles/validateIsRole')
let { buildDeleteRole } = require('../../scenario/roles/buildDeleteRole')
let { closeBrowser } = require('../../scenario/browser/closeBrowser')

let buildTestAddDeleteRole = async (env = {}, credential = '', role = {}) => {

    const browsers = await readBrowsers()
    const envName = env.name

    const validLoginScenario = await buildValidLogin(envName, credential)
    const clickRolesScenario = await clickRoles()
    const buildAddRoleScenario = await buildAddRole(role)
    const validateIsRoleScenario = await validateIsRole(role)
    const buildDeleteRoleScenario = await buildDeleteRole(role)
    const closeBrowserScenario = await closeBrowser()

    const scenarios = [   validLoginScenario
                        , clickRolesScenario
                        , buildAddRoleScenario
                        , validateIsRoleScenario
                        , buildDeleteRoleScenario
                        , closeBrowserScenario ]

    const test = await TestBuilder().setLog(log)
                              .setName(`Testing Roles - Add, then Delete a Role`)
                              .setBrowsers(browsers)
                              .setScenarios(scenarios)
                              .setEnvironment(env)
                              .build()

    return Object.freeze(test)
}

module.exports = {
    buildTestAddDeleteRole
}