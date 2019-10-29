'use strict'

let { actions } = require('../../../../core/action/actions')
let { rolesUI } = require('../../repo/portalSideNavigation/roles/rolesUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let validateIsNotRole = async (role = {}) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await rolesUI().tableFilter)
                            .setAction(await actions().enterFilterResult)
                            .setData([ role.name ])
                            .build())

    steps.push(await StepBuilder().setControl(await rolesUI().table)
                            .setAction(await actions().searchNotInTable)
                            .setData(role.name)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Search Roles Table for Role: ${role.name}, Validate it is NOT in the table`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    validateIsNotRole
}