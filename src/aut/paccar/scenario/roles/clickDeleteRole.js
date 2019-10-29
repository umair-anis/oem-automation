'use strict'

let { actions } = require('../../../../core/action/actions')
let { rolesUI } = require('../../repo/portalSideNavigation/roles/rolesUI')
let { ScenarioBuilder } = require('../../../../core/scenario/ScenarioBuilder')
let { StepBuilder } = require('../../../../core/step/StepBuilder')

let clickDeleteRole = async () => {

    let steps = []

    steps.push(await StepBuilder().setControl(await rolesUI().buttonDelete)
                            .setAction(await actions().click)
                            .build())

    steps.push(await StepBuilder().setControl(await rolesUI().buttonConfirmDelete)
                            .setAction(await actions().click)
                            .build())

    steps.push(await StepBuilder().setControl(await rolesUI().table)
                            .setAction(await actions().wait)
                            .build())

    const scenario = await ScenarioBuilder().setName(`Click Delete Role`)
                                      .setSteps(steps)
                                      .build()
    return Object.freeze(scenario)
}

module.exports = {
    clickDeleteRole
}