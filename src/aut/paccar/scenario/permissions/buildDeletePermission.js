'use strict'

let { appendScenarios } = require('../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')

let { clickPermissionCheckbox } = require('./clickPermissionCheckbox')
let { clickDelete } = require('./clickDelete')

let buildDeletePermission = async (permission = {}) => {

    // Scenarios
    const clickPermissionCheckboxScenario = await clickPermissionCheckbox(permission.name)
    const clickDeleteScenario = await clickDelete()

    const scenarios = [   clickPermissionCheckboxScenario
                        , clickDeleteScenario ]

    const steps = await appendScenarios(scenarios)

    const scenario = await ScenarioBuilder().setName(`Delete Permission: ${permission.name}`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildDeletePermission
}