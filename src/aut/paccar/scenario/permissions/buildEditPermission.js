'use strict'

let { appendScenarios } = require('../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')

let { clickPermissionCheckbox } = require('./clickPermissionCheckbox')
let { clickEdit } = require('./clickEdit')
let { buildFillPermissionForm } = require('./buildFillPermissionForm')
let { validatePermissionSaved } = require('./validatePermissionSaved')

let buildEditPermission = async (permission = {}) => {

    // Scenarios
    const clickPermissionCheckboxScenario = await clickPermissionCheckbox(permission.name)
    const clickEditScenario = await clickEdit()
    const buildFillPermissionFormScenario = await buildFillPermissionForm(permission.roleName, permission.description)
    const validatePermissionSavedScenario = await validatePermissionSaved()

    const scenarios = [   clickPermissionCheckboxScenario
                        , clickEditScenario
                        , buildFillPermissionFormScenario
                        , validatePermissionSavedScenario ]

    const steps = await appendScenarios(scenarios)

    const scenario = await ScenarioBuilder().setName(`Edit Permission: ${permission.name}`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildEditPermission
}