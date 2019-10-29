'use strict'

let { appendScenarios } = require('../../../../core/scenario/appendScenarios')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')

let { clickRoleCheckbox } = require('./clickRoleCheckbox')
let { clickDeleteRole } = require('./clickDeleteRole')

let buildDeleteRole = async (role = {}) => {

    // Scenarios
    const clickRoleCheckboxScenario = await clickRoleCheckbox(role.name)
    const clickDeleteRoleScenario = await clickDeleteRole()

    const steps = await appendScenarios([ clickRoleCheckboxScenario
                                        , clickDeleteRoleScenario ])

    const scenario = await ScenarioBuilder().setName(`Delete Role: ${role.name}`)
                                      .setSteps(steps)
                                      .build()

    return Object.freeze(scenario)
}

module.exports = {
    buildDeleteRole
}