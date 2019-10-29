'use strict'

let { appendScenarios } = require('../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')

let { clickAdd } = require('./clickAdd')
let { buildFillPermissionForm } = require('./buildFillPermissionForm')

let buildAddPermission = async (permission = {}) => {

    // Scenarios
    const clickAddScenario = await clickAdd()
    const buildFillPermissionFormScenario = await buildFillPermissionForm(permission.roleName, permission.description)

    const scenarios = [   clickAddScenario
                        , buildFillPermissionFormScenario ]

    const steps = await appendScenarios(scenarios)

    const scenario = await ScenarioBuilder().setName(`Add Permission: ${permission.roleName}`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildAddPermission
}