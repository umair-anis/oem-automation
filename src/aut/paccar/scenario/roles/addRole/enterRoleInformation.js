'use strict'

let { actions } = require('../../../../../core/action/actions')
let { rolesUI } = require('../../../repo/portalSideNavigation/roles/rolesUI')
let { ScenarioBuilder } = require('../../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../../core/step/StepBuilder')

let enterRoleInformation = async (name = [], description = []) => {

    let steps = []

    steps.push(await StepBuilder().setControl(await rolesUI().fieldName)
                            .setAction(await actions().enter)
                            .setData(name)
                            .build())

    steps.push(await StepBuilder().setControl(await rolesUI().fieldDescription)
                            .setAction(await actions().enter)
                            .setData(description)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Enter Role Info: ${name}, ${description}`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    enterRoleInformation
}