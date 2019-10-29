'use strict'

let { appendScenarios } = require('../../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')

let { clickAdd } = require('./clickAdd')
let { enterRoleInformation } = require('./enterRoleInformation')
let { clickOrganizationTypes } = require('./clickOrganizationTypes')
let { clickApplications } = require('./clickApplications')
let { clickPermissions } = require('./clickPermissions')
let { clickSave } = require('./clickSave')

let buildAddRole = async (role = {}) => {

    // Scenarios
    const clickAddScenario = await clickAdd()
    const enterRoleInformationScenario = await enterRoleInformation(role.name, role.description)
    const clickOrganizationTypesScenario = await clickOrganizationTypes(role.organizationTypes)
    const clickApplicationsScenario = await clickApplications(role.applications)
    const clickPermissionsScenario = await clickPermissions(role.permissions)
    const clickSaveScenario = await clickSave()

    const scenarios = [   clickAddScenario
                        , enterRoleInformationScenario
                        , clickOrganizationTypesScenario
                        , clickApplicationsScenario
                        , clickPermissionsScenario
                        , clickSaveScenario ]

    const steps = await appendScenarios(scenarios)

    const scenario = await ScenarioBuilder().setName(`Add Role`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildAddRole
}